import { Zap, ShieldCheck, Users, Award } from "lucide-react";
import ScrollReveal from "../scroll-reveal";

const features = [
  {
    icon: <Award className="w-10 h-10 text-accent" />,
    title: "Holistic Reward Framework",
    description: "Exnus rewards a broad spectrum of activities—including development, governance, and community building—to foster a well-rounded, engaged user base that drives sustainable growth.",
  },
  {
    icon: <Users className="w-10 h-10 text-accent" />,
    title: "User Ownership and Empowerment",
    description: "By aligning incentives with meaningful contributions, Exnus cultivates a strong sense of ownership that encourages long-term participation and transforms users into true stakeholders.",
  },
  {
    icon: <Zap className="w-10 h-10 text-accent" />,
    title: "Scalability and Efficiency",
    description: "Built on Solana, Exnus leverages rapid transaction speeds and low costs to support a growing, active user base without compromising performance or security.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
    title: "Robust Security",
    description: "With rigorous smart contract audits, permissioned functions, and immutable logic, Exnus ensures a secure and reliable reward distribution system that protects against vulnerabilities.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Overcoming Web3's Core Challenges
          </h2>
          <p className="max-w-3xl mx-auto text-center text-foreground/70 mb-12">
            The Exnus protocol is engineered to solve critical hurdles that limit ecosystem growth, from low user engagement and fragmented incentives to pervasive security vulnerabilities and a lack of user ownership.
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 150}>
              <div className="h-full p-6">
                 <div className="p-4 bg-accent/10 rounded-full mb-4 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl text-foreground font-bold">{feature.title}</h3>
                <p className="text-foreground/70 mt-2">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
