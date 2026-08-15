import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Eye, Layers, SunMoon, Monitor, Telescope, ZoomIn, ShieldAlert, BatteryCharging, Cpu } from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      id: '01',
      title: 'Thermal Imaging',
      desc: 'Detect and observe heat signatures in low-light and challenging environmental conditions.',
      icon: Flame,
      highlight: false,
    },
    {
      id: '02',
      title: 'Visible-Light Imaging',
      desc: 'Real-time optical imagery for detailed observation in suitable lighting conditions.',
      icon: Eye,
      highlight: false,
    },
    {
      id: '03',
      title: 'Thermal + Optical Fusion',
      desc: 'Combines thermal and visible-light information to provide enhanced target awareness.',
      icon: Layers,
      highlight: true, // Primary Featured Card
    },
    {
      id: '04',
      title: 'Day & Night Observation',
      desc: 'Designed to support observation across different lighting conditions.',
      icon: SunMoon,
      highlight: false,
    },
    {
      id: '05',
      title: 'High-Resolution Display',
      desc: 'Provides clear visual information through a high-resolution image display.',
      icon: Monitor,
      highlight: false,
    },
    {
      id: '06',
      title: 'Long-Range Observation',
      desc: 'Designed for long-range detection, observation and reconnaissance.',
      icon: Telescope,
      highlight: false,
    },
    {
      id: '07',
      title: 'Digital Zoom',
      desc: 'Digital zoom and image-enhancement capabilities provide additional viewing flexibility.',
      icon: ZoomIn,
      highlight: false,
    },
    {
      id: '08',
      title: 'Rugged Field Design',
      desc: 'Compact, portable and rugged construction intended for field deployment.',
      icon: ShieldAlert,
      highlight: false,
    },
    {
      id: '09',
      title: 'Rechargeable Operation',
      desc: 'Rechargeable battery-powered operation for portable use.',
      icon: BatteryCharging,
      highlight: false,
    },
  ];

  return (
    <section id="features" className="relative py-28 section-bg border-t border-subtle overflow-hidden">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent-10 border border-subtle text-accent text-xs font-mono-tech tracking-widest uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>SYSTEM CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-heading tracking-tight">
            ENGINEERED FOR COMPLETE AWARENESS
          </h2>

          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            Advanced imaging capabilities designed for demanding observation environments.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative rounded-xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  item.highlight
                    ? 'card highlighted md:col-span-2 lg:col-span-1'
                    : 'card'
                }`}
              >
                <div>
                  {/* Card Header & Technical Identifier */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-lg flex items-center justify-center ${item.highlight ? 'bg-accent-10 text-primary shadow-sm' : 'bg-accent-10 border border-subtle text-accent'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono-tech text-muted tracking-wider">[SYS-{item.id}]</span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-heading font-bold text-lg text-primary mb-2.5 tracking-wide">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-secondary leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                {item.highlight && (
                  <div className="mt-4 pt-4 border-t border-subtle flex items-center gap-2 text-xs font-mono-tech text-accent">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span>CORE ARCHITECTURE FEATURE</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
