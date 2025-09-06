import { Share2, Database, Users, GitBranch, ShieldCheck, FileText, Zap, ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const DiagramNode = ({ icon, title, description, className }: { icon: React.ReactNode, title: string, description: string, className?: string }) => (
  <Card className={`bg-card/70 border-accent/20 p-4 text-center flex flex-col items-center justify-center text-black ${className}`}>
    <div className="p-2 bg-accent/10 rounded-full mb-2 w-fit">
      {icon}
    </div>
    <p className="font-bold text-sm text-black">{title}</p>
    <p className="text-xs text-black/60">{description}</p>
  </Card>
);

const DiagramGroup = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="w-full">
        <h4 className="text-center text-sm font-semibold text-black/70 mb-2">{title}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {children}
        </div>
    </div>
);

const Arrow = () => (
    <div className="flex justify-center my-4">
        <ArrowDown className="w-6 h-6 text-border" />
    </div>
);

export function ArchitectureDiagram() {
  return (
    <div className="w-full text-black font-sans p-4 bg-white rounded-lg">
      <h3 className="text-center font-bold text-lg mb-6 text-accent">Exnus Protocol Architecture</h3>
      
      <div className="flex flex-col items-center gap-4">

        <DiagramNode icon={<Users className="w-6 h-6 text-accent"/>} title="User Interaction Layer" description="Web & Mobile dApps" className="w-full max-w-xs" />
        <Arrow />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
           <DiagramNode icon={<FileText className="w-6 h-6 text-accent"/>} title="Contribution Tracking" description="Validates user activities" />
           <DiagramNode icon={<Zap className="w-6 h-6 text-accent"/>} title="Reward Calculation" description="Computes rewards dynamically" />
        </div>
        <Arrow />
        
        <DiagramNode icon={<GitBranch className="w-6 h-6 text-accent"/>} title="Smart Contract Layer" description="Automated logic on Solana" className="w-full max-w-xs" />
        <Arrow />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <DiagramNode icon={<ShieldCheck className="w-5 h-5 text-accent"/>} title="Governance" description="DAO Voting" />
          <DiagramNode icon={<Share2 className="w-5 h-5 text-accent"/>} title="Solana Blockchain" description="High-performance L1" />
          <DiagramNode icon={<Database className="w-5 h-5 text-accent"/>} title="Off-Chain Services" description="Oracles & Data APIs" />
          <DiagramNode icon={<Users className="w-5 h-5 text-accent"/>} title="Analytics" description="Dashboards" />
        </div>
      </div>
    </div>
  )
}