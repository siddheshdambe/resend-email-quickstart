const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmail() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Use verified sender for production
      to: "youremail@example.com",
      subject: "Hello from Resend!",
      html: "<strong>This is a test email sent via Resend API.</strong>",
    });

    console.log("Email sent:", data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
