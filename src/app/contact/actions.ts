
'use server';

import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type Message = z.infer<typeof formSchema> & { receivedAt: string };

const messagesFilePath = path.join(process.cwd(), 'messages.json');

async function getMessages(): Promise<Message[]> {
  try {
    const data = await fs.readFile(messagesFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

export async function sendMessage(values: z.infer<typeof formSchema>) {
    const validatedData = formSchema.parse(values);
    const messages = await getMessages();
    
    const newMessage: Message = {
      ...validatedData,
      receivedAt: new Date().toISOString(),
    };

    messages.unshift(newMessage);

    await fs.writeFile(messagesFilePath, JSON.stringify(messages, null, 2));

    return { success: true };
}

export async function getSubmittedMessages(): Promise<Message[]> {
    return await getMessages();
}
