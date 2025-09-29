
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
  image: z.any().optional(),
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
const commentsFilePath = path.join(process.cwd(), 'comments.json');


// --------- News Actions ---------

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

export async function postNews(formData: FormData) {
    const values = Object.fromEntries(formData.entries());
    const validatedData = newsSchema.parse({
        ...values,
        generateAudio: values.generateAudio === 'on',
    });
    
    const news = await getNews();
    
    let audioDataUri: string | undefined = undefined;
    let imageDataUri: string | undefined = undefined;

    if (validatedData.generateAudio && validatedData.content) {
        try {
            const ttsResponse = await generateSpeech({ text: validatedData.content });
            audioDataUri = ttsResponse.audioDataUri;
        } catch (error) {
            console.error("TTS generation failed:", error);
        }
    }

    if (validatedData.image && validatedData.image.size > 0) {
        const imageFile = validatedData.image as File;
        const imageBuffer = await imageFile.arrayBuffer();
        const imageBase64 = Buffer.from(imageBuffer).toString('base64');
        imageDataUri = `data:${imageFile.type};base64,${imageBase64}`;
    }

    const newPost: NewsPost = {
      id: uuidv4(),
      title: validatedData.title,
      content: validatedData.content,
      imageUrl: imageDataUri,
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


// --------- Comment Actions ---------

export type Comment = {
  id: string;
  postId: string;
  parentId: string | null;
  author: string;
  content: string;
  createdAt: string;
  replies?: Comment[];
};

const commentFormSchema = z.object({
  postId: z.string(),
  parentId: z.string().nullable().optional(),
  author: z.string().min(2, "Name must be at least 2 characters."),
  content: z.string().min(1, "Comment cannot be empty."),
});

async function getAllComments(): Promise<Comment[]> {
  try {
    const data = await fs.readFile(commentsFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

export async function getComments(postId: string): Promise<Comment[]> {
    const allComments = await getAllComments();
    const postComments = allComments.filter(comment => comment.postId === postId);

    const commentMap: Record<string, Comment> = {};
    const rootComments: Comment[] = [];

    // First pass: create a map of all comments by their ID
    postComments.forEach(comment => {
        commentMap[comment.id] = { ...comment, replies: [] };
    });

    // Second pass: build the nested structure
    postComments.forEach(comment => {
        if (comment.parentId) {
            const parent = commentMap[comment.parentId];
            if (parent) {
                parent.replies?.push(commentMap[comment.id]);
            } else {
                 // This case handles replies to comments that might have been deleted
                 rootComments.push(commentMap[comment.id]);
            }
        } else {
            rootComments.push(commentMap[comment.id]);
        }
    });
    
    // Sort root comments and replies by creation date
    const sortByDate = (a: Comment, b: Comment) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    rootComments.sort(sortByDate);
    Object.values(commentMap).forEach(comment => {
        comment.replies?.sort(sortByDate);
    });

    return rootComments;
}

export async function addComment(formData: FormData) {
    const values = Object.fromEntries(formData.entries());
    const validatedData = commentFormSchema.parse(values);
    const allComments = await getAllComments();

    const newComment: Comment = {
        id: uuidv4(),
        postId: validatedData.postId,
        parentId: validatedData.parentId ? validatedData.parentId : null,
        author: validatedData.author,
        content: validatedData.content,
        createdAt: new Date().toISOString(),
    };

    allComments.push(newComment);
    await fs.writeFile(commentsFilePath, JSON.stringify(allComments, null, 2));

    revalidatePath(`/news/${validatedData.postId}`);

    return { success: true, comment: newComment };
}
