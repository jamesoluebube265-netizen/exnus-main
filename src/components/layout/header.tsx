'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Menu, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#protocol', label: 'Protocol' },
  { href: '#tokenomics', label: 'Tokenomics' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#team', label: 'Team' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-white/10" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
          <Zap className="h-7 w-7 text-primary" />
          <span className="text-white">Exnus</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button>View Whitepaper</Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/90 backdrop-blur-sm">
                 <VisuallyHidden.Root>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Main navigation menu</SheetDescription>
                </VisuallyHidden.Root>
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
                    <Zap className="h-7 w-7 text-primary" />
                    <span className="text-white">Exnus</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="text-lg font-medium text-white">
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
