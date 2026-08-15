import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, LifeBuoy, Compass, Telescope, Activity, Radio } from 'lucide-react';

export default function Applications() {
  const [activeApp, setActiveApp] = useState('defence');

  const appList = [
    {
      id: 'defence',
      title: 'Defence',
      icon: Shield,
      tagline: 'Handheld Electro-Optics Platform',
      desc: 'Enables field operators to maintain visual advantage across day and night operational conditions.',
    },
    {
      id: 'border',
      title: 'Border Surveillance',
      icon: Eye,
      tagline: 'Perimeter Monitoring & Boundary Control',
      desc: 'Supports long-range visual monitoring along frontier sectors under challenging atmospheric conditions.',
    },
    {
      id: 'perimeter',
      title: 'Perimeter Security',
      icon: Lock,
      tagline: 'Critical Infrastructure Safeguarding',
      desc: 'Provides continuous thermal detection and optical identification around high-value facilities.',
    },
    {
      id: 'search',
      title: 'Search & Rescue',
      icon: LifeBuoy,
      tagline: 'Rapid Life & Asset Detection',
      desc: 'Helps rescue crews detect thermal body heat signatures in low visibility, dense foliage and nighttime ops.',
    },
    {
      id: 'recon',
      title: 'Reconnaissance',
      icon: Compass,
      tagline: 'Tactical Intelligence Gathering',
      desc: 'Compact, portable design suited for mobile reconnaissance and silent forward observation tasks.',
    },
    {
      id: 'longrange',
      title: 'Long-Range Observation',
      icon: Telescope,
      tagline: 'Extended Standoff Detection',
      desc: 'Designed for standoff surveillance and observation of distant targets without exposing operator positions.',
    },
    {
      id: 'awareness',
      title: 'Situational Awareness',
      icon: Activity,
      tagline: '360° Tactical Perception',
      desc: 'Combines dual spectrum feeds to give command units and personnel enhanced situational clarity.',
    },
  ];

  return (
    <section id="applications" className="relative py-28 bg-[#070C14] border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono-tech tracking-widest uppercase">
            <Radio className="w-3.5 h-3.5" />
            <span>FIELD DEPLOYMENT OPERATIONAL SCENARIOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight">
            BUILT FOR DEMANDING ENVIRONMENTS
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The binocular is suitable for defence, border surveillance, perimeter security, search and rescue, reconnaissance and long-range observation applications. Its rugged and portable design makes it suitable for field deployment and handheld operation.
          </p>
        </div>

        {/* Asymmetric Layout: Interactive List + Feature Background Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Grid Selector */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {appList.map((app) => {
              const Icon = app.icon;
              const isSelected = activeApp === app.id;
              return (
                <div
                  key={app.id}
                  onClick={() => setActiveApp(app.id)}
                  className={`cursor-pointer p-4 rounded-xl transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'glass-panel border-cyan-400 bg-slate-900/90 shadow-[0_0_20px_rgba(0,217,255,0.25)]'
                      : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded ${isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-cyan-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono-tech text-slate-500">SECTOR</span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-base text-white mb-1 tracking-wide">{app.title}</h3>
                    <p className="text-[11px] font-mono-tech text-cyan-400 mb-2">{app.tagline}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{app.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Field Op Preview Frame */}
          <div className="lg:col-span-6 relative">
            <div className="h-full min-h-[380px] rounded-2xl glass-panel p-3 border border-cyan-500/30 overflow-hidden relative flex flex-col justify-between group">
              
              {/* Background Tactical Image */}
              <img
                src="/images/field-op.png"
                alt="Tactical Field Deployment"
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              {/* Top HUD Telemetry */}
              <div className="relative z-10 p-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 bg-slate-950/80 px-3 py-1 rounded border border-cyan-500/40 text-xs font-mono-tech text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>ACTIVE DEPLOYMENT SCENARIO</span>
                </div>
                <span className="text-[10px] font-mono-tech text-slate-400 bg-slate-950/80 px-2 py-1 rounded">
                  MIL-STD OPERATIONAL
                </span>
              </div>

              {/* Bottom Selected Details */}
              <div className="relative z-10 p-6 glass-panel rounded-xl border border-cyan-500/30 backdrop-blur-md">
                <h3 className="text-2xl font-bold font-heading text-white mb-1 flex items-center gap-2">
                  {appList.find(a => a.id === activeApp)?.title}
                </h3>
                <p className="text-xs font-mono-tech text-cyan-300 mb-2">
                  {appList.find(a => a.id === activeApp)?.tagline}
                </p>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {appList.find(a => a.id === activeApp)?.desc}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
