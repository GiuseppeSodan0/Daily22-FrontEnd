import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {Link} from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Radio,
  Sliders,
  BellRing,
  Cpu,
  Database,
  ShieldCheck,
  CheckCircle,
  Network,
  Users,
  Terminal,
  LineChart,
  Zap,
  Globe,
  Settings,
  Share2,
  Lock,
  ChevronRight,
  RefreshCw,
  Layers,
  AlertTriangle,
} from 'lucide-react';



const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {opacity: 0, y: 20, filter: 'blur(4px)'},
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {duration: 0.6, ease: 'easeOut'},
  },
};

// Interactive Payload Examples
const PAYLOAD_PRESETS = {
  wearable: {
    title: 'Smartwatch WIDIU',
    icon: Cpu,
    payload: {
      device_id: "WD-9821-X",
      timestamp: "2026-07-17T02:40:00Z",
      metrics: {
        heart_rate_bpm: 82,
        body_temp_c: 36.6,
        oxygen_level_pct: 98,
        activity_level: "active",
        posture_state: "upright",
        fall_detected: false
      },
      firmware_ver: "v2.1.4-edge"
    }
  },
  badge: {
    title: 'Badge Ambientale',
    icon: Radio,
    payload: {
      device_id: "SB-4402-E",
      timestamp: "2026-07-17T02:40:00Z",
      metrics: {
        ambient_temp_c: 41.5,
        humidity_pct: 78,
        gas_co_ppm: 12,
        noise_level_db: 74,
        battery_pct: 92
      },
      firmware_ver: "v1.8.9"
    }
  },
  crane_sensor: {
    title: 'Sensore Macchinari',
    icon: Settings,
    payload: {
      device_id: "CR-7710-P",
      timestamp: "2026-07-17T02:40:00Z",
      metrics: {
        vibration_g: 0.12,
        tilt_deg: 2.1,
        load_ton: 14.5,
        hydraulic_pressure_bar: 180,
        hours_operated: 1420
      },
      firmware_ver: "v4.0.2"
    }
  }
};

