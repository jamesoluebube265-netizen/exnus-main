

'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/documents', label: 'Documents' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/market', label: 'Market' },
  { href: '/staking', label: 'Staking' },
  { href: '/airdrop', label: 'Airdrop' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  const getLinkClass = (href: string) => {
    const isActive = pathname === href;
    return cn(
      'text-sm font-medium transition-colors',
      isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white'
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-animated-gradient">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
          <span className="text-white">Exnus</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={getLinkClass(link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/90 backdrop-blur-sm w-[250px]">
                 <VisuallyHidden.Root>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Main navigation menu</SheetDescription>
                </VisuallyHidden.Root>
                <div className="flex flex-col gap-6 p-6">
                  <a href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
                    <span className="text-foreground">Exnus</span>
                  </a>
                  <nav className="flex flex-col gap-4 mt-4">
                    {navLinks.map((link) => (
                      <a key={link.href} href={link.href} className={cn(
                        'text-sm font-medium transition-colors',
                        pathname === link.href ? 'text-foreground font-bold' : 'text-foreground/80 hover:text-foreground'
                      )}>
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
