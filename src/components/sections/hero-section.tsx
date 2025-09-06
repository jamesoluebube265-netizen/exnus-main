import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProtocolDialog from "./protocol-dialog";

export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-48 text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-white">
            <span className="text-accent text-glow">Exnus Protocol:</span> Fostering Innovation Through Incentivized Participation.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 mb-10">
            Exnus introduces a revolutionary reward system on Solana, designed to cultivate a vibrant, collaborative ecosystem by rewarding meaningful contributions from every community member.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#tokenomics">
                Join Presale
              </Link>
            </Button>
            <ProtocolDialog>
              <Button size="lg" variant="outline">
                Explore Protocol
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </ProtocolDialog>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
