
'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/sidebar';
import NewHeader from '@/components/layout/new-header';
import Footer from './footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex flex-col">
            <NewHeader onMenuClick={() => setMobileMenuOpen(true)} />
            <main className="flex-grow overflow-y-auto grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              {children}
            </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
