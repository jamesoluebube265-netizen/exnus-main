
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
import { ArrowRight, Mail, MessageSquare, User, HelpCircle, Briefcase, Gift } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Twitter, Send, GitMerge } from "lucide-react";

const faqItems = [
    {
      value: "item-1",
      question: "How can I partner with Exnus Protocol?",
      answer: "We are always open to collaborating with innovative projects. Please fill out the contact form with your partnership proposal, and our team will get back to you to discuss potential synergies.",
      icon: <Briefcase className="w-5 h-5 text-accent" />
    },
    {
      value: "item-2",
      question: "Where can I find support if I have a technical issue?",
      answer: "For technical support, we recommend joining our official Discord or Telegram channels, where our community and support staff are available to help you. For specific inquiries, you can also use the contact form.",
      icon: <HelpCircle className="w-5 h-5 text-accent" />
    },
    {
      value: "item-3",
      question: "When will the airdrop rewards be distributed?",
      answer: "Airdrop rewards will be distributed after the Token Generation Event (TGE). Please follow our official social media channels for the latest announcements on dates and procedures.",
      icon: <Gift className="w-5 h-5 text-accent" />
    }
];

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
                    Contact Us
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
                    Have questions or want to get involved? We'd love to hear from you. Reach out through our contact form or connect with us on our social channels.
                </p>
              </ScrollReveal>
          </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <ScrollReveal>
                    <div className="p-8 border border-border/50 rounded-lg bg-card h-full">
                        <div className="text-left mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-2">Get in Touch</h2>
                            <p className="text-foreground/70">Fill out the form below and we'll get back to you as soon as possible.</p>
                        </div>
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
                <ScrollReveal delay={200}>
                    <div className="space-y-8">
                         <div className="p-8 border border-border/50 rounded-lg bg-card">
                             <h3 className="text-2xl font-bold text-accent mb-4">Contact Information</h3>
                             <p className="text-foreground/70 mb-6">For general inquiries, partnerships, or media requests, please reach out to us at:</p>
                              <a href="mailto:contact@exnus.protocol" className="inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:text-accent transition-colors">
                                  <Mail className="w-5 h-5" />
                                  contact@exnus.protocol
                              </a>
                         </div>
                         <div className="p-8 border border-border/50 rounded-lg bg-card">
                             <h3 className="text-2xl font-bold text-accent mb-4">Join Our Community</h3>
                             <p className="text-foreground/70 mb-6">Stay updated and engage with the community on our social platforms:</p>
                             <div className="flex gap-6">
                                 <a href="#" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                                    <Twitter className="w-5 h-5"/>
                                    Twitter
                                </a>
                                <a href="https://t.me/Exnuspoint_bot" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                                    <Send className="w-5 h-5"/>
                                    Telegram
                                </a>
                                <a href="#" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                                    <GitMerge className="w-5 h-5"/>
                                    Discord
                                </a>
                             </div>
                         </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container px-4 md:px-6">
            <ScrollReveal>
                <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Frequently Asked Questions
                </h2>
                <p className="mt-4 text-foreground/70">
                    Find quick answers to common questions about the Exnus Protocol.
                </p>
                </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                <div className="max-w-3xl mx-auto mt-12">
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item) => (
                    <AccordionItem value={item.value} key={item.value} className="border-b border-border/50">
                        <AccordionTrigger className="text-lg font-semibold text-foreground/90 hover:text-accent">
                          <div className="flex items-center gap-4">
                            {item.icon}
                            {item.question}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-foreground/80 pl-11">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
                </div>
            </ScrollReveal>
        </div>
      </section>
    </>
  );
}
