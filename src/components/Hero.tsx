/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onExploreProjects: () => void;
}

export default function Hero({ onExploreProducts, onExploreProjects }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 90, damping: 18 } 
    },
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-28 md:py-36 bg-black flex flex-col items-center">
      
      {/* Golden Highlight Ambient Rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-yellow-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-amber-500/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-yellow-400/[0.02] blur-[140px] pointer-events-none" />

      {/* Grid Pattern with subtle mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Pill Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8 shadow-sm hover:border-yellow-400/20 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-yellow-400 font-mono">
              New Era: IoT e Intelligenza Artificiale
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
          </motion.div>

          {/* Heading - Classic Apple elegant slim-line display */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08] select-none font-sans"
          >
            daily, una nuova <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-amber-500 font-black">era</span> per la sicurezza sul lavoro
          </motion.h1>

          {/* Description - Spacious and balanced */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 font-light mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Soluzioni ad alto tasso tecnologico disegnate intorno all'uomo. Connettiamo dispositivi smart indossabili ed algoritmi predittivi per garantire l'incolumità in cantiere ed in azienda.
          </motion.p>

          {/* Call to Actions - Solid clean buttons with beautiful cursor feedback */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              id="hero-explore-products"
              onClick={onExploreProducts}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 shadow-[0_4px_25px_rgba(250,204,21,0.15)] hover:shadow-[0_4px_30px_rgba(250,204,21,0.35)] cursor-pointer group"
            >
              Scopri Dailyplatform
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
            </button>
            <button
              id="hero-explore-projects"
              onClick={onExploreProjects}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 cursor-pointer"
            >
              Vedi Tutti i Progetti
            </button>
          </motion.div>

          {/* Immersive Hardware/Software Viewport Preview (Cinema framing with dark border and gold drop shadow) */}
          <motion.div 
            variants={itemVariants}
            className="relative rounded-3xl overflow-hidden border border-white/[0.08] p-2 bg-white/[0.01] shadow-[0_24px_50px_rgba(0,0,0,0.8),_0_0_80px_rgba(234,179,8,0.03)] group"
          >
            {/* Top viewport frame dots (Macbook style) */}
            <div className="absolute top-5 left-6 flex items-center gap-1.5 z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              <span className="text-[10px] text-gray-500 font-mono ml-2">dailyplatform_v4.2.bin</span>
            </div>

            {/* Glowing Golden Border Line */}
            <div className="absolute top-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-transparent via-yellow-400/40 to-transparent" />

            {/* Simulated Live Stream Feed Indicator */}
            <div className="absolute top-5 right-6 flex items-center gap-1.5 z-20 px-2.5 py-1 rounded bg-black/70 border border-white/5 backdrop-blur font-mono text-[9px] text-yellow-400 font-semibold uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-ping" />
              FEED DIRETTO
            </div>

            {/* Real asset generated image with professional overlays */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <img 
                src="/src/assets/images/laptop_station_1780517590251.png"
                alt="Sleek laptop tech interface with warm gold glows"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[15%] brightness-[90%] group-hover:scale-[1.02] transition-transform duration-1000"
              />
              {/* Luxury Vignette and Dark Ambient gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-left z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 bg-gradient-to-t from-black via-black/60 to-transparent">
                <div className="max-w-xl">
                  <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-yellow-400 block mb-1">INTERFACCIA HARDWARE WIDIU</span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Acquisizione ad altissima sensibilità</h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-light mt-1.5 leading-relaxed">
                    Sincronizzazione in tempo reale millisecondo per millisecondo con le schede madri di cantiere, calcolando costantemente i carichi biomeccanici e l'esposizione acustico/chimica.
                  </p>
                </div>
                <div className="flex gap-4 shrink-0">
                  <div className="px-4 py-2.5 rounded-xl bg-white/[0.04] backdrop-blur border border-white/[0.08] text-center">
                    <span className="text-[10px] text-gray-400 font-mono block">LATENZA</span>
                    <span className="text-xs font-bold text-yellow-450 font-mono">0.42ms</span>
                  </div>
                  <div className="px-4 py-2.5 rounded-xl bg-white/[0.04] backdrop-blur border border-white/[0.08] text-center">
                    <span className="text-[10px] text-gray-400 font-mono block">STABILITÀ</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">99.98%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Bar underneath the video frame */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md mt-16 text-left"
          >
            <div className="p-4 rounded-xl hover:bg-white/[0.01] transition-colors border-r border-white/[0.04] last:border-0">
              <p className="text-3xl font-black text-white tracking-tight">100%</p>
              <p className="text-xs text-gray-400 font-medium mt-1">Conformità Normativa 81/08</p>
            </div>
            <div className="p-4 rounded-xl hover:bg-white/[0.01] transition-colors border-r border-white/[0.04] last:border-0">
              <p className="text-3xl font-black text-yellow-450 tracking-tight">0</p>
              <p className="text-xs text-gray-400 font-medium mt-1">Incidenti sul Lavoro (Vision Zero)</p>
            </div>
            <div className="p-4 rounded-xl hover:bg-white/[0.01] transition-colors border-r border-white/[0.04] last:border-0">
              <p className="text-3xl font-black text-white tracking-tight">&lt; 1s</p>
              <p className="text-xs text-gray-400 font-medium mt-1">Frequenza Campionamento IoT</p>
            </div>
            <div className="p-4 rounded-xl hover:bg-white/[0.01] transition-colors">
              <p className="text-3xl font-black text-yellow-400 tracking-tight">H24/7</p>
              <p className="text-xs text-gray-400 font-medium mt-1">Algoritmo di Prevenzione Attivo</p>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Subtle division */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent w-full" />
    </section>
  );
}
