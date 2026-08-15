import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, MessageSquare, Shield, CheckCircle2 } from 'lucide-react';

export default function PricingCatalogue({ onOpenCatalogue, onRequestInfo }) {
  return (
    <section className="relative py-28 section-bg border-t border-subtle overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-radar-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Pricing & Catalogue Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Pricing Card */}
          <div className="lg:col-span-7 card p-8 sm:p-10 rounded-2xl border-2 border-subtle relative hud-corner space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent-10 border border-subtle text-accent text-xs font-mono-tech tracking-widest uppercase">
              <Shield className="w-3.5 h-3.5 text-accent" />
              <span>OFFICIAL COMMERCIAL PRICING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-heading tracking-tight">
              ADVANCED CAPABILITY. FIELD-READY DESIGN.
            </h2>

            <p className="text-secondary text-sm sm:text-base font-sans">
              Pulsar Multifunctional Thermal Fusion Binocular
            </p>

            {/* Price Tag Box */}
            <div className="py-6 px-8 rounded-xl card border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono-tech text-muted uppercase tracking-widest block mb-1">
                  UNIT INVESTMENT (EXCL. TAXES)
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-accent accent-glow-text">
                  ₹14,55,000/-
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded bg-accent-10 text-accent border border-subtle text-xs font-mono-tech">
                  COMPLETE SYSTEM KIT
                </span>
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-tech text-secondary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Multifunctional Fusion Unit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Rechargeable Power Pack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Rugged Tactical Carrying Case</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Official Product Documentation</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={onRequestInfo}
                className="px-6 py-3.5 rounded btn-primary font-bold text-xs font-mono-tech tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Information</span>
              </a>

              <button
                onClick={onOpenCatalogue}
                className="px-6 py-3.5 rounded btn-ghost text-secondary font-semibold text-xs font-mono-tech tracking-wider uppercase flex items-center justify-center gap-2 border border-subtle"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>View Product Catalogue</span>
              </button>
            </div>

          </div>

          {/* Right Catalogue Document Card */}
          <div className="lg:col-span-5">
            <div className="card p-8 rounded-2xl border border-subtle space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-10 rounded-full blur-2xl group-hover:bg-accent-20 transition-all" />

              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-accent-10 border border-subtle flex items-center justify-center text-accent shadow-sm">
                  <FileText className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded bg-accent-10 border border-subtle text-[11px] font-mono-tech text-accent">
                  PDF • 1.2 MB
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-primary mb-2">Product Catalogue</h3>
                <p className="text-xs text-secondary font-sans leading-relaxed">
                  Download or inspect the official technical overview catalogue for the Pulsar Thermal Fusion Binocular system architecture.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={onOpenCatalogue}
                  className="w-full py-3.5 rounded btn-ghost text-secondary font-mono-tech text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Catalogue</span>
                </button>

                <a
                  href={import.meta.env.BASE_URL + 'catalogue/pulsar-thermal-fusion-binocular.pdf'}
                  download="pulsar-thermal-fusion-binocular.pdf"
                  className="w-full py-3 rounded text-center block text-muted hover:text-secondary text-xs font-mono-tech uppercase tracking-wider transition-colors"
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
