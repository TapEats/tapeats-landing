// src/components/layout/Layout.tsx
import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import dynamic from 'next/dynamic';

// Import the CustomCursor component with SSR disabled
const ClientCursor = dynamic(() => import('../ui/CustomCursor'), { ssr: false });

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid-bg"></div>
      <div className="noise-overlay"></div>
      <div className="accent-gradient accent-top-right"></div>
      <div className="accent-gradient accent-bottom-left"></div>
      
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Client-side only custom cursor */}
      <ClientCursor />
    </div>
  );
};