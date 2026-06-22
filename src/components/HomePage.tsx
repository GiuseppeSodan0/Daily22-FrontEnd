import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  Network,
  Cpu,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import Hero from './Hero';
import InteractivePanel from './InteractivePanel';
import CantiereAstratto from './CantiereAstratto';
import LiveMetrics from './LiveMetrics';
import {useTilt} from '../hooks/useTilt';

function TiltCard({children, className}: {children: React.ReactNode; className?: string}) {
  const {ref, style, shineStyle} = useTilt();
  return (
    <div ref={ref} style={style} className={className}>
      {children}
      <div style={shineStyle} />
    </div>
  );
}

function ScrollReveal({children, delay = 0}: {children: React.ReactNode; delay?: number}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-80px'}}
      transition={{duration: 0.6, delay, ease: 'easeOut'}}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Soluzioni Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gray-300 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">
                Soluzioni per ogni esigenza aziendale
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 font-sans">
                Soluzioni integrate basate sull'Intelligenza Artificiale
              </h2>
              <p className="mt-4 text-sm text-gray-500 font-light leading-relaxed">
                Un'unione indissolubile tra hardware sensoriale wearable, elaborazione cloud centralizzata e agenti conversazionali per la massima prevenzione del rischio.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <TiltCard className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 hover:bg-gray-50/50 transition-colors duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-yellow-50 text-yellow-600 border border-yellow-200 group-hover:bg-yellow-100 transition-colors">
                      <Network className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase font-mono tracking-widest">Piattaforma Predittiva</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">DAILYPLATFORM</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                    Piattaforma conversazionale con intelligenza artificiale che integra dati biometrici, ambientali e di sicurezza aziendale digitalizzati, trasformandoli in modelli di rischio predittivi.
                  </p>
                </div>
                <Link
                  to="/progetti"
                  className="inline-flex items-center gap-2 text-xs font-bold text-yellow-600 hover:text-yellow-700 transition-colors group mt-8"
                >
                  Approfondisci Dailyplatform
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <TiltCard className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 hover:bg-gray-50/50 transition-colors duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-yellow-50 text-yellow-600 border border-yellow-200 group-hover:bg-yellow-100 transition-colors">
                      <Cpu className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase font-mono tracking-widest">Hardware IoT</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">WIDIU</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                    Sistema indossabile intelligente che integra sensori biometrici e ambientali per generare indicatori di rischio predittivi attraverso l'intelligenza artificiale.
                  </p>
                </div>
                <Link
                  to="/progetti"
                  className="inline-flex items-center gap-2 text-xs font-bold text-yellow-600 hover:text-yellow-700 transition-colors group mt-8"
                >
                  Approfondisci WIDIU
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <TiltCard className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 hover:bg-gray-50/50 transition-colors duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-yellow-50 text-yellow-600 border border-yellow-200 group-hover:bg-yellow-100 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase font-mono tracking-widest">Consulente Virtuale</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">SALVATORE</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                    Avatar conversazionale dotato di intelligenza artificiale che fornisce assistenza, formazione e prevenzione in materia di sicurezza sul lavoro, interagendo in tempo reale con l'utente.
                  </p>
                </div>
                <Link
                  to="/progetti"
                  className="inline-flex items-center gap-2 text-xs font-bold text-yellow-600 hover:text-yellow-700 transition-colors group mt-8"
                >
                  Approfondisci Salvatore
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </ScrollReveal>
          </div>

          {/* AI & Analisi cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 hover:bg-gray-50/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-yellow-50 text-yellow-600 border border-yellow-200 group-hover:bg-yellow-100 transition-colors">
                      <Sparkles className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase font-mono tracking-widest">AI</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligenza Artificiale</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                    Analisi predittiva del rischio con l'intelligenza artificiale
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 hover:bg-gray-50/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-yellow-50 text-yellow-600 border border-yellow-200 group-hover:bg-yellow-100 transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase font-mono tracking-widest">ANALISI</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Analisi Personalizzata</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                    Soluzioni personalizzabili per ogni settore (industria, edilizia, sanità, sport)
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Suite */}
      <InteractivePanel />
      <CantiereAstratto />

      {/* Live Metrics Section */}
      <LiveMetrics />

      {/* IoT e IA Section */}
      <ScrollReveal>
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 mb-6">
              <ShieldCheck className="w-5 h-5 text-yellow-500" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-sans">
              IoT e IA per prevenire i rischi sul posto di lavoro.
            </h3>
            <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed italic font-light">
              "Trasformiamo ogni contesto operativo in un ecosistema connesso, sicuro e consapevole. Non ci limitiamo a reagire ai pericoli: li anticipiamo. Attraverso l'analisi predittiva di dati reali, abilitiamo una prevenzione proattiva in grado di rilevare anomalie, comportamenti critici e condizioni ambientali sfavorevoli prima che si trasformino in incidenti. In questo modo rendiamo la sicurezza sul lavoro intelligente, continua e misurabile, superando i limiti dei tradizionali modelli reattivi."
            </p>
            <div className="mt-8 flex justify-center items-center gap-3">
              <span className="h-px w-8 bg-gray-300" />
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono font-bold">Daily 22</span>
              <span className="h-px w-8 bg-gray-300" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-20 bg-gray-50 border-t border-gray-200 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-sans">Hai bisogno di una soluzione personalizzata?</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 font-light">I nostri consulenti sono pronti a risponderti.</p>
            </div>
            <Link
              to="/contatti"
              className="px-6 py-3.5 rounded-full text-xs font-bold text-white bg-yellow-500 hover:bg-yellow-600 transition-all font-sans whitespace-nowrap shrink-0 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(234,179,8,0.2)]"
            >
              Come possiamo aiutarti?
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
