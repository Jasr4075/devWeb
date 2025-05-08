
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pl-64">
        <div className="container mx-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
