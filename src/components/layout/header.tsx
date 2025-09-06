'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Menu, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/documents', label: 'Documents' },
  { href: '/tokenomics', label: 'Tokenomics' },
  { href: '/#roadmap', label: 'Roadmap' },
  { href: '/#team', label: 'Team' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => link.href.startsWith('/#') ? link.href.substring(2) : null).filter(Boolean);
      let currentSection = '';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId!);
        if (section && window.scrollY >= section.offsetTop - 150) {
          currentSection = `/#${sectionId}`;
        }
      }
      setActiveLink(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (href: string) => {
    const isActive = pathname === href || (href.startsWith('/#') && activeLink === href);
    return cn(
      'text-sm font-medium transition-colors',
      isActive ? 'text-foreground font-bold' : 'text-foreground/80 hover:text-foreground'
    );
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-black/10" : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
          <Zap className="h-7 w-7 text-primary" />
          <span className="text-foreground">Exnus</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
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
                  <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
                    <Zap className="h-7 w-7 text-primary" />
                    <span className="text-foreground">Exnus</span>
                  </Link>
                  <nav className="flex flex-col gap-4 mt-4">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
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
