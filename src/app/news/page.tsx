
import { getNews } from "@/app/admin/actions";
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default async function NewsPage() {
    const news = await getNews();

    return (
        <div className="space-y-12">
            <section>
                <div className="header-card text-center relative overflow-hidden">
                    <div 
                        className="absolute inset-0"
                        style={{
                        backgroundImage: `url(/4.jpeg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }}
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
                    <div className="relative z-10">
                        <ScrollReveal>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary">
                                News & Announcements
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="max-w-3xl mx-auto text-lg text-white/80">
                                Stay up to date with the latest developments, partnerships, and announcements from the Exnus Protocol team.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
            <section>
                {news.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((post, index) => (
                            <ScrollReveal key={post.id} delay={index * 150}>
                                <Card className="h-full flex flex-col">
                                    {post.imageUrl && (
                                        <div className="aspect-video relative w-full rounded-t-lg overflow-hidden">
                                            <Image
                                                src={post.imageUrl}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="text-xl text-foreground">{post.title}</CardTitle>
                                        <CardDescription>{format(new Date(post.createdAt), "MMMM d, yyyy")}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-foreground/80 line-clamp-3">{post.content}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild variant="secondary">
                                            <Link href={`/news/${post.id}`}>Read More</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-card rounded-lg border">
                        <h2 className="text-2xl font-bold text-primary">No News Yet</h2>
                        <p className="mt-2 text-foreground/70">Check back soon for the latest announcements.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
