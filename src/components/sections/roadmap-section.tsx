
import { CheckCircle, Loader, Milestone } from "lucide-react";
import ScrollReveal from "../scroll-reveal";

const roadmapData = [
  {
    quarter: "Q1 2025",
    title: "Project Kickstart & Core Development",
    description: "The first quarter will be dedicated to the foundational development of the Exnus Protocol. Key objectives include building the core architecture, finalizing the whitepaper, and initiating community building efforts.",
  },
  {
    quarter: "Q2 2025",
    title: "Project Plan & Team Formation",
    description: "This quarter is focused on creating a detailed project plan, defining scope, and assembling the core team to execute the vision.",
  },
  {
    quarter: "Q3 2025",
    title: "Whitepaper Release & Airdrop System Launch",
    description: "Publication of the official whitepaper detailing the protocol's architecture and tokenomics, alongside the launch of the airdrop task system to begin community engagement.",
  },
  {
    quarter: "Q4 2025",
    title: "TGE & Platform Launch",
    description: "The fourth quarter marks the Token Generation Event (TGE), airdrop distribution, listings on major CEX/DEX platforms, and the launch of the staking rewards system.",
  },
  {
    quarter: "Q1 2026",
    title: "Ecosystem Expansion & Protocol V2 Scoping",
    description: "Following a successful launch, this quarter will focus on forging strategic partnerships. We will also begin scoping Protocol V2, incorporating community feedback to guide future development.",
  },
  {
    quarter: "Q2 2026",
    title: "Advanced Staking & Governance Features",
    description: "Introduction of advanced staking options, including multi-asset staking and dynamic reward models, alongside enhanced governance modules for more granular community control.",
  },
  {
    quarter: "Q3 2026",
    title: "Cross-Chain Integration & Developer SDK",
    description: "Begin research and development for cross-chain integration. A comprehensive Developer SDK will be released to simplify third-party integration with the Exnus reward system.",
  },
  {
    quarter: "Q4 2026",
    title: "DAO Treasury Diversification & Sustainability",
    description: "The DAO will focus on diversifying its treasury through strategic investments and yield-generating activities to ensure the long-term sustainability and growth of the protocol.",
  },
];

const getQuarterStatus = (quarter: string) => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentQuarter = Math.floor(now.getMonth() / 3) + 1;

    const [q, yearStr] = quarter.split(' ');
    const year = parseInt(yearStr, 10);
    const quarterNum = parseInt(q.substring(1), 10);

    if (year < currentYear) {
        return "complete";
    }
    if (year === currentYear) {
        if (quarterNum < currentQuarter) {
            return "complete";
        }
        if (quarterNum === currentQuarter) {
            return "current";
        }
    }
    return "future";
}

const RoadmapIcon = ({ status }: { status: 'complete' | 'current' | 'future' }) => {
    switch (status) {
        case "complete":
            return <CheckCircle className="w-5 h-5 text-green-500 bg-background" />;
        case "current":
            return <Loader className="w-5 h-5 text-primary bg-background animate-spin" />;
        case "future":
        default:
            return <Milestone className="w-5 h-5 text-muted-foreground bg-background" />;
    }
};

export default function RoadmapSection() {
  return (
    <section id="roadmap">
      <div className="header-card text-center mb-12">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Roadmap</h2>
          <p className="max-w-2xl mx-auto text-foreground/70 mt-4">
            Follow our journey as we build the future of decentralized technology, one milestone at a time.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-5 top-2 h-full w-0.5 bg-border -translate-x-1/2"></div>
        {roadmapData.map((item, index) => {
          const status = getQuarterStatus(item.quarter);
          return (
            <ScrollReveal key={item.quarter} delay={index * 150}>
              <div className="relative pl-12 mb-10">
                <div className="absolute left-5 top-2 -translate-x-1/2">
                  <RoadmapIcon status={status} />
                </div>
                <p className="text-sm font-semibold text-primary">{item.quarter}</p>
                <h3 className="font-bold text-lg mt-1 text-foreground">{item.title}</h3>
                <p className="text-foreground/70 mt-1">{item.description}</p>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  );
}
