import { ShieldCheck, Layers, Bot, AlertTriangle, ScrollText } from "lucide-react";
import { Card } from "@/components/ui/card";

const DiagramNode = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="bg-card/70 border-accent/20 p-4 text-center flex flex-col items-center justify-center text-card-foreground h-full">
    <div className="p-3 bg-accent/10 rounded-full mb-3 w-fit">
      {icon}
    </div>
    <p className="font-bold text-sm text-card-foreground">{title}</p>
    <p className="text-xs text-muted-foreground mt-1">{description}</p>
  </Card>
);

export function SecurityDiagram() {
  return (
    <div className="relative w-full font-sans">
      <h3 className="text-center font-bold text-lg mb-6 text-accent">Smart Contract Security Layers</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="grid grid-rows-2 gap-6">
            <DiagramNode 
              icon={<Layers className="w-7 h-7 text-accent"/>} 
              title="Formal Verification" 
              description="Mathematical proof of contract correctness to prevent logical flaws."
            />
            <DiagramNode 
              icon={<Bot className="w-7 h-7 text-accent"/>} _
              title="Sybil Attack Prevention" 
              description="Mechanisms to prevent manipulation via fake identities."
            />
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
             <div className="w-px h-full bg-border/50 hidden md:block"></div>
             <Card className="bg-primary/10 border-primary/50 p-4 text-center flex flex-col items-center justify-center text-card-foreground">
                <ShieldCheck className="w-10 h-10 text-primary mb-2"/>
                <p className="font-bold text-base text-primary">Secure Core</p>
                <p className="text-xs text-muted-foreground">Exnus Protocol Smart Contracts</p>
            </Card>
             <div className="w-px h-full bg-border/50 hidden md:block"></div>
        </div>

        <div className="grid grid-rows-2 gap-6">
            <DiagramNode 
                icon={<ScrollText className="w-7 h-7 text-accent"/>} 
                title="Comprehensive Audits" 
                description="Third-party audits to identify and fix vulnerabilities before deployment."
            />
            <DiagramNode 
                icon={<AlertTriangle className="w-7 h-7 text-accent"/>} 
                title="Fail-Safe Mechanisms" 
                description="Emergency controls like contract pauses to mitigate potential threats."
            />
        </div>
      </div>
    </div>
  )
}
