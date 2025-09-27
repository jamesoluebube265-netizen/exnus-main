
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getSubmittedMessages } from "../contact/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { postNews } from "./actions";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";


const newsFormSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  content: z.string().min(10, "Content must be at least 10 characters."),
  generateAudio: z.boolean().default(false).optional(),
});

interface Message {
  name: string;
  email: string;
  message: string;
  receivedAt: string;
}

export default function AdminPage() {
    const searchParams = useSearchParams();
    const accessCode = searchParams.get('code');
    const correctCode = "203040";

    const { toast } = useToast();
    const [messages, setMessages] = useState<Message[]>([]);
    const [isSubmittingNews, setIsSubmittingNews] = useState(false);

    const newsForm = useForm<z.infer<typeof newsFormSchema>>({
        resolver: zodResolver(newsFormSchema),
        defaultValues: {
        title: "",
        content: "",
        generateAudio: false,
        },
    });

    useEffect(() => {
        if (accessCode === correctCode) {
            getSubmittedMessages().then(setMessages);
        }
    }, [accessCode]);

    async function onNewsSubmit(values: z.infer<typeof newsFormSchema>) {
        setIsSubmittingNews(true);
        try {
            await postNews(values);
            toast({
                title: "News posted successfully!",
                description: "The announcement is now live.",
            });
            newsForm.reset();
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem posting the news.",
            });
        } finally {
            setIsSubmittingNews(false);
        }
    }


  if (accessCode !== correctCode) {
    return (
      <div className="w-full">
        <div className="header-card text-center mb-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Admin Access
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-foreground/70 max-w-md mx-auto">
              Please enter the access code to view the dashboard.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={200}>
          <div className="max-w-sm mx-auto">
            <Card>
              <CardContent className="pt-6">
                <form className="flex flex-col gap-4">
                  <Input name="code" placeholder="Enter access code" type="password" />
                  <Button type="submit">
                    View Dashboard
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
       <div className="header-card text-center">
        <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Admin Dashboard
            </h1>
            <p className="text-lg text-foreground/70 max-w-4xl mx-auto">
            View messages and post news announcements.
            </p>
        </ScrollReveal>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <ScrollReveal>
            <Card>
            <CardHeader>
                <CardTitle>Post News</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...newsForm}>
                    <form onSubmit={newsForm.handleSubmit(onNewsSubmit)} className="space-y-6">
                        <FormField
                            control={newsForm.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter news title" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={newsForm.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Type your announcement here..." {...field} rows={6}/>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={newsForm.control}
                            name="generateAudio"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>
                                    Generate Audio Version
                                    </FormLabel>
                                </div>
                                </FormItem>
                            )}
                         />
                        <Button type="submit" disabled={isSubmittingNews} className="w-full">
                            {isSubmittingNews ? 'Posting...' : 'Post Announcement'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
            </Card>
        </ScrollReveal>
        <ScrollReveal delay={200}>
            <Card>
            <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="overflow-y-auto max-h-[500px]">
                    <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Received</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Message</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {messages.map((msg, index) => (
                        <TableRow key={index}>
                            <TableCell>{new Date(msg.receivedAt).toLocaleDateString()}</TableCell>
                            <TableCell>{msg.name}</TableCell>
                            <TableCell>{msg.email}</TableCell>
                            <TableCell className="max-w-[200px] truncate">{msg.message}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </div>
                {messages.length === 0 && (
                <div className="text-center py-10 text-foreground/70">
                    No messages have been submitted yet.
                </div>
                )}
            </CardContent>
            </Card>
        </ScrollReveal>
      </div>
    </div>
  );
}
