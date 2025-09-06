import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Bot, Users } from "lucide-react";
import Link from "next/link";

const steps = [
    {
      icon: <Bot className="w-10 h-10 text-accent" />,
      title: "1. Launch the Telegram Mini-App",
      description: "Click the 'Join Airdrop' button below to open our official Exnus Points Mini-App directly in your Telegram.",
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "2. Complete Simple Tasks",
      description: "Engage with our community by completing a few simple tasks within the app, such as following our social channels and inviting friends.",
    },
    {
      icon: <Gift className="w-10 h-10 text-accent" />,
      title: "3. Earn Airdrop Points",
      description: "For every task you complete, you'll earn points. The more points you collect, the larger your share of the airdrop will be.",
    },
];

export default function AirdropPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="relative py-24 md:py-32 text-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
            
            <div className="px-4 md:px-6 relative">
                <ScrollReveal>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-foreground">
                    Join the <span className="text-accent">Exnus Protocol</span> Airdrop
                </h1>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
                    Become an early member of our community and earn exclusive rewards. Participate in our airdrop campaign by completing simple tasks in our Telegram mini-app.
                </p>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                    <Button size="lg" asChild>
                        <Link href="https://t.me/Exnuspoint_bot" target="_blank" rel="noopener noreferrer">
                            Join Airdrop Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </ScrollReveal>
            </div>
        </section>

        <section id="how-to-participate" className="py-20 md:py-28 bg-white text-black">
            <div className="container px-4 md:px-6">
                <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    How to Participate
                </h2>
                <p className="max-w-3xl mx-auto text-center text-black/70 mb-12">
                    Earning your share of the Exnus airdrop is simple. Just follow these three easy steps to get started.
                </p>
                </ScrollReveal>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <ScrollReveal key={step.title} delay={index * 150}>
                        <div className="h-full p-6 text-center border border-gray-200/80 rounded-lg">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-accent/10 rounded-full w-fit">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-black/70 mt-2">{step.description}</p>
                        </div>
                        </ScrollReveal>
                    ))}
                </div>
                 <p className="text-center text-black/60 mt-12 max-w-2xl mx-auto">
                    Airdrop rewards will be distributed after the Token Generation Event (TGE). Stay tuned to our official channels for more announcements.
                 </p>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
