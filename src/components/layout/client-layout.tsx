
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
    <div className="min-h-screen bg-background">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="flex flex-col md:pl-20">
        <NewHeader onMenuClick={() => setMobileMenuOpen(true)} />
        <main className="flex-1 p-4 sm:px-6 md:gap-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
