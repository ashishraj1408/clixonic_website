import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("API /api/send-contact called, method:", req.method);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, service, message } = req.body || {};
  console.log("Request body:", req.body);

  // ✅ Validation (service added)
  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
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

    await transporter.sendMail({
      from: `"Clixonic Website Lead" <${process.env.SMTP_USER}>`,
      to: process.env.LEADS_TO_EMAIL,

      // ✅ Better subject with service
      subject: `New ${service} Lead | Clixonic Website`,

      html: `
        <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
          <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.08);">
            
            <div style="background:#111827; color:#ffffff; padding:16px 24px;">
              <h2 style="margin:0; font-size:18px;">
                New Website Lead – ${service}
              </h2>
            </div>

            <div style="padding:20px 24px;">
              <p style="margin:0 0 16px 0; font-size:14px; color:#374151;">
                You have received a new enquiry from the Clixonic website.
              </p>

              <table style="width:100%; border-collapse:collapse; font-size:14px;">
                <tbody>
                  <tr>
                    <td style="width:160px; padding:8px 12px; font-weight:600; background:#f9fafb; border:1px solid #e5e7eb;">
                      Full Name
                    </td>
                    <td style="padding:8px 12px; border:1px solid #e5e7eb;">
                      ${name}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:8px 12px; font-weight:600; background:#f9fafb; border:1px solid #e5e7eb;">
                      Email
                    </td>
                    <td style="padding:8px 12px; border:1px solid #e5e7eb;">
                      ${email}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:8px 12px; font-weight:600; background:#f9fafb; border:1px solid #e5e7eb;">
                      Phone
                    </td>
                    <td style="padding:8px 12px; border:1px solid #e5e7eb;">
                      ${phone}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:8px 12px; font-weight:600; background:#f9fafb; border:1px solid #e5e7eb;">
                      Service
                    </td>
                    <td style="padding:8px 12px; border:1px solid #e5e7eb;">
                      ${service}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:8px 12px; font-weight:600; background:#f9fafb; border:1px solid #e5e7eb; vertical-align:top;">
                      Message
                    </td>
                    <td style="padding:8px 12px; border:1px solid #e5e7eb;">
                      ${String(message).replace(/\n/g, "<br/>")}
                    </td>
                  </tr>
                </tbody>
              </table>

              <p style="margin:16px 0 0 0; font-size:12px; color:#9ca3af;">
                This email was generated automatically from the Clixonic website contact form.
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
