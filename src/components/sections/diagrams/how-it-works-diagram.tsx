import { Users, GitCommit, MessageSquare, Award, Cpu, ShieldCheck, Scale, Vote, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const DiagramNode = ({ icon: Icon, label, className }: { icon: React.ElementType, label: string, className?: string }) => (
    <Card className={`flex flex-col items-center justify-center text-center gap-2 p-3 bg-card/80 border-primary/20 ${className}`}>
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6" />
        </div>
        <span className="text-xs font-medium text-foreground">{label}</span>
    </Card>
);

const Arrow = () => (
    <div className="flex items-center justify-center w-full">
        <ArrowRight className="w-6 h-6 text-border" />
    </div>
);


const ContributeDiagram = () => (
    <div className="w-full flex flex-col items-center justify-center gap-4">
        <div className="grid grid-cols-3 gap-4 w-full">
             <DiagramNode icon={GitCommit} label="Development" />
             <DiagramNode icon={Users} label="Community" />
             <DiagramNode icon={MessageSquare} label="Content" />
        </div>
    </div>
);

const RewardsDiagram = () => (
    <div className="w-full grid grid-cols-3 items-center justify-items-center gap-2">
        <DiagramNode icon={Cpu} label="Contribution Validated" />
        <Arrow />
        <DiagramNode icon={Award} label="Rewards Distributed" />
    </div>
);

const GovernDiagram = () => (
    <div className="w-full grid grid-cols-3 items-center justify-items-center gap-2">
        <DiagramNode icon={ShieldCheck} label="Stake Tokens" />
        <Arrow />
        <DiagramNode icon={Vote} label="Gain Voting Power" />
    </div>
);


export function HowItWorksDiagram({ variant }: { variant: 'contribute' | 'rewards' | 'govern' }) {
    switch (variant) {
        case 'contribute':
            return <ContributeDiagram />;
        case 'rewards':
            return <RewardsDiagram />;
        case 'govern':
            return <GovernDiagram />;
        default:
            return null;
    }
}
