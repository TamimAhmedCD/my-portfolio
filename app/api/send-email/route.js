import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// POST /api/send-email
export async function POST(request) {
  try {
    // 1️⃣ Parse request body
    const { name, email, message } = await request.json();

    // 2️⃣ Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please provide name, email, and message." },
        { status: 400 }
      );
    }

    // 3️⃣ Prepare email content (simple HTML)
    const emailHTML = `
      <h2>New message from your website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `;

    // 4️⃣ Configure Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME, // your Gmail
        pass: process.env.EMAIL_PASSWORD, // Gmail App Password
      },
    });

    // 5️⃣ Send the email
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USERNAME}>`,
      to: process.env.EMAIL_USERNAME, // send to yourself
      subject: "New Message from Website",
      html: emailHTML,
    });

    console.log("Email sent:", info.messageId);

    // 6️⃣ Return success
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);

    return NextResponse.json(
      { message: "Failed to send email.", error: error.message },
      { status: 500 }
    );
  }
}
