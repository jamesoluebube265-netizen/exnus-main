import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-48 text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-accent text-glow">Exnus Protocol:</span> Decentralizing the Future, Securely.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
            Discover the next-generation web3 protocol designed for unparalleled security, scalability, and efficiency. Join us in building a truly decentralized world.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <Button size="lg" asChild>
            <Link href="#how-it-works">
              Explore the Protocol
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
