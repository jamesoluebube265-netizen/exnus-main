
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lightbulb, Rocket, Users, Shield, Handshake, GitCommit, Scale } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
    {
      icon: <GitCommit className="w-8 h-8 text-accent" />,
      title: "Innovation",
      description: "We are committed to pushing the boundaries of what's possible in Web3, constantly exploring new ideas and technologies to drive the ecosystem forward."
    },
    {
      icon: <Scale className="w-8 h-8 text-accent" />,
      title: "Transparency",
      description: "We operate with openness and integrity, ensuring that our community is always informed and involved in the decisions that shape our future."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Community",
      description: "We believe in the power of collaboration and strive to build a supportive and inclusive environment where everyone has a voice and an opportunity to contribute."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Security",
      description: "The safety of our users' assets and the integrity of our protocol are our top priorities. We adhere to the highest security standards in everything we build."
    }
];

const teamMembers = [
    {
        name: "Alex Johnson",
        role: "Lead Protocol Architect",
        avatar: "https://picsum.photos/200/200?random=1",
        dataAiHint: "man portrait"
    },
    {
        name: "Maria Garcia",
        role: "Head of Smart Contracts",
        avatar: "https://picsum.photos/200/200?random=2",
        dataAiHint: "woman portrait"
    },
    {
        name: "Sam Chen",
        role: "Community & Growth Lead",
        avatar: "https://picsum.photos/200/200?random=3",
        dataAiHint: "person portrait"
    },
     {
        name: "Jane Doe",
        role: "Frontend Engineer",
        avatar: "https://picsum.photos/200/200?random=4",
        dataAiHint: "woman portrait"
    }
]

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
          
          <div className="container px-4 md:px-6 relative">
              <ScrollReveal>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-foreground">
                  About <span className="text-accent">Exnus Protocol</span>
              </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
                  We are a passionate team of builders, innovators, and decentralization advocates dedicated to creating a more equitable and participatory Web3.
              </p>
              </ScrollReveal>
          </div>
      </section>

      <section className="py-20 md:py-28 bg-white text-black">
          <div className="container px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <ScrollReveal>
                      <div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Our Mission</h2>
                          <p className="text-black/80 text-lg mb-6">
                            Our mission is to build the incentive layer for the decentralized world. We empower Web3 projects to cultivate vibrant, engaged, and loyal communities by creating a universal framework that rewards all forms of meaningful participation—from core development to community governance.
                          </p>
                           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Our Vision</h2>
                          <p className="text-black/80 text-lg">
                            We envision a future where digital ecosystems are built, owned, and governed by their users. By aligning incentives and fostering a true sense of ownership, we aim to unlock the full potential of decentralized collaboration and create a more innovative, transparent, and equitable internet for everyone.
                          </p>
                      </div>
                  </ScrollReveal>
                  <ScrollReveal delay={200}>
                      <Image 
                        src="https://picsum.photos/600/400"
                        alt="Our Team"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="team collaboration"
                      />
                  </ScrollReveal>
              </div>
          </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Core Values
              </h2>
              <p className="mt-4 text-foreground/70">
                These principles guide every decision we make and every line of code we write, ensuring we stay true to our mission and our community.
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 150}>
                <div className="p-6 border border-border/50 rounded-lg flex flex-col items-center text-center h-full">
                   <div className="p-4 bg-accent/10 rounded-full w-fit mb-4">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-accent">{value.title}</h3>
                    <p className="mt-2 text-foreground/80">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

       <section id="team" className="py-20 md:py-28 bg-white text-black">
          <div className="container px-4 md:px-6">
              <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                  Meet the Team
              </h2>
              <p className="max-w-3xl mx-auto text-center text-black/70 mb-12">
                  We are a diverse group of engineers, designers, and strategists united by a shared passion for decentralization.
              </p>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                  {teamMembers.map((member, index) => (
                      <ScrollReveal key={member.name} delay={index * 150}>
                          <div className="text-center">
                              <Image 
                                src={member.avatar} 
                                alt={member.name} 
                                width={120} 
                                height={120} 
                                className="rounded-full mx-auto mb-4 shadow-md"
                                data-ai-hint={member.dataAiHint}
                              />
                              <h3 className="text-xl font-bold">{member.name}</h3>
                              <p className="text-accent font-semibold">{member.role}</p>
                          </div>
                      </ScrollReveal>
                  ))}
              </div>
          </div>
      </section>

      <section className="py-20 border-t border-border/50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto p-8 border border-border/50 rounded-lg bg-card text-center">
              <h3 className="font-bold text-xl text-accent">Join Our Mission</h3>
              <p className="mt-4 text-foreground/70">
                  The future of Web3 is collaborative. If you share our vision and want to contribute to a more decentralized world, we invite you to join our community and help us build the future of incentivized participation.
              </p>
               <div className="mt-8">
                  <Button asChild>
                    <Link href="/airdrop">
                      Participate in Airdrop
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
