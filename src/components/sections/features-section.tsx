
import { Zap, ShieldCheck, Users, Award } from "lucide-react";
import ScrollReveal from "../scroll-reveal";

const features = [
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Holistic Reward Framework",
    description: "Exnus rewards a broad spectrum of activities—including development, governance, and community building—to foster a well-rounded, engaged user base that drives sustainable growth.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "User Ownership and Empowerment",
    description: "By aligning incentives with meaningful contributions, Exnus cultivates a strong sense of ownership that encourages long-term participation and transforms users into true stakeholders.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Scalability and Efficiency",
    description: "Built on Solana, Exnus leverages rapid transaction speeds and low costs to support a growing, active user base without compromising performance or security.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Robust Security",
    description: "With rigorous smart contract audits, permissioned functions, and immutable logic, Exnus ensures a secure and reliable reward distribution system that protects against vulnerabilities.",
  },
];

export default function FeaturesSection() {
  return (
    <section 
      id="features"
      className="relative p-8 rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(/2.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Overcoming Web3's Core Challenges
            </h2>
            <p className="max-w-3xl mx-auto text-center text-white/80 mb-12">
              The Exnus protocol is engineered to solve critical hurdles that limit ecosystem growth, from low user engagement and fragmented incentives to pervasive security vulnerabilities and a lack of user ownership.
            </p>
          </ScrollReveal>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 150}>
              <div 
                className="relative h-full p-6 border rounded-lg overflow-hidden bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="relative z-10">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl text-primary font-bold">{feature.title}</h3>
                  <p className="text-foreground/80 mt-2">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
