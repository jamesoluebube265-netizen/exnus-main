
import { Home, Info, FileText, GitBranch, BarChart, Zap, Gift, Mail, Newspaper } from 'lucide-react';
import type { ReactNode } from 'react';

export interface NavLink {
    href: string;
    label: string;
    icon: ReactNode;
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
  { href: '/about', label: 'About Us', icon: <Info className="w-5 h-5" /> },
  { href: '/documents', label: 'Documents', icon: <FileText className="w-5 h-5" /> },
  { href: '/roadmap', label: 'Roadmap', icon: <GitBranch className="w-5 h-5" /> },
  { href: '/news', label: 'News', icon: <Newspaper className="w-5 h-5" /> },
  { href: '/market', label: 'Market', icon: <BarChart className="w-5 h-5" /> },
  { href: '/staking', label: 'Staking', icon: <Zap className="w-5 h-5" /> },
  { href: '/airdrop', label: 'Airdrop', icon: <Gift className="w-5 h-5" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
];
