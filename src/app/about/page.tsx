
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lightbulb, Rocket, Users, Shield, Handshake, GitCommit, Scale, Zap, ThumbsUp, Puzzle } from "lucide-react";
import Image from "next/image";
import { RewardingDiagram } from "@/components/sections/diagrams/rewarding-diagram";

const values = [
    {
      icon: <GitCommit className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "We are committed to pushing the boundaries of what's possible in Web3, constantly exploring new ideas and technologies to drive the ecosystem forward."
    },
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      title: "Transparency",
      description: "We operate with openness and integrity, ensuring that our community is always informed and involved in the decisions that shape our future."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community",
      description: "We believe in the power of collaboration and strive to build a supportive and inclusive environment where everyone has a voice and an opportunity to contribute."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security",
      description: "The safety of our users' assets and the integrity of our protocol are our top priorities. We adhere to the highest security standards in everything we build."
    }
];

const philosophyPoints = [
    {
        icon: <ThumbsUp className="w-8 h-8 text-primary" />,
        title: "Solving Low Engagement",
        description: "Many platforms struggle with passive users. Exnus introduces a dynamic reward system that incentivizes meaningful contributions, turning users into active stakeholders who drive ecosystem growth."
    },
    {
        icon: <Puzzle className="w-8 h-8 text-primary" />,
        title: "Unifying Fragmented Incentives",
        description: "We replace siloed and confusing reward models with a single, comprehensive framework. All valuable contributions—from development to governance—are recognized and rewarded, creating a cohesive and motivating environment."
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Fostering True Ownership",
        description: "We believe the future of the web is user-owned. By aligning rewards with the network's success, Exnus gives users a tangible stake in the ecosystem, fostering long-term loyalty and a shared sense of purpose."
    }
]

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
          <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              About <span className="text-primary">Exnus Protocol</span>
          </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
              We are a passionate team of builders, innovators, and decentralization advocates dedicated to creating a more equitable and participatory Web3.
          </p>
          </ScrollReveal>
      </section>

      <section className="bg-card p-6 md:p-8 rounded-lg border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                  <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Mission</h2>
                      <p className="text-foreground/80 text-lg mb-6">
                        Our mission is to build the incentive layer for the decentralized world. We empower Web3 projects to cultivate vibrant, engaged, and loyal communities by creating a universal framework that rewards all forms of meaningful participation—from core development to community governance.
                      </p>
                       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Vision</h2>
                      <p className="text-foreground/80 text-lg">
                        We envision a future where digital ecosystems are built, owned, and governed by their users. By aligning incentives and fostering a true sense of ownership, we aim to unlock the full potential of decentralized collaboration and create a more innovative, transparent, and equitable internet for everyone.
                      </p>
                  </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="not-prose my-8">
                    <div className="overflow-hidden p-6 md:p-8 bg-background rounded-lg shadow-inner">
                        <RewardingDiagram />
                    </div>
                </div>
              </ScrollReveal>
          </div>
      </section>

      <section>
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="mt-4 text-foreground/70">
              These principles guide every decision we make and every line of code we write, ensuring we stay true to our mission and our community.
            </p>
          </ScrollReveal>
        </div>
        <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 150}>
              <div className="p-6 border rounded-lg flex flex-col items-center text-center h-full bg-card">
                 <div className="p-4 bg-primary/10 rounded-full w-fit mb-4">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary">{value.title}</h3>
                  <p className="mt-2 text-foreground/80">
                    {value.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="philosophy">
          <div className="text-center">
              <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                  The Exnus Philosophy
              </h2>
              <p className="max-w-3xl mx-auto text-center text-foreground/70 mb-8">
                  We built Exnus to solve the fundamental challenges that hold back the growth of decentralized ecosystems. Our philosophy is rooted in three core solutions.
              </p>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {philosophyPoints.map((point, index) => (
                      <ScrollReveal key={point.title} delay={index * 150}>
                          <div className="h-full p-6 text-center border rounded-lg bg-card">
                              <div className="flex justify-center mb-4">
                                  <div className="p-4 bg-primary/10 rounded-full w-fit">
                                      {point.icon}
                                  </div>
                              </div>
                              <h3 className="text-xl font-bold text-foreground">{point.title}</h3>
                              <p className="text-foreground/70 mt-2">{point.description}</p>
                          </div>
                      </ScrollReveal>
                  ))}
              </div>
          </div>
      </section>


      <section>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto p-8 border rounded-lg bg-card text-center">
              <h3 className="font-bold text-xl text-primary">Join Our Mission</h3>
              <p className="mt-4 text-foreground/70">
                  The future of Web3 is collaborative. If you share our vision and want to contribute to a more decentralized world, we invite you to join our community and help us build the future of incentivized participation.
              </p>
               <div className="mt-8">
                  <Button asChild>
                    <a href="/airdrop">
                      Participate in Airdrop
                    </a>
                  </Button>
                </div>
            </div>
          </ScrollReveal>
      </section>
    </div>
  );
}
