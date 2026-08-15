import React from 'react';
import { X, ExternalLink, Download, FileText, Shield } from 'lucide-react';

export default function CatalogueViewerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[85vh] card rounded-2xl border border-subtle shadow-lg flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 card-header border-b border-subtle flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-accent-10 border border-subtle text-accent">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-primary">
                Pulsar Product Catalogue PDF
              </h3>
              <p className="text-[11px] font-mono-tech text-accent">
                PULSAR MULTIFUNCTIONAL THERMAL FUSION BINOCULAR SPECIFICATIONS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={import.meta.env.BASE_URL + 'catalogue/pulsar-thermal-fusion-binocular.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded bg-accent-10 text-xs font-mono-tech text-accent border border-subtle"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-muted hover:text-primary hover:bg-accent-10 transition-colors focus:outline-none"
              aria-label="Close catalogue viewer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Frame */}
        <div className="flex-1 bg-white relative">
          <iframe
            src={import.meta.env.BASE_URL + 'catalogue/pulsar-thermal-fusion-binocular.pdf#toolbar=1'}
            title="Pulsar Thermal Fusion Binocular Catalogue PDF"
            className="w-full h-full border-none"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 card-footer border-t border-subtle flex items-center justify-between text-xs font-mono-tech text-muted">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-accent" />
            <span>CONFIDENTIAL DIRECT PRODUCT CATALOGUE</span>
          </div>

          <a
            href={import.meta.env.BASE_URL + 'catalogue/pulsar-thermal-fusion-binocular.pdf'}
            download="pulsar-thermal-fusion-binocular.pdf"
            className="flex items-center gap-1.5 text-accent hover:text-accent-dark font-bold"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Copy</span>
          </a>
        </div>

      </div>
    </div>
  );
}
