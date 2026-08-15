import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Flame, Layers, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function ProductOverview() {
  const [activeChannel, setActiveChannel] = useState('fusion');

  const channels = [
    {
      id: 'thermal',
      title: 'THERMAL CHANNEL',
      subtitle: 'Heat Signature Detection',
      desc: 'Detects mid-wave / long-wave infrared radiation. Unmasks camouflaged targets, personnel and heat sources through smoke, darkness and foliage.',
      image: '/images/vision-thermal.png',
      badgeColor: 'border-orange-500/40 text-orange-400 bg-orange-950/40',
      icon: Flame,
    },
    {
      id: 'optical',
      title: 'OPTICAL CHANNEL',
      subtitle: 'Visible Spectrum Clarity',
      desc: 'High-resolution optical optics delivering true-to-life color, facial recognition clarity and target identification in daylight and twilight.',
      image: '/images/vision-optical.png',
      badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-950/40',
      icon: Eye,
    },
    {
      id: 'fusion',
      title: 'FUSION CHANNEL',
      subtitle: 'Combined Electro-Optic Synergy',
      desc: 'Blends thermal signatures directly onto sharp optical contours for instant detection without sacrificing spatial context or terrain detail.',
      image: '/images/vision-fusion.png',
      badgeColor: 'border-cyan-500/50 text-cyan-300 bg-cyan-950/60 shadow-[0_0_15px_rgba(0,217,255,0.25)]',
      icon: Layers,
    },
  ];

  return (
    <section className="relative py-24 bg-[#070B12] border-t border-slate-800/60 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-radar-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>NEXT-GENERATION OBSERVATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight">
            One system. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Multiple visual perspectives.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The Pulsar Thermal Fusion Imager Binocular combines thermal imaging and visible-light imaging into a single handheld observation platform, enabling operators to obtain enhanced visual information across changing lighting and environmental conditions.
          </p>
        </div>

        {/* Visual Pipeline Bar: THERMAL + OPTICAL -> FUSION -> ENHANCED AWARENESS */}
        <div className="mb-12 max-w-4xl mx-auto glass-panel p-4 rounded-xl border border-cyan-500/20 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech tracking-wider uppercase text-center sm:text-left">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span>THERMAL</span>
              <span className="text-slate-500">+</span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>OPTICAL</span>
            </div>

            <ArrowRight className="w-4 h-4 text-cyan-400 rotate-90 sm:rotate-0" />

            <div className="flex items-center gap-2 text-cyan-300 font-bold bg-cyan-950/60 px-3 py-1.5 rounded border border-cyan-500/40">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>FUSION MODE</span>
            </div>

            <ArrowRight className="w-4 h-4 text-cyan-400 rotate-90 sm:rotate-0" />

            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ENHANCED AWARENESS</span>
            </div>
          </div>
        </div>

        {/* Interactive Channel Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls: Channel Cards */}
          <div className="lg:col-span-5 space-y-4">
            {channels.map((ch) => {
              const Icon = ch.icon;
              const isSelected = activeChannel === ch.id;
              return (
                <div
                  key={ch.id}
                  onClick={() => setActiveChannel(ch.id)}
                  className={`cursor-pointer p-5 rounded-xl transition-all duration-300 border ${
                    isSelected
                      ? 'glass-panel border-cyan-400 bg-slate-900/90 shadow-[0_0_25px_rgba(0,217,255,0.2)]'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded ${ch.badgeColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-white tracking-wide">{ch.title}</h3>
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-cyan-500 text-slate-950 font-bold uppercase">
                        Active View
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono-tech text-cyan-400 mb-1.5">{ch.subtitle}</p>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{ch.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Right Visual Treatment Display */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] w-full rounded-2xl glass-panel p-2.5 border border-cyan-500/30 overflow-hidden shadow-2xl group">
              
              {/* Image Transition */}
              {channels.map((ch) => (
                <motion.img
                  key={ch.id}
                  src={ch.image}
                  alt={ch.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeChannel === ch.id ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-2.5 w-[calc(100%-1.25rem)] h-[calc(100%-1.25rem)] object-cover rounded-xl ${
                    activeChannel === ch.id ? 'pointer-events-auto' : 'pointer-events-none'
                  }`}
                />
              ))}

              {/* HUD Overlay HUD elements */}
              <div className="absolute top-6 left-6 z-20 pointer-events-none flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded border border-cyan-500/40 text-xs font-mono-tech text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>CHANNEL FEED: {channels.find(c => c.id === activeChannel)?.title}</span>
              </div>

              <div className="absolute bottom-6 right-6 z-20 pointer-events-none bg-slate-950/80 px-3 py-1.5 rounded border border-cyan-500/40 text-[11px] font-mono-tech text-slate-300">
                ZOOM: 1.0X - 8.0X DIGITAL | AZIMUTH: 312° NW
              </div>

              {/* Reticle HUD Center Crosshair */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-16 h-16 border border-cyan-400/60 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
