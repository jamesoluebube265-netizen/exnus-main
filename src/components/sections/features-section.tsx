import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, ShieldCheck, Zap } from "lucide-react";
import ScrollReveal from "../scroll-reveal";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
    title: "Unmatched Security",
    description: "Built with a security-first mindset, leveraging cutting-edge cryptographic techniques to protect assets and data.",
  },
  {
    icon: <Zap className="w-10 h-10 text-accent" />,
    title: "Lightning-Fast Scalability",
    description: "Our innovative consensus mechanism allows for high throughput and low latency, without compromising on decentralization.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-accent" />,
    title: "Developer-Friendly",
    description: "A robust and well-documented API, SDKs, and tooling to empower developers to build the next wave of dApps.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose Exnus?
          </h2>
          <p className="max-w-2xl mx-auto text-center text-foreground/70 mb-12">
            Exnus Protocol is more than just a blockchain; it's a foundation for a new digital economy.
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 150}>
              <Card className="h-full bg-card/60 backdrop-blur-lg border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10">
                <CardHeader className="items-center">
                  <div className="p-4 bg-accent/10 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
