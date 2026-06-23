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
import SalvatorePopup from './SalvatorePopup';
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
      <section className="py-28 md:py-32 relative" style={{background: 'linear-gradient(180deg, #f5f0e8 0%, #faf8f5 100%)'}}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gray-300 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">
                Soluzioni per ogni esigenza aziendale
              </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 font-sans" style={{color: 'var(--color-ink)'}}>
                Intelligenza Artificiale al servizio della prevenzione
              </h2>
              <p className="mt-4 text-sm text-gray-500 font-light leading-relaxed">
                Un'unione indissolubile tra hardware sensoriale wearable, elaborazione cloud centralizzata e agenti conversazionali per la massima prevenzione del rischio.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <TiltCard className="p-8 rounded-3xl card-premium flex flex-col justify-between group relative overflow-hidden h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-yellow-50/80 text-yellow-600 border border-yellow-200/60 group-hover:bg-yellow-100 group-hover:border-yellow-300 transition-all duration-300">
                      <Network className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase font-mono tracking-widest">Piattaforma Predittiva</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">DAILYPLATFORM</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                    dailyplatform è una piattaforma digitale per la gestione HSE e la sicurezza sul lavoro, progettata per integrare dati biometrici, ambientali, organizzativi e documentali. Attraverso l'Intelligenza Artificiale, analizza le informazioni raccolte e le trasforma in KPI, alert e modelli predittivi utili a prevenire i rischi e supportare le decisioni aziendali.
                  </p>
                </div>
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 text-xs font-bold text-yellow-600 hover:text-yellow-700 transition-colors group mt-8"
                >
                  Approfondisci Dailyplatform
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <TiltCard className="p-8 rounded-3xl card-premium flex flex-col justify-between group relative overflow-hidden h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-yellow-50/80 text-yellow-600 border border-yellow-200/60 group-hover:bg-yellow-100 group-hover:border-yellow-300 transition-all duration-300">
                      <Cpu className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase font-mono tracking-widest">Hardware IoT</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">WIDIU</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                    Smartwatch intelligente per la sicurezza sul lavoro, dotato di sensori biometrici e ambientali che rilevano parametri fisiologici, condizioni operative e fattori di rischio. Attraverso l'Intelligenza Artificiale, i dati raccolti vengono trasformati in indicatori, alert e modelli predittivi utili a prevenire situazioni critiche e proteggere i lavoratori.
                  </p>
                </div>
                <Link
                  to="/widiu"
                  className="inline-flex items-center gap-2 text-xs font-bold text-yellow-600 hover:text-yellow-700 transition-colors group mt-8"
                >
                  Approfondisci WIDIU
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <TiltCard className="p-8 rounded-3xl card-premium flex flex-col justify-between group relative overflow-hidden h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-yellow-50/80 text-yellow-600 border border-yellow-200/60 group-hover:bg-yellow-100 group-hover:border-yellow-300 transition-all duration-300">
                      <MessageSquare className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase font-mono tracking-widest">Consulente Virtuale</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">SALVATORE</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                    Salvatore è il chatbot IA dedicato alla sicurezza sul lavoro, progettato per offrire assistenza, formazione e supporto alla prevenzione. Interagisce in tempo reale con l'utente, risponde a domande su rischi, procedure e comportamenti sicuri e fornisce indicazioni personalizzate in base al ruolo e al contesto aziendale.
                  </p>
                </div>
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 text-xs font-bold text-yellow-600 hover:text-yellow-700 transition-colors group mt-8"
                >
                  Approfondisci Salvatore
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-3xl card-premium flex flex-col justify-between group h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-yellow-50/80 text-yellow-600 border border-yellow-200/60 group-hover:bg-yellow-100 group-hover:border-yellow-300 transition-all duration-300">
                      <Sparkles className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase font-mono tracking-widest">AI</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligenza Artificiale</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                    L'Intelligenza Artificiale analizza dati biometrici, ambientali, organizzativi e operativi per individuare segnali di rischio, riconoscere pattern e generare indicatori predittivi utili a prevenire situazioni critiche e migliorare la sicurezza sul lavoro.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="p-8 rounded-3xl card-premium flex flex-col justify-between group h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-yellow-50/80 text-yellow-600 border border-yellow-200/60 group-hover:bg-yellow-100 group-hover:border-yellow-300 transition-all duration-300">
                      <ShieldCheck className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase font-mono tracking-widest">ANALISI</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Analisi Personalizzata</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                    Daily sviluppa soluzioni personalizzate per la sicurezza sul lavoro, adattate alle esigenze specifiche di industria, edilizia, sanità e sport. L'analisi integra dati operativi, ambientali e organizzativi per individuare i rischi più rilevanti e definire strategie di prevenzione mirate per ogni contesto.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-3xl card-premium flex flex-col justify-between group h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-yellow-50/80 text-yellow-600 border border-yellow-200/60 group-hover:bg-yellow-100 group-hover:border-yellow-300 transition-all duration-300">
                      <ShieldCheck className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase font-mono tracking-widest">ECOSISTEMA</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">dailybydaily</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                    Ecosistema di app dedicato a sicurezza, benessere e prevenzione nella vita quotidiana. Attraverso applicazioni verticali per lavoro, sport, famiglia, smart working e benessere personale, offre questionari, alert, protocolli e contenuti personalizzati, integrati con dailyplatform e con le tecnologie daily.
                  </p>
                </div>
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 text-xs font-bold text-yellow-600 hover:text-yellow-700 transition-colors group mt-8"
                >
                  Approfondisci dailybydaily
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Su di noi Section */}
      <ScrollReveal>
        <section className="py-28 md:py-32 relative overflow-hidden" style={{background: '#faf8f5'}}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">Su di noi</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 font-sans">
              daily nasce per portare la prevenzione a un nuovo livello.
            </h2>
            <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
              Siamo una startup innovativa italiana che integra Intelligenza Artificiale, IoT, sensoristica avanzata e competenze HSE per rendere la sicurezza più semplice, continua e predittiva.
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
              Attraverso dailyplatform, lo smartwatch WIDIU, il chatbot Salvatore e l'ecosistema delle app dailybydaily, raccogliamo e analizziamo dati biometrici, ambientali, operativi e organizzativi per riconoscere segnali di rischio e supportare aziende e lavoratori prima che si verifichino condizioni critiche.
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
              Mettiamo la persona al centro della tecnologia, trasformando dati e segnali spesso invisibili in strumenti concreti di prevenzione, consapevolezza e protezione.
            </p>
            <p className="mt-6 text-lg font-semibold text-yellow-600 italic">
              daily. L'istinto di proteggere, l'intelligenza per farlo.
            </p>
            <Link
              to="/chi-siamo"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 shadow-[0_4px_20px_rgba(234,179,8,0.2)] group"
            >
              Scopri chi siamo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-24 border-t relative" style={{background: '#faf8f5', borderColor: 'rgba(0,0,0,0.06)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-sans">Hai bisogno di una soluzione personalizzata?</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 font-light">I nostri consulenti sono pronti a risponderti.</p>
            </div>
            <Link
              to="/contatti"
              className="px-6 py-3.5 rounded-full text-xs font-bold text-white bg-yellow-500 hover:bg-yellow-600 transition-all font-sans whitespace-nowrap shrink-0 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(234,179,8,0.2)]"
            >
              Contattaci ora
            </Link>
          </div>
        </section>
      </ScrollReveal>

      <SalvatorePopup />
    </>
  );
}
