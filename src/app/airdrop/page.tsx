
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Bot, Users, Award, Shield, UserPlus, FileText } from "lucide-react";

const steps = [
    {
      icon: <Bot className="w-10 h-10 text-primary" />,
      title: "1. Launch the Telegram Mini-App",
      description: "Click the 'Join Airdrop' button below to open our official Exnus Points Mini-App directly in your Telegram.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "2. Complete Simple Tasks",
      description: "Engage with our community by completing a few simple tasks within the app, such as following our social channels and inviting friends.",
    },
    {
      icon: <Gift className="w-10 h-10 text-primary" />,
      title: "3. Earn Airdrop Points",
      description: "For every task you complete, you'll earn points. The more points you collect, the larger your share of the airdrop will be.",
    },
];

const airdropDetails = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Airdrop Eligibility",
    description: "Participation is open to everyone. To be eligible for rewards, users must complete the required tasks in the Telegram mini-app and have a valid Solana-compatible wallet address linked to their account before the distribution date."
  },
  {
    icon: <UserPlus className="w-8 h-8 text-primary" />,
    title: "Referral Program",
    description: "Invite your friends to join the Exnus community and earn bonus points for every successful referral. Your unique referral link can be found inside the Telegram mini-app. The more friends you bring, the more points you earn!"
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Fairness and Anti-Cheat",
    description: "We are committed to a fair airdrop for all participants. We have implemented anti-cheat mechanisms to detect and disqualify any participants attempting to gain an unfair advantage through bots, multiple accounts, or other fraudulent activities."
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Terms & Conditions",
    description: "Exnus Protocol reserves the right to modify the airdrop rules or terminate the campaign at any time. All decisions made by the Exnus team are final. Participation in the airdrop constitutes acceptance of these terms."
  }
];

export default function AirdropPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
          <div className="px-4 md:px-6 relative">
              <ScrollReveal>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-foreground">
                  Join the <span className="text-primary">Exnus Protocol</span> Airdrop
              </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
                  Become an early member of our community and earn exclusive rewards. Participate in our airdrop campaign by completing simple tasks in our Telegram mini-app.
              </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                  <Button size="lg" asChild>
                      <a href="https://t.me/Exnusprotocol" target="_blank" rel="noopener noreferrer">
                          Join Airdrop Now
                          <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                  </Button>
              </ScrollReveal>
          </div>
      </section>

      <section id="how-to-participate" className="py-20 md:py-28 bg-background/50">
          <div className="container px-4 md:px-6">
              <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                  How to Participate
              </h2>
              <p className="max-w-3xl mx-auto text-center text-foreground/70 mb-12">
                  Earning your share of the Exnus airdrop is simple. Just follow these three easy steps to get started.
              </p>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {steps.map((step, index) => (
                      <ScrollReveal key={step.title} delay={index * 150}>
                      <div className="h-full p-6 text-center border border-border/80 rounded-lg bg-card/80 backdrop-blur-sm">
                          <div className="flex justify-center mb-4">
                              <div className="p-4 bg-primary/10 rounded-full w-fit">
                                  {step.icon}
                              </div>
                          </div>
                          <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                          <p className="text-foreground/70 mt-2">{step.description}</p>
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
                Airdrop Campaign Details
              </h2>
              <p className="mt-4 text-foreground/70">
                Everything you need to know about participating in the Exnus Protocol airdrop and maximizing your rewards.
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-8 text-left">
            {airdropDetails.map((detail, index) => (
              <ScrollReveal key={detail.title} delay={index * 150}>
                <div className="p-6 border border-border/50 rounded-lg flex items-start gap-4 h-full bg-card/80 backdrop-blur-sm">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary">{detail.title}</h3>
                    <p className="mt-2 text-foreground/80">
                      {detail.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 border-t border-border/50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto p-8 border border-border/50 rounded-lg bg-card/80 backdrop-blur-sm text-center">
              <h3 className="font-bold text-xl text-primary">Important Notice</h3>
              <p className="mt-4 text-foreground/70">
                  Airdrop rewards will be distributed after the Token Generation Event (TGE). The number of tokens you receive will be proportional to the points you accumulate. Stay tuned to our official channels for more announcements.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
