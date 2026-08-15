import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, Check, ShieldCheck, Download, FileText } from 'lucide-react';

export default function Specifications({ onOpenCatalogue }) {
  const specData = [
    { label: 'Product Name', value: 'Pulsar Multifunctional Thermal Fusion Binocular' },
    { label: 'Product Category', value: 'Thermal Fusion Imager Binocular' },
    { label: 'Imaging System', value: 'Thermal + Visible-Light Dual Channel' },
    { label: 'Operational Mode', value: 'Day / Night Continuous Observation' },
    { label: 'Physical Configuration', value: 'Handheld Binocular' },
    { label: 'Zoom Capability', value: 'Digital Zoom & Image Enhancement' },
    { label: 'Power Architecture', value: 'Rechargeable Battery Operation' },
    { label: 'Housing Construction', value: 'Compact / Rugged / Portable' },
    { label: 'Primary Applications', value: 'Surveillance / Reconnaissance / Security / Search & Rescue' },
  ];

  return (
    <section id="specifications" className="relative py-28 section-bg border-t border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent-10 border border-subtle text-accent text-xs font-mono-tech tracking-widest uppercase">
            <Sliders className="w-3.5 h-3.5" />
            <span>TECHNICAL MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-heading tracking-tight">
            PRODUCT AT A GLANCE
          </h2>

          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            Essential system parameters and architectural configuration for the Pulsar Thermal Fusion Imager Binocular.
          </p>
        </div>

        {/* Technical Spec Sheet Card */}
        <div className="max-w-4xl mx-auto card rounded-2xl p-6 sm:p-8 border border-subtle shadow relative hud-corner">
          
          {/* Top Sheet Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-subtle">
            <div>
              <span className="text-[11px] font-mono-tech text-accent tracking-widest uppercase block">
                SYSTEM IDENTIFIER: PM-TFB-FUSION
              </span>
              <h3 className="font-heading font-bold text-xl text-primary">
                Pulsar Multifunctional Thermal Fusion Binocular
              </h3>
            </div>
            
            <button
              onClick={onOpenCatalogue}
              className="px-4 py-2 rounded btn-ghost text-xs font-mono-tech text-accent border border-subtle flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Full Spec PDF</span>
            </button>
          </div>

          {/* Grid of Key Specs */}
          <div className="mt-6 divide-y divide-subtle">
            {specData.map((item, idx) => (
              <div
                key={idx}
                className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-3 rounded transition-colors hover:bg-accent-10"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-mono-tech text-muted uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <span className="text-sm font-semibold text-primary font-sans sm:text-right pl-4 sm:pl-0">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-8 pt-4 border-t border-subtle flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-muted gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Official Electro-Optics Platform Document</span>
            </div>
            <span className="text-muted">SPECIFICATION REF #8820-TFB</span>
          </div>

        </div>

      </div>
    </section>
  );
}
