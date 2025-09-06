import { ArrowRight, Lock, Award, GitPullRequest, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const FlowStep = ({ icon, title, description, isArrow = false }: { icon?: React.ReactNode, title: string, description: string, isArrow?: boolean }) => (
  <div className="flex flex-col items-center text-center">
    {isArrow ? (
      <div className="h-16 flex items-center">{icon}</div>
    ) : (
      <Card className="bg-card/70 border-accent/20 p-4 h-full flex flex-col items-center justify-center">
        <div className="p-3 bg-accent/10 rounded-full mb-3 w-fit">
          {icon}
        </div>
        <p className="font-bold text-sm text-white">{title}</p>
        <p className="text-xs text-white/60">{description}</p>
      </Card>
    )}
  </div>
);

export function StakingDiagram() {
  return (
     <div className="relative w-full text-white font-sans">
      <h3 className="text-center font-bold text-lg mb-6 text-accent">Staking & Governance Flow</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
        <FlowStep 
          icon={<Lock className="w-6 h-6 text-accent" />} 
          title="1. Stake Tokens" 
          description="Users lock tokens for a chosen period."
        />
        <FlowStep 
          icon={<ArrowRight className="w-8 h-8 text-border" />}
          title=""
          description=""
          isArrow
        />
        <FlowStep 
          icon={<Award className="w-6 h-6 text-accent" />} 
          title="2. Earn Rewards" 
          description="Receive staking rewards based on amount and duration."
        />
        <FlowStep 
          icon={<ArrowRight className="w-8 h-8 text-border" />}
          title=""
          description=""
          isArrow
        />
        <FlowStep 
          icon={<GitPullRequest className="w-6 h-6 text-accent" />} 
          title="3. Gain Power" 
          description="Staked tokens grant voting rights in the DAO."
        />
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-3 text-center">
            <TrendingUp className="w-5 h-5 text-primary" />
            <p className="font-semibold text-sm text-white/80">Result: Enhanced Network Security & Decentralized Growth</p>
        </div>
      </div>
    </div>
  )
}

    