import { Share2, Database, Users, GitBranch, ShieldCheck, FileText, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const DiagramNode = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="bg-card/70 border-accent/20 p-4 text-center flex flex-col items-center justify-center">
    <div className="p-2 bg-accent/10 rounded-full mb-2 w-fit">
      {icon}
    </div>
    <p className="font-bold text-sm text-foreground">{title}</p>
    <p className="text-xs text-foreground/60">{description}</p>
  </Card>
);

const Connector = ({ className = "" }: { className?: string }) => (
  <div className={`absolute bg-border/50 ${className}`}></div>
);

export function ArchitectureDiagram() {
  return (
    <div className="relative w-full text-foreground font-sans">
      <h3 className="text-center font-bold text-lg mb-6 text-accent">Exnus Protocol Architecture</h3>
      
      {/* Connectors */}
      <Connector className="top-[60px] left-1/2 h-[40px] w-px -translate-x-1/2" />
      <Connector className="top-[100px] left-1/4 w-1/2 h-px -translate-x-1/2" />
      <Connector className="top-[100px] left-1/4 w-px h-[50px]" />
      <Connector className="top-[100px] right-1/4 w-px h-[50px]" />
      <Connector className="top-[210px] left-1/2 h-[40px] w-px -translate-x-1/2" />
      <Connector className="top-[250px] left-[12.5%] w-3/4 h-px" />
      <Connector className="top-[250px] left-[12.5%] h-[50px] w-px" />
      <Connector className="top-[250px] left-[37.5%] h-[50px] w-px" />
      <Connector className="top-[250px] left-[62.5%] h-[50px] w-px" />
      <Connector className="top-[250px] right-[12.5%] h-[50px] w-px" />


      <div className="grid grid-cols-1 gap-y-12">
        {/* Layer 1: User Interfaces */}
        <div className="flex justify-center">
          <DiagramNode icon={<Users className="w-6 h-6 text-accent"/>} title="User Interaction Layer" description="Web & Mobile dApps" />
        </div>

        {/* Layer 2: Core Modules */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 relative">
           <DiagramNode icon={<FileText className="w-6 h-6 text-accent"/>} title="Contribution Tracking" description="Validates user activities" />
           <DiagramNode icon={<Zap className="w-6 h-6 text-accent"/>} title="Reward Calculation" description="Computes rewards dynamically" />
        </div>

        {/* Layer 3: Smart Contracts */}
         <div className="flex justify-center">
          <DiagramNode icon={<GitBranch className="w-6 h-6 text-accent"/>} title="Smart Contract Layer" description="Automated logic on Solana" />
        </div>

        {/* Layer 4: Infrastructure */}
        <div className="grid grid-cols-4 gap-4">
          <DiagramNode icon={<ShieldCheck className="w-5 h-5 text-accent"/>} title="Governance" description="DAO Voting" />
          <DiagramNode icon={<Share2 className="w-5 h-5 text-accent"/>} title="Solana Blockchain" description="High-performance L1" />
          <DiagramNode icon={<Database className="w-5 h-5 text-accent"/>} title="Off-Chain Services" description="Oracles & Data APIs" />
          <DiagramNode icon={<Users className="w-5 h-5 text-accent"/>} title="Analytics" description="Dashboards" />
        </div>
      </div>
    </div>
  )
}
