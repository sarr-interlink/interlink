"use server"
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_POR),
  secure: true, // Use true for port 465, false for port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const formHandler = async (formData: FormData) => {
    
    console.log(formData);
    const fname = formData.get("name");
    const email = formData.get("email");
    const subjectM = formData.get("subject");
    const message = formData.get("message")


    const info = await transporter.sendMail({
    from: `${fname}, mail:${email}`,
    to: `s.deoida@interlink.mr`,
    subject: `${subjectM}`,
    text: `${message}`,
    html: `
    <p>${message}</p>
    `,
    replyTo: `${email}`
    });
    
    console.log("Message sent:", info.messageId);
}