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
    <section id="overview" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden section-bg">
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
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-accent-10 border border-subtle text-accent text-xs font-mono-tech tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>PULSAR ADVANCED ELECTRO-OPTICS</span>
              <span className="text-muted">|</span>
              <span className="text-muted font-normal">SYS.REF #8820</span>
            </div>

            {/* Headlines */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-none font-heading">
                  THERMAL + OPTICAL <br />
                  <span className="text-primary font-heading">FUSION.</span>
                </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-secondary tracking-wide font-heading">
                SEE BEYOND THE VISIBLE.
              </h2>
            </div>

            {/* Supporting text */}
            <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-xl font-sans">
              A high-performance multifunctional thermal fusion binocular engineered for day-and-night observation, surveillance, reconnaissance and enhanced situational awareness.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                onClick={onRequestInfo}
                className="btn-primary font-bold text-sm font-mono-tech tracking-wider uppercase gap-2 focus:outline-none"
              >
                <span>Request Information</span>
                <Crosshair className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCatalogue}
                className="btn-ghost font-semibold text-sm font-mono-tech tracking-wider uppercase flex items-center justify-center gap-2 focus:outline-none"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>View Catalogue</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-subtle grid grid-cols-3 gap-4">
              <div>
                <span className="block text-[10px] font-mono-tech text-muted uppercase tracking-widest">IMAGING MODES</span>
                <span className="text-sm font-semibold text-accent font-mono-tech">Dual-Channel + Fusion</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono-tech text-muted uppercase tracking-widest">OPERATION</span>
                <span className="text-sm font-semibold text-secondary font-mono-tech">24/7 Day & Night</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono-tech text-muted uppercase tracking-widest">DEPLOYMENT</span>
                <span className="text-sm font-semibold text-secondary font-mono-tech">Rugged Tactical</span>
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
            <div className="absolute w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full bg-accent-10 blur-[90px] animate-pulse-slow pointer-events-none" />
            <div className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full bg-violet-600/20 blur-[100px] pointer-events-none" style={{ animationDelay: '3s' }} />

            {/* Futuristic Animated Radar Ring */}
            <div className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full border border-subtle border-dashed animate-radar pointer-events-none" />
            <div className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full border border-subtle pointer-events-none" />

            {/* Product Image Frame */}
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center p-4">
              <div className="relative z-10 w-full h-full rounded-2xl card p-3 border border-subtle shadow overflow-hidden group">
                {/* Visual Image */}
                <img
                  src={import.meta.env.BASE_URL + 'images/hero-binocular.png'}
                  alt="Pulsar Multifunctional Thermal Fusion Binocular"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback placeholder graphic if image fails
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />

                {/* Subtle Light Beam Scan Effect */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent to-transparent opacity-30 animate-beam pointer-events-none" />

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
                        className={`cursor-pointer px-2.5 py-1 rounded bg-accent-10 border text-[10px] font-mono-tech tracking-widest flex items-center gap-1.5 transition-all duration-300 ${
                          isActive
                            ? 'border-accent text-primary shadow-sm scale-110'
                            : 'border-subtle text-muted hover:border-accent'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                        <Icon className="w-3 h-3 text-accent" />
                        <span>{item.label}</span>
                      </div>

                      {/* Tooltip on hover */}
                      {isActive && (
                        <div className="absolute top-full mt-1.5 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-accent-10 border border-subtle px-2.5 py-1 rounded text-[10px] font-mono-tech text-accent shadow z-30 animate-in fade-in zoom-in-95">
                          {item.detail}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Tactical Frame Reticle Corners */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-accent" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-accent" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-accent" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-accent" />
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
