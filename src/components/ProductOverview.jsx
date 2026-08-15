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
      image: import.meta.env.BASE_URL + 'images/vision-thermal.png',
      badgeColor: 'border-orange-500/40 text-orange-400 bg-orange-950/40',
      icon: Flame,
    },
    {
      id: 'optical',
      title: 'OPTICAL CHANNEL',
      subtitle: 'Visible Spectrum Clarity',
      desc: 'High-resolution optical optics delivering true-to-life color, facial recognition clarity and target identification in daylight and twilight.',
      image: import.meta.env.BASE_URL + 'images/vision-optical.png',
      badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-950/40',
      icon: Eye,
    },
    {
      id: 'fusion',
      title: 'FUSION CHANNEL',
      subtitle: 'Combined Electro-Optic Synergy',
      desc: 'Blends thermal signatures directly onto sharp optical contours for instant detection without sacrificing spatial context or terrain detail.',
      image: import.meta.env.BASE_URL + 'images/vision-fusion.png',
      badgeColor: 'border-subtle text-accent bg-accent-10 shadow-sm',
      icon: Layers,
    },
  ];

  return (
    <section className="relative py-24 section-bg border-t border-subtle overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-radar-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent-10 border border-subtle text-accent text-xs font-mono-tech tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>NEXT-GENERATION OBSERVATION</span>
          </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-heading tracking-tight">
            One system. <br className="hidden sm:block" />
            <span className="text-primary">Multiple visual perspectives.</span>
          </h2>

          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            The Pulsar Thermal Fusion Imager Binocular combines thermal imaging and visible-light imaging into a single handheld observation platform, enabling operators to obtain enhanced visual information across changing lighting and environmental conditions.
          </p>
        </div>

        {/* Visual Pipeline Bar: THERMAL + OPTICAL -> FUSION -> ENHANCED AWARENESS */}
        <div className="mb-12 max-w-4xl mx-auto card p-4 rounded-xl border border-subtle shadow">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech tracking-wider uppercase text-center sm:text-left">
            <div className="flex items-center gap-2 text-secondary">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span>THERMAL</span>
              <span className="text-muted">+</span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>OPTICAL</span>
            </div>

            <ArrowRight className="w-4 h-4 text-accent rotate-90 sm:rotate-0" />

            <div className="flex items-center gap-2 text-accent font-bold bg-accent-10 px-3 py-1.5 rounded border border-subtle">
              <Layers className="w-4 h-4 text-accent" />
              <span>FUSION MODE</span>
            </div>

            <ArrowRight className="w-4 h-4 text-accent rotate-90 sm:rotate-0" />

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
                      ? 'card active'
                      : 'card'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded bg-accent-10 ${isSelected ? 'text-primary' : 'text-accent'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-primary tracking-wide">{ch.title}</h3>
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-accent text-white font-bold uppercase">
                        Active View
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono-tech text-accent mb-1.5">{ch.subtitle}</p>
                  <p className="text-xs text-secondary leading-relaxed font-sans">{ch.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Right Visual Treatment Display */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] w-full rounded-2xl card p-2.5 border border-subtle overflow-hidden shadow group">
              
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
              <div className="absolute top-6 left-6 z-20 pointer-events-none flex items-center gap-2 bg-accent-10 px-3 py-1.5 rounded border border-subtle text-xs font-mono-tech text-accent">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>CHANNEL FEED: {channels.find(c => c.id === activeChannel)?.title}</span>
              </div>

              <div className="absolute bottom-6 right-6 z-20 pointer-events-none bg-accent-10 px-3 py-1.5 rounded border border-subtle text-[11px] font-mono-tech text-muted">
                ZOOM: 1.0X - 8.0X DIGITAL | AZIMUTH: 312° NW
              </div>

              {/* Reticle HUD Center Crosshair */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-16 h-16 border border-accent/60 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
