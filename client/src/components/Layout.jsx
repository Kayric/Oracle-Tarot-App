import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
        className={`text-sm font-medium transition-colors duration-200 ${isActive ? 'text-slate-900 font-bold border-b-2 border-yellow-500' : 'text-slate-500 hover:text-slate-800'}`}
      >
        {children}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navbar - Clean White */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-slate-900 p-2 rounded-lg text-yellow-400">
                <Flame className="h-5 w-5" />
              </div>
              <span className="text-xl font-serif font-bold text-slate-900 tracking-wide">
                LUMINA
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <NavLink to="/">Sanctuary</NavLink>
                <NavLink to="/reading">Readings</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600">Sanctuary</Link>
              <Link to="/reading" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600">Readings</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-600">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">© 2024 Lumina Oracle. Minimalist Edition.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
