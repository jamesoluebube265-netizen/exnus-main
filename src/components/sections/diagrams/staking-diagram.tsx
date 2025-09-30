import { ArrowRight, Lock, Award, GitPullRequest, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const FlowStep = ({ icon, title, description, isArrow = false }: { icon?: React.ReactNode, title: string, description: string, isArrow?: boolean }) => (
  <div className="flex flex-col items-center text-center">
    {isArrow ? (
      <div className="h-16 flex items-center">{icon}</div>
    ) : (
      <Card className="bg-card/80 backdrop-blur-sm border-primary/20 p-4 h-full flex flex-col items-center justify-center text-card-foreground">
        <div className="p-3 bg-primary/10 rounded-full mb-3 w-fit">
          {icon}
        </div>
        <p className="font-bold text-sm text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </Card>
    )}
  </div>
);

export function StakingDiagram() {
  return (
     <div className="relative w-full font-sans">
      <h3 className="text-center font-bold text-lg mb-6 text-primary">Staking & Governance Flow</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
        <FlowStep 
          icon={<Lock className="w-6 h-6 text-primary" />} 
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
          icon={<Award className="w-6 h-6 text-primary" />} 
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
          icon={<GitPullRequest className="w-6 h-6 text-primary" />} 
          title="3. Gain Power" 
          description="Staked tokens grant voting rights in the Realms-powered DAO."
        />
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-3 text-center">
            <TrendingUp className="w-5 h-5 text-primary" />
            <p className="font-semibold text-sm text-foreground">Result: Enhanced Network Security & Decentralized Growth</p>
        </div>
      </div>
    </div>
  )
}
