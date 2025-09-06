'use client';
import ScrollReveal from '../scroll-reveal';
import { HowItWorksDiagram } from './diagrams/how-it-works-diagram';

const steps = [
  {
    title: '1. Contribute & Participate',
    description: 'Engage with the ecosystem through development, governance, or community building. The protocol tracks all meaningful contributions, from code commits to forum moderation, ensuring all efforts are recognized.',
    diagram: <HowItWorksDiagram variant="contribute" />
  },
  {
    title: '2. Earn Rewards',
    description: 'Our advanced Reward Calculation Engine dynamically computes rewards based on the impact and value of your contributions. Payouts are automated via secure smart contracts on the Solana blockchain.',
    diagram: <HowItWorksDiagram variant="rewards" />
  },
  {
    title: '3. Stake & Govern',
    description: 'Stake your Exnus tokens to earn additional rewards and gain voting power. Actively participate in decentralized governance to shape the future direction and development of the protocol.',
    diagram: <HowItWorksDiagram variant="govern" />
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="px-4 md:px-6">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">How to Engage with the Exnus Ecosystem</h2>
          <p className="max-w-2xl mx-auto text-black/70 mt-4">
            Our protocol creates a powerful feedback loop where active participation is recognized, rewarded, and empowers the community to drive innovation and growth.
          </p>
        </ScrollReveal>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 150}>
              <div className={`flex flex-col gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-accent">{step.title}</h3>
                  <p className="text-black/80 text-lg">{step.description}</p>
                </div>
                <div className="md:w-1/2">
                  <div className="w-full aspect-video rounded-lg bg-gray-100/50 border border-gray-200/80 p-8 flex items-center justify-center">
                    {step.diagram}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
