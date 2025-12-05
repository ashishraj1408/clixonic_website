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
        <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
          <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.08);">
            <div style="background:#111827; color:#ffffff; padding:16px 24px;">
              <h2 style="margin:0; font-size:18px;">New Lead from Clixonic Website</h2>
            </div>

            <div style="padding:20px 24px;">
              <p style="margin:0 0 16px 0; font-size:14px; color:#374151;">
                You have received a new enquiry. Lead details are below:
              </p>

              <table style="width:100%; border-collapse:collapse; font-size:14px;">
                <tbody>
                  <tr>
                    <td style="width:150px; padding:8px 12px; font-weight:600; background:#f9fafb; border:1px solid #e5e7eb;">Name</td>
                    <td style="padding:8px 12px; border:1px solid #e5e7eb;">${name}</td>
                  </tr>
                  <tr>
                    <td style="width:150px; padding:8px 12px; font-weight:600; background:#f9fafb; border:1px solid #e5e7eb;">Email</td>
                    <td style="padding:8px 12px; border:1px solid #e5e7eb;">${email}</td>
                  </tr>
                  <tr>
                    <td style="width:150px; padding:8px 12px; font-weight:600; background:#f9fafb; border:1px solid #e5e7eb;">Phone</td>
                    <td style="padding:8px 12px; border:1px solid #e5e7eb;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="width:150px; padding:8px 12px; font-weight:600; background:#f9fafb; border:1px solid #e5e7eb; vertical-align:top;">Message</td>
                    <td style="padding:8px 12px; border:1px solid #e5e7eb;">
                      ${String(message).replace(/\n/g, "<br/>")}
                    </td>
                  </tr>
                </tbody>
              </table>

              <p style="margin:16px 0 0 0; font-size:12px; color:#9ca3af;">
                This email was generated automatically from the Clixonic contact form.
              </p>
            </div>
          </div>
        </div>
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
