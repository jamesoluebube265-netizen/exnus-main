
'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { BookText, GitCommit, FileText, Share2, ShieldCheck, Database, PieChart, Users, Zap, Scale, ThumbsUp } from "lucide-react";
import { usePathname } from "next/navigation";

const sections = [
    { href: "#introduction", label: "Introduction", icon: <FileText /> },
    { href: "#market-analysis", label: "Market Analysis", icon: <TrendingUp /> },
    { href: "#challenges-solutions", label: "Challenges & Solutions", icon: <ThumbsUp /> },
    { href: "#technical-architecture", label: "Technical Architecture", icon: <GitCommit /> },
    { href: "#smart-contracts", label: "Smart Contracts & Security", icon: <ShieldCheck /> },
    { href: "#rewarding-system", label: "Rewarding System", icon: <Zap /> },
    { href: "#solana-integration", label: "Solana Integration", icon: <Share2 /> },
    { href: "#staking", label: "Staking Mechanism", icon: <Database /> },
    { href: "#tokenomics-details", label: "Tokenomics", icon: <PieChart /> },
    { href: "#conclusion", label: "Conclusion", icon: <BookText /> },
]

function TrendingUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
  
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent className="p-4">
                    <SidebarGroup>
                        <SidebarMenu>
                            {sections.map(section => (
                                <SidebarMenuItem key={section.href}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={pathname === section.href}
                                    >
                                        <a href={section.href}>
                                            {section.icon}
                                            <span>{section.label}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}
