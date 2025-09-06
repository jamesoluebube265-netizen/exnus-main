import Image from 'next/image';
import ScrollReveal from '../scroll-reveal';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    title: '1. Integrate the SDK',
    description: 'Easily integrate our lightweight SDK into your existing dApp or start a new project from scratch. Available for JavaScript, Python, and Rust.',
    image: 'https://picsum.photos/600/400',
    dataAiHint: 'code screen'
  },
  {
    title: '2. Deploy Your Smart Contracts',
    description: 'Write and deploy your custom smart contracts using our enhanced, gas-optimized virtual machine. Our tooling provides a seamless deployment experience.',
    image: 'https://picsum.photos/600/401',
    dataAiHint: 'network nodes'
  },
  {
    title: '3. Interact with the Network',
    description: 'Start interacting with the Exnus network. Submit transactions, query data, and build powerful applications on a secure and scalable foundation.',
    image: 'https://picsum.photos/600/402',
    dataAiHint: 'data flow'
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get Started with Exnus</h2>
          <p className="max-w-2xl mx-auto text-foreground/70 mt-4">
            Using the Exnus Protocol is straightforward. Follow these simple steps to bring your ideas to life.
          </p>
        </ScrollReveal>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 150}>
              <div className={`flex flex-col gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-accent">{step.title}</h3>
                  <p className="text-foreground/80 text-lg">{step.description}</p>
                </div>
                <div className="md:w-1/2">
                   <Card className="overflow-hidden bg-card/50 backdrop-blur-xl border border-white/10">
                     <CardContent className="p-0">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={600}
                        height={400}
                        data-ai-hint={step.dataAiHint}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      />
                     </CardContent>
                   </Card>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
