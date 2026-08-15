import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Eye, Layers, Sliders, ShieldCheck } from 'lucide-react';

export default function FusionShowcase() {
  const [activeTab, setActiveTab] = useState('fusion');
  const [sliderPos, setSliderPos] = useState(65); // For interactive slider

  return (
    <section className="relative py-28 bg-[#05070B] overflow-hidden border-t border-slate-800/80">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>FUSION SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight">
            FUSION CHANGES WHAT YOU CAN SEE.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            By combining thermal and visible-light information, the system helps operators build a more complete picture of their surroundings and potential targets.
          </p>
        </div>

        {/* State Switcher Navigation Bar */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('thermal')}
            className={`px-5 py-3 rounded-lg font-mono-tech text-xs tracking-wider uppercase flex items-center gap-2.5 transition-all duration-300 ${
              activeTab === 'thermal'
                ? 'bg-orange-950/80 border border-orange-500/60 text-orange-300 shadow-[0_0_20px_rgba(249,115,22,0.3)]'
                : 'glass-panel border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Flame className="w-4 h-4 text-orange-400" />
            <span>THERMAL MODE</span>
          </button>

          <span className="text-slate-600 font-mono-tech text-xs hidden sm:inline">→</span>

          <button
            onClick={() => setActiveTab('optical')}
            className={`px-5 py-3 rounded-lg font-mono-tech text-xs tracking-wider uppercase flex items-center gap-2.5 transition-all duration-300 ${
              activeTab === 'optical'
                ? 'bg-blue-950/80 border border-blue-500/60 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                : 'glass-panel border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Eye className="w-4 h-4 text-blue-400" />
            <span>OPTICAL MODE</span>
          </button>

          <span className="text-slate-600 font-mono-tech text-xs hidden sm:inline">→</span>

          <button
            onClick={() => setActiveTab('fusion')}
            className={`px-6 py-3 rounded-lg font-mono-tech text-xs tracking-wider uppercase font-bold flex items-center gap-2.5 transition-all duration-300 ${
              activeTab === 'fusion'
                ? 'bg-cyan-950 border border-cyan-400 text-cyan-300 shadow-[0_0_30px_rgba(0,217,255,0.4)] scale-105'
                : 'glass-panel border-slate-800 text-slate-400 hover:text-cyan-300'
            }`}
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>FUSION MODE (HIGHLIGHTED)</span>
          </button>
        </div>

        {/* Dynamic Display Panel */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'fusion' ? (
            /* Interactive Split Comparison Slider for Fusion Mode */
            <div className="relative rounded-2xl glass-panel p-3 border-2 border-cyan-400/80 shadow-[0_0_40px_rgba(0,217,255,0.25)] overflow-hidden">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden select-none">
                {/* Background Image: Optical */}
                <img
                  src="/images/vision-optical.png"
                  alt="Optical Vision"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Foreground Image: Fusion (Clipped by slider sliderPos) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src="/images/vision-fusion.png"
                    alt="Fusion Overlay"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%' }}
                  />
                  {/* Label badge on fusion side */}
                  <div className="absolute top-4 left-4 bg-cyan-950/90 border border-cyan-400 px-3 py-1 rounded text-xs font-mono-tech text-cyan-300 flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    FUSION IMAGE OVERLAY
                  </div>
                </div>

                {/* Label badge on optical side */}
                <div className="absolute top-4 right-4 bg-slate-950/80 border border-slate-700 px-3 py-1 rounded text-xs font-mono-tech text-slate-300">
                  STANDARD OPTICAL FEED
                </div>

                {/* Divider Line & Drag Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-cyan-400 cursor-ew-resize flex items-center justify-center shadow-[0_0_15px_#00D9FF]"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold shadow-lg border border-white">
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
              <div className="mt-4 p-4 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-cyan-200">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>
                    Drag the slider to experience real-time target enhancement with Pulsar Fusion technology.
                  </span>
                </div>
                <div className="text-slate-400 shrink-0">
                  FUSION BLEND: <span className="text-cyan-300 font-bold">{sliderPos}%</span>
                </div>
              </div>
            </div>
          ) : (
            /* Single Channel Visual Panel */
            <div className="relative rounded-2xl glass-panel p-3 border border-slate-700 shadow-xl overflow-hidden">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                <img
                  src={activeTab === 'thermal' ? '/images/vision-thermal.png' : '/images/vision-optical.png'}
                  alt={activeTab}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 border border-slate-700 px-3 py-1 rounded text-xs font-mono-tech text-slate-300">
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
