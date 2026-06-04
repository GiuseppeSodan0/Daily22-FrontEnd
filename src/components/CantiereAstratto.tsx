/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  Activity,
  AlertTriangle,
  HardHat,
  Layers,
  Sparkles,
  Radio,
  Flame
} from 'lucide-react';

interface ZoneDetail {
  id: string;
  name: string;
  icon: React.ReactNode;
  riskLevel: 'Sicuro' | 'Attenzione' | 'Sospeso';
  color: string;
  parameters: {
    label: string;
    value: string | number;
    status: 'success' | 'warning' | 'danger';
  }[];
  requiredDPI: string[];
  appliedTechnology: string;
  workDescription: string;
  coordinateX: number; 
  coordinateY: number;
}

export default function CantiereAstratto() {
  const [selectedZone, setSelectedZone] = useState<string>('zone-heavy');
  const [radialTick, setRadialTick] = useState(0);
  const [isLiveSignal, setIsLiveSignal] = useState(true);

  // Rotate radar sweep lines
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLiveSignal) {
      interval = setInterval(() => {
        setRadialTick((prev) => (prev + 1.5) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isLiveSignal]);

  const zones: ZoneDetail[] = [
    {
      id: 'zone-heavy',
      name: 'Area Sollevamento Pesante (Gru o Carichi)',
      icon: <Layers className="w-4 h-4 text-yellow-405" />,
      riskLevel: 'Sicuro',
      color: 'yellow',
      coordinateX: 28,
      coordinateY: 25,
      workDescription: 'Movimentazione di carichi strutturali e casseforme in quota tramite gru a torre stabilizzata coordinata via radio UHF.',
      parameters: [
        { label: 'Velocità Vento', value: '14 km/h', status: 'success' },
        { label: 'Oscillazione Carico', value: 'Fisiologica (< 1.2°)', status: 'success' },
        { label: 'Umidità di Cabina', value: '42%', status: 'success' },
        { label: 'Calpestio Sottostante', value: 'Presidiato', status: 'success' },
      ],
      requiredDPI: [
        'Casco con sottogola omologato EN 397',
        'Imbracatura anticaduta EN 361 con assorbitore',
        'Scarpe S3 ad alta aderenza',
        'Guanti antiusura meccanica'
      ],
      appliedTechnology: 'WIDIU indossato sull\'imbracatura con accelerometro e giroscopio a 6 assi per rilevare la pendenza angolare e oscillazioni sussultorie fuori asse.'
    },
    {
      id: 'zone-excavation',
      name: 'Scavi Sottomurari e Fondazioni',
      icon: <Activity className="w-4 h-4 text-yellow-405" />,
      riskLevel: 'Attenzione',
      color: 'yellow',
      coordinateX: 52,
      coordinateY: 55,
      workDescription: 'Consolidamento strutturale e trivellazione per tiranti di sottomurazione. Monitoraggio costante delle spinte del terreno.',
      parameters: [
        { label: 'Vibrazione Terreno', value: '1.2 mm/s RMS', status: 'warning' },
        { label: 'Stato Paratie', value: 'Sollecitate (A norma)', status: 'success' },
        { label: 'Umidità di Fossa', value: '82% (Presenza fango)', status: 'warning' },
        { label: 'Sensori Frana GIS', value: 'Attivi', status: 'success' },
      ],
      requiredDPI: [
        'Casco di sicurezza con visiera antischegge',
        'Stivali impermeabili con lamina imperforabile',
        'Rilevatore acustico delle sollecitazioni del terreno con gancio rapido',
        'Gilet ad alta visibilità certificato EN ISO 20471'
      ],
      appliedTechnology: 'I sensori WIDIU alle caviglie monitorano il micro-calpestio e le vibrazioni trasmesse attraverso gli arti inferiori, prevenendo sindromi da vibrazione mano-braccio.'
    },
    {
      id: 'zone-containment',
      name: 'Silos, Fumi e Miscelatori',
      icon: <Flame className="w-4 h-4 text-yellow-405" />,
      riskLevel: 'Sospeso',
      color: 'gold',
      coordinateX: 78,
      coordinateY: 34,
      workDescription: 'Stoccaggio polveri asciutte leganti (cemento e additivi chimici) ed emissione fumi di saldatura ad arco pulsato.',
      parameters: [
        { label: 'Monossido Carbonio', value: '42 ppm (Soglia)', status: 'danger' },
        { label: 'Particolato Fine PM10', value: 'Elevato', status: 'danger' },
        { label: 'Rumorosità Spazio', value: '94 dB', status: 'danger' },
        { label: 'Ossigeno nell\'Aria', value: '19.8% (Soglia)', status: 'warning' },
      ],
      requiredDPI: [
        'Semimaschera protettiva FFP3',
        'Cuffie antirumore attive con soppressione bluetooth',
        'Occhiali a mascherina sigillati contro polveri volatili',
        'Rilevatore tascabile gas integrato'
      ],
      appliedTechnology: 'Il modulo NASALE della scocca WIDIU contiene una cella elettrochimica miniaturizzata per CO/H2S in grado di bloccare i tornelli di accesso se i gas superano i limiti di legge.'
    },
    {
      id: 'zone-logistics',
      name: 'Logistica, Robotica e Banchine',
      icon: <Radio className="w-4 h-4 text-yellow-405" />,
      riskLevel: 'Sicuro',
      color: 'yellow',
      coordinateX: 35,
      coordinateY: 74,
      workDescription: 'Asfaltatura, transito carrelli elevatori automatici (AGV), carico-scarico materiali pesanti dalle banchine d\'approdo cantiere.',
      parameters: [
        { label: 'Traffico AGV', value: 'Standard controllato', status: 'success' },
        { label: 'Rilevatore Presenza', value: 'Attivo', status: 'success' },
        { label: 'Temperatura Suolo', value: '31 °C', status: 'success' },
        { label: 'Indice Fatica Operatori', value: 'Ottimo (Basso)', status: 'success' },
      ],
      requiredDPI: [
        'Gilet con LED integrati WIDIU',
        'Scarpe ultra-leggere con puntale composito',
        'Occhiali da sole polarizzati UV400 per esterni',
        'Cintura ergonomica lombare'
      ],
      appliedTechnology: 'Il backend di DAILYPLATFORM calcola i carichi posturali delle squadre integrati con l\'algoritmo daily 4 Compliance, inviando notifiche personalizzate per le pause preventive.'
    }
  ];

  const activeZone = zones.find((z) => z.id === selectedZone) || zones[0];

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="cantiere-digitale-astrattismo">
      {/* Background Soft Gold Ambient Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-yellow-500/[0.02] rounded-full blur-[130px] animate-pulse pointer-events-none" style={{ animationDuration: '9s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/[0.02] rounded-full blur-[140px] animate-pulse pointer-events-none" style={{ animationDuration: '13s' }} />

      {/* Elegant structural Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] opacity-75 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 font-mono">
              Interfaccia Astratta di Cantiere
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight select-none font-sans">
            La Piantina Telemetrica Vetrosa
          </h2>
          <p className="mt-4 text-sm text-gray-400 font-light leading-relaxed">
            Un gemello digitale astratto che rappresenta flussi, carichi, interferenze ambientali e conformità dei cantieri presidiati dall'intelligenza artificiale Daily 22.
          </p>
        </div>

        {/* Layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive SVG Map (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded-3xl bg-white/[0.01] backdrop-blur-3xl border border-white/[0.06] shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] relative overflow-hidden group">
            
            {/* Action Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.04]">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-ping" />
                <span className="text-[10px] font-bold text-gray-400 font-mono tracking-widest uppercase">
                  SIM-MAPPA: #GRID_CANT_MILANO
                </span>
              </div>
              <button
                id="toggle-live-signal"
                onClick={() => setIsLiveSignal(!isLiveSignal)}
                className={`text-[9px] font-mono font-bold px-3 py-1.5 rounded-full border cursor-pointer transition-all duration-300 ${
                  isLiveSignal 
                    ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20 hover:bg-yellow-400/20' 
                    : 'bg-white/[0.02] text-gray-500 border-white/[0.05] hover:bg-white/[0.05]'
                }`}
              >
                {isLiveSignal ? '● SEGNALE LIVE' : '○ DISATTIVO'}
              </button>
            </div>

            <p className="text-xs text-gray-400 mb-4 font-light italic">
              Fai clic sui nodi radar interattivi per mappare la telemetria delle zone del cantiere.
            </p>

            {/* Interactive Vector Board */}
            <div className="relative flex-1 bg-black/60 border border-white/[0.04] rounded-2xl p-4 flex items-center justify-center min-h-[380px] md:min-h-[440px] overflow-hidden">
              
              {/* Radar Rotating Line */}
              {isLiveSignal && (
                <div 
                  className="absolute aspect-square w-[540px] pointer-events-none opacity-15 border border-yellow-500/10 rounded-full"
                  style={{
                    transform: `rotate(${radialTick}deg)`,
                    backgroundImage: 'conic-gradient(from 0deg, rgba(234,179,8,0.2) 0deg, rgba(234,179,8,0) 125deg)'
                  }}
                />
              )}

              {/* Decorative Concentric Rings */}
              <div className="absolute w-[180px] h-[180px] border border-dashed border-white/[0.03] rounded-full pointer-events-none" />
              <div className="absolute w-[320px] h-[320px] border border-dashed border-white/[0.02] rounded-full pointer-events-none" />
              <div className="absolute w-[480px] h-[480px] border border-dashed border-white/[0.01] rounded-full pointer-events-none" />

              {/* Grid axes */}
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/[0.02] pointer-events-none" />
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/[0.02] pointer-events-none" />

              {/* Abstract SVG Wireframe of building structure */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 50 150 L 250 50 L 550 150 L 350 250 Z" stroke="#ffffff" strokeWidth="1" fill="none" />
                <path d="M 50 280 L 250 180 L 550 280 L 350 380 Z" stroke="#ffffff" strokeWidth="1" fill="none" />
                <path d="M 120 80 L 120 210" stroke="#ffffff" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 450 100 L 450 230" stroke="#ffffff" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 280 180 L 280 310" stroke="#ffffff" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 180 50 L 180 130 M 130 50 L 230 50" stroke="#ffffff" strokeWidth="1.5" />
              </svg>

              {/* Interactive Hotspots with gold yellow styling */}
              <div className="absolute inset-0 z-20">
                {zones.map((zone) => {
                  const isActive = selectedZone === zone.id;
                  
                  return (
                    <button
                      key={zone.id}
                      id={`hotspot-${zone.id}`}
                      style={{
                        left: `${zone.coordinateX}%`,
                        top: `${zone.coordinateY}%`,
                        transform: 'translate(-50%, -50%)',
                        position: 'absolute'
                      }}
                      onClick={() => setSelectedZone(zone.id)}
                      className="group/btn focus:outline-none cursor-pointer"
                    >
                      {/* Highlight Outer ring */}
                      <span className={`absolute -inset-4 rounded-full border ${
                        isActive ? 'scale-125 opacity-100 animate-pulse border-yellow-405/20 bg-yellow-450/[0.02]' : 'scale-50 opacity-0 group-hover/btn:scale-100 group-hover/btn:opacity-40 border-white/[0.08]'
                      } transition-all duration-300`} />

                      {/* Diagnostic Ping */}
                      {isLiveSignal && (zone.riskLevel === 'Sospeso' || zone.riskLevel === 'Attenzione') && (
                        <span className="absolute -inset-1 rounded-full bg-yellow-400 opacity-30 animate-ping pointer-events-none" />
                      )}

                      {/* Content Node Pill */}
                      <div className={`relative px-4 py-2 rounded-xl border flex items-center gap-2.5 transition-all duration-300 shadow-xl ${
                        isActive
                          ? `bg-black border-yellow-400 text-yellow-400 scale-110 z-10 font-bold`
                          : `bg-black/90 border-white/[0.06] text-gray-400 hover:text-white hover:border-white/[0.2]`
                      }`}>
                        {zone.icon}
                        <span className="text-[10px] font-bold uppercase tracking-widest font-mono">
                          {zone.name.split(' ')[0]}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Compass decor */}
              <div className="absolute right-4 bottom-4 flex flex-col items-center gap-1 opacity-20 select-none">
                <div className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-[10px] font-mono text-gray-400 font-bold relative">
                  N
                  <span className="absolute top-0 w-0.5 h-2.5 bg-yellow-400 rounded-full" style={{ transform: 'translateY(-1px)' }} />
                </div>
                <span className="text-[7px] font-mono text-gray-500">ST-GRID</span>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="mt-6 p-4 rounded-xl bg-white/[0.01] border border-white/[0.04] flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 font-mono text-[10px] font-bold select-none leading-none">
                  ONLINE
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-500 uppercase font-mono">Stato Gateway dailyplatform</p>
                  <p className="text-[11px] text-gray-300 font-medium">Wearable WIDIU attivi ed allineati via ripetitori radio di cantiere</p>
                </div>
              </div>
              <span className="text-[10px] text-gray-600 font-mono">GATE: a48f8547_XMIN02</span>
            </div>
          </div>

          {/* Right: Detailed Glass Panel (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-white/[0.01] backdrop-blur-3xl border border-white/[0.06] shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] h-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeZone.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-2.5">
                      <span className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        {activeZone.icon}
                      </span>
                      <div>
                        <span className="text-[9px] font-bold font-mono text-gray-500 uppercase tracking-widest block">REPARTO MONITORTATO</span>
                        <h3 className="text-base font-bold text-white leading-tight mt-0.5">{activeZone.name}</h3>
                      </div>
                    </div>

                    {/* Risk Badge with gold-yellow accentuation */}
                    <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-widest ${
                      activeZone.riskLevel === 'Sicuro'
                        ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20'
                        : activeZone.riskLevel === 'Attenzione'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {activeZone.riskLevel}
                    </span>
                  </div>

                  {/* Operative Actions */}
                  <div className="mb-6">
                    <p className="text-[10px] text-gray-550 uppercase font-mono font-bold tracking-widest mb-2">Mansioni Operative</p>
                    <p className="text-xs text-gray-300 leading-relaxed bg-white/[0.01] p-3.5 rounded-xl border border-white/[0.04]">
                      {activeZone.workDescription}
                    </p>
                  </div>

                  {/* Telemetry data info */}
                  <div className="mb-6">
                    <p className="text-[10px] text-gray-550 uppercase font-mono font-bold tracking-widest mb-3">Telemetria Sensori (D&amp;S)</p>
                    <div className="grid grid-cols-2 gap-3">
                      {activeZone.parameters.map((param, index) => (
                        <div key={index} className="p-3 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                          <p className="text-[9px] text-gray-500 uppercase font-mono">{param.label}</p>
                          <p className={`text-xs font-bold font-mono mt-1 ${
                            param.status === 'success'
                              ? 'text-yellow-400'
                              : param.status === 'warning'
                              ? 'text-amber-400'
                              : 'text-red-400'
                          }`}>
                            {param.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Required DPI */}
                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <HardHat className="w-4 h-4 text-yellow-400" />
                      <p className="text-[10px] text-gray-550 uppercase font-mono font-bold tracking-widest">DPI Obbligatori (D.Lgs. 81/08)</p>
                    </div>
                    <ul className="space-y-1.5">
                      {activeZone.requiredDPI.map((dpi, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                          <span>{dpi}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech active representation */}
                <div className="pt-6 border-t border-white/[0.06] bg-gradient-to-r from-yellow-500/[0.02] to-transparent p-4 rounded-2xl border border-yellow-500/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-yellow-400" strokeWidth={2} />
                    <p className="text-[10px] text-white font-bold uppercase font-mono tracking-wider">Integrazione Predittiva Daily</p>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {activeZone.appliedTechnology}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
