
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

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
        },
    });

    const mailOptions = {
        from: `"${validatedData.name}" <${validatedData.email}>`,
        to: 'contact@exnus.xyz',
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
