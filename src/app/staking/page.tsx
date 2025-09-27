
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StakingModelDiagram } from "@/components/sections/diagrams/staking-model-diagram";
import { Award, ShieldCheck, Handshake, TrendingUp } from "lucide-react";

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
      <section>
        <div className="header-card text-center">
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
        </div>
      </section>

      <section id="staking-benefits">
          <div className="text-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              How Our Staking Mechanism Works
            </h2>
            <p className="mt-4 text-foreground/70 mb-8">
              Our staking model is designed to reward long-term commitment. By locking your tokens for specific monthly periods, you can access higher reward tiers, maximizing your returns while contributing to the network's stability.
            </p>
          </ScrollReveal>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-8 text-left">
           <Card className="p-8 border bg-card">
                <StakingModelDiagram />
                <div className="mt-8 prose prose-invert max-w-none text-foreground/80">
                  <h3 className="text-2xl font-bold text-primary mb-3">Locked Staking for Higher Rewards</h3>
                  <p>
                    The Exnus staking mechanism operates on a time-locked model. Unlike flexible staking, our system requires you to lock your tokens for defined monthly intervals. This approach is designed to foster a stable and secure network by encouraging long-term participation.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>
                      <strong>Structured Lock-in Periods:</strong> Choose from various monthly lock-up periods. The longer you commit your tokens, the higher the Annual Percentage Yield (APY) you will receive.
                    </li>
                    <li>
                      <strong>Predictable, High-Yield Returns:</strong> This model provides a predictable reward structure, allowing you to forecast your earnings based on your stake amount and lock-in duration.
                    </li>
                     <li>
                      <strong>Enhanced Network Security:</strong> By locking tokens, you directly contribute to reducing market volatility and strengthening the protocol's security, which in turn protects the value of your holdings.
                    </li>
                     <li>
                      <strong>Audited Smart Contracts:</strong> All staking operations are executed by rigorously audited smart contracts, ensuring your assets are managed with the highest level of security.
                    </li>
                  </ul>
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
