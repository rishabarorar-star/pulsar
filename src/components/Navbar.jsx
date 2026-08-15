import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ChevronRight, Binary } from 'lucide-react';

export default function Navbar({ onRequestInfo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Features', href: '#features' },
    { name: 'Applications', href: '#applications' },
    { name: 'Specifications', href: '#specifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`w-full px-4 sm:px-8 py-3.5 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent border-b border-cyan-500/10'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Emblem */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-sm">
            <div className="relative w-10 h-10 rounded bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center overflow-hidden group-hover:border-cyan-400 transition-colors">
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Shield className="w-5 h-5 text-cyan-400 relative z-10" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full blur-[2px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-wider text-white flex items-center gap-1.5">
                PULSAR
                <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-normal tracking-normal">
                  DEFENCE
                </span>
              </span>
              <span className="text-[9px] font-mono-tech tracking-widest text-slate-400 uppercase">
                ADVANCED ELECTRO-OPTICS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono-tech text-slate-300 hover:text-cyan-400 tracking-wider uppercase transition-colors relative py-1 group focus:outline-none focus:text-cyan-400"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={onRequestInfo}
              className="relative group overflow-hidden px-5 py-2.5 rounded bg-cyan-500 text-slate-950 font-medium text-xs font-mono-tech tracking-wider uppercase transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] focus:outline-none focus:ring-2 focus:ring-cyan-300 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2 font-bold">
                Request Information
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded text-slate-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 glass-panel"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-6 px-4 glass-panel rounded-lg border border-cyan-500/20 space-y-4 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-mono-tech text-slate-200 hover:text-cyan-400 py-2 border-b border-cyan-500/10 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onRequestInfo) onRequestInfo(e);
              }}
              className="block w-full text-center py-3 bg-cyan-500 text-slate-950 font-bold text-xs font-mono-tech uppercase tracking-wider rounded hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,217,255,0.4)]"
            >
              Request Information
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
