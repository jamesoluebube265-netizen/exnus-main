
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';
import 'dotenv/config'

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendMessage(values: z.infer<typeof formSchema>) {
    const validatedData = formSchema.parse(values);

    if (!process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASSWORD) {
        throw new Error('Email server is not configured. Please set EMAIL_SERVER_USER and EMAIL_SERVER_PASSWORD in your environment variables.');
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
        },
    });

    const mailOptions = {
        from: `"${validatedData.name}" <${process.env.EMAIL_SERVER_USER}>`,
        to: 'contact@exnus.xyz',
        replyTo: validatedData.email,
        subject: 'New message from contact form',
        text: validatedData.message,
        html: `
            <h1>New message from contact form</h1>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send message.');
    }
}
