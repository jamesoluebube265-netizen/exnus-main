
import { getNewsById } from "@/app/admin/actions";
import ScrollReveal from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const newsItem = await getNewsById(params.id);

  if (!newsItem) {
    notFound();
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
    </div>
  );
}
