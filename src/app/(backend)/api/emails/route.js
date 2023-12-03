import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';



export async function POST(req) {
  const { name, phone, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: 'testauskauttaja@gmail.com',
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new NextResponse(200);
  } catch (error) {
    console.error('Failed to send email:', error);
    return new NextResponse(500, { content: 'Failed to send email' });
  }
}