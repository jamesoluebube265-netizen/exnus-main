
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getLinkClass = (href: string) => {
    if (!isClient) {
      return 'text-sm font-medium transition-colors text-foreground/80 hover:text-primary';
    }
    const isActive = pathname === href;
    return cn(
      'text-sm font-medium transition-colors',
      isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
    );
  };

  const getMobileLinkClass = (href: string) => {
    if (!isClient) {
        return 'text-sm font-medium transition-colors text-foreground/80 hover:text-primary';
    }
    const isActive = pathname === href;
    return cn(
      'text-sm font-medium transition-colors',
      isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
          <span className="text-foreground">Exnus</span>
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
                  <a href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
                    <span className="text-foreground">Exnus</span>
                  </a>
                  <nav className="flex flex-col gap-4 mt-4">
                    {navLinks.map((link) => (
                      <a key={link.href} href={link.href} className={getMobileLinkClass(link.href)}>
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
