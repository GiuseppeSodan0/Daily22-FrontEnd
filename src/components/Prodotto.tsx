/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Brain, Users, Scale, Cpu, HeartHandshake, Box } from 'lucide-react';

export default function Prodotto() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } }
  };

  return (
    <div className="py-24 bg-black select-none text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Hero Prodotto - Slogan in pristine black/gold text details */}
        <div className="border-b border-white/[0.06] pb-20 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-yellow-405 font-mono">
                Dailyplatform Core
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight leading-tight font-sans">
                Racconta la tua storia con Dailyplatform.
              </h2>
              <p className="mt-6 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                Utilizziamo il <span className="text-yellow-400 font-bold font-mono">deep learning</span> per rendere il nostro software completamente basato sui dati. Rielaboriamo le informazioni provenienti sul campo per creare percorsi virtuosi di tutela umana.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2.5 rounded-full text-xs font-semibold bg-white/[0.03] border border-white/[0.06] text-gray-300 flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-yellow-400" />
                  Umanità al centro
                </span>
                <span className="px-4 py-2.5 rounded-full text-xs font-semibold bg-white/[0.03] border border-white/[0.06] text-gray-300 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-yellow-400" />
                  Software Data-Driven
                </span>
              </div>
            </div>

            {/* Simulated Glass quote card wrapped over generated Boardroom asset */}
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] p-1.5 bg-white/[0.02] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="/src/assets/images/corp_meeting_1780517573052.png" 
                  alt="Boardroom meeting in a high-rise office under yellow soft ambient lighting" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] brightness-[75%]"
                />
                
                {/* Glowing gold flare overlay on boardroom photo */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black via-black/85 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                  <blockquote className="text-sm sm:text-base italic text-gray-200 font-light leading-relaxed">
                    "Un software progettato intorno alle persone, dove la tecnologia digitale non soppianta ma protegge l'energia umana e la sicurezza in ogni singolo reparto."
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-yellow-400 text-black font-black text-xs flex items-center justify-center">D22</div>
                    <div>
                      <p className="text-xs font-bold text-white">Daily 22</p>
                      <p className="text-[10px] text-gray-400 font-mono">Impegno Etico Daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: What We Can Do - Grid Cards containing subtle yellow glow */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 font-mono">Cosa Possiamo Fare</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 font-sans">Soluzioni software uniche.</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-2 font-light">
              Dall'ingegneria dei sensori indossabili fino alla redazione automatica della conformità legale.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Box 1 */}
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:border-yellow-400/20 hover:bg-white/[0.03] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-6 border border-yellow-400/15 group-hover:bg-yellow-400/20 transition-all">
                <Brain className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-3">Valorizzazione dei Dati</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Trasformiamo i dati grezzi in controllo reale. Dai dati aziendali ricaviamo nuove visioni ed efficienze grazie ad algoritmi proprietari con intelligenza artificiale.
              </p>
            </motion.div>

            {/* Box 2 */}
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:border-yellow-400/20 hover:bg-white/[0.03] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-6 border border-yellow-400/15 group-hover:bg-yellow-400/20 transition-all">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-3">Disegnato per la Gente</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Eliminiamo le barriere dei complessi gestionali tradizionali creando interfacce conversazionali vocali e grafiche immediate per capire in pochi secondi lo stato dell'ambiente.
              </p>
            </motion.div>

            {/* Box 3 */}
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:border-yellow-400/20 hover:bg-white/[0.03] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-6 border border-yellow-400/15 group-hover:bg-yellow-400/20 transition-all">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-3">Tutela Legale Integrata</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                Offriamo garanzie totali sulla riservatezza dei dati biometrici e gestionali, allineandoci spontaneamente ai dettami del GDPR e d.lgs 81/08.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Section 3: Fine grid specifics */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.06] shadow-xl relative overflow-hidden">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 font-mono">
              La nostra specializzazione
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 font-sans">
              Il software su misura per la sicurezza sul lavoro.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
              <div className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider mb-2 font-mono">01. Sicurezza</div>
              <h5 className="text-sm font-semibold text-white mb-3">La compliance, sotto controllo</h5>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Gestisci e monitora tutti i tuoi adempimenti per la salute e sicurezza, le scadenze dei corsi di formazione e le idoneità sanitarie dei dipendenti in un unico ambiente cloud.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
              <div className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider mb-2 font-mono">02. Controllo</div>
              <h5 className="text-sm font-semibold text-white mb-3">Il controllo normativo, in tempo reale</h5>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Risparmia ore di lavoro e riduci gli errori umani. Il server si aggiorna periodicamente in background per segnalarti tempestivamente scostamenti regolamentari delle leggi.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
              <div className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider mb-2 font-mono">03. Supporto</div>
              <h5 className="text-sm font-semibold text-white mb-3">Supporto intelligente per l’organizzazione</h5>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Pianifica compiti di supervisione e coordina i sopralluoghi dei tecnici RSPP e dei medici d’azienda. Invia alert via sms o mail automatizzate in tempi precisi.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
