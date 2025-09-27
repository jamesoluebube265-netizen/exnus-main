import { ArrowRight, Calendar, Coins, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const FlowStep = ({ icon, title, description, className }: { icon?: React.ReactNode, title: string, description: string, className?: string }) => (
  <Card className={`bg-card/80 backdrop-blur-sm border-accent/20 p-4 text-center flex flex-col items-center justify-center text-card-foreground h-full ${className}`}>
    <div className="p-3 bg-accent/10 rounded-full mb-3 w-fit">
      {icon}
    </div>
    <p className="font-bold text-sm text-white">{title}</p>
    <p className="text-xs text-muted-foreground">{description}</p>
  </Card>
);

const Arrow = () => (
    <div className="h-16 flex items-center justify-center">
        <ArrowRight className="w-8 h-8 text-border" />
    </div>
);

export function StakingRewardsDiagram() {
  return (
     <div className="relative w-full font-sans">
      <h3 className="text-center font-bold text-lg mb-6 text-accent">Staking Rewards Distribution Flow</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
        <FlowStep 
          icon={<Coins className="w-7 h-7 text-accent" />} 
          title="Total Rewards Pool" 
          description="1.895 Billion Exnus Tokens allocated for staking."
        />
        <Arrow />
        <FlowStep 
          icon={<Calendar className="w-7 h-7 text-accent" />} 
          title="Linear Vesting" 
          description="Distributed monthly over 10 years (120 months)."
        />
        <Arrow />
        <FlowStep 
          icon={<Users className="w-7 h-7 text-accent" />} 
          title="Active Stakers" 
          description="Rewards are distributed to users who stake their tokens."
        />
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-3 text-center p-3 rounded-lg bg-primary/10">
            <TrendingUp className="w-5 h-5 text-primary" />
            <p className="font-semibold text-sm text-white">This ensures long-term, sustainable rewards for community participation.</p>
        </div>
      </div>
    </div>
  )
}
