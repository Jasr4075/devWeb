
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LayoutDashboard, FileText } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-sidebar text-sidebar-foreground h-screen w-64 fixed left-0 top-0 shadow-lg">
      <div className="p-6">
        <h1 className="text-xl font-bold mb-8">Financeiro</h1>
        
        <div className="space-y-2">
          <Link 
            to="/" 
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-md transition-colors hover:bg-sidebar-accent",
              location.pathname === "/" ? "bg-sidebar-accent text-white" : "text-gray-300"
            )}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          
          <Link 
            to="/relatorio" 
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-md transition-colors hover:bg-sidebar-accent",
              location.pathname === "/relatorio" ? "bg-sidebar-accent text-white" : "text-gray-300"
            )}
          >
            <FileText size={20} />
            <span>Relatório</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
