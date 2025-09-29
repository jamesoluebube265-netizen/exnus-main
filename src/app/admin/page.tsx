
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { deleteNews, getNews, postNews, type NewsPost } from "./actions";
import { getSubmittedMessages, type Message } from "@/app/contact/actions";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";


const newsFormSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  content: z.string().min(10, "Content must be at least 10 characters."),
  image: z.any().optional(),
  generateAudio: z.boolean().default(false).optional(),
});


function AdminDashboard() {
    const searchParams = useSearchParams();
    const accessCode = searchParams.get('code');
    const correctCode = "203040";

    const { toast } = useToast();
    const [news, setNews] = useState<NewsPost[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isSubmittingNews, setIsSubmittingNews] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

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
            getNews().then(setNews);
            getSubmittedMessages().then(setMessages);
        }
    }, [accessCode]);

    async function onNewsSubmit() {
        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        setIsSubmittingNews(true);
        try {
            const result = await postNews(formData);
            if (result.post) {
                setNews(prevNews => [result.post, ...prevNews]);
            }
            toast({
                title: "News posted successfully!",
                description: "The announcement is now live.",
            });
            newsForm.reset();
            if (formRef.current) {
                formRef.current.reset();
            }
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

    async function handleDelete(id: string) {
        try {
            await deleteNews(id);
            setNews(prevNews => prevNews.filter(post => post.id !== id));
            toast({
                title: "Post deleted!",
                description: "The news post has been removed.",
            });
        } catch (error) {
             toast({
                variant: "destructive",
                title: "Deletion failed",
                description: "There was a problem deleting the post.",
            });
        }
    }
    
  if (accessCode !== correctCode) {
    return (
      <div className="w-full">
        <div className="header-card text-center mb-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Admin Dashboard
            </h1>
            <p className="text-lg text-foreground/70 max-w-4xl mx-auto">
            Manage your application content and view user submissions.
            </p>
        </ScrollReveal>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <ScrollReveal>
            <Card>
                <CardHeader>
                    <CardTitle>Post News</CardTitle>
                    <CardDescription>Create and publish a new announcement.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...newsForm}>
                        <form ref={formRef} action={onNewsSubmit} className="space-y-6">
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
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Image (Optional)</FormLabel>
                                    <FormControl>
                                        <Input type="file" accept="image/*" name="image" />
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
                                            name="generateAudio"
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
                    <CardTitle>Manage News</CardTitle>
                    <CardDescription>Review and delete existing news posts.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-y-auto max-h-[500px] border rounded-md">
                        {news.length > 0 ? (
                             <Table>
                                <TableHeader>
                                    <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {news.map((post) => (
                                    <TableRow key={post.id}>
                                        <TableCell className="font-medium truncate max-w-[200px]">{post.title}</TableCell>
                                        <TableCell>{format(new Date(post.createdAt), "PPP")}</TableCell>
                                        <TableCell className="text-right">
                                             <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <Trash2 className="h-4 w-4 text-destructive" />
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This action cannot be undone. This will permanently delete the post titled "{post.title}".
                                                    </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={() => handleDelete(post.id)} className="bg-destructive hover:bg-destructive/90">
                                                        Delete
                                                    </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                             <div className="text-center py-10 text-foreground/70">
                                No news posts have been created yet.
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={200}>
        <Card>
          <CardHeader>
            <CardTitle>Contact Form Submissions</CardTitle>
            <CardDescription>Messages sent from the contact form.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-y-auto max-h-[500px] border rounded-md">
                {messages.length > 0 ? (
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Message</TableHead>
                            <TableHead>Received</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {messages.map((message) => (
                            <TableRow key={message.email + message.receivedAt}>
                                <TableCell className="font-medium">{message.name}</TableCell>
                                <TableCell>{message.email}</TableCell>
                                <TableCell className="max-w-xs truncate">{message.message}</TableCell>
                                <TableCell>{format(new Date(message.receivedAt), "PPP p")}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                ) : (
                    <div className="text-center py-10 text-foreground/70">
                        No messages have been submitted yet.
                    </div>
                )}
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  );
}

export default function AdminPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminDashboard />
        </Suspense>
    );
}
