import React from 'react';
import { Shield, FileText, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenCatalogue }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative section-bg-ter border-t border-subtle text-secondary font-sans text-xs">

      {/* Technical Bar Accent */}
      <div className="bg-accent-10 border-b border-subtle py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono-tech tracking-widest text-accent uppercase text-center sm:text-left">
          <span>ADVANCED ELECTRO-OPTICS / THERMAL FUSION / FIELD OBSERVATION</span>
          <span className="text-muted">CLASSIFIED SPEC #8820 • SYSTEM REVISION 2.4</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Product Line */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded border border-subtle flex items-center justify-center text-accent bg-accent-10">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-lg text-primary tracking-wider">
                PULSAR
              </span>
            </div>
            <p className="text-secondary font-medium text-sm font-heading">
              Pulsar Multifunctional Thermal Fusion Binocular
            </p>
            <p className="text-xs text-muted max-w-md leading-relaxed font-sans">
              A high-performance handheld electro-optical observation system combining thermal imaging and visible-light optics for enhanced situational awareness in all lighting conditions.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono-tech text-accent uppercase tracking-widest block font-bold">
              NAVIGATION
            </span>
            <ul className="space-y-2 font-mono-tech uppercase text-[11px]">
              <li><a href="#overview" className="hover:text-accent transition-colors">Overview</a></li>
              <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
              <li><a href="#applications" className="hover:text-accent transition-colors">Applications</a></li>
              <li><a href="#specifications" className="hover:text-accent transition-colors">Specifications</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Actions & Catalogue */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono-tech text-accent uppercase tracking-widest block font-bold">
              RESOURCES
            </span>
            <div className="space-y-2">
              <button
                onClick={onOpenCatalogue}
                className="inline-flex items-center gap-2 text-secondary hover:text-accent font-mono-tech text-[11px] uppercase tracking-wider transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>Product Catalogue PDF</span>
              </button>
              <div>
                <a href="#contact" className="inline-block text-secondary hover:text-accent font-mono-tech text-[11px] uppercase tracking-wider transition-colors">
                  Submit Direct Enquiry
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-12 pt-6 border-t border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-tech text-muted">
          <p>© {new Date().getFullYear()} Pulsar Electro-Optics. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-muted hover:text-accent transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
