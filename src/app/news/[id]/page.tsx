
'use client'

import { getNewsById, getComments, addComment, type Comment as CommentType } from "@/app/admin/actions";
import ScrollReveal from "@/components/scroll-reveal";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect, useState, useTransition, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";


const CommentForm = ({ postId, parentId, onCommentAdded }: { postId: string, parentId?: string | null, onCommentAdded: () => void }) => {
    const [isPending, startTransition] = useTransition();
    const formRef = useRef<HTMLFormElement>(null);
    const { toast } = useToast();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        // Basic client-side validation
        if (!formData.get('author') || !formData.get('content')) {
             toast({
                variant: "destructive",
                title: "Missing fields",
                description: "Please fill in your name and comment.",
            });
            return;
        }

        startTransition(async () => {
            try {
                await addComment(formData);
                formRef.current?.reset();
                onCommentAdded();
                toast({
                    title: parentId ? "Reply posted!" : "Comment posted!",
                    description: "Your message has been added.",
                });
            } catch (error) {
                 toast({
                    variant: "destructive",
                    title: "Submission failed",
                    description: "There was a problem submitting your comment.",
                });
            }
        });
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <input type="hidden" name="postId" value={postId} />
            {parentId && <input type="hidden" name="parentId" value={parentId} />}
            <Input name="author" placeholder="Your name" required disabled={isPending} />
            <Textarea name="content" placeholder={parentId ? "Write your reply..." : "Write a comment..."} required disabled={isPending} />
            <Button type="submit" disabled={isPending} className="self-end">
                {isPending ? 'Submitting...' : 'Submit'}
                 <Send className="ml-2 h-4 w-4" />
            </Button>
        </form>
    )
}

const Comment = ({ comment, postId, onCommentAdded }: { comment: CommentType, postId: string, onCommentAdded: () => void }) => {
    const [isReplying, setIsReplying] = useState(false);
    
    return (
        <div className="flex gap-4">
            <Avatar>
                <AvatarImage src={`https://i.pravatar.cc/150?u=${comment.author}`} alt={comment.author} />
                <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <p className="font-bold">{comment.author}</p>
                    <p className="text-xs text-muted-foreground">{format(new Date(comment.createdAt), "PPP p")}</p>
                </div>
                <p className="text-foreground/90 mt-1">{comment.content}</p>
                <Button variant="link" size="sm" className="p-0 h-auto" onClick={() => setIsReplying(!isReplying)}>
                    {isReplying ? 'Cancel' : 'Reply'}
                </Button>
                
                {isReplying && (
                    <div className="mt-4">
                        <CommentForm 
                            postId={postId} 
                            parentId={comment.id}
                            onCommentAdded={() => {
                                onCommentAdded();
                                setIsReplying(false);
                            }}
                        />
                    </div>
                )}
                
                {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-4 space-y-4 border-l-2 pl-4">
                        {comment.replies.map(reply => (
                            <Comment key={reply.id} comment={reply} postId={postId} onCommentAdded={onCommentAdded}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

function NewsDetailClient({ id }: { id: string }) {
  const [newsItem, setNewsItem] = useState<Awaited<ReturnType<typeof getNewsById>>>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPostAndComments = async (postId: string) => {
    try {
      const [postData, commentsData] = await Promise.all([
        getNewsById(postId),
        getComments(postId)
      ]);
      if (!postData) {
        notFound();
      }
      setNewsItem(postData);
      setComments(commentsData);
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostAndComments(id);
  }, [id]);


  if (loading) {
      return <div>Loading...</div>
  }

  if (!newsItem) {
    return null;
  }

  return (
    <div className="space-y-8">
      <div className="header-card text-center">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {newsItem.title}
          </h1>
          <p className="text-sm text-foreground/70">
            Posted on {format(new Date(newsItem.createdAt), "MMMM d, yyyy")}
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={200}>
        <Card>
          {newsItem.imageUrl && (
            <div className="aspect-video relative w-full rounded-t-lg overflow-hidden">
                <Image 
                    src={newsItem.imageUrl}
                    alt={newsItem.title}
                    fill
                    className="object-cover"
                />
            </div>
          )}
          <CardContent className="p-6 md:p-8">
            {newsItem.audioUrl && (
              <div className="mb-6">
                <h2 className="text-xl font-bold text-primary mb-3">Listen to this announcement</h2>
                <audio controls className="w-full">
                  <source src={newsItem.audioUrl} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
            <div className="prose prose-invert max-w-none text-foreground/80 whitespace-pre-wrap">
              <p>{newsItem.content}</p>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold text-primary">Comments ({comments.length})</h2>
          </CardHeader>
          <CardContent className="space-y-6">
             {comments.length > 0 ? (
                    comments.map(comment => <Comment key={comment.id} comment={comment} postId={newsItem.id} onCommentAdded={() => fetchPostAndComments(id)} />)
                ) : (
                    <p className="text-foreground/70">Be the first to comment.</p>
                )}
          </CardContent>
          <CardFooter>
            <div className="w-full">
                <h3 className="font-bold text-lg mb-2">Leave a Comment</h3>
                <CommentForm postId={newsItem.id} onCommentAdded={() => fetchPostAndComments(id)} />
            </div>
          </CardFooter>
        </Card>
      </ScrollReveal>
    </div>
  );
}


export default function NewsDetailPage({ params }: { params: { id: string } }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? <NewsDetailClient id={params.id} /> : null;
}
