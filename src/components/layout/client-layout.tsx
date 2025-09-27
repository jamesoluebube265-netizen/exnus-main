'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/sidebar';
import NewHeader from '@/components/layout/new-header';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <NewHeader onMenuClick={() => setMobileMenuOpen(true)} />
        <main className="flex-grow p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