export default function Vera() {
  const { t, lang } = useLanguage();
  const isEn = lang === 'en';

  // Set SEO Title and Meta Description on mount
  useEffect(() => {
    document.title = isEn 
      ? "Vera | Real-Time IoT Software for Data Analysis, Monitoring & Alerts" 
      : "Vera | Software IoT per analisi dati, monitoraggio e alert in tempo reale";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', isEn
      ? 'Discover Vera, the Daily software to ingest, normalize, monitor and distribute real-time IoT data, converting signals from devices, sensors and wearables into dashboards, alerts and operational decisions.'
      : 'Scopri Vera, il software Daily per acquisire, normalizzare, monitorare e distribuire dati IoT in tempo reale, trasformando segnali da device, sensori e wearable in dashboard, alert e decisioni operative.');
  }, [isEn]);

  // Sandbox State
  const [activePreset, setActivePreset] = useState<'wearable' | 'badge' | 'crane_sensor'>('wearable');
  const [schemaFields, setSchemaFields] = useState<string[]>([]);
  const [isParsing, setIsParsing] = useState(false);
  const [customAlarms, setCustomAlarms] = useState<{field: string; threshold: string; state: 'ok' | 'critical'}[]>([]);

  // Alert simulation lifecycle state
  const [simActiveStep, setSimActiveStep] = useState<number>(-1);
  const [simLog, setSimLog] = useState<string[]>([]);

  // Parse schema when activePreset changes
  useEffect(() => {
    setIsParsing(true);
    const timer = setTimeout(() => {
      const presetData = PAYLOAD_PRESETS[activePreset].payload;
      const flatKeys: string[] = [];
      
      const flattenKeys = (obj: any, prefix = '') => {
        Object.keys(obj).forEach(key => {
          if (typeof obj[key] === 'object' && obj[key] !== null) {
            flattenKeys(obj[key], `${prefix}${key}.`);
          } else {
            flatKeys.push(`${prefix}${key}`);
          }
        });
      };
      
      flattenKeys(presetData);
      setSchemaFields(flatKeys);
      setIsParsing(false);

      // Setup custom virtual alarms based on parsed metrics
      const alarms: typeof customAlarms = [];
      if (activePreset === 'wearable') {
        alarms.push({ field: 'metrics.heart_rate_bpm', threshold: '> 100 bpm', state: 'ok' });
        alarms.push({ field: 'metrics.fall_detected', threshold: '== true', state: 'ok' });
      } else if (activePreset === 'badge') {
        alarms.push({ field: 'metrics.ambient_temp_c', threshold: '> 40.0 °C', state: 'critical' }); // Critical stress temperature
        alarms.push({ field: 'metrics.gas_co_ppm', threshold: '> 30 ppm', state: 'ok' });
      } else {
        alarms.push({ field: 'metrics.vibration_g', threshold: '> 1.5 g', state: 'ok' });
        alarms.push({ field: 'metrics.hydraulic_pressure_bar', threshold: '> 220 bar', state: 'ok' });
      }
      setCustomAlarms(alarms);
    }, 450);

    return () => clearTimeout(timer);
  }, [activePreset]);

  // Run Alert simulator steps
  const triggerSimulation = () => {
    setSimActiveStep(0);
    setSimLog(isEn
      ? ["[DETECTION] Initiating continuous monitoring of incoming payloads...", "[DETECTION] Active biometric and environmental parameters detected."]
      : ["[DETECTION] Avvio monitoraggio continuo dei payload...", "[DETECTION] Rilevamento parametri biometrici ed ambientali attivi."]);
    
    const timers = [
      setTimeout(() => {
        setSimActiveStep(1);
        setSimLog(prev => [...prev, 
          isEn ? "[NOTIFICATION] WARNING: Critical ambient temperature (41.5°C) detected on Badge SB-4402-E." : "[NOTIFICATION] ATTENZIONE: Rilevata temperatura critica ambiente (41.5°C) su Badge SB-4402-E.", 
          isEn ? "[NOTIFICATION] Sending automatic push notification to supervisor wearables on site." : "[NOTIFICATION] Invio notifica push automatica ai wearable dei preposti di cantiere."
        ]);
      }, 1500),
      setTimeout(() => {
        setSimActiveStep(2);
        setSimLog(prev => [...prev, 
          isEn ? "[ESCALATION] Alert persistent after 60 seconds without feedback." : "[ESCALATION] Alert persistente dopo 60 secondi senza feedback.", 
          isEn ? "[ESCALATION] Escalating severity to CRITICAL. SMS message dispatched to company Safety Officer." : "[ESCALATION] Innalzamento severità a CRITICA. Messaggio SMS inoltrato al RSPP aziendale."
        ]);
      }, 3500),
      setTimeout(() => {
        setSimActiveStep(3);
        setSimLog(prev => [...prev, 
          isEn ? "[RESOLUTION] On-site intervention logged: Evacuation of risk area." : "[RESOLUTION] Intervento registrato sul posto: Allontanamento area a rischio.", 
          isEn ? "[RESOLUTION] Confirmation of parameter normalization and manual alarm closure." : "[RESOLUTION] Conferma di rientro parametri di sicurezza e chiusura manuale dell'allarme."
        ]);
      }, 5500),
      setTimeout(() => {
        setSimActiveStep(4);
        setSimLog(prev => [...prev, 
          isEn ? "[AUDIT] Consolidating logs and historical metrics for the event." : "[AUDIT] Consolidamento log e metriche storiche dell'evento.", 
          isEn ? "[AUDIT] Original payload and response time records archived in compliance with ISO 45001." : "[AUDIT] Payload originario e tracciato dei tempi di risposta archiviati in conformità ISO 45001."
        ]);
      }, 7500),
    ];

    return () => timers.forEach(clearTimeout);
  };

  const activePresetInfo = PAYLOAD_PRESETS[activePreset];

  return (
    <div className="bg-[#F0EFEB] text-[#2C2C2E] font-sans overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-36 pb-24 text-left">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-[#F2C400]/5 blur-[160px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.span 
                variants={itemVariants}
                className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 bg-[#2C2C2E]/5 px-3.5 py-2 rounded-full border border-[#2C2C2E]/10 font-mono"
              >
                <Activity className="w-3.5 h-3.5 text-[#F2C400]" />
                <span>{t('vera.heroBadge')}</span>
              </motion.span>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans text-[#2C2C2E] tracking-tight leading-tight"
              >
                {t('vera.heroTitle')}
              </motion.h1>
              
              <motion.h2
                variants={itemVariants}
                className="text-lg sm:text-2xl font-bold font-sans text-[#2C2C2E] leading-snug uppercase tracking-wide text-[#F2C400]"
              >
                {t('vera.heroSub')}
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-xs sm:text-sm leading-relaxed font-mono text-[#5E5E62]"
              >
                {t('vera.heroDesc')}
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a
                  href="#funzionamento"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F2C400] text-[#2C2C2E] text-xs font-bold font-sans uppercase tracking-wider hover:bg-[#F2C400]/90 transition-all duration-300 shadow-[0_4px_14px_rgba(242,196,0,0.25)] hover:shadow-[0_6px_20px_rgba(242,196,0,0.35)] active:scale-95 font-semibold"
                >
                  {t('dailyplatform.discoverBtn')}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#2C2C2E] text-xs font-bold font-sans uppercase tracking-wider border border-[#2C2C2E]/10 hover:bg-[#F0EFEB] hover:border-[#2C2C2E]/20 transition-all duration-300 active:scale-95"
                >
                  {t('vera.buyBtn')}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right Image Display */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <motion.div
                variants={itemVariants}
                className="relative w-full max-w-[520px] flex items-center justify-center"
              >
                {/* Decorative brand yellow tech dots */}
                <div className="absolute -top-3 left-6 w-3.5 h-3.5 rounded-full bg-[#F2C400] shadow-[0_0_12px_rgba(242,196,0,0.7)] z-10 pointer-events-none" />
                <div className="absolute top-1/3 -right-3 w-2.5 h-2.5 rounded-full bg-[#F2C400]/80 shadow-[0_0_8px_rgba(242,196,0,0.5)] z-10 pointer-events-none" />
                <div className="absolute -bottom-3 right-1/3 w-3 h-3 rounded-full bg-[#F2C400]/90 shadow-[0_0_10px_rgba(242,196,0,0.6)] z-10 pointer-events-none" />
                <div className="absolute bottom-1/4 -left-3 w-2 h-2 rounded-full bg-[#F2C400]/60 z-10 pointer-events-none" />
                <div className="absolute top-6 right-12 w-2 h-2 rounded-full bg-[#F2C400]/75 z-10 pointer-events-none" />

                <img
                  src="/assets/images/Dashboard Vera.png"
                  alt="Dashboard Vera per monitoraggio IoT, telemetria e alert in tempo reale"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[420px] object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-transform duration-700 hover:scale-[1.02]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEZIONE 1 — Perché Vera */}
      <section className="py-24 bg-white text-left relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
              {isEn ? 'The Necessity' : 'La Necessità'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'The value is not receiving data, but making it actionable' : 'Il valore non è ricevere dati, ma renderli utilizzabili'}
            </h2>
            <p className="mt-6 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
              {isEn
                ? 'IoT projects generate continuous streams, heterogeneous formats, and distributed responsibilities across teams, devices, and enterprise systems. Real value does not lie in simply receiving MQTT messages, but in converting them into reliable, understandable, and actionable intelligence.'
                : 'I progetti IoT producono flussi continui, formati eterogenei e responsabilità distribuite tra team, device e sistemi aziendali. Il valore reale non consiste semplicemente nel ricevere messaggi MQTT, ma nel trasformarli in informazioni affidabili, comprensibili e utilizzabili.'}
            </p>
            <p className="mt-4 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
              {isEn
                ? 'Vera builds a unified operational layer on top of brokers, topics, payloads, and enterprise applications, reducing the complexity of fragmented IoT architectures.'
                : 'Vera costruisce un livello operativo unificato sopra broker, topic, payload e applicazioni aziendali, riducendo la complessità delle architetture IoT frammentate.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(isEn
              ? [
                  {
                    title: "Reliability & Persistence",
                    desc: "Controlled payload storage and complete traceability even during anomalies, audits, or operational disputes."
                  },
                  {
                    title: "Universal Understandability",
                    desc: "Technical data made readable for people and systems through schema discovery, custom views, and dashboards."
                  },
                  {
                    title: "Contextual Correlation",
                    desc: "Every message is linked to user, company, device, and operational context to give signals real meaning."
                  },
                  {
                    title: "Real-Time Actionability",
                    desc: "Dashboards, alerts, and APIs update data without noticeable delay, enabling prompt intervention."
                  },
                  {
                    title: "API Accessibility",
                    desc: "Data is available beyond the platform via versioned REST APIs, JWT, exports, and authorized integrations."
                  },
                  {
                    title: "Alert Transformation",
                    desc: "Thresholds and rules convert raw data into operational alarms complete with escalation and full auditing."
                  }
                ]
              : [
                  {
                    title: "Affidabilità e persistenza",
                    desc: "Conservazione controllata del payload e tracciabilità completa anche in caso di anomalie, verifiche o dispute operative."
                  },
                  {
                    title: "Comprensibilità universale",
                    desc: "Dati tecnici resi leggibili per persone e sistemi, con schema discovery, viste personalizzate e dashboard."
                  },
                  {
                    title: "Correlazione contestuale",
                    desc: "Ogni messaggio viene collegato a utente, azienda, device e contesto operativo per dare significato al segnale."
                  },
                  {
                    title: "Utilizzabilità in tempo reale",
                    desc: "Dashboard, alert e API aggiornano i dati senza ritardi percepibili, permettendo interventi tempestivi."
                  },
                  {
                    title: "Accessibilità via API",
                    desc: "I dati sono disponibili anche fuori dalla piattaforma tramite API REST versionate, JWT, export e integrazioni autorizzate."
                  },
                  {
                    title: "Trasformazione in alert",
                    desc: "Soglie e regole convertono i dati in allarmi operativi con escalation e audit completo."
                  }
                ]
            ).map((card, i) => (
              <div 
                key={i} 
                className="p-8 rounded-[24px] bg-[#F0EFEB]/40 border border-[#2C2C2E]/5 hover:border-[#F2C400]/40 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3.5 rounded-xl bg-white w-fit mb-6 border border-[#2C2C2E]/5 group-hover:bg-[#F2C400]/10 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-[#2C2C2E] group-hover:text-[#F2C400] transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-[#2C2C2E] mb-3 font-sans uppercase tracking-tight">{card.title}</h3>
                  <p className="text-xs font-mono text-[#5E5E62] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE 2 — Che cos’è Vera */}
      <section className="py-24 bg-[#F0EFEB] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
                {isEn ? 'The Platform' : 'La Piattaforma'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
                {isEn 
                  ? 'An IoT platform to ingest, normalize, and monitor real-time data' 
                  : 'Una piattaforma IoT per acquisire, normalizzare e monitorare dati in tempo reale'}
              </h2>
            </div>
            <div className="lg:col-span-6 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
              {isEn ? (
                <>
                  Vera unifies data collection, normalization, telemetry, alerts, device registry, APIs, and export in a single integrated platform. Every stream from smartwatches, badges, sensors, mobile apps, or MQTT brokers is ingested, organized, contextualized, and made actionable for people, dashboards, enterprise systems, and analytics models.
                  <br /><br />
                  Vera makes IoT data governable, traceable, and ready for integration into business processes and external applications.
                </>
              ) : (
                <>
                  Vera unifica raccolta dati, normalizzazione, telemetria, alert, device registry, API ed export in una sola piattaforma integrata. Ogni flusso proveniente da smartwatch, badge, sensori, app mobile o broker MQTT viene acquisito, organizzato, contestualizzato e reso utilizzabile per persone, dashboard, sistemi aziendali e modelli di analisi.
                  <br /><br />
                  Vera rende il dato IoT governabile, tracciabile e pronto per l’integrazione con processi aziendali e applicazioni esterne.
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "Data Ingestion",
                desc: isEn ? "Centralization of incoming streams from devices, brokers, apps, and connected systems." : "Centralizzazione dei flussi in ingresso da device, broker, app e sistemi connessi."
              },
              {
                icon: Database,
                title: "Collection Engine",
                desc: isEn ? "Continuous collection, automatic normalization, and original payload preservation." : "Raccolta continua, normalizzazione automatica e conservazione del payload originale."
              },
              {
                icon: BellRing,
                title: "Telemetry & Alerts",
                desc: isEn ? "Real-time monitoring, thresholds, notifications, escalation, and event traceability." : "Monitoraggio in tempo reale, soglie, notifiche, escalation e tracciabilità degli eventi."
              },
              {
                icon: Sliders,
                title: "Device Registry",
                desc: isEn ? "Centralized registry for devices, identities, users, companies, and permissions." : "Anagrafe centralizzata dei dispositivi, identità, utenti, aziende e permessi."
              },
              {
                icon: Terminal,
                title: "Payload Explorer",
                desc: isEn ? "Dynamic JSON parsing, metric selection, and automatic generation of charts and views." : "Lettura dei JSON dinamici, selezione delle metriche e generazione automatica di grafici e viste."
              },
              {
                icon: Network,
                title: "API-first",
                desc: isEn ? "REST APIs, OpenAPI, JWT, webhooks, CSV/XLSX export, and enterprise system integration." : "API REST, OpenAPI, JWT, webhook, export CSV/XLSX e integrazione con sistemi aziendali."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="p-8 rounded-[24px] bg-white border border-[#2C2C2E]/5 hover:border-[#F2C400]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3.5 rounded-xl bg-[#F0EFEB]/50 w-fit mb-6 border border-[#2C2C2E]/5 group-hover:bg-[#F2C400]/10 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#2C2C2E] group-hover:text-[#F2C400] transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-[#2C2C2E] mb-3 font-sans uppercase tracking-tight">{item.title}</h3>
                  <p className="text-xs font-mono text-[#5E5E62] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE 3 — Dal device all’informazione */}
      <section className="py-24 bg-white text-left relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
              {isEn ? 'Infrastructure' : 'Infrastruttura'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'An end-to-end flow, from source to operational usage' : 'Un flusso end-to-end, dalla sorgente all’uso operativo'}
            </h2>
            <p className="mt-4 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
              {isEn
                ? 'Vera\'s data flow is designed to ensure data integrity, traceability, and recoverability at every stage. Every step remains traceable back to the source via a complete audit trail, while metrics are extracted without losing the original payload context.'
                : 'Il flusso dati di Vera è progettato per garantire integrità, tracciabilità e recuperabilità dell’informazione in ogni fase. Ogni passaggio resta riconducibile alla sorgente tramite audit trail completo, mentre le metriche vengono estratte senza perdere il contesto originale del payload.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Interactive Flow Diagram */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
              {(isEn
                ? [
                    {step: "01", title: "Data dispatch", desc: "Devices, smartwatches, badges, sensors, or apps transmit raw data." },
                    {step: "02", title: "MQTT Broker", desc: "Streams are received by configurable brokers and topics." },
                    {step: "03", title: "Persistent listeners", desc: "Vera maintains active, monitored, and verified connections." },
                    {step: "04", title: "Normalization", desc: "Data is parsed, organized, and transformed into actionable metrics." },
                    {step: "05", title: "Distribution", desc: "The same data feeds dashboards, alerts, CRMs, APIs, exports, and AI systems." }
                  ]
                : [
                    {step: "01", title: "Invio dati", desc: "Device, smartwatch, badge, sensori o app inviano dati grezzi." },
                    {step: "02", title: "Broker MQTT", desc: "I flussi vengono ricevuti da broker e topic configurabili." },
                    {step: "03", title: "Listener persistenti", desc: "Vera mantiene connessioni attive, controllate e monitorate." },
                    {step: "04", title: "Normalizzazione", desc: "I dati vengono interpretati, organizzati e trasformati in metriche utilizzabili." },
                    {step: "05", title: "Distribuzione", desc: "Lo stesso dato può alimentare dashboard, alert, CRM, API, export e sistemi AI." }
                  ]
              ).map((flow, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-6 p-5 rounded-2xl bg-[#F0EFEB]/50 border border-[#2C2C2E]/5 hover:border-[#F2C400]/40 transition-all duration-300 group"
                >
                  <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-bold font-mono text-[#F2C400] text-sm group-hover:bg-[#F2C400]/10 shrink-0 border border-[#2C2C2E]/5">
                    {flow.step}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold uppercase font-sans text-[#2C2C2E]">{flow.title}</h4>
                    <p className="text-xs font-mono text-[#5E5E62] mt-0.5">{flow.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Principles key box */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-[#F0EFEB] border border-[#2C2C2E]/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold font-mono text-[#2C2C2E]/50 uppercase tracking-widest">
                  {isEn ? 'Key Principles' : 'Principi chiave'}
                </span>
                <h3 className="text-md font-bold font-sans text-[#2C2C2E] uppercase mt-2 mb-6">
                  {isEn ? 'Flow key principles' : 'Principi chiave del flusso'}
                </h3>
                <ul className="space-y-4 font-mono text-xs text-[#5E5E62]">
                  <li className="flex gap-2 items-start">
                    <CheckCircle className="w-4 h-4 text-[#F2C400] shrink-0 mt-0.5" />
                    <span>{isEn ? 'The original JSON is preserved when required by persistence policy.' : 'Il JSON originale viene preservato quando la policy prevede persistenza.'}</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle className="w-4 h-4 text-[#F2C400] shrink-0 mt-0.5" />
                    <span>{isEn ? 'Every processing step is traceable to its source via audit trail.' : 'Ogni elaborazione resta riconducibile alla sorgente tramite audit trail.'}</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle className="w-4 h-4 text-[#F2C400] shrink-0 mt-0.5" />
                    <span>{isEn ? 'Metrics are extracted without losing original payload context.' : 'Le metriche vengono estratte senza perdere il contesto originale.'}</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle className="w-4 h-4 text-[#F2C400] shrink-0 mt-0.5" />
                    <span>{isEn ? 'The same data feeds operators, CRMs, alerts, and AI models simultaneously.' : 'Lo stesso dato può alimentare operatori, CRM, alert e sistemi AI simultaneamente.'}</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#2C2C2E]/5 flex gap-3 items-center mt-8">
                <ShieldCheck className="w-6 h-6 text-[#F2C400] shrink-0" />
                <span className="text-[10px] font-mono text-[#5E5E62] leading-relaxed">
                  {isEn ? 'Compliant with end-to-end encryption and TLS/MQTTS protocols.' : 'Conforme a standard di cifratura end-to-end e protocolli TLS/MQTTS.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 4 — JSON dinamici e Payload Explorer (INTERACTIVE SANDBOX) */}
      <section className="py-24 bg-[#F0EFEB] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
              {isEn ? 'Flexibility & Intelligence' : 'Flessibilità & Intelligenza'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'The software adapts to incoming data' : 'Il software si adatta ai dati ricevuti'}
            </h2>
            <p className="mt-4 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
              {isEn
                ? 'Vera does not impose a rigid data model. When a new JSON packet arrives, the Runtime Collection Engine automatically analyzes its structure, understands fields, hierarchies, and units of measurement, transforming heterogeneous payloads into actionable metrics.'
                : 'Vera non impone un modello dati rigido. Quando arriva un nuovo JSON, il Runtime Collection Engine analizza automaticamente la struttura, comprende campi, gerarchie e unità di misura, e trasforma payload eterogenei in metriche utilizzabili.'}
            </p>
            <p className="mt-2 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
              {isEn
                ? 'The original payload is preserved, while detected fields become dynamic columns, trend graphs, and data ready for dashboards, auditing, and analysis.'
                : 'Il payload originale viene conservato, mentre i campi rilevati diventano colonne dinamiche, serie grafiche e dati pronti per dashboard, audit e analisi.'}
            </p>
          </div>

          {/* Interactive Payload Sandbox Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 bg-white rounded-3xl p-6 sm:p-8 border border-[#2C2C2E]/10 shadow-sm">
            
            {/* Presets and JSON Input */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase font-sans tracking-wide text-[#2C2C2E] mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#F2C400]" />
                  <span>Payload Explorer Sandbox</span>
                </h3>
                <p className="text-[11px] font-mono text-[#5E5E62] mb-6 leading-relaxed">
                  {isEn
                    ? 'Select an IoT source to simulate JSON packet transmission. Vera\'s Runtime Collection Engine will execute schema discovery in real time.'
                    : 'Seleziona una sorgente IoT per simulare la trasmissione del pacchetto JSON. Il Runtime Collection Engine di Vera eseguirà lo schema discovery in tempo reale.'}
                </p>

                {/* Preset selectors */}
                <div className="flex gap-3 mb-6">
                  {(Object.keys(PAYLOAD_PRESETS) as Array<keyof typeof PAYLOAD_PRESETS>).map((presetKey) => {
                    const preset = PAYLOAD_PRESETS[presetKey];
                    const PresetIcon = preset.icon;
                    const presetTitle = isEn
                      ? (presetKey === 'wearable' ? 'WIDIU Smartwatch' : presetKey === 'badge' ? 'Environmental Badge' : 'Machinery Sensor')
                      : preset.title;
                    return (
                      <button
                        key={presetKey}
                        onClick={() => setActivePreset(presetKey)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-mono text-[11px] font-bold tracking-tight transition-all uppercase ${
                          activePreset === presetKey
                            ? 'bg-[#2C2C2E] text-white border-[#2C2C2E]'
                            : 'bg-[#F0EFEB]/50 text-[#5E5E62] border-[#2C2C2E]/10 hover:border-[#2C2C2E]/30'
                        }`}
                      >
                        <PresetIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>{presetTitle}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Code window */}
              <div className="rounded-2xl bg-[#2C2C2E] p-5 font-mono text-xs text-[#F0EFEB] overflow-x-auto relative shadow-inner">
                <div className="absolute top-3 right-4 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <pre className="leading-relaxed select-all">
                  {JSON.stringify(activePresetInfo.payload, null, 2)}
                </pre>
              </div>
            </div>

            {/* Parsing Results and Discovery Schema */}
            <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#2C2C2E]/10 pt-6 lg:pt-0 lg:pl-8">
              <div>
                <h4 className="text-xs font-bold font-sans uppercase tracking-widest text-[#2C2C2E] mb-4">
                  {isEn ? 'Real-time Schema Discovery' : 'Schema Discovery in tempo reale'}
                </h4>

                <AnimatePresence mode="wait">
                  {isParsing ? (
                    <div className="py-12 flex flex-col items-center justify-center gap-2 font-mono text-xs text-[#5E5E62]">
                      <RefreshCw className="w-5 h-5 animate-spin text-[#F2C400]" />
                      <span>{isEn ? 'Parsing JSON payload...' : 'Analisi JSON payload...'}</span>
                    </div>
                  ) : (
                    <motion.div
                      key={activePreset}
                      initial={{opacity: 0, y: 5}}
                      animate={{opacity: 1, y: 0}}
                      exit={{opacity: 0, y: -5}}
                      className="space-y-4"
                    >
                      <div className="p-3.5 rounded-xl bg-[#F0EFEB]/50 border border-[#2C2C2E]/5 font-mono text-[11px] text-[#5E5E62] flex justify-between items-center">
                        <span>{isEn ? 'Identified Schema:' : 'Schema identificato:'}</span>
                        <span className="font-bold text-[#2C2C2E] uppercase bg-white px-2 py-0.5 rounded border border-[#2C2C2E]/10">
                          {activePreset}
                        </span>
                      </div>

                      {/* Discovered fields list */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase font-mono text-[#2C2C2E]/40 tracking-wider">
                          {isEn ? 'Extracted fields:' : 'Campi estratti:'}
                        </span>
                        <div className="max-h-[160px] overflow-y-auto space-y-1.5 pr-2 font-mono text-[11px] text-[#5E5E62]">
                          {schemaFields.map((field) => (
                            <div key={field} className="flex justify-between items-center py-1 border-b border-[#2C2C2E]/5">
                              <span className="text-[#2C2C2E]/80">{field}</span>
                              <span className="text-[10px] font-bold bg-[#F2C400]/10 text-[#2C2C2E] px-1.5 py-0.5 rounded">
                                {field.includes('temp') || field.includes('rate') || field.includes('level') || field.includes('pct') || field.includes('co_ppm') || field.includes('vibration_g') || field.includes('pressure') ? 'number' : field.includes('detected') || field.includes('fall') ? 'boolean' : 'string'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Simulated Active Rules */}
                      <div className="space-y-2 pt-2">
                        <span className="text-[10px] font-bold uppercase font-mono text-[#2C2C2E]/40 tracking-wider">
                          {isEn ? 'Alarm thresholds:' : 'Soglie di allarme:'}
                        </span>
                        <div className="space-y-2">
                          {customAlarms.map((alarm, idx) => (
                            <div 
                              key={idx} 
                              className={`p-3 rounded-xl border flex items-center justify-between font-mono text-[11px] ${
                                alarm.state === 'critical' 
                                  ? 'bg-red-50 text-red-700 border-red-200' 
                                  : 'bg-green-50 text-green-700 border-green-200'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                                <span>{alarm.field} <strong className="font-bold">{alarm.threshold}</strong></span>
                              </div>
                              <span className="text-[9px] font-bold uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded">
                                {alarm.state === 'critical' ? (isEn ? 'TRIGGERED (CRITICAL)' : 'TRIGGERED (CRITICO)') : 'NORMAL'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-6 border-t border-[#2C2C2E]/10 flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#F2C400] shrink-0" />
                <span className="text-[10px] font-mono text-[#5E5E62] leading-relaxed">
                  {isEn ? 'Supports MQTT, WebSockets, HTTP POST, gRPC, and CoAP.' : 'Supporta MQTT, WebSockets, HTTP POST, gRPC e CoAP.'}
                </span>
              </div>
            </div>
          </div>

          {/* Cards why Vera adapts (6 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(isEn
              ? [
                  {
                    title: "Original Payload Preservation",
                    desc: "Raw JSON is archived in full prior to any processing, guaranteeing retroactive auditability and complete lineage."
                  },
                  {
                    title: "Topic & Collection Recognition",
                    desc: "The system automatically identifies origin topics and maps or dynamically generates the correct collection."
                  },
                  {
                    title: "Recursive Exploration",
                    desc: "Nested fields and complex objects are deeply parsed to extract actionable metrics."
                  },
                  {
                    title: "Schema Versioning",
                    desc: "The evolution of JSON structures is tracked over time to seamlessly handle app and firmware updates."
                  },
                  {
                    title: "Dynamic Visual Charts",
                    desc: "Selected numerical metrics populate tables, columns, and trend charts without custom code."
                  },
                  {
                    title: "Filters & Custom Views",
                    desc: "Data can be filtered by broker, collection, topic, MAC, date range, and relevant parameters."
                  }
                ]
              : [
                  {
                    title: "Conservazione del payload originale",
                    desc: "Il JSON grezzo viene archiviato integralmente prima di qualsiasi elaborazione, garantendo audit retroattivi e tracciabilità."
                  },
                  {
                    title: "Riconoscimento topic e collection",
                    desc: "Il sistema identifica automaticamente il topic di provenienza e associa o crea la collection corretta."
                  },
                  {
                    title: "Esplorazione ricorsiva",
                    desc: "Campi annidati e oggetti complessi vengono letti in profondità per individuare metriche utili."
                  },
                  {
                    title: "Versionamento dello schema",
                    desc: "L’evoluzione della struttura JSON viene tracciata nel tempo per gestire aggiornamenti firmware e app."
                  },
                  {
                    title: "Grafici dinamici",
                    desc: "Le metriche numeriche selezionate generano tabelle, colonne e grafici senza sviluppo custom."
                  },
                  {
                    title: "Filtri e selezione",
                    desc: "I dati possono essere filtrati per broker, collection, topic, MAC, data e metriche rilevanti."
                  }
                ]
            ).map((card, i) => (
              <div 
                key={i} 
                className="p-8 rounded-[24px] bg-white border border-[#2C2C2E]/5 hover:border-[#F2C400]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-1.5 h-6 bg-[#F2C400] mb-6 rounded-full" />
                  <h3 className="text-sm font-bold text-[#2C2C2E] mb-3 font-sans uppercase tracking-tight">{card.title}</h3>
                  <p className="text-xs font-mono text-[#5E5E62] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE 5 — Telemetry, alert e sicurezza operativa */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
              Signal & Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'Live monitoring and operational alerts' : 'Monitoraggio live e alert operativi'}
            </h2>
            <p className="mt-4 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed max-w-2xl mx-auto">
              {isEn
                ? 'Vera combines physiological and environmental monitoring, operational alerts, and end-to-end traceability into a single workflow. Data from smartwatches, badges, and connected devices is observed in real time to intercept variations, anomalies, and risk conditions before they become critical.'
                : 'Vera unisce monitoraggio fisiologico e ambientale, alert operativi e tracciabilità end-to-end in un unico flusso di lavoro. I dati provenienti da smartwatch, badge e dispositivi connessi vengono osservati in tempo reale per intercettare variazioni, anomalie e condizioni di rischio prima che diventino critiche.'}
            </p>
          </div>

          {/* Sequential Flow steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {(isEn
              ? [
                  {step: "01", name: "Data Collection", desc: "Continuous ingestion from smartwatches, badges, and connected devices." },
                  {step: "02", name: "Live Monitoring", desc: "Real-time observation of physiological, environmental, and operational parameters." },
                  {step: "03", name: "Alert Generation", desc: "When a threshold is crossed, Vera generates an immediate, contextualized alert." },
                  {step: "04", name: "Operational Action", desc: "Operators or supervisors intervene through guided and documented actions." },
                  {step: "05", name: "Audit & History", desc: "Status, delivery, response times, and diagnostic logs remain fully tracked." }
                ]
              : [
                  {step: "01", name: "Raccolta dati", desc: "Acquisizione continua da smartwatch, badge e dispositivi connessi." },
                  {step: "02", name: "Monitoraggio live", desc: "Osservazione in diretta di parametri fisiologici, ambientali e operativi." },
                  {step: "03", name: "Generazione alert", desc: "Quando una soglia viene superata, Vera genera un alert immediato e contestualizzato." },
                  {step: "04", name: "Azione operativa", desc: "L’operatore o il responsabile interviene con un’azione guidata e documentata." },
                  {step: "05", name: "Audit", desc: "Stato, consegne, tempi di risposta e diagnostica restano tracciati." }
                ]
            ).map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F0EFEB]/40 border border-[#2C2C2E]/5 hover:border-[#F2C400]/30 transition-all text-center flex flex-col items-center group">
                <span className="text-xs font-bold font-mono text-[#F2C400] bg-[#F2C400]/10 px-3 py-1.5 rounded-full mb-4">
                  {step.step}
                </span>
                <h4 className="text-xs font-bold uppercase font-sans tracking-wide text-[#2C2C2E] mb-2">{step.name}</h4>
                <p className="text-[11px] font-mono text-[#5E5E62] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Alert Lifecycle section (INTERACTIVE SIMULATOR) */}
          <div className="p-8 sm:p-10 rounded-[32px] bg-[#F0EFEB]/30 border border-[#2C2C2E]/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <h3 className="text-md font-bold uppercase font-sans tracking-wide text-[#2C2C2E] flex items-center gap-2.5">
                <BellRing className="w-5 h-5 text-[#F2C400] animate-bounce" />
                <span>{isEn ? 'Alert Lifecycle' : 'Ciclo di vita dell\'Alert (Alert Lifecycle)'}</span>
              </h3>
              
              <button
                onClick={triggerSimulation}
                className="px-5 py-2.5 rounded-full bg-[#2C2C2E] text-[#F0EFEB] hover:bg-[#F2C400] hover:text-[#2C2C2E] text-xs font-bold font-mono uppercase tracking-widest transition-all shadow-md active:scale-95"
              >
                {simActiveStep === -1 
                  ? (isEn ? 'Launch Simulator' : 'Avvia simulatore') 
                  : (isEn ? 'Restart Simulation' : 'Riavvia simulazione')}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Lifecycle nodes */}
              <div className="lg:col-span-7 space-y-4">
                {(isEn
                  ? [
                      {step: 0, name: "Detection", desc: "An anomalous condition is identified across monitored parameters." },
                      {step: 1, name: "Notification", desc: "The alert is dispatched in real time to the appropriate recipients." },
                      {step: 2, name: "Escalation", desc: "Thresholds, severity levels, and automated assignments guide resolution." },
                      {step: 3, name: "Resolution", desc: "The incident is actively managed through to closure." },
                      {step: 4, name: "Audit Trail", desc: "Every step is logged for auditing, compliance, and continuous improvement." }
                    ]
                  : [
                      {step: 0, name: "Detection", desc: "Una condizione anomala viene identificata sui parametri monitorati." },
                      {step: 1, name: "Notification", desc: "L'alert viene inviato in tempo reale verso i destinatari corretti." },
                      {step: 2, name: "Escalation", desc: "Se necessario, soglie, severità e assegnazioni guidano la presa in carico." },
                      {step: 3, name: "Resolution", desc: "L'evento viene gestito fino alla chiusura." },
                      {step: 4, name: "Audit", desc: "Ogni passaggio resta tracciato per analisi e miglioramento continuo." }
                    ]
                ).map((item, idx) => {
                  const isActive = simActiveStep >= item.step;
                  const isCurrent = simActiveStep === item.step;
                  return (
                    <div 
                      key={idx} 
                      className={`border-l-4 pl-5 py-2 transition-all duration-500 ${
                        isCurrent 
                          ? 'border-[#F2C400] bg-white rounded-r-xl p-4 shadow-sm' 
                          : isActive 
                            ? 'border-[#2C2C2E]/80 opacity-90' 
                            : 'border-[#2C2C2E]/10 opacity-40'
                      }`}
                    >
                      <h4 className={`text-xs font-bold uppercase tracking-wide flex items-center gap-2 ${isActive ? 'text-[#2C2C2E]' : 'text-[#5E5E62]'}`}>
                        <span>{item.name}</span>
                        {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />}
                      </h4>
                      <p className="text-[11px] font-mono text-[#5E5E62] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Logs box */}
              <div className="lg:col-span-5 h-full">
                <div className="rounded-2xl bg-[#2C2C2E] p-5 font-mono text-xs text-[#F0EFEB] h-[340px] flex flex-col justify-between overflow-hidden shadow-inner">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-4 text-[10px] text-white/40 uppercase tracking-widest font-bold">
                    <span>Diagnostic terminal logs</span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span>Live stream</span>
                    </span>
                  </div>
                  <div className="flex-grow overflow-y-auto space-y-3 scrollbar-none pr-1">
                    {simLog.length === 0 ? (
                      <span className="text-[#F0EFEB]/30 italic">
                        {isEn
                          ? 'Click "Launch Simulator" to observe diagnostic stream and alert lifecycle in the terminal.'
                          : 'Clicca "Avvia simulatore" per osservare il flusso diagnostico e di gestione degli allarmi nel terminale.'}
                      </span>
                    ) : (
                      simLog.map((log, idx) => (
                        <div key={idx} className="leading-relaxed select-all">
                          <span className="text-[#F2C400] mr-2">➜</span>
                          <span>{log}</span>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="pt-3 border-t border-white/10 mt-4 text-[9px] text-white/30 text-right">
                    <span>SYS_STATE: ACTIVE_DAEMON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 6 — Device Registry, identità e governance */}
      <section className="py-24 bg-[#F0EFEB] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
                {isEn ? 'Control & Governance' : 'Controllo & Ruoli'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
                {isEn ? 'Every signal must trace to its origin device' : 'Ogni segnale deve sapere da quale device arriva'}
              </h2>
            </div>
            <div className="lg:col-span-6 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
              {isEn
                ? 'Vera links every IoT signal to the correct operational entities, creating a digital identity model connecting devices, users, and companies in a structured and verifiable manner. The platform enforces the principle of least privilege across all access levels.'
                : 'Vera collega ogni segnale IoT alle entità operative corrette, creando un modello di identità digitale che mette in relazione device, utenti e aziende in modo strutturato e verificabile. La piattaforma applica il principio del minimo privilegio a ogni livello di accesso.'}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sliders,
                title: "Device Identity",
                desc: isEn ? "Every badge, wearable, app, or gateway is registered with MAC address, UUID, and historical logs." : "Ogni badge, wearable, app o gateway viene registrato con MAC address, UUID e informazioni storiche."
              },
              {
                icon: Users,
                title: "User Authentication",
                desc: isEn ? "User-device relationships map every signal directly to the responsible individual." : "Le relazioni utente-device collegano ogni segnale alla persona corretta."
              },
              {
                icon: Globe,
                title: "Company Governance",
                desc: isEn ? "Scope is segmented per enterprise and verified server-side to guarantee data isolation." : "Lo scope viene delimitato per azienda e verificato server-side per garantire isolamento dei dati."
              },
              {
                icon: Lock,
                title: "Access Control",
                desc: isEn ? "Granular roles and permissions isolate human users, technical accounts, and machine-to-machine APIs." : "Ruoli e permessi granulari separano account umani, tecnici e integrazioni machine-to-machine."
              }
            ].map((rule, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#2C2C2E]/5 hover:border-[#F2C400]/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[#F0EFEB] w-fit mb-4 group-hover:bg-[#F2C400]/10 transition-colors">
                    <rule.icon className="w-4 h-4 text-[#2C2C2E] group-hover:text-[#F2C400] transition-colors" />
                  </div>
                  <h4 className="text-xs font-bold font-sans uppercase tracking-tight text-[#2C2C2E] mb-2">{rule.title}</h4>
                  <p className="text-[11px] font-mono text-[#5E5E62] leading-relaxed">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* SEZIONE 7 — API-first e interoperabilità */}
      <section className="py-24 bg-white text-left relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
                {isEn ? 'Integration' : 'Integrazione'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
                {isEn ? 'Data does not remain locked in the platform' : 'Il dato non resta chiuso nella piattaforma'}
              </h2>
            </div>
            <div className="lg:col-span-6 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
              {isEn
                ? 'Vera distributes data to authorized enterprise systems via versioned APIs, exports, and secure integrations. Its API-first architecture connects the platform with mobile apps, CRMs, BI tools, AI services, and internal operating systems.'
                : 'Vera distribuisce i dati verso sistemi aziendali autorizzati tramite API versionate, export e integrazioni sicure. L’architettura API-first permette di collegare la piattaforma ad app mobile, CRM, strumenti BI, servizi AI e sistemi operativi interni.'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "App Mobile",
                desc: isEn ? "Data access through secure APIs." : "Accesso ai dati tramite API sicure."
              },
              {
                icon: Sliders,
                title: "CRM",
                desc: isEn ? "Authorized synchronization with enterprise systems." : "Sincronizzazione autorizzata con sistemi aziendali."
              },
              {
                icon: LineChart,
                title: "BI Tools",
                desc: isEn ? "Advanced reporting, analytics, and custom dashboards." : "Reportistica, analisi e dashboard avanzate."
              },
              {
                icon: Cpu,
                title: "AI Services",
                desc: isEn ? "Predictive models and intelligent assistants consuming structured data." : "Modelli predittivi e assistenti intelligenti che consumano dati strutturati."
              },
              {
                icon: Share2,
                title: "Export",
                desc: isEn ? "CSV/XLSX export and standard data formats." : "Esportazione CSV/XLSX e formati standard."
              },
              {
                icon: Network,
                title: "OpenAPI & JWT",
                desc: isEn ? "Controlled, documented, and secure integration." : "Integrazione controllata, documentata e sicura."
              }
            ].map((blk, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-[24px] bg-[#F0EFEB]/40 border border-[#2C2C2E]/5 hover:border-[#F2C400]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3.5 rounded-xl bg-white w-fit mb-6 border border-[#2C2C2E]/5 group-hover:bg-[#F2C400]/10 transition-colors duration-300">
                    <blk.icon className="w-5 h-5 text-[#2C2C2E] group-hover:text-[#F2C400]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#2C2C2E] mb-3 font-sans uppercase tracking-tight">{blk.title}</h3>
                  <p className="text-xs font-mono text-[#5E5E62] leading-relaxed">{blk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE 8 — Casi d’uso */}
      <section className="py-24 bg-[#F0EFEB] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono font-semibold">
              {isEn ? 'Applicability' : 'Applicabilità'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'A platform for diverse operational scenarios' : 'Una piattaforma per scenari operativi diversi'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(isEn
              ? [
                  {
                    title: "Safety & Monitoring",
                    desc: "Wearables and badges to monitor physiological and environmental parameters in real time."
                  },
                  {
                    title: "Multi-Client Fleet IoT",
                    desc: "Asset and sensor management across multiple companies with data isolation and dedicated profiles."
                  },
                  {
                    title: "CRM & Mobile Integration",
                    desc: "Bridge to enterprise systems via REST APIs and authenticated webhooks."
                  },
                  {
                    title: "Predictive Analytics & AI",
                    desc: "Structured, AI-ready data feeding predictive models and intelligent assistants."
                  }
                ]
              : [
                  {
                    title: "Sicurezza e monitoring",
                    desc: "Wearable e badge per monitorare parametri fisiologici e ambientali in tempo reale."
                  },
                  {
                    title: "Fleet IoT multi-cliente",
                    desc: "Gestione di asset e sensori su più aziende con isolamento dei dati e profili dedicati."
                  },
                  {
                    title: "Integrazione CRM e mobile",
                    desc: "Bridge verso sistemi aziendali tramite API REST e webhook autenticati."
                  },
                  {
                    title: "Analisi predittiva e AI",
                    desc: "Dati strutturati e AI-ready per modelli predittivi e assistenti intelligenti."
                  }
                ]
            ).map((useCase, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-[24px] bg-white border border-[#2C2C2E]/5 hover:border-[#F2C400]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-md font-bold text-[#2C2C2E] mb-3 font-sans uppercase tracking-tight flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#F2C400]" />
                    <span>{useCase.title}</span>
                  </h3>
                  <p className="text-xs font-mono text-[#5E5E62] leading-relaxed pl-6">{useCase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE 9 — Esempio: sicurezza in cantiere */}
      <section className="py-24 bg-white text-left relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono font-semibold">
                {isEn ? 'Real Scenario' : 'Scenario Reale'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
                {isEn ? 'When data becomes prevention' : 'Quando il dato diventa prevenzione'}
              </h2>
            </div>
            <div className="lg:col-span-6 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
              {isEn ? (
                <>
                  In a construction site or high-risk operational environment, Vera receives data from smartwatches and badges worn by workers. Heart rate, body temperature, ambient temperature, position, and work hours can be monitored in real time.
                  <br /><br />
                  If the system detects an anomalous condition, such as elevated heart rate combined with critical ambient temperature, it generates an immediate alert for the supervisor. Every event is logged and made available for analysis, audit, and continuous improvement.
                </>
              ) : (
                <>
                  In un cantiere o in un ambiente operativo a rischio, Vera può ricevere dati da smartwatch e badge indossati dai lavoratori. Frequenza cardiaca, temperatura corporea, temperatura ambiente, posizione e ore lavorative possono essere monitorate in tempo reale.
                  <br /><br />
                  Se il sistema rileva una condizione anomala, come frequenza cardiaca elevata associata a temperatura critica, genera un alert immediato per il responsabile. Ogni evento viene registrato e reso disponibile per analisi, audit e miglioramento continuo.
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(isEn
              ? [
                  { title: "Integrated Monitoring", desc: "Smartwatches and badges collect vital, environmental, and operational data." },
                  { title: "Thermal Stress Detection", desc: "Vera identifies critical combinations between physiological and ambient data." },
                  { title: "Immediate Alerting", desc: "Supervisors are instantly notified to take timely action." },
                  { title: "Traceability & Compliance", desc: "Every event is recorded for auditing, analysis, and compliance verification." }
                ]
              : [
                  { title: "Monitoraggio integrato", desc: "Smartwatch e badge raccolgono dati vitali, ambientali e operativi." },
                  { title: "Rilevamento stress termico", desc: "Vera identifica combinazioni critiche tra dati fisiologici e ambientali." },
                  { title: "Allerta immediata", desc: "Il responsabile viene avvisato per intervenire tempestivamente." },
                  { title: "Tracciabilità e conformità", desc: "Ogni evento viene registrato per audit, analisi e dimostrazione della conformità." }
                ]
            ).map((rule, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#F0EFEB]/50 border border-[#2C2C2E]/5 hover:border-[#F2C400]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-1.5 h-6 bg-[#F2C400] mb-4 rounded-full" />
                  <h4 className="text-xs font-bold font-sans uppercase tracking-tight text-[#2C2C2E] mb-2">{rule.title}</h4>
                  <p className="text-[11px] font-mono text-[#5E5E62] leading-relaxed">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE 10 — Benefici per l’azienda */}
      <section className="py-24 bg-[#F0EFEB] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono font-semibold">
              {isEn ? 'The Benefits' : 'I Vantaggi'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'From technical telemetry to operational decisions' : 'Dal dato tecnico alla decisione operativa'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(isEn
              ? [
                  {
                    title: "Continuous Visibility",
                    desc: "Constant monitoring of service continuity, coverage, volume, and operational risk."
                  },
                  {
                    title: "Understandable Data",
                    desc: "Technical payloads transformed into accessible metrics, dashboards, and insights."
                  },
                  {
                    title: "Timely Alerts",
                    desc: "Thresholds, anomalies, and critical conditions trigger instant contextual notifications."
                  },
                  {
                    title: "Complete Traceability",
                    desc: "Payloads, events, actions, and response times remain preserved for audit and verification."
                  },
                  {
                    title: "Enterprise Integration",
                    desc: "APIs, exports, and webhooks connect Vera to CRMs, mobile apps, BI, and AI platforms."
                  },
                  {
                    title: "Device Governance",
                    desc: "Devices, users, companies, and permissions managed through a centralized registry."
                  },
                  {
                    title: "Multi-Tenant Scalability",
                    desc: "Brokers, topics, collections, and devices configured seamlessly for diverse scenarios."
                  },
                  {
                    title: "AI-Ready Intelligence",
                    desc: "Normalized data readily feeds predictive models and intelligent domain assistants."
                  }
                ]
              : [
                  {
                    title: "Visibilità continua",
                    desc: "Monitoraggio costante su continuità del servizio, copertura, volumi e rischio operativo."
                  },
                  {
                    title: "Dati comprensibili",
                    desc: "I payload tecnici diventano metriche, dashboard e informazioni accessibili."
                  },
                  {
                    title: "Alert tempestivi",
                    desc: "Soglie, anomalie e condizioni critiche generano notifiche immediate e contestualizzate."
                  },
                  {
                    title: "Tracciabilità completa",
                    desc: "Payload, eventi, azioni e tempi di risposta restano disponibili per verifiche e audit."
                  },
                  {
                    title: "Integrazione aziendale",
                    desc: "API, export e webhook collegano Vera a CRM, app mobile, BI e sistemi AI."
                  },
                  {
                    title: "Governance dei device",
                    desc: "Dispositivi, utenti, aziende e permessi vengono gestiti in modo centralizzato."
                  },
                  {
                    title: "Scalabilità multi-cliente",
                    desc: "Broker, topic, collection e device possono essere configurati per scenari diversi."
                  },
                  {
                    title: "Dati AI-ready",
                    desc: "Le informazioni normalizzate possono alimentare modelli predittivi e assistenti intelligenti."
                  }
                ]
            ).map((benef, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-[24px] bg-white border border-[#2C2C2E]/5 hover:border-[#F2C400]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-2 h-2 bg-[#F2C400] mb-6 rounded-full group-hover:scale-125 transition-transform" />
                  <h3 className="text-sm font-bold text-[#2C2C2E] mb-3 font-sans uppercase tracking-tight">{benef.title}</h3>
                  <p className="text-xs font-mono text-[#5E5E62] leading-relaxed">{benef.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE 11 — A chi si rivolge Vera */}
      <section className="py-24 bg-white text-left relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
              {isEn ? 'Target Audience' : 'Destinatari'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'Designed for those who monitor, integrate, and decide' : 'Pensata per chi deve monitorare, integrare e decidere'}
            </h2>
            <p className="mt-4 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed max-w-2xl mx-auto text-center">
              {isEn
                ? 'Vera empowers teams and professionals by delivering seamless integration, regulatory compliance, and operational traceability across any IoT context.'
                : 'Vera supporta diversi team e figure professionali, garantendo integrazione fluida, conformità normativa e tracciabilità operativa in ogni contesto IoT.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {(isEn
              ? [
                  "Technical Teams",
                  "HSE Operators",
                  "Safety Managers & RSPP",
                  "Executive Management",
                  "Operations Managers",
                  "IT Managers",
                  "Companies with IoT Projects",
                  "Multi-site Organizations",
                  "Wearables / Sensors Deployers",
                  "AI Integration Teams"
                ]
              : [
                  "team tecnici",
                  "operatori HSE",
                  "RSPP e HSE Manager",
                  "direzioni aziendali",
                  "responsabili operations",
                  "responsabili IT",
                  "aziende con progetti IoT",
                  "organizzazioni multi-sede",
                  "aziende con wearable/sensori",
                  "team di integrazione AI"
                ]
            ).map((persona, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#F0EFEB]/40 border border-[#2C2C2E]/5 hover:border-[#F2C400]/40 hover:bg-white text-center transition-all flex flex-col items-center justify-center group"
              >
                <Users className="w-5 h-5 text-[#2C2C2E] mb-3 group-hover:text-[#F2C400] transition-colors font-semibold" />
                <h4 className="text-xs font-bold uppercase font-sans tracking-wide text-[#2C2C2E]">{persona}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE 12 — CTA finale */}
      <section className="py-24 bg-[#F0EFEB] text-left relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono font-semibold">
            {isEn ? 'Join the Shift' : 'Unisciti al Cambiamento'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight leading-tight">
            {isEn ? 'Transform IoT signals into operational decisions' : 'Trasforma i segnali IoT in decisioni operative'}
          </h2>
          <p className="mt-6 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed max-w-2xl mx-auto">
            {isEn
              ? 'Vera unifies data collection, comprehension, live monitoring, alerts, and distribution into a single platform. From device to dashboard, payload to alert, technical metric to risk prevention.'
              : 'Vera unisce acquisizione, comprensione, monitoraggio, alert e distribuzione dei dati in una sola piattaforma integrata. Dal device alla dashboard, dal payload all’alert, dal dato tecnico alla prevenzione.'}
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F2C400] text-[#2C2C2E] text-xs font-bold font-sans uppercase tracking-widest hover:bg-[#F2C400]/90 transition-all duration-300 shadow-[0_4px_14px_rgba(242,196,0,0.25)] hover:shadow-[0_6px_20px_rgba(242,196,0,0.35)] active:scale-95 font-semibold"
            >
              {isEn ? 'Request a Vera Demo' : 'Richiedi una demo di Vera'}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/servizi"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#2C2C2E] text-xs font-bold font-sans uppercase tracking-widest border border-[#2C2C2E]/10 hover:bg-[#F0EFEB] hover:border-[#2C2C2E]/20 transition-all duration-300 active:scale-95"
            >
              {isEn ? 'Discover the daily ecosystem' : 'Scopri l’ecosistema daily'}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
