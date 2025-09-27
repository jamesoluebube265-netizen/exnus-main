'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, Info, FileText, GitBranch, BarChart, Zap, Gift, Mail, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
  { href: '/about', label: 'About Us', icon: <Info className="w-5 h-5" /> },
  { href: '/documents', label: 'Documents', icon: <FileText className="w-5 h-5" /> },
  { href: '/roadmap', label: 'Roadmap', icon: <GitBranch className="w-5 h-5" /> },
  { href: '/market', label: 'Market', icon: <BarChart className="w-5 h-5" /> },
  { href: '/staking', label: 'Staking', icon: <Zap className="w-5 h-5" /> },
  { href: '/airdrop', label: 'Airdrop', icon: <Gift className="w-5 h-5" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const getLinkClass = (href: string) => {
    const isActive = activePath === href;
    return cn(
      'flex items-center gap-3 rounded-md px-3 py-2 text-foreground/70 transition-all hover:bg-secondary hover:text-foreground',
      isActive && 'bg-secondary text-foreground font-medium'
    );
  };

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <a href="/" className="flex items-center gap-2 font-bold text-lg">
          Exnus
        </a>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(false)}>
            <X className="h-6 w-6" />
        </Button>
      </div>
      <nav className="flex-1 overflow-auto p-4 space-y-2">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={getLinkClass(link.href)} onClick={() => setMobileMenuOpen(false)}>
            {link.icon}
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="icon" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
        </Button>
      </div>
      <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-64">
            <NavContent />
        </SheetContent>
      </Sheet>


      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 border-r bg-card">
        <NavContent />
      </aside>
    </>
  );
}
