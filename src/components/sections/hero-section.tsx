
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden rounded-lg"
      style={{
        backgroundImage: `url(/4.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10">
        <div className="header-card text-center bg-transparent border-0 p-8 md:p-12 lg:p-20">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-white">
              <span className="text-primary">Exnus Protocol:</span> Fostering Innovation Through Incentivized Participation.
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
                <a href="/documents">
                  View Documents
                </a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                    Explore Protocol
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-primary">Exnus Protocol</DialogTitle>
                    <DialogDescription className="text-foreground/70 pt-2">
                      A brief overview of our mission and the technology we're building. For a complete technical deep-dive, please refer to our full whitepaper.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4 text-left">
                    <h3 className="font-bold text-lg text-foreground">What is Exnus?</h3>
                    <p className="text-foreground/80">
                      Exnus is a decentralized protocol built on Solana that introduces a novel incentive layer for Web3 ecosystems. Our primary goal is to solve the persistent problem of low user engagement by creating a framework that rewards all forms of meaningful participation—from software development and governance to community support and content creation.
                    </p>
                    <h3 className="font-bold text-lg text-foreground">What Are We Building?</h3>
                    <p className="text-foreground/80">
                      We are building a highly scalable and secure platform that allows any project to integrate our reward system. Key components include:
                    </p>
                    <ul className="list-disc list-inside text-foreground/80 space-y-2">
                      <li><span className="font-semibold text-foreground">A Dynamic Reward Engine:</span> Smart contracts that can be configured to distribute token rewards based on a project's specific goals.</li>
                      <li><span className="font-semibold text-foreground">Contribution Tracking:</span> A combination of on-chain and off-chain tools to verify and value user contributions fairly.</li>
                      <li><span className="font-semibold text-foreground">Decentralized Governance:</span> A DAO structure that empowers the community to guide the protocol's evolution and treasury.</li>
                    </ul>
                    <p className="text-foreground/80 pt-2">
                      By rewarding the actions that create real value, Exnus aims to help projects build stronger, more active, and more loyal communities.
                    </p>
                  </div>
                  <div className="text-center pt-4 border-t">
                    <Button asChild>
                      <a href="/documents">
                        Read Full Whitepaper
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
