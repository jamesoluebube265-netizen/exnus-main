import { Code, Users, Vote, Database, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const DiagramNode = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="bg-card/80 backdrop-blur-sm border-primary/20 p-4 text-center flex flex-col items-center justify-center text-card-foreground h-full">
    <div className="p-3 bg-primary/10 rounded-full mb-3 w-fit">
      {icon}
    </div>
    <p className="font-bold text-sm text-foreground">{title}</p>
    <p className="text-xs text-muted-foreground mt-1">{description}</p>
  </Card>
);

export function RewardingDiagram() {
  return (
    <div className="relative w-full font-sans">
      <h3 className="text-center font-bold text-lg mb-6 text-primary">Rewarding System Contributions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <DiagramNode 
          icon={<Code className="w-7 h-7 text-primary"/>} 
          title="Development" 
          description="Code commits, bug fixes, and feature proposals."
        />
        <DiagramNode 
          icon={<Users className="w-7 h-7 text-primary"/>} 
          title="Community" 
          description="Content creation, moderation, and user support."
        />
        <DiagramNode 
          icon={<Vote className="w-7 h-7 text-primary"/>} 
          title="Governance" 
          description="Voting on proposals and active participation."
        />
        <DiagramNode 
          icon={<Database className="w-7 h-7 text-primary"/>} 
          title="Staking" 
          description="Locking tokens to secure the network."
        />
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-3 text-center p-3 rounded-lg bg-primary/10">
            <Star className="w-5 h-5 text-primary" />
            <p className="font-semibold text-sm text-primary">All contributions are valued and rewarded to foster a vibrant ecosystem.</p>
        </div>
      </div>
    </div>
  )
}
