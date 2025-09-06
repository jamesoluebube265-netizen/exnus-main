
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, ShieldCheck, Lock, TrendingUp, Handshake, BrainCircuit } from "lucide-react";
import Link from "next/link";

const stakingBenefits = [
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Earn Rewards",
      description: "Stake your Exnus tokens to earn passive rewards. The longer you stake, the more you earn, compounding your holdings over time."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "Enhance Security",
      description: "By staking, you contribute directly to the security and stability of the network, helping to validate transactions and maintain protocol integrity."
    },
    {
      icon: <Handshake className="w-8 h-8 text-accent" />,
      title: "Governance Rights",
      description: "Staked tokens grant you voting power in the Exnus DAO. Participate in key decisions and shape the future of the protocol."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title-="Network Stability",
      description: "Incentivizing token locking reduces market volatility and fosters a stable, long-term token economy, benefiting all ecosystem participants."
    }
];

export default function StakingPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
          
          <div className="container px-4 md:px-6 relative">
              <ScrollReveal>
                <div className="inline-block bg-accent/10 text-accent font-semibold py-2 px-4 rounded-full mb-4">
                    Coming Soon
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-foreground">
                    Stake Your Tokens, Power the Future
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
                  Our staking platform is currently under development. Soon, you will be able to stake your Exnus tokens to earn rewards, secure the network, and participate in governance.
              </p>
              </ScrollReveal>
          </div>
      </section>

      <section id="staking-benefits" className="py-20 md:py-28 bg-white text-black">
          <div className="container px-4 md:px-6">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Why Stake with Exnus?
                </h2>
                <p className="max-w-3xl mx-auto text-center text-black/70 mb-12">
                    Staking is a cornerstone of the Exnus ecosystem. It aligns the incentives of token holders with the long-term success of the protocol, creating a secure and prosperous network for everyone.
                </p>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                  {stakingBenefits.map((benefit, index) => (
                      <ScrollReveal key={benefit.title} delay={index * 150}>
                      <div className="h-full p-6 text-center border border-gray-200/80 rounded-lg">
                          <div className="flex justify-center mb-4">
                              <div className="p-4 bg-accent/10 rounded-full w-fit">
                                  {benefit.icon}
                              </div>
                          </div>
                          <h3 className="text-xl font-bold">{benefit.title}</h3>
                          <p className="text-black/70 mt-2">{benefit.description}</p>
                      </div>
                      </ScrollReveal>
                  ))}
              </div>
          </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                How Staking Will Work
              </h2>
              <p className="mt-4 text-foreground/70">
                We are designing a flexible and secure staking mechanism to provide a seamless experience for our community.
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-1 gap-8 text-left">
             <Card className="p-6 flex items-start gap-6 h-full border-border/50">
                <div className="p-3 bg-accent/10 rounded-full mt-1">
                    <Lock className="w-8 h-8 text-accent" />
                </div>
                <div>
                    <h3 className="font-bold text-xl text-accent">Flexible Staking Options</h3>
                    <p className="mt-2 text-foreground/80">
                      The protocol will support multiple staking tiers with varying lock-up durations and reward rates. This will provide you with options that balance your liquidity needs and reward optimization goals.
                    </p>
                </div>
             </Card>
             <Card className="p-6 flex items-start gap-6 h-full border-border/50">
                <div className="p-3 bg-accent/10 rounded-full mt-1">
                    <BrainCircuit className="w-8 h-8 text-accent" />
                </div>
                <div>
                    <h3 className="font-bold text-xl text-accent">Secure Smart Contracts</h3>
                    <p className="mt-2 text-foreground/80">
                      All staking activities will be managed by fully-audited smart contracts on the Solana blockchain. Features like slashing mechanisms and controlled withdrawals will be implemented to ensure the security and fairness of the system.
                    </p>
                </div>
             </Card>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto p-8 border border-border/50 rounded-lg bg-card text-center">
              <h3 className="font-bold text-xl text-accent">Stay Updated</h3>
              <p className="mt-4 text-foreground/70">
                  The official launch of our staking platform is a top priority on our roadmap. Follow our social channels and subscribe to our newsletter for the latest announcements and to be notified as soon as staking is live.
              </p>
               <div className="mt-8">
                  <Button asChild>
                    <Link href="/roadmap">
                      View Roadmap
                    </Link>
                  </Button>
                </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
