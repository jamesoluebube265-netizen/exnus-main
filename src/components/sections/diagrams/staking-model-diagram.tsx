
import { ArrowRight, Lock, Calendar, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const FlowStep = ({ icon, title, description, isArrow = false }: { icon?: React.ReactNode, title: string, description: string, isArrow?: boolean }) => (
  <div className="flex flex-col items-center text-center w-full">
    {isArrow ? (
      <div className="h-full flex items-center justify-center">{icon}</div>
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

export function StakingModelDiagram() {
  return (
     <div className="relative w-full font-sans">
      <h3 className="text-center font-bold text-lg mb-6 text-primary">Locked Staking Model</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
        <FlowStep 
          icon={<Lock className="w-6 h-6 text-primary" />} 
          title="1. Stake Tokens" 
          description="Users commit their Exnus tokens to the staking contract."
        />
        <FlowStep 
          icon={<ArrowRight className="w-8 h-8 text-border" />}
          title=""
          description=""
          isArrow
        />
        <FlowStep 
          icon={<Calendar className="w-6 h-6 text-primary" />} 
          title="2. Monthly Lock-in" 
          description="Tokens are locked for a defined monthly period."
        />
        <FlowStep 
          icon={<ArrowRight className="w-8 h-8 text-border" />}
          title=""
          description=""
          isArrow
        />
        <FlowStep 
          icon={<TrendingUp className="w-6 h-6 text-primary" />} 
          title="3. High Rewards" 
          description="Longer lock periods unlock higher APY."
        />
      </div>
    </div>
  )
}
