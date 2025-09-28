
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
import { ArrowRight, MessageSquare, User, HelpCircle, Briefcase, Gift, Info, Star, MessageCircle, HeartHandshake, Zap, Volume2, Mail } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

const faqItems = [
    {
      value: "item-1",
      question: "What is Exnus Protocol?",
      answer: "Exnus Protocol is a decentralized incentive layer built on Solana. Our mission is to empower Web3 projects to build vibrant, engaged communities by rewarding all forms of meaningful participation—from development contributions to community governance.",
      icon: <Info className="w-5 h-5 text-primary" />
    },
    {
      value: "item-2",
      question: "How can I partner with Exnus Protocol?",
      answer: "We are always open to collaborating with innovative projects. Please fill out the contact form with your partnership proposal, and our team will get back to you to discuss potential synergies.",
      icon: <Briefcase className="w-5 h-5 text-primary" />
    },
    {
      value: "item-3",
      question: "Where can I find support if I have a technical issue?",
      answer: "For technical support, we recommend joining our official Discord or Telegram channels, where our community and support staff are available to help you. For specific inquiries, you can also use the contact form.",
      icon: <HelpCircle className="w-5 h-5 text-primary" />
    },
    {
      value: "item-4",
      question: "When will the airdrop rewards be distributed?",
      answer: "Airdrop rewards will be distributed after the Token Generation Event (TGE). Please follow our official social media channels for the latest announcements on dates and procedures.",
      icon: <Gift className="w-5 h-5 text-primary" />
    },
    {
      value: "item-5",
      question: "How can I get involved in the community?",
      answer: "The best way to get involved is by joining our community channels like Telegram and Discord. You can also participate in our airdrop campaign, contribute to discussions, and follow our social media for the latest updates and events.",
      icon: <Star className="w-5 h-5 text-primary" />
    },
    {
      value: "item-6",
      question: "How can I stay updated with the latest news?",
      answer: "Follow our official Twitter account and join our Telegram announcement channel. We regularly post updates on our development progress, partnerships, and upcoming events.",
      icon: <MessageCircle className="w-5 h-5 text-primary" />
    }
];

const commitmentPoints = [
    {
        icon: <Volume2 className="w-8 h-8 text-primary" />,
        title: "Transparency",
        description: "We believe in open dialogue. Whether you have feedback, questions, or concerns, we are here to listen and provide clear, honest answers."
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Responsiveness",
        description: "We are committed to addressing your inquiries promptly. Our team monitors all channels to ensure you receive timely and helpful support."
    },
    {
        icon: <HeartHandshake className="w-8 h-8 text-primary" />,
        title: "Community Focus",
        description: "Our community is at the heart of everything we do. Your input is invaluable in shaping the future of the Exnus Protocol, and we are dedicated to fostering a collaborative environment."
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
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

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
      setShowSuccessDialog(true);
      form.reset();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message || "There was a problem with your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-lg">
        <div
            className="absolute inset-0"
            style={{
            backgroundImage: `url(/6.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
        <div className="relative z-10 p-8 md:p-12 lg:p-20 text-center">
            <ScrollReveal>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary">
                    Contact Us
                </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                <p className="max-w-3xl mx-auto text-lg text-white/80">
                    Have questions or want to get involved? We'd love to hear from you. Reach out through our contact form or connect with us on our social channels.
                </p>
            </ScrollReveal>
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ScrollReveal>
                <div className="p-8 border rounded-lg bg-card h-full">
                    <div className="text-left mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Get in Touch</h2>
                        <p className="text-foreground/70">Fill out the form below and we'll get back to you as soon as possible.</p>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex items-center gap-2 text-foreground"><User className="w-4 h-4" /> Name</FormLabel>
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
                                <FormLabel className="flex items-center gap-2 text-foreground"><Mail className="w-4 h-4" /> Email</FormLabel>
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
                                <FormLabel className="flex items-center gap-2 text-foreground"><MessageSquare className="w-4 h-4" /> Message</FormLabel>
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
                     <div className="p-8 border rounded-lg bg-card">
                         <h3 className="text-2xl font-bold text-primary mb-4">Join Our Community</h3>
                         <p className="text-foreground/70 mb-6">Stay updated and engage with the community on our social platforms:</p>
                         <div className="flex flex-wrap gap-6">
                            <a href="https://x.com/exnusprotocol?t=erRcFQecZLsl-pW3MGFC9g&s=09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                                <Image src="/x.jpg" alt="X" width={20} height={20} />
                                <span className="text-foreground">X</span>
                            </a>
                            <a href="https://t.me/exnusprotocolchat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                                <Image src="/tg.jpg" alt="Telegram" width={20} height={20} />
                                <span className="text-foreground">Telegram</span>
                            </a>
                            <a href="httpss://discord.gg/v8MpYYFdP8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                                <Image src="/discord.jpg" alt="Discord" width={20} height={20} />
                                <span className="text-foreground">Discord</span>
                            </a>
                             <a href="mailto:contact@exnus.xyz" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                                <Mail className="w-5 h-5" />
                                <span>contact@exnus.xyz</span>
                            </a>
                         </div>
                     </div>
                </div>
            </ScrollReveal>
        </div>
      </section>

      <section>
        <div className="text-center">
            <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Frequently Asked Questions
                </h2>
                <p className="mt-4 text-foreground/70">
                    Find quick answers to common questions about the Exnus Protocol.
                </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                <div className="max-w-3xl mx-auto mt-8">
                <Accordion type="single" collapsible className="w-full bg-card p-4 rounded-lg border">
                    {faqItems.map((item) => (
                    <AccordionItem value={item.value} key={item.value} className="border-b last:border-b-0">
                        <AccordionTrigger className="text-lg font-semibold text-foreground/90 hover:text-primary text-left">
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

      <section>
          <div className="text-center">
              <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
                  Our Commitment to Open Communication
              </h2>
              <p className="max-w-3xl mx-auto text-center text-foreground/70 mb-8">
                  At Exnus Protocol, we believe that clear, consistent communication is the cornerstone of a healthy and thriving decentralized community. We are dedicated to maintaining an open dialogue with our users, partners, and supporters.
              </p>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {commitmentPoints.map((point, index) => (
                      <ScrollReveal key={point.title} delay={index * 150}>
                          <div className="h-full p-6 text-center border rounded-lg bg-card">
                              <div className="flex justify-center mb-4">
                                  <div className="p-4 bg-primary/10 rounded-full w-fit">
                                      {point.icon}
                                  </div>
                              </div>
                              <h3 className="text-xl font-bold text-primary">{point.title}</h3>
                              <p className="text-foreground/80 mt-2">{point.description}</p>
                          </div>
                      </ScrollReveal>
                  ))}
              </div>
          </div>
      </section>

      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Message Sent!</AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for contacting us. We have received your message and will get back to you shortly.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowSuccessDialog(false)}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
