import { CheckCircle, Circle } from "lucide-react";
import ScrollReveal from "../scroll-reveal";

const roadmapData = [
  {
    quarter: "Q3 2024",
    title: "Testnet Launch",
    description: "Public testnet release, allowing developers to build and test applications.",
    isComplete: true,
  },
  {
    quarter: "Q4 2024",
    title: "Mainnet Alpha & Pre-sale Event",
    description: "The official launch of the Exnus Protocol mainnet with core functionalities and the start of our public pre-sale.",
    isComplete: false,
  },
  {
    quarter: "Q1 2025",
    title: "DeFi Integration & Liquidity Mining",
    description: "Integration with major DeFi protocols and the launch of liquidity provision programs.",
    isComplete: false,
  },
  {
    quarter: "Q2 2025",
    title: "Community Governance Launch",
    description: "Launch of the on-chain DAO, empowering the community to shape the future of the protocol.",
    isComplete: false,
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 md:py-28 bg-background/50 backdrop-blur-sm">
      <div className="px-4 md:px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Roadmap</h2>
          <p className="max-w-2xl mx-auto text-white/70 mt-4">
            Follow our journey as we build the future of decentralized technology, one milestone at a time.
          </p>
        </ScrollReveal>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-5 top-2 h-full w-0.5 bg-border -translate-x-1/2"></div>
          {roadmapData.map((item, index) => (
            <ScrollReveal key={item.quarter} delay={index * 150}>
              <div className="relative pl-12 mb-10">
                <div className="absolute left-5 top-2 -translate-x-1/2">
                  {item.isComplete ? (
                    <CheckCircle className="w-5 h-5 text-primary bg-background" />
                  ) : (
                    <Circle className="w-5 h-5 text-border bg-background" />
                  )}
                </div>
                <p className="text-sm font-semibold text-accent">{item.quarter}</p>
                <h3 className="font-bold text-lg mt-1 text-white">{item.title}</h3>
                <p className="text-white/70 mt-1">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
