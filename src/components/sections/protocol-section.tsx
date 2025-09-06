'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { explainExnusProtocol, type ExplainExnusProtocolOutput } from '@/ai/flows/explain-exnus-protocol';
import { Loader2, Sparkles } from 'lucide-react';
import ScrollReveal from '../scroll-reveal';

const formSchema = z.object({
  query: z.string().min(10, 'Please enter at least 10 characters.'),
});
type FormValues = z.infer<typeof formSchema>;

export default function ProtocolSection() {
  const [explanation, setExplanation] = useState<ExplainExnusProtocolOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: 'Give me a general overview of the Exnus Protocol.',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setExplanation(null);

    try {
      const result = await explainExnusProtocol({ query: data.query });
      setExplanation(result);
    } catch (e) {
      setError('Failed to get an explanation. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="protocol" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Understand the Protocol</h2>
          <p className="max-w-2xl mx-auto text-center text-foreground/70 mb-12">
            Have questions about the Exnus Protocol? Ask our AI assistant for a simplified explanation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Card className="max-w-3xl mx-auto bg-card/60 backdrop-blur-lg border border-white/10">
            <CardHeader>
              <CardTitle>Ask the AI</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="query"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Question</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., How does the consensus mechanism work?"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      'Explain'
                    )}
                  </Button>
                </form>
              </Form>

              {explanation && (
                <div className="mt-8 p-6 bg-background/50 rounded-lg border">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-accent">
                    <Sparkles className="w-5 h-5" />
                    AI Explanation
                  </h3>
                  <div className="space-y-4 text-foreground/90">
                    {explanation.explanation.split('\n').filter(p => p.trim() !== "").map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                  </div>
                </div>
              )}
              {error && <p className="mt-4 text-destructive">{error}</p>}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
