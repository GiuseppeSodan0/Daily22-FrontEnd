/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Cpu, MessageSquare, CheckCircle, Sparkles, HardHat } from 'lucide-react';

export default function ProgettiDetail() {
  const [selectedSubproject, setSelectedSubproject] = useState<'compliance' | 'child' | 'woman'>('compliance');

  const mainProjects = [
    {
      id: 'dailyplatform',
      title: 'Dailyplatform',
      badge: 'Piattaforma IA ERP',
      tagline: 'La piattaforma intelligente per la sicurezza del futuro',
      description: 'Dailyplatform è la suite integrata, conversazionale e predittiva progettata per correlare dati biometrici dell\'operatore, parametri ambientali locali e procedimenti burocratici. Ridisegna le scadenze normate in un unico registro immutabile e dinamico.',
      icon: ShieldCheck,
      color: 'border-yellow-400/20 bg-yellow-405/5 text-yellow-400',
      details: [
        { label: 'Cosa fa', value: 'Riorganizza la mole di dati operativi in grafici predittivi chiari, supportando RSPP e datori di lavoro nell’attività decisionale.' },
        { label: 'Perché sceglierla', value: 'Diminuisce drasticamente la probabilità di contenzioso civile, ottimizza i tempi di ispezione e riduce i premi INAIL.' },
        { label: 'Integrazione completa', value: 'Interfacce API native per allacciarsi ai database gestionali HR, anagrafiche e presenze già in uso.' }
      ]
    },
    {
      id: 'widiu',
      title: 'WIDIU IoT',
      badge: 'Sensori Indossabili',
      tagline: 'Il sistema indossabile intelligente per la sicurezza e il benessere',
      description: 'WIDIU è la spina dorsale hardware della rilevazione sul campo. Una serie di moduli ultraleggeri inseribili negli indumenti protettivi standard, con batterie che durano oltre 48 ore di turni continuativi.',
      icon: Cpu,
      color: 'border-yellow-400/20 bg-yellow-405/5 text-yellow-450',
      details: [
        { label: 'Sensori Biometrici', value: 'Lettura ritmi cardiaci ed anomalie fisiche della persona per individuare sovraffaticamento da calore o stress cardiocircolatorio.' },
        { label: 'Uomo a Terra & Impatto', value: 'Accelerometro e giroscopio avanzati che scattano alert automatici prioritari in millisecondi dalla caduta.' },
        { label: 'WIDIU per il territorio', value: 'Estensione cartografica GPS e telemetrica pensata per monitorare i lavoratori attivi in zone isolate.' }
      ]
    },
    {
      id: 'salvatore',
      title: 'SALVATORE Avatar',
      badge: 'LLM Conversazionale',
      tagline: 'L’avatar conversazionale che rende la sicurezza un dialogo accessibile',
      description: 'Il compagno virtuale instruito sull\'intero compendio del D.Lgs 81/08 e regolamenti ISO. Risponde via voce sullo smartphone in cantiere indicando istantaneamente i DPI richiesti per la lavorazione di oggi.',
      icon: MessageSquare,
      color: 'border-yellow-400/20 bg-yellow-405/5 text-yellow-400',
      details: [
        { label: 'Richieste on-field', value: "L’operatore può chiedere a voce 'Quali DPI sono richiesti per la lavorazione di oggi?' ottenendo istruzioni istantanee." },
        { label: 'Sempre Aggiornato', value: 'Possiede nel proprio nucleo addestrato l’intero compendio del D.Lgs. 81/08 costantemente allineato alle revisioni.' },
        { label: 'Valore Formativo', value: 'Sottopone i lavoratori a micro-scenari interattivi, accrescendo la consapevolezza sul rischio lavorativo.' }
      ]
    }
  ];

  return (
    <div className="py-24 bg-black select-none text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title context */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-405 font-mono">Visione Progettuale</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 font-sans">L'Ecosistema Daily 22</h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
            Un'architettura sinergica dove ciascun modulo dialoga costantemente con gli altri per creare una rete di protezione ininterrotta e digitale intorno al lavoratore.
          </p>
        </div>

        {/* Ecosystem three horizontal blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {mainProjects.map((p) => (
            <div
              key={p.id}
              className="flex flex-col h-full rounded-3xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.05] hover:border-yellow-400/20 transition-all duration-300 p-6 md:p-8 shadow-xl"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-yellow-405">
                  {p.badge}
                </span>
                <span className={`p-2.5 rounded-xl border ${p.color}`}>
                  <p.icon className="w-5 h-5 stroke-[2]" />
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-xs text-gray-500 mb-4 italic leading-snug">{p.tagline}</p>
              <p className="text-xs sm:text-sm text-gray-405 leading-relaxed mb-6 font-light">{p.description}</p>

              <div className="space-y-4 pt-6 mt-auto border-t border-white/[0.05]">
                {p.details.map((d, index) => (
                  <div key={index}>
                    <h5 className="text-[10px] font-bold text-white uppercase tracking-wider mb-1 font-sans">{d.label}</h5>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Subprojects block mapping (Daily 4 compliance, child, woman) combined with supervisor photo */}
        <div className="p-1 border border-white/[0.06] rounded-3xl bg-white/[0.01]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Col: Interactive Text selectors (7 columns) */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 font-mono">Specializzazioni Dedicate</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 font-sans">I Progetti Verticali Daily 4</h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-2 font-light">
                  Soluzioni modellate per tutele ed ambiti di sicurezza molto specifici, dalla conformità societaria alla salute scolastica ed alle quote rosa.
                </p>

                {/* Selection pills */}
                <div className="flex flex-wrap gap-2 my-8 border-b border-white/[0.04] pb-6">
                  <button
                    onClick={() => setSelectedSubproject('compliance')}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedSubproject === 'compliance'
                        ? 'bg-yellow-400 text-black font-semibold'
                        : 'text-gray-400 hover:text-white bg-white/[0.02] border border-white/[0.04]'
                    }`}
                  >
                    daily 4 Compliance
                  </button>
                  <button
                    onClick={() => setSelectedSubproject('child')}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedSubproject === 'child'
                        ? 'bg-yellow-400 text-black font-semibold'
                        : 'text-gray-400 hover:text-white bg-white/[0.02] border border-white/[0.04]'
                    }`}
                  >
                    daily 4 Child
                  </button>
                  <button
                    onClick={() => setSelectedSubproject('woman')}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedSubproject === 'woman'
                        ? 'bg-yellow-450 text-black font-semibold'
                        : 'text-gray-400 hover:text-white bg-white/[0.02] border border-white/[0.04]'
                    }`}
                  >
                    daily 4 Woman
                  </button>
                </div>

                {/* Subproject detail */}
                <div className="min-h-[160px] flex items-center">
                  <AnimatePresence mode="wait">
                    {selectedSubproject === 'compliance' && (
                      <motion.div
                        key="compliance"
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <h4 className="text-lg font-bold text-white">Gestione e Auditing Semplificato</h4>
                        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                          La suite definitiva dedicata alla digitalizzazione dei Modelli Organizzativi 231, pareri della parità di genere, audit di qualità e scadenze dei DVR. Solleva RSV ed RSPP dalle scartoffie una volta per tutte.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                            <span>Scadenziari deleghe e procure</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                            <span>Allineamento automatico d.lgs 81/08</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {selectedSubproject === 'child' && (
                      <motion.div
                        key="child"
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <h4 className="text-lg font-bold text-white">Tutela degli Ambienti dei Minori</h4>
                        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                          Applichiamo sensori ambientali d'aria IoT (VOC, Co2 e particolati fini) integrati con braccialetti biometrici ultraleggeri intelligenti per proteggere asili, plessi scolastici e centri d'infanzia sportivi.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                            <span>Braccialetti anti-allontanamento</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                            <span>Contromozione Co2 aule scolastiche</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {selectedSubproject === 'woman' && (
                      <motion.div
                        key="woman"
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <h4 className="text-lg font-bold text-white">Ergonomia e Salute Femminile</h4>
                        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                          Sviluppiamo algoritmi calibrati specificamente per l'apporto e benessere biomeccanico delle dipendenti donne, prevenendo lo stress correlato e ricalibrando l'uso specifico dei Dispositivi di Sicurezza (DPI).
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                            <span>Adattamenti DPI anatomici</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                            <span>Riconoscimento stanchezza notturna</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="text-[10px] text-gray-500 font-mono">
                Registri certificati e crittografati con algoritmi a chiavi asimmetriche in cantiere.
              </div>
            </div>

            {/* Right Col: Grand Supervisor photo showing smart-helmet with gold lights (5 columns) */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full rounded-2xl overflow-hidden self-stretch">
              <img 
                src="/src/assets/images/supervisor_iot_1780517606283.png" 
                alt="Supervisor checking high-tech telemetry" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover grayscale-[15%] brightness-[85%]"
              />
              {/* Gold gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur border border-white/5">
                <div className="flex items-center gap-2">
                  <HardHat className="w-4 h-4 text-yellow-400 animate-pulse" />
                  <span className="text-[9px] font-mono tracking-widest text-yellow-400 uppercase font-black">SUPERVISIONE INTELLIGENTE ACT_02</span>
                </div>
                <p className="text-[11px] text-white font-medium mt-1">
                  I sensori verificano il corretto accoppiamento degli elmetti tramite RFID.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
