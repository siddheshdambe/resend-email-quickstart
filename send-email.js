require("dotenv").config();
const { Resend } = require("resend");
const fs = require("fs");
const path = require("path");

(async () => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const emailHtml = fs.readFileSync(
    path.join(__dirname, "email-template.html"),
    "utf-8"
  );

  const htmlContent = emailHtml
    .replace("{{username}}", "Siddhesh Dambe")
    .replace("{{cta_link}}", "https://yourapp.com/get-started")
    .replace("{{unsubscribe_link}}", "https://yourapp.com/unsubscribe");

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL,
      subject: "Intro to Resend!",
      html: htmlContent,
    });

    console.log("✅ Email sent:", data);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
})();
