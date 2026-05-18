"use server";

import nodemailer from "nodemailer";

interface ContactEmailData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: ContactEmailData) {
  try {
    const { firstName, lastName, email, subject, message } = data;

    const name = `${firstName} ${lastName}`;

    const text = `
New Contact Message From Portfolio Website

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim();

    await transporter.sendMail({
      from: {
        name: `${name} via Portfolio`,
        address: process.env.SMTP_USER!,
      },
      sender: {
        name: "Portfolio Website",
        address: process.env.SMTP_USER!,
      },
      to: "yasseralnajjar72@gmail.com",
      replyTo: email,
      subject: subject,
      text,
    });

    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("Email Error:", error);

    return {
      success: false,
      message: "Failed to send email",
    };
  }
}
