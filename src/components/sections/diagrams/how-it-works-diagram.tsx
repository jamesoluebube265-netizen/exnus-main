import { Users, GitCommit, MessageSquare, Award, Cpu, ShieldCheck, Scale, Vote } from 'lucide-react';

const DiagramIcon = ({ icon: Icon, label }: { icon: React.ElementType, label: string }) => (
    <div className="flex flex-col items-center text-center gap-2">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8" />
        </div>
        <span className="text-xs font-medium text-foreground/80">{label}</span>
    </div>
);

const AnimatedArrow = () => (
    <div className="relative w-full h-1">
        <svg width="100%" height="2" viewBox="0 0 100 2" preserveAspectRatio="none" className="text-border absolute top-1/2 -translate-y-1/2">
            <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
    </div>
);


const ContributeDiagram = () => (
    <div className="w-full flex items-center justify-center gap-4 md:gap-8">
        <DiagramIcon icon={GitCommit} label="Development" />
        <DiagramIcon icon={Users} label="Community" />
        <DiagramIcon icon={MessageSquare} label="Content" />
    </div>
);

const RewardsDiagram = () => (
    <div className="w-full flex items-center justify-around gap-4 md:gap-8">
        <DiagramIcon icon={Cpu} label="Contribution" />
        <div className="w-1/4">
            <AnimatedArrow />
        </div>
        <DiagramIcon icon={Award} label="Rewards" />
    </div>
);

const GovernDiagram = () => (
    <div className="w-full flex items-center justify-around gap-4 md:gap-8">
        <DiagramIcon icon={ShieldCheck} label="Staking" />
        <div className="w-1/4">
             <AnimatedArrow />
        </div>
        <DiagramIcon icon={Vote} label="Governance" />
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
