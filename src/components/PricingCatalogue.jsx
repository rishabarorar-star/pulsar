import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, MessageSquare, Shield, CheckCircle2 } from 'lucide-react';

export default function PricingCatalogue({ onOpenCatalogue, onRequestInfo }) {
  return (
    <section className="relative py-28 bg-[#070B12] border-t border-slate-800/80 overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-radar-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Pricing & Catalogue Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Pricing Card */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border-2 border-cyan-500/40 shadow-[0_0_40px_rgba(0,217,255,0.18)] relative hud-corner space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono-tech tracking-widest uppercase">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>OFFICIAL COMMERCIAL PRICING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">
              ADVANCED CAPABILITY. FIELD-READY DESIGN.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-sans">
              Pulsar Multifunctional Thermal Fusion Binocular
            </p>

            {/* Price Tag Box */}
            <div className="py-6 px-8 rounded-xl bg-slate-950/90 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-inner">
              <div>
                <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-widest block mb-1">
                  UNIT INVESTMENT (EXCL. TAXES)
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-cyan-300 cyan-glow-text">
                  ₹14,55,000/-
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono-tech">
                  COMPLETE SYSTEM KIT
                </span>
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-tech text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Multifunctional Fusion Unit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Rechargeable Power Pack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Rugged Tactical Carrying Case</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Official Product Documentation</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={onRequestInfo}
                className="px-6 py-3.5 rounded bg-cyan-500 text-slate-950 font-bold text-xs font-mono-tech tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,217,255,0.4)] hover:bg-cyan-400 transition-all duration-300 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Information</span>
              </a>

              <button
                onClick={onOpenCatalogue}
                className="px-6 py-3.5 rounded glass-panel glass-panel-hover text-slate-200 font-semibold text-xs font-mono-tech tracking-wider uppercase flex items-center justify-center gap-2 border border-cyan-500/30 hover:text-cyan-300"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Product Catalogue</span>
              </button>
            </div>

          </div>

          {/* Right Catalogue Document Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-8 rounded-2xl border border-cyan-500/30 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,217,255,0.2)]">
                  <FileText className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded bg-slate-900 border border-cyan-500/30 text-[11px] font-mono-tech text-cyan-400">
                  PDF • 1.2 MB
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-white mb-2">Product Catalogue</h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Download or inspect the official technical overview catalogue for the Pulsar Thermal Fusion Binocular system architecture.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={onOpenCatalogue}
                  className="w-full py-3.5 rounded bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-mono-tech text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Catalogue</span>
                </button>

                <a
                  href="/catalogue/pulsar-thermal-fusion-binocular.pdf"
                  download="pulsar-thermal-fusion-binocular.pdf"
                  className="w-full py-3 rounded text-center block text-slate-400 hover:text-slate-200 text-xs font-mono-tech uppercase tracking-wider transition-colors"
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <Download className="w-3.5 h-3.5" />
                    <span>Direct Download PDF</span>
                  </span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
