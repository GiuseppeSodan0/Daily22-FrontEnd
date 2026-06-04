/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  MessageSquare,
  Cpu,
  Network,
  ShieldCheck,
  Heart
} from 'lucide-react';

// Subcomponents
import Header from './components/Header';
import Hero from './components/Hero';
import InteractivePanel from './components/InteractivePanel';
import CantiereAstratto from './components/CantiereAstratto';
import Prodotto from './components/Prodotto';
import ProgettiDetail from './components/ProgettiDetail';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'prodotto' | 'progetti' | 'contatti'>('home');

  // Multi-step safety page scroll lock helper
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  return (
    <div className="bg-black text-gray-100 min-h-screen flex flex-col justify-between selection:bg-yellow-400/20 selection:text-yellow-400">
      
      {/* Dynamic Header */}
      <Header currentTab={currentTab} onTabChange={setCurrentTab} />

      {/* Main Container with Page Change Framer Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Banner Component */}
              <Hero
                onExploreProducts={() => setCurrentTab('prodotto')}
                onExploreProjects={() => setCurrentTab('progetti')}
              />

              {/* Trio Showcase (Quick overview) */}
              <section className="py-24 bg-black relative">
                {/* Visual anchor line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/[0.08] to-transparent" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 font-mono">
                      I Tre Pilastri Dell'Innovazione
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 font-sans">
                      Soluzioni integrate basate sull'Intelligenza Artificiale
                    </h2>
                    <p className="mt-4 text-sm text-gray-400 font-light leading-relaxed">
                      Un'unione indissolubile tra hardware sensoriale wearable, elaborazione cloud centralizzata e agenti conversazionali per la massima prevenzione del rischio.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Pilastro 1 */}
                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:border-yellow-405/20 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between group">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="p-3 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-colors">
                            <Network className="w-5 h-5" />
                          </span>
                          <span className="text-[10px] font-bold text-gray-500 uppercase font-mono tracking-widest">Piattaforma Predittiva</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">DAILYPLATFORM</h3>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                          La piattaforma cloud che acquisisce i dati vitali dei collaboratori e l'ambiente, convertendoli in curve di rischio e compliance normativa costante d.lgs 81/08.
                        </p>
                      </div>
                      <button
                        onClick={() => setCurrentTab('progetti')}
                        className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer group mt-8"
                      >
                        Approfondisci Dailyplatform
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                    {/* Pilastro 2 */}
                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:border-yellow-405/20 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between group">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="p-3 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-colors">
                            <Cpu className="w-5 h-5" />
                          </span>
                          <span className="text-[10px] font-bold text-gray-500 uppercase font-mono tracking-widest">Hardware IoT</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">WIDIU</h3>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                          Dispositivo smart ultra-leggero e indossabile che rileva in tempo reale posture traumatiche, aritmie cardiache accidentali, calpestio o presenza di esalazioni tossiche.
                        </p>
                      </div>
                      <button
                        onClick={() => setCurrentTab('progetti')}
                        className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer group mt-8"
                      >
                        Approfondisci WIDIU
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                    {/* Pilastro 3 */}
                    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:border-yellow-405/20 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between group">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="p-3 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-colors">
                            <MessageSquare className="w-5 h-5" />
                          </span>
                          <span className="text-[10px] font-bold text-gray-500 uppercase font-mono tracking-widest">Consulente Virtuale</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">SALVATORE AI</h3>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                          L'avatar conversazionale integrato dotato di IA avanzata in grado di affiancare il personale rispondendo a quesiti di cantiere o conformità del Testo Unico.
                        </p>
                      </div>
                      <button
                        onClick={() => setCurrentTab('progetti')}
                        className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer group mt-8"
                      >
                        Approfondisci Salvatore
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

                </div>
              </section>

              {/* Interactive Suite Playground representing Daily's active AI logic */}
              <InteractivePanel />

              {/* Interactive Abstract Telemetrical Site Plan Grid */}
              <CantiereAstratto />

              {/* Ethical Commitment Callout */}
              <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/[0.01] rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.02] border border-white/[0.06] mb-6">
                    <ShieldCheck className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                    Un Impegno Etico Dinamico
                  </h3>
                  <p className="mt-6 text-sm sm:text-base text-gray-300 leading-relaxed italic font-light">
                    "La sicurezza sul lavoro non può essere intesa unicamente come un mero insieme di adempimenti cartacei firmati una tantum. Noi di Daily 22 crediamo che ogni lavoratore meriti una salvaguardia proattiva ed intelligente gestita h24 dal progresso tecnologico."
                  </p>
                  <div className="mt-8 flex justify-center items-center gap-3">
                    <span className="h-px w-8 bg-white/[0.08]" />
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono font-bold">Consiglio Direttivo Daily 22</span>
                    <span className="h-px w-8 bg-white/[0.08]" />
                  </div>
                </div>
              </section>

              {/* Direct call to consultation action */}
              <section className="py-20 bg-black border-t border-white/[0.06] relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">Desideri integrare l'ecosistema Daily nella tua azienda?</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2 font-light">Mappiamo i rischi legali, configuriamo i sensori WIDIU e coordiniamo i percorsi formativi sul campo.</p>
                  </div>
                  <button
                    onClick={() => setCurrentTab('contatti')}
                    className="px-6 py-3.5 rounded-full text-xs font-bold text-black bg-yellow-450 hover:bg-yellow-400 transition-all font-sans cursor-pointer whitespace-nowrap shrink-0 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(250,204,21,0.15)]"
                  >
                    Richiedi Studio Preliminare
                  </button>
                </div>
              </section>

            </motion.div>
          )}

          {currentTab === 'prodotto' && (
            <motion.div
              key="prodotto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Prodotto />
            </motion.div>
          )}

          {currentTab === 'progetti' && (
            <motion.div
              key="progetti"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <ProgettiDetail />
            </motion.div>
          )}

          {currentTab === 'contatti' && (
            <motion.div
              key="contatti"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Shared modern global footer */}
      <Footer onTabChange={setCurrentTab} />

    </div>
  );
}
