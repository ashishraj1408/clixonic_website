// api/send-contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("API /api/send-contact called, method:", req.method);

  if (req.method !== "POST") {
    console.log("Invalid method:", req.method);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body || {};
  console.log("Request body:", req.body);

  if (!name || !email || !phone || !message) {
    console.log("Validation failed");
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("LEADS_TO_EMAIL:", process.env.LEADS_TO_EMAIL);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();
    console.log("SMTP connection OK");

    await transporter.sendMail({
      from: `"Website Lead" <${process.env.SMTP_USER}>`,
      to: process.env.LEADS_TO_EMAIL,
      subject: "New Lead from Clixonic Website",
      html: `
        <h3>New Lead from Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    console.log("Email sent successfully");
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return res
      .status(500)
      .json({ error: err.message || "Failed to send email" });
  }
}
