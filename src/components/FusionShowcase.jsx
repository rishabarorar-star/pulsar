import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Eye, Layers, Sliders, ShieldCheck } from 'lucide-react';

export default function FusionShowcase() {
  const [activeTab, setActiveTab] = useState('fusion');
  const [sliderPos, setSliderPos] = useState(65); // For interactive slider

  return (
    <section className="relative py-28 section-bg overflow-hidden border-t border-subtle">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent-10 border border-subtle text-accent text-xs font-mono-tech tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>FUSION SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-heading tracking-tight">
            FUSION CHANGES WHAT YOU CAN SEE.
          </h2>

          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            By combining thermal and visible-light information, the system helps operators build a more complete picture of their surroundings and potential targets.
          </p>
        </div>

        {/* State Switcher Navigation Bar */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('thermal')}
            className={`px-5 py-3 rounded-lg font-mono-tech text-xs tracking-wider uppercase flex items-center gap-2.5 transition-all duration-300 ${
              activeTab === 'thermal'
                ? 'btn-primary text-white'
                : 'btn-ghost text-muted'
            }`}
          >
            <Flame className="w-4 h-4 text-accent" />
            <span>THERMAL MODE</span>
          </button>

          <span className="text-muted font-mono-tech text-xs hidden sm:inline">→</span>

          <button
            onClick={() => setActiveTab('optical')}
            className={`px-5 py-3 rounded-lg font-mono-tech text-xs tracking-wider uppercase flex items-center gap-2.5 transition-all duration-300 ${
              activeTab === 'optical'
                ? 'btn-primary text-white'
                : 'btn-ghost text-muted'
            }`}
          >
            <Eye className="w-4 h-4 text-accent" />
            <span>OPTICAL MODE</span>
          </button>

          <span className="text-muted font-mono-tech text-xs hidden sm:inline">→</span>

          <button
            onClick={() => setActiveTab('fusion')}
            className={`px-6 py-3 rounded-lg font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center gap-2.5 transition-all duration-300 ${
              activeTab === 'fusion'
                ? 'btn-primary scale-105'
                : 'btn-ghost text-muted'
            }`}
          >
            <Layers className="w-4 h-4 text-accent" />
            <span>FUSION MODE (HIGHLIGHTED)</span>
          </button>
        </div>

        {/* Dynamic Display Panel */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'fusion' ? (
            /* Interactive Split Comparison Slider for Fusion Mode */
            <div className="relative rounded-2xl card p-3 border-2 border-subtle overflow-hidden">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden select-none">
                {/* Background Image: Optical */}
                <img
                  src={import.meta.env.BASE_URL + 'images/vision-optical.png'}
                  alt="Optical Vision"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Foreground Image: Fusion (Clipped by slider sliderPos) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={import.meta.env.BASE_URL + 'images/vision-fusion.png'}
                    alt="Fusion Overlay"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%' }}
                  />
                  {/* Label badge on fusion side */}
                  <div className="absolute top-4 left-4 bg-accent-10 border border-subtle px-3 py-1 rounded text-xs font-mono-tech text-accent flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    FUSION IMAGE OVERLAY
                  </div>
                </div>

                {/* Label badge on optical side */}
                <div className="absolute top-4 right-4 bg-accent-10 border border-subtle px-3 py-1 rounded text-xs font-mono-tech text-muted">
                  STANDARD OPTICAL FEED
                </div>

                {/* Divider Line & Drag Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-accent cursor-ew-resize flex items-center justify-center"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold shadow border border-white">
                    <Sliders className="w-4 h-4" />
                  </div>
                </div>

                {/* Slider Input overlay */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  aria-label="Fusion visual overlay comparison slider"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                />
              </div>

              {/* Panel Footer Info */}
              <div className="mt-4 p-4 rounded-lg bg-accent-10 border border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-accent">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                  <span>
                    Drag the slider to experience real-time target enhancement with Pulsar Fusion technology.
                  </span>
                </div>
                <div className="text-muted shrink-0">
                  FUSION BLEND: <span className="text-accent font-bold">{sliderPos}%</span>
                </div>
              </div>
            </div>
          ) : (
            /* Single Channel Visual Panel */
            <div className="relative rounded-2xl card p-3 border border-subtle shadow overflow-hidden">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                <img
                  src={
                    activeTab === 'thermal'
                      ? import.meta.env.BASE_URL + 'images/vision-thermal.png'
                      : import.meta.env.BASE_URL + 'images/vision-optical.png'
                  }
                  alt={activeTab}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent-10 border border-subtle px-3 py-1 rounded text-xs font-mono-tech text-muted">
                  {activeTab === 'thermal' ? 'HEAT SIGNATURE SPECTRUM' : 'VISIBLE OPTICAL SPECTRUM'}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
