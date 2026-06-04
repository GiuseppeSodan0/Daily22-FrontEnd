/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  MessageSquare,
  TrendingUp,
  Heart,
  Thermometer,
  Shield,
  Award,
  AlertTriangle,
  Send,
  Zap,
  Play,
  CheckCircle,
  RefreshCw,
  Sliders,
  Sparkles,
  Info
} from 'lucide-react';
import { VitalStatus, Message } from '../types';

export default function InteractivePanel() {
  const [activePlayground, setActivePlayground] = useState<'widiu' | 'salvatore' | 'dailyplatform'>('widiu');

  // Widiu wearable simulator values
  const [vitals, setVitals] = useState<VitalStatus>({
    heartRate: 78,
    bodyTemp: 36.6,
    posture: 'Normale',
    ambientTemp: 24,
    gasLevel: 'Sano',
    safetyScore: 98
  });

  const [simulating, setSimulating] = useState(true);
  const [fallDetected, setFallDetected] = useState(false);

  // Salvatore chat messages
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'salvatore',
      text: "Ciao! Sono SALVATORE, il tuo assistente virtuale per la sicurezza sul lavoro (con intelligenza artificiale Daily 22). Di quale supporto hai bisogno oggi? Puoi chiedermi standard sul D.Lgs 81/08, uso dei DPI, o dettagli sul funzionamento dei sensori WIDIU.",
      timestamp: 'Ora'
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Preloaded safety questions
  const preloadedQuestions = [
    { label: "Che cos'è il D.Lgs 81/08?", text: "Spiegami brevemente l'importanza del Decreto Legislativo 81/08 per la sicurezza aziendale." },
    { label: "Come funziona la prevenzione WIDIU?", text: "Quali parametri biometrici e ambientali rileva il sistema indossabile WIDIU per proteggere i lavoratori?" },
    { label: "Quali sono i DPI obbligatori?", text: "Quali sono i Dispositivi di Protezione Individuale (DPI) fondamentali nei cantieri edili e industriali?" },
    { label: "Cosa fa il DVR (valutazione rischi)?", text: "Cos'è il DVR, a cosa serve e con quale frequenza va aggiornato?" }
  ];

  // Random heart rate and ambient variations over time when simulation is active
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (simulating && !fallDetected) {
      interval = setInterval(() => {
        setVitals((prev) => {
          const hrDelta = Math.floor(Math.random() * 5) - 2;
          const tempDelta = Number((Math.random() * 0.2 - 0.1).toFixed(1));
          
          let newHr = prev.heartRate + hrDelta;
          if (newHr < 60) newHr = 65;
          if (newHr > 130) newHr = 115;
          
          let newBodyTemp = Number((prev.bodyTemp + tempDelta).toFixed(1));
          if (newBodyTemp < 35.5) newBodyTemp = 36.4;
          if (newBodyTemp > 39.5) newBodyTemp = 38.0;

          const score = calculateRiskScore(newHr, newBodyTemp, prev.posture, prev.ambientTemp, prev.gasLevel);

          return {
            ...prev,
            heartRate: newHr,
            bodyTemp: newBodyTemp,
            safetyScore: score
          };
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [simulating, fallDetected]);

  // Handle fall simulation
  const triggerFall = () => {
    setFallDetected(true);
    setVitals((p) => ({
      ...p,
      posture: 'Rilevata Caduta!',
      safetyScore: 12
    }));

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: String(prev.length + 1),
          sender: 'salvatore',
          text: "⚠️ [ALLERTA CRITICA WIDIU] Rilevamento Caduta Sospetta sul sensore #RACK22! Collegamento in corso con i presidi di cantiere. Verificare stato vitale operatore.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1000);
  };

  const resetFallStatus = () => {
    setFallDetected(false);
    setVitals((p) => {
      const score = calculateRiskScore(p.heartRate, p.bodyTemp, 'Normale', p.ambientTemp, p.gasLevel);
      return {
        ...p,
        posture: 'Normale',
        safetyScore: score
      };
    });
  };

  const calculateRiskScore = (
    hr: number,
    bodyTemp: number,
    posture: string,
    ambient: number,
    gas: string
  ): number => {
    let score = 100;
    if (hr > 120 || hr < 55) score -= 25;
    else if (hr > 100 || hr < 65) score -= 10;

    if (bodyTemp > 38.2 || bodyTemp < 35.2) score -= 25;
    else if (bodyTemp > 37.5) score -= 8;

    if (posture === 'Rilevata Caduta!') score -= 80;
    else if (posture === 'Sforzo Ripetuto') score -= 15;

    if (ambient > 40 || ambient < 0) score -= 20;
    else if (ambient > 32 || ambient < 12) score -= 8;

    if (gas === 'Rischioso') score -= 65;
    else if (gas === 'Attenzione') score -= 25;

    return Math.max(0, score);
  };

  const handleGasChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const gas = e.target.value as 'Sano' | 'Attenzione' | 'Rischioso';
    setVitals((p) => ({
      ...p,
      gasLevel: gas,
      safetyScore: calculateRiskScore(p.heartRate, p.bodyTemp, p.posture, p.ambientTemp, gas)
    }));
  };

  const handleAmbientChange = (val: number) => {
    setVitals((p) => ({
      ...p,
      ambientTemp: val,
      safetyScore: calculateRiskScore(p.heartRate, p.bodyTemp, p.posture, val, p.gasLevel)
    }));
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: String(messages.length + 1),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setChatInput('');

    setTimeout(() => {
      let responseText = '';
      const query = textToSend.toLowerCase();

      if (query.includes('81/08') || query.includes('decreto') || query.includes('legge') || query.includes('norme')) {
        responseText = `Il Testo Unico sulla Sicurezza (D.Lgs. 9 aprile 2008 n. 81) è la legge statale cardine. Impone l'obbligo inderogabile di valutare tutti i rischi corporativi (redigendo il DVR), nominare il medico competente, l'RSPP e adempiere a formazione continua. Tramite il modulo "daily 4 Compliance" gestiamo la conformità digitale in background, allineandoci spontaneamente ai dettami normativi più rigorosi.`;
      } else if (query.includes('widiu') || query.includes('indossabile') || query.includes('sensore')) {
        responseText = `Il sistema WIDIU è il wearable brevettato da Daily 22. Consiste in un modulo ultraleggero integrabile in elmetti, imbracature o gilet, contenente giroscopio a 6 assi, sensore ottico PPG per battito cardiaco, termometro ed opzionalmente rilevatori di monossido di carbonio CO. Invia dati ogni millisecondo tramite onde protette verso DAILYPLATFORM per calcolare indici di sforzo biometrico.`;
      } else if (query.includes('dpi') || query.includes('elmetto') || query.includes('scarpe') || query.includes('protezione')) {
        responseText = `I Dispositivi di Protezione Individuale (DPI) sono regolamentati dal Titolo III del D.Lgs. 81/08. Devono disporre di certificazione CE e devono essere forniti gratuitamente dal Datore di Lavoro. DAILYPLATFORM calcola le mansioni giornaliere dei dipendenti indicando automaticamente a schermo i DPI specifici necessari (es. EN 397 per elmetti, EN 361 per imbracature).`;
      } else if (query.includes('dvr') || query.includes('valutazione rischi')) {
        responseText = `Il DVR (Documento di Valutazione dei Rischi) descrive l'analisi preventiva di tutti i fattori di rischio presenti negli ambienti lavorativi aziendali. Con "daily 4 Compliance" trasformiamo questo faldone statico in una cartella cloud dinamica in tempo reale, mappandola con l'afflusso biometrico delle squadre sul campo.`;
      } else if (query.includes('caduta') || query.includes('allerta') || query.includes('emergenza')) {
        responseText = `In caso di forze gravitazionali impreviste o discese ad alta velocità (CADUTA UOMO A TERRA), l'accelerometro interno di WIDIU trasmette un impulso radio con priorità assoluta. DAILYPLATFORM fa scattare sirene sul monitor della direzione, attivando una rete vocale d'emergenza e l'esatta localizzazione spaziale.`;
      } else {
        responseText = `Interessante quesito! Per questa specifica casistica, offriamo moduli mirati di consulenza legale ed ingegneristica. Dailyplatform utilizza reti neurali profonde per prevenire incidenti in cantiere elaborando curve comportamentali e biologiche personalizzate. Se desideri dettagli, inviaci una richiesta nella tab "Contatti"!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: String(prev.length + 1),
          sender: 'salvatore',
          text: responseText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1000);
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="py-24 bg-black border-y border-white/[0.06] relative overflow-hidden animate-reveal" id="interactive-suite">
      
      {/* Delicate Golden Ambiance Elements */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-yellow-500/[0.03] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-amber-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Slogan */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            <span className="text-[10px] uppercase tracking-widest text-yellow-400 font-mono font-bold">Laboratorio di Simulazione Live</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Sperimenta la Sicurezza Predittiva
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed font-light">
            Seleziona uno dei tre moduli integrati per interagire direttamente con la tecnologia intelligente ideata da Daily 22.
          </p>
        </div>

        {/* Tab Controls - Apple Black & Gold Style */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-3 mb-10 max-w-3xl mx-auto">
          <button
            onClick={() => setActivePlayground('widiu')}
            className={`flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer ${
              activePlayground === 'widiu'
                ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/40 shadow-[0_4px_20px_rgba(250,204,21,0.08)]'
                : 'bg-white/[0.02] text-gray-400 border-white/[0.05] hover:border-white/[0.12] hover:text-white'
            }`}
          >
            <Activity className="w-4 h-4 stroke-[2]" />
            WIDIU IoT Wearable
          </button>
          <button
            onClick={() => setActivePlayground('salvatore')}
            className={`flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer ${
              activePlayground === 'salvatore'
                ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/40 shadow-[0_4px_20px_rgba(250,204,21,0.08)]'
                : 'bg-white/[0.02] text-gray-400 border-white/[0.05] hover:border-white/[0.12] hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4 stroke-[2]" />
            SALVATORE Virtual IA
          </button>
          <button
            onClick={() => setActivePlayground('dailyplatform')}
            className={`flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer ${
              activePlayground === 'dailyplatform'
                ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/40 shadow-[0_4px_20px_rgba(250,204,21,0.08)]'
                : 'bg-white/[0.02] text-gray-400 border-white/[0.05] hover:border-white/[0.12] hover:text-white'
            }`}
          >
            <TrendingUp className="w-4 h-4 stroke-[2]" />
            DAILYPLATFORM Compliance
          </button>
        </div>

        {/* Content Box with Satin-Glassmorphism and deep black layout */}
        <div className="border border-white/[0.06] rounded-3xl bg-white/[0.01] backdrop-blur-3xl shadow-[0_12px_40px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col lg:flex-row relative">
          
          <AnimatePresence mode="wait">
            {/* Widiu Simulator Playground */}
            {activePlayground === 'widiu' && (
              <motion.div
                key="widiu"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="flex flex-col lg:flex-row w-full"
              >
                {/* Visual heart feedback */}
                <div className="flex-1 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="p-2.5 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                        <Activity className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-white">Telemetria WIDIU</h3>
                        <p className="text-xs text-gray-400 font-mono">Dispositivo Indossabile Intelligente</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 font-light leading-relaxed mb-8">
                      Regola gli indicatori biometrici e ambientali a destra per osservare come l'algoritmo calcola l'indice di sicurezza totale sul lavoro.
                    </p>

                    <div className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.04] flex flex-col items-center justify-center relative overflow-hidden">
                      {fallDetected && (
                        <div className="absolute inset-0 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 z-30">
                          <AlertTriangle className="w-12 h-12 text-yellow-405 animate-bounce mb-2" />
                          <p className="text-base font-bold text-yellow-400 uppercase tracking-widest">CADUTA RILEVATA!</p>
                          <p className="text-xs text-gray-400 max-w-xs mt-2 leading-relaxed">
                            Forza centrifuga accelerata. Invio alert immediato a Dailyplatform e ai soccorsi di cantiere.
                          </p>
                          <button
                            onClick={resetFallStatus}
                            className="mt-5 px-5 py-2.5 bg-yellow-400 text-black text-xs font-bold rounded-full transition-all hover:bg-yellow-300 cursor-pointer"
                          >
                            Risolvi Allerta
                          </button>
                        </div>
                      )}

                      {/* Animated heart circle */}
                      <div className="relative w-36 h-36 flex items-center justify-center border-4 border-yellow-400/10 rounded-full mb-6">
                        <div className="absolute inset-0 rounded-full border border-yellow-400/30 animate-ping opacity-20" style={{ animationDuration: vitals.heartRate > 100 ? '0.8s' : '1.5s' }} />
                        <div className="text-center z-10">
                          <Heart className={`w-8 h-8 text-yellow-400 mx-auto mb-1 ${vitals.heartRate > 100 ? 'animate-bounce' : 'animate-pulse'}`} />
                          <span className="text-3xl font-bold font-mono text-white tracking-tight leading-none">{vitals.heartRate}</span>
                          <span className="text-gray-500 text-[10px] font-bold font-mono ml-1 uppercase">BPM</span>
                        </div>
                      </div>

                      {/* Small visual items */}
                      <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="p-3 rounded-xl bg-white/[0.01] border border-white/[0.05] flex items-center gap-2.5">
                          <Thermometer className="w-4 h-4 text-yellow-400" />
                          <div>
                            <span className="text-[9px] text-gray-500 font-mono block uppercase">Corpo</span>
                            <span className="text-xs font-bold font-mono text-white">{vitals.bodyTemp} °C</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.01] border border-white/[0.05] flex items-center gap-2.5">
                          <Shield className="w-4 h-4 text-yellow-400" />
                          <div>
                            <span className="text-[9px] text-gray-500 font-mono block uppercase">Postura</span>
                            <span className="text-xs font-bold font-mono text-yellow-300">{vitals.posture}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-600 font-mono block mt-6">Conformità EN ISO 13485 & D.Lgs 81/08</span>
                </div>

                {/* Sliders Controller */}
                <div className="flex-1 p-6 sm:p-10 bg-white/[0.01] flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400 font-mono mb-8 flex items-center gap-2">
                      <Sliders className="w-4 h-4 stroke-[2]" />
                      Configurazione Biometrica
                    </h4>

                    {/* Battito */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center text-xs mb-2">
                        <span className="text-gray-400">Sforzo Cardivoascolore (Battiti)</span>
                        <span className="font-bold text-white font-mono">{vitals.heartRate} BPM</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="140"
                        value={vitals.heartRate}
                        onChange={(e) => {
                          const v = Number(e.target.value);
                          setVitals(p => ({
                            ...p,
                            heartRate: v,
                            safetyScore: calculateRiskScore(v, p.bodyTemp, p.posture, p.ambientTemp, p.gasLevel)
                          }));
                        }}
                        className="w-full accent-yellow-400 bg-white/[0.06] rounded-lg h-1.5 cursor-pointer appearance-none"
                      />
                    </div>

                    {/* Temperatura */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center text-xs mb-2">
                        <span className="text-gray-400">Temperatura Ambientale Sollecitata</span>
                        <span className="font-bold text-white font-mono">{vitals.ambientTemp} °C</span>
                      </div>
                      <input
                        type="range"
                        min="-5"
                        max="50"
                        value={vitals.ambientTemp}
                        onChange={(e) => handleAmbientChange(Number(e.target.value))}
                        className="w-full accent-yellow-400 bg-white/[0.06] rounded-lg h-1.5 cursor-pointer appearance-none"
                      />
                    </div>

                    {/* Gas tossici */}
                    <div className="mb-6">
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase font-mono tracking-wider">Cella Elettrochimica (Gas CO)</label>
                      <select
                        value={vitals.gasLevel}
                        onChange={handleGasChange}
                        className="w-full bg-black text-xs text-gray-300 border border-white/[0.08] rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
                      >
                        <option value="Sano">Monossido assente (&lt; 10 ppm) - Sicuro</option>
                        <option value="Attenzione">Presenza moderata (28 ppm) - Attenzione</option>
                        <option value="Rischioso">Esalazione tossica elevata (120 ppm) - Pericolo</option>
                      </select>
                    </div>

                    {/* Simulators buttons */}
                    <div className="mb-8">
                      <span className="block text-[10px] font-bold text-gray-500 uppercase font-mono mb-3 tracking-widest">Simula Anomalie di Carramento</span>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={triggerFall}
                          disabled={fallDetected}
                          className="px-4 py-3 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-400 font-bold text-xs transition-colors disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <AlertTriangle className="w-3.5 h-3.5" />
                          Simula Caduta
                        </button>
                        <button
                          onClick={() => {
                            const newPost = vitals.posture === 'Sforzo Ripetuto' ? 'Normale' : 'Sforzo Ripetuto';
                            setVitals(p => ({
                              ...p,
                              posture: newPost,
                              safetyScore: calculateRiskScore(p.heartRate, p.bodyTemp, newPost, p.ambientTemp, p.gasLevel)
                            }));
                          }}
                          className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                            vitals.posture === 'Sforzo Ripetuto'
                              ? 'bg-yellow-400/10 border-yellow-400/40 text-yellow-300'
                              : 'bg-transparent border-white/[0.06] text-gray-400 hover:border-white/[0.12] hover:text-white'
                          }`}
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          Carico Ergonomico
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Safety Indicator Slider feedback */}
                  <div className="pt-6 border-t border-white/[0.06]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-450 font-semibold font-mono uppercase">Modello di Rischio Predittivo</span>
                      <span className="text-[10px] font-mono font-bold text-yellow-400 border border-yellow-400/20 bg-yellow-400/5 px-2 py-0.5 rounded uppercase">live</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-white/[0.04] rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            vitals.safetyScore > 80 ? 'bg-yellow-400' : vitals.safetyScore > 40 ? 'bg-amber-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${vitals.safetyScore}%` }}
                        />
                      </div>
                      <div className="text-right">
                        <span className={`text-2xl font-black font-mono leading-none ${
                          vitals.safetyScore > 80 ? 'text-yellow-400' : vitals.safetyScore > 40 ? 'text-amber-400' : 'text-red-400'
                        }`}>{vitals.safetyScore}</span>
                        <span className="text-gray-600 text-xs font-bold font-mono">/100</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 italic font-light leading-relaxed">
                      {vitals.safetyScore > 80 
                        ? 'Afflusso idoneo e conforme. Meno dello 0.02% di rischio stimato dalle reti neurali.'
                        : vitals.safetyScore > 40
                        ? 'Indice moderato. Rilevato sovraffaticamento posturale o alte temperature d\'asfalto.'
                        : 'RISCHIO ESTREMO. Wearable scattato in modalità soccorso prioritario.'
                      }
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Salvatore Chat Playground */}
            {activePlayground === 'salvatore' && (
              <motion.div
                key="salvatore"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="flex flex-col w-full"
              >
                {/* Salvatore Top Header info */}
                <div className="p-4 border-b border-white/[0.06] bg-white/[0.01] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-500 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-black stroke-[2.5]" />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-yellow-450 border-2 border-black" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5 font-sans">
                        SALVATORE AI
                        <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                      </h4>
                      <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider font-medium">Consulente Normativo d.lgs 81/08</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded-full border border-yellow-400/20">
                    Interazione Live
                  </span>
                </div>

                {/* Help guide bar */}
                <div className="px-6 py-2 bg-white/[0.01] border-b border-white/[0.04] text-[11px] text-gray-400 flex items-center gap-2">
                  <Info className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <span>Sperimenta la compilazione vocale e risposte immediate sui decreti di cantiere.</span>
                </div>

                {/* Chat window viewport */}
                <div className="flex-1 p-6 space-y-4 max-h-[300px] overflow-y-auto min-h-[250px] bg-black/60">
                  {messages.map((m) => (
                    <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                          m.sender === 'user'
                            ? 'bg-yellow-450 text-black font-semibold rounded-br-none shadow-[0_4px_15px_rgba(250,204,21,0.15)]'
                            : 'bg-white/[0.02] border border-white/[0.06] text-gray-300 rounded-bl-none'
                        }`}
                      >
                        <p>{m.text}</p>
                        <p className={`text-[9px] mt-1.5 text-right font-mono ${m.sender === 'user' ? 'text-black/60' : 'text-gray-500'}`}>
                          {m.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={chatBottomRef} />
                </div>

                {/* Quick pre-formulated buttons */}
                <div className="p-4 border-t border-white/[0.06] bg-white/[0.01]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2 font-mono">Domande di prova:</p>
                  <div className="flex flex-wrap gap-2">
                    {preloadedQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        id={`quick-prompt-${idx}`}
                        onClick={() => handleSendMessage(q.text)}
                        className="text-xs px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] text-gray-300 hover:text-white hover:border-yellow-400/40 hover:bg-yellow-400/5 transition-all text-left cursor-pointer font-medium"
                      >
                        {q.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chat input form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (chatInput.trim()) handleSendMessage(chatInput);
                  }}
                  className="p-4 bg-black flex gap-2 border-t border-white/[0.06]"
                >
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Chiedi a Salvatore del Decreto 81/08, piani DVR o sensori WIDIU..."
                    className="flex-1 bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-3.5 text-xs sm:text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-yellow-450 focus:ring-1 focus:ring-yellow-450"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-bold flex items-center justify-center transition-all shadow-[0_0_15px_rgba(250,204,21,0.15)] cursor-pointer"
                  >
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              </motion.div>
            )}

            {/* Dailyplatform ERP Analytics tab */}
            {activePlayground === 'dailyplatform' && (
              <motion.div
                key="dailyplatform"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="flex flex-col lg:flex-row w-full"
              >
                {/* Active Operators list */}
                <div className="flex-1 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="p-2.5 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                        <TrendingUp className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-white font-sans">DAILYPLATFORM Dashboard</h3>
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Centro Gestione Predittivo Cantieri</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                      Un'unica suite centralizzata che riceve la telemetria continua da tutti i wearable attivi, preveggendo sforzi cronici dei dipendenti.
                    </p>

                    {/* Operational fleet */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors">
                        <div className="flex items-center gap-2.5">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-semibold text-white">Operatore #012 - Marco Rossi</span>
                        </div>
                        <span className="text-[10px] font-bold font-mono text-emerald-400 uppercase">Ottimale (84bpm)</span>
                      </div>

                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors">
                        <div className="flex items-center gap-2.5">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-semibold text-white">Operatrice #041 - Laura Bianchi</span>
                        </div>
                        <span className="text-[10px] font-bold font-mono text-emerald-400 uppercase">A Riposo (72bpm)</span>
                      </div>

                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/10 hover:bg-amber-500/10 transition-colors">
                        <div className="flex items-center gap-2.5">
                          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                          <span className="text-xs font-semibold text-white">Operatore #009 - Giuseppe Verdi</span>
                        </div>
                        <span className="text-[10px] font-bold font-mono text-amber-400 uppercase">Fatica Lieve (114bpm)</span>
                      </div>

                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-yellow-450/10 border border-yellow-400/20">
                        <div className="flex items-center gap-2.5">
                          <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
                          <span className="text-xs font-semibold text-white">Operatore #022 - Simone Neri</span>
                        </div>
                        <span className="text-[10px] font-bold font-mono text-yellow-400 uppercase">In Monitoraggio</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[11px] text-yellow-300 font-light mt-6">
                    💡 <strong>Sicurezza Integrata:</strong> DAILYPLATFORM calcola i premi assicurativi INAIL attesi in base alla conformità dinamica registrata dalle macchine.
                  </div>
                </div>

                {/* AI Features explain */}
                <div className="flex-1 p-6 sm:p-10 bg-white/[0.01] flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-widest font-mono mb-8">Ecosistema Predittivo AI</h4>
                    
                    <div className="space-y-6">
                      <div className="flex gap-3">
                        <div className="p-2 w-9 h-9 rounded-lg bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-white">Consulenza GDPR Blindata</h5>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            Ogni parametro biometrico viene mascherato localmente dai sensori WIDIU rispettando la protezione privacy secondo Regolamento UE 2016/679.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="p-2 w-9 h-9 rounded-lg bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center justify-center shrink-0">
                          <Shield className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-white">Software d.lgs 81/08 Data-Driven</h5>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            Aggiornamento istantaneo del Registro dei Rischi. Non dovrai più redigere montagne di scartoffie una tantum: la conformità è viva.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="p-2 w-9 h-9 rounded-lg bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center justify-center shrink-0">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-white">Valore Formativo Incrementale</h5>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            Grazie ai micro-quiz erogati da Salvatore direttamente sullo smartphone degli operai, si ottiene un apprendimento proattivo certificato.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-500 font-light leading-relaxed mt-8 border-t border-white/[0.04] pt-4 select-none">
                    "Adottando DAILYPLATFORM, gli RSPP riscontrano un abbattimento reale delle sanzioni civili ed infortuni di oltre il 92.4%."
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>
    </div>
  );
}
