
'use server';

import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';

const messagesFilePath = path.join(process.cwd(), 'messages.json');

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type Message = {
    name: string;
    email: string;
    message: string;
    receivedAt: string;
}

export async function getSubmittedMessages(): Promise<Message[]> {
  try {
    const data = await fs.readFile(messagesFilePath, 'utf-8');
    const messages: Message[] = JSON.parse(data);
    // Sort messages by received date, newest first
    return messages.sort((a, b) => new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime());
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return []; // Return empty array if file doesn't exist
    }
    throw error;
  }
}

export async function sendMessage(values: z.infer<typeof formSchema>) {
    const validatedData = formSchema.parse(values);
    
    const messages = await getSubmittedMessages();

    const newMessage: Message = {
      ...validatedData,
      receivedAt: new Date().toISOString(),
    };

    messages.unshift(newMessage); // Add new message to the beginning

    try {
        await fs.writeFile(messagesFilePath, JSON.stringify(messages, null, 2));
        return { success: true };
    } catch (error) {
        console.error('Error saving message:', error);
        throw new Error('Failed to save message.');
    }
}

    