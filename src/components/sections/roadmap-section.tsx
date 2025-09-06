import { CheckCircle, Circle } from "lucide-react";
import ScrollReveal from "../scroll-reveal";

const roadmapData = [
  {
    quarter: "Q1 2025",
    title: "Project Kickstart & Core Development",
    description: "The first quarter will be dedicated to the foundational development of the Exnus Protocol. Key objectives include building the core architecture, finalizing the whitepaper, and initiating community building efforts.",
    isComplete: false,
  },
  {
    quarter: "Q2 2025",
    title: "Alpha Release & Private Testing",
    description: "Launch of the internal alpha version of the protocol. We will begin private testing with a select group of early supporters and partners to gather initial feedback and identify key areas for improvement.",
    isComplete: false,
  },
  {
    quarter: "Q3 2025",
    title: "Public Testnet & Community Building",
    description: "Deployment of the public testnet, allowing for broader community participation and testing. The focus will be on gathering user feedback, iterating on features, and expanding our community channels.",
    isComplete: false,
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 md:py-28 bg-background/50 backdrop-blur-sm">
      <div className="px-4 md:px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Roadmap</h2>
          <p className="max-w-2xl mx-auto text-foreground/70 mt-4">
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
                <h3 className="font-bold text-lg mt-1 text-foreground">{item.title}</h3>
                <p className="text-foreground/70 mt-1">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
