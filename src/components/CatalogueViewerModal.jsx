import React from 'react';
import { X, ExternalLink, Download, FileText, Shield } from 'lucide-react';

export default function CatalogueViewerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[85vh] glass-panel rounded-2xl border border-cyan-500/40 shadow-[0_0_50px_rgba(0,217,255,0.3)] flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900/90 border-b border-cyan-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-white">
                Pulsar Product Catalogue PDF
              </h3>
              <p className="text-[11px] font-mono-tech text-cyan-400">
                PULSAR MULTIFUNCTIONAL THERMAL FUSION BINOCULAR SPECIFICATIONS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/catalogue/pulsar-thermal-fusion-binocular.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono-tech text-cyan-300 border border-cyan-500/30"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Close catalogue viewer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Frame */}
        <div className="flex-1 bg-slate-950 relative">
          <iframe
            src="/catalogue/pulsar-thermal-fusion-binocular.pdf#toolbar=1"
            title="Pulsar Thermal Fusion Binocular Catalogue PDF"
            className="w-full h-full border-none"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-900/90 border-t border-cyan-500/30 flex items-center justify-between text-xs font-mono-tech text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>CONFIDENTIAL DIRECT PRODUCT CATALOGUE</span>
          </div>

          <a
            href="/catalogue/pulsar-thermal-fusion-binocular.pdf"
            download="pulsar-thermal-fusion-binocular.pdf"
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Copy</span>
          </a>
        </div>

      </div>
    </div>
  );
}
