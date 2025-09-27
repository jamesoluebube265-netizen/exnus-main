'use client';

import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/nav-links.tsx';

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
      <aside className="hidden md:flex md:flex-col w-64 border-r bg-card">
        <div className="flex items-center justify-between h-14 px-4 border-b">
          <a href="/" className="flex items-center gap-2 font-bold text-lg">
            Exnus
          </a>
        </div>
        <NavLinks />
      </aside>
    </>
  );
}
