import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, FileText, Crosshair, Sparkles, Activity, Layers, SunMoon } from 'lucide-react';

export default function Hero({ onOpenCatalogue, onRequestInfo }) {
  const [activeHud, setActiveHud] = useState(null);

  const hudItems = [
    { id: 'thermal', label: 'THERMAL', x: '12%', y: '25%', detail: '640x512 Uncooled IR Sensor', icon: Activity },
    { id: 'visible', label: 'VISIBLE', x: '82%', y: '22%', detail: 'Ultra-low Light Optical Sensor', icon: Eye },
    { id: 'fusion', label: 'FUSION', x: '15%', y: '75%', detail: 'Real-time Channel Overlay Mode', icon: Layers },
    { id: 'daynight', label: 'DAY / NIGHT', x: '78%', y: '72%', detail: 'Continuous 24/7 Deployment', icon: SunMoon },
    { id: 'longrange', label: 'LONG RANGE', x: '48%', y: '88%', detail: 'Extended Reconnaissance Target ID', icon: Crosshair },
  ];

  return (
    <section id="overview" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech tracking-widest uppercase shadow-[0_0_15px_rgba(0,217,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>PULSAR ADVANCED ELECTRO-OPTICS</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400 font-normal">SYS.REF #8820</span>
            </div>

            {/* Headlines */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none font-heading">
                THERMAL + OPTICAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 cyan-glow-text">
                  FUSION.
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-200 tracking-wide font-heading">
                SEE BEYOND THE VISIBLE.
              </h2>
            </div>

            {/* Supporting text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-sans">
              A high-performance multifunctional thermal fusion binocular engineered for day-and-night observation, surveillance, reconnaissance and enhanced situational awareness.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                onClick={onRequestInfo}
                className="px-7 py-3.5 rounded bg-cyan-500 text-slate-950 font-bold text-sm font-mono-tech tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,217,255,0.4)] hover:bg-cyan-400 hover:shadow-[0_0_35px_rgba(0,217,255,0.6)] transition-all duration-300 active:scale-98 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                <span>Request Information</span>
                <Crosshair className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCatalogue}
                className="px-7 py-3.5 rounded glass-panel glass-panel-hover text-slate-200 font-semibold text-sm font-mono-tech tracking-wider uppercase flex items-center justify-center gap-2 border border-cyan-500/30 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Catalogue</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div>
                <span className="block text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest">IMAGING MODES</span>
                <span className="text-sm font-semibold text-cyan-300 font-mono-tech">Dual-Channel + Fusion</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest">OPERATION</span>
                <span className="text-sm font-semibold text-slate-200 font-mono-tech">24/7 Day & Night</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest">DEPLOYMENT</span>
                <span className="text-sm font-semibold text-slate-200 font-mono-tech">Rugged Tactical</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Product Visualization with HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Ambient Lighting Spheres */}
            <div className="absolute w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full bg-cyan-500/20 blur-[90px] animate-pulse-slow pointer-events-none" />
            <div className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full bg-violet-600/20 blur-[100px] pointer-events-none" style={{ animationDelay: '3s' }} />

            {/* Futuristic Animated Radar Ring */}
            <div className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full border border-cyan-500/20 border-dashed animate-radar pointer-events-none" />
            <div className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full border border-cyan-500/10 pointer-events-none" />

            {/* Product Image Frame */}
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center p-4">
              <div className="relative z-10 w-full h-full rounded-2xl glass-panel p-3 border border-cyan-500/25 shadow-[0_0_50px_rgba(0,217,255,0.15)] overflow-hidden group">
                {/* Visual Image */}
                <img
                  src="/images/hero-binocular.png"
                  alt="Pulsar Multifunctional Thermal Fusion Binocular"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback placeholder graphic if image fails
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />

                {/* Subtle Light Beam Scan Effect */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 animate-beam pointer-events-none" />

                {/* Interactive HUD Technical Badges around product */}
                {hudItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeHud === item.id;
                  return (
                    <div
                      key={item.id}
                      style={{ top: item.y, left: item.x }}
                      className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
                      onMouseEnter={() => setActiveHud(item.id)}
                      onMouseLeave={() => setActiveHud(null)}
                    >
                      <div
                        className={`cursor-pointer px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md border text-[10px] font-mono-tech tracking-widest flex items-center gap-1.5 transition-all duration-300 ${
                          isActive
                            ? 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,217,255,0.4)] scale-110'
                            : 'border-cyan-500/30 text-slate-300 hover:border-cyan-400/60'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        <Icon className="w-3 h-3 text-cyan-400" />
                        <span>{item.label}</span>
                      </div>

                      {/* Tooltip on hover */}
                      {isActive && (
                        <div className="absolute top-full mt-1.5 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-cyan-950/90 border border-cyan-500/50 px-2.5 py-1 rounded text-[10px] font-mono-tech text-cyan-200 shadow-lg z-30 animate-in fade-in zoom-in-95">
                          {item.detail}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Tactical Frame Reticle Corners */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
