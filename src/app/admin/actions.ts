
'use server';

import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { generateSpeech } from '@/ai/flows/tts-flow';
import { revalidatePath } from 'next/cache';

const newsSchema = z.object({
  title: z.string().min(1, "Title is required."),
  content: z.string().min(1, "Content is required."),
  imageUrl: z.string().optional().or(z.literal('')),
  generateAudio: z.boolean().optional(),
});

export type NewsPost = {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  audioUrl?: string;
};

const newsFilePath = path.join(process.cwd(), 'news.json');

export async function getNews(): Promise<NewsPost[]> {
  try {
    const data = await fs.readFile(newsFilePath, 'utf-8');
    const posts = JSON.parse(data);
    return posts.sort((a: NewsPost, b: NewsPost) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

export async function postNews(values: z.infer<typeof newsSchema>) {
    const validatedData = newsSchema.parse(values);
    const news = await getNews();
    
    let audioDataUri: string | undefined = undefined;

    if (validatedData.generateAudio && validatedData.content) {
        try {
            const ttsResponse = await generateSpeech({ text: validatedData.content });
            audioDataUri = ttsResponse.audioDataUri;
        } catch (error) {
            console.error("TTS generation failed:", error);
            // Decide if you want to proceed without audio or return an error
        }
    }

    const newPost: NewsPost = {
      id: uuidv4(),
      title: validatedData.title,
      content: validatedData.content,
      imageUrl: validatedData.imageUrl,
      createdAt: new Date().toISOString(),
      audioUrl: audioDataUri,
    };

    news.unshift(newPost);

    await fs.writeFile(newsFilePath, JSON.stringify(news, null, 2));
    
    revalidatePath('/admin');
    revalidatePath('/news');
    revalidatePath('/news/[id]', 'page');


    return { success: true, post: newPost };
}

export async function deleteNews(id: string) {
    const news = await getNews();
    const updatedNews = news.filter(post => post.id !== id);
  
    if (news.length === updatedNews.length) {
      return { success: false, message: 'Post not found.' };
    }
  
    await fs.writeFile(newsFilePath, JSON.stringify(updatedNews, null, 2));

    revalidatePath('/admin');
    revalidatePath('/news');
    revalidatePath('/news/[id]', 'page');
  
    return { success: true };
}


export async function getNewsById(id: string): Promise<NewsPost | null> {
    const news = await getNews();
    return news.find(post => post.id === id) || null;
}
