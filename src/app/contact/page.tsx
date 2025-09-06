
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/scroll-reveal";
import { sendMessage } from "./actions";
import { ArrowRight, Mail, MessageSquare, User } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await sendMessage(values);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
          
          <div className="container px-4 md:px-6 relative">
              <ScrollReveal>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-foreground">
                  Contact <span className="text-accent">Us</span>
              </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
                  Have a question, a partnership proposal, or just want to say hello? We would love to hear from you.
              </p>
              </ScrollReveal>
          </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
            <div className="max-w-xl mx-auto">
                <ScrollReveal>
                <div className="p-8 border border-border/50 rounded-lg bg-card shadow-lg">
                    <h2 className="text-2xl font-bold text-accent mb-2">Send us a Message</h2>
                    <p className="text-foreground/70 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex items-center gap-2"><User className="w-4 h-4" /> Name</FormLabel>
                                <FormControl>
                                <Input placeholder="Enter your name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex items-center gap-2"><Mail className="w-4 h-4" /> Email</FormLabel>
                                <FormControl>
                                <Input placeholder="Enter your email address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Message</FormLabel>
                                <FormControl>
                                <Textarea placeholder="Type your message here..." {...field} rows={6} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isSubmitting} className="w-full">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                        </Button>
                        </form>
                    </Form>
                </div>
                </ScrollReveal>
            </div>
        </div>
      </section>
    </>
  );
}
