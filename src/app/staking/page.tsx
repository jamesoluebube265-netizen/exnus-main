
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, ShieldCheck, Lock, TrendingUp, Handshake, BrainCircuit } from "lucide-react";

const stakingBenefits = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Earn Rewards",
      description: "Stake your Exnus tokens to earn passive rewards. The longer you stake, the more you earn, compounding your holdings over time."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Enhance Security",
      description: "By staking, you contribute directly to the security and stability of the network, helping to validate transactions and maintain protocol integrity."
    },
    {
      icon: <Handshake className="w-8 h-8 text-primary" />,
      title: "Governance Rights",
      description: "Staked tokens grant you voting power in the Exnus DAO. Participate in key decisions and shape the future of the protocol."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Network Stability",
      description: "Incentivizing token locking reduces market volatility and fosters a stable, long-term token economy, benefiting all ecosystem participants."
    }
];

export default function StakingPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                Exnus Protocol Staking
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
              Staking is a core function of the Exnus ecosystem, allowing token holders to actively participate in the network's security and governance while earning rewards. By locking your tokens, you help secure the protocol and gain a voice in its future.
          </p>
          </ScrollReveal>
      </section>

      <section id="staking-benefits">
          <div className="text-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    The Benefits of Staking with Exnus
                </h2>
                <p className="max-w-3xl mx-auto text-center text-foreground/70 mb-8">
                    Staking aligns the incentives of token holders with the long-term success of the protocol, creating a secure, decentralized, and prosperous network for everyone.
                </p>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                  {stakingBenefits.map((benefit, index) => (
                      <ScrollReveal key={benefit.title} delay={index * 150}>
                      <div className="h-full p-6 text-center border rounded-lg bg-card">
                          <div className="flex justify-center mb-4">
                              <div className="p-4 bg-primary/10 rounded-full w-fit">
                                  {benefit.icon}
                              </div>
                          </div>
                          <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                          <p className="text-foreground/70 mt-2">{benefit.description}</p>
                      </div>
                      </ScrollReveal>
                  ))}
              </div>
          </div>
      </section>

      <section>
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How Our Staking Mechanism Works
            </h2>
            <p className="mt-4 text-foreground/70 mb-8">
              We have designed a flexible, secure, and user-friendly staking mechanism to provide a seamless experience for our community.
            </p>
          </ScrollReveal>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-8 text-left">
           <Card className="p-6 flex items-start gap-6 h-full border bg-card">
              <div className="p-3 bg-primary/10 rounded-full mt-1">
                  <Lock className="w-8 h-8 text-primary" />
              </div>
              <div>
                  <h3 className="font-bold text-xl text-primary">Flexible Staking Options</h3>
                  <p className="mt-2 text-foreground/80">
                    The protocol supports multiple staking tiers with varying lock-up durations and reward rates. This provides users with options that balance their liquidity needs with their reward optimization goals. Longer staking periods will yield higher returns, incentivizing long-term commitment.
                  </p>
              </div>
           </Card>
           <Card className="p-6 flex items-start gap-6 h-full border bg-card">
              <div className="p-3 bg-primary/10 rounded-full mt-1">
                  <BrainCircuit className="w-8 h-8 text-primary" />
              </div>
              <div>
                  <h3 className="font-bold text-xl text-primary">Secure & Audited Smart Contracts</h3>
                  <p className="mt-2 text-foreground/80">
                    All staking activities are managed by fully-audited smart contracts on the Solana blockchain. To protect the network and its participants, features like slashing mechanisms for malicious behavior and controlled withdrawal periods are implemented to ensure the fairness and security of the entire system.
                  </p>
              </div>
           </Card>
        </div>
      </section>

      <section>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto p-8 border rounded-lg bg-card text-center">
              <h3 className="font-bold text-xl text-primary">Get Ready to Participate</h3>
              <p className="mt-4 text-foreground/70">
                  The official launch of our staking platform is a top priority on our roadmap. While the feature is under active development, you can prepare by learning more about our tokenomics and the role staking plays in our ecosystem.
              </p>
               <div className="mt-8">
                  <Button asChild>
                    <a href="/documents#tokenomics-details">
                      View Tokenomics
                    </a>
                  </Button>
                </div>
            </div>
          </ScrollReveal>
      </section>
    </div>
  );
}
