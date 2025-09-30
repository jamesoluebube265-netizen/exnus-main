
'use client';
import { useState } from 'react';
import ScrollReveal from '../scroll-reveal';
import { HowItWorksDiagram } from './diagrams/how-it-works-diagram';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const steps = [
  {
    title: '1. Contribute & Participate',
    description: 'Engage with the ecosystem through development, governance, or community building. The protocol tracks all meaningful contributions, from code commits to forum moderation, ensuring all efforts are recognized.',
    diagram: <Image src="/7.jpeg" alt="Contribute" width={400} height={200} className="w-full h-auto object-contain" />
  },
  {
    title: '2. Earn Rewards',
    description: 'Our advanced Reward Calculation Engine dynamically computes rewards based on the impact and value of your contributions. Payouts are automated via secure smart contracts on the Solana blockchain.',
    diagram: <HowItWorksDiagram variant="rewards" />
  },
  {
    title: '3. Stake & Govern',
    description: "Stake your Exnus tokens to earn additional rewards and gain voting power. Actively participate in decentralized governance through our secure, Realms-powered DAO to shape the future of the protocol.",
    diagram: <HowItWorksDiagram variant="govern" />
  },
];

export default function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="how-it-works">
      <div className="text-center mb-12">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Engage with the Exnus Ecosystem</h2>
          <p className="max-w-2xl mx-auto text-foreground/70 mt-4">
            Our protocol creates a powerful feedback loop where active participation is recognized, rewarded, and empowers the community to drive innovation and growth.
          </p>
        </ScrollReveal>
      </div>
      
      {/* Desktop Tabs */}
      <div className="hidden md:flex flex-col md:flex-row gap-4 mb-8 justify-center">
          {steps.map((step, index) => (
              <Button
                  key={step.title}
                  variant={activeIndex === index ? 'default' : 'outline'}
                  onClick={() => setActiveIndex(index)}
                  className="transition-all duration-300"
              >
                  {step.title.split('. ')[1]}
              </Button>
          ))}
      </div>

      {/* Desktop Content */}
      <div className="hidden md:block relative">
          {steps.map((step, index) => (
              <div
                key={step.title}
                className={cn(
                  "w-full transition-opacity duration-700 ease-in-out",
                  activeIndex !== index && 'hidden'
                )}
              >
                <div className={`flex flex-col gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <div className="md:w-1/2">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{step.title}</h3>
                      <p className="text-foreground/80 text-lg">{step.description}</p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="w-full rounded-lg border overflow-hidden">
                           {index === 0 ? (
                                <div className="w-full h-auto bg-card flex items-center justify-center p-4">{step.diagram}</div>
                            ) : index === 1 ? (
                                <div className="w-full h-full p-8 flex items-center justify-center min-h-[220px] relative bg-cover bg-center" style={{backgroundImage: "url('/6.jpeg')"}}>
                                    <div className="absolute inset-0 bg-black/50"></div>
                                    <div className="relative z-10">{step.diagram}</div>
                                </div>
                            ) : (
                                <div className="w-full h-full p-8 flex items-center justify-center min-h-[220px] relative bg-cover bg-center" style={{backgroundImage: "url('/3.jpeg')"}}>
                                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                                    <div className="relative z-10">{step.diagram}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
              </div>
          ))}
      </div>

      {/* Mobile Accordion/List */}
      <div className="md:hidden space-y-12">
        {steps.map((step, index) => (
           <ScrollReveal key={step.title} delay={index * 150}>
             <div className="flex flex-col gap-8 items-center">
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{step.title}</h3>
                  <p className="text-foreground/80 text-lg">{step.description}</p>
                </div>
                <div className="w-full">
                    <div className="w-full rounded-lg border overflow-hidden">
                       {index === 0 ? (
                            <div className="w-full h-auto bg-card flex items-center justify-center">{step.diagram}</div>
                        ) : index === 1 ? (
                           <div className="w-full h-full p-8 flex items-center justify-center min-h-[220px] relative bg-cover bg-center" style={{backgroundImage: "url('/6.jpeg')"}}>
                               <div className="absolute inset-0 bg-black/50"></div>
                               <div className="relative z-10">{step.diagram}</div>
                           </div>
                        ) : (
                            <div className="w-full h-full p-8 flex items-center justify-center min-h-[220px] relative bg-cover bg-center" style={{backgroundImage: "url('/3.jpeg')"}}>
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                                <div className="relative z-10">{step.diagram}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
           </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
