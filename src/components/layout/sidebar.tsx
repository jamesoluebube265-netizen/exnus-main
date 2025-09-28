
'use client';

import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/nav-links.tsx';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SidebarProps {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isMobileMenuOpen, setMobileMenuOpen }: SidebarProps) {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);
  
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
  
  const getDesktopLinkClass = (href: string) => {
    const isActive = activePath === href;
    return cn(
      'flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary',
      isActive && 'bg-secondary text-foreground'
    );
  };

  const NavLinks = () => (
    <nav className="flex-1 overflow-auto p-4 space-y-2">
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} className={getLinkClass(link.href)} onClick={() => setMobileMenuOpen(false)}>
          {link.icon}
          {link.label}
        </a>
      ))}
    </nav>
  );

  const DesktopNavLinks = () => (
    <TooltipProvider>
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
            {navLinks.map((link) => (
                <Tooltip key={link.href}>
                    <TooltipTrigger asChild>
                        <a href={link.href} className={getDesktopLinkClass(link.href)}>
                            {link.icon}
                            <span className="sr-only">{link.label}</span>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>{link.label}</p>
                    </TooltipContent>
                </Tooltip>
            ))}
        </nav>
    </TooltipProvider>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-64 flex flex-col">
            <SheetHeader className='border-b'>
              <SheetTitle asChild>
                <div className="flex items-center justify-between h-14 px-4">
                  <a href="/" className="flex items-center gap-2 font-bold text-lg">
                    Exnus
                  </a>
                </div>
              </SheetTitle>
            </SheetHeader>
            <NavLinks />
        </SheetContent>
      </Sheet>


      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col w-20 border-r bg-card fixed inset-y-0 z-50">
        <div className="flex h-14 items-center justify-center border-b">
          <a href="/" className="flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M15.5 3.84a1 1 0 0 1 1.25 1.57l-3.42 4.1a1 1 0 0 0-.25.58v4.82a1 1 0 0 1-1.6.8L9.2 14.5a1 1 0 0 1-.4-.8v-4.82a1 1 0 0 0-.25-.58L5.25 4.16a1 1 0 0 1 1.25-1.57L9.9 5.4a1 1 0 0 0 1.1 0z"/></svg>
             <span className="sr-only">Exnus</span>
          </a>
        </div>
        <DesktopNavLinks />
      </aside>
    </>
  );
}
