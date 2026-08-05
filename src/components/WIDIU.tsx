import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Thermometer,
  Activity,
  Bell,
  BellRing,
  CheckCircle,
  BarChart3,
  ArrowUpRight,
  Lock,
  Shield,
  FileText,
  Stethoscope,
  EyeOff,
  UserCheck,
  Brain,
} from 'lucide-react';
import InteractiveImage from './InteractiveImage';
import supervisorIot from '../assets/images/supervisor_iot_1780517606283.png';
import widiuImage from '../WIDIU.png';
import { useLanguage } from '../context/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function WIDIU() {
  const { t, lang } = useLanguage();
  const isEn = lang === 'en';
  const [activeCat, setActiveCat] = useState('biometrici');
  const [hoveredFlowStep, setHoveredFlowStep] = useState<number | null>(null);
  const [hoveredRiskCard, setHoveredRiskCard] = useState<number | null>(null);

  const SENSOR_CATEGORIES = [
    {
      id: 'biometrici',
      title: t('widiu.s1Title'),
      icon: Activity,
      short: t('widiu.s1Short'),
      metrics: isEn
        ? ['Heart rate', 'HRV variability', 'Skin temp', 'Estimated fatigue']
        : ['Frequenza cardiaca', 'Variabilità HRV', 'Temperatura cutanea', 'Fatica stimata'],
      desc: t('widiu.s1Desc'),
      telemetry: { hr: '74 BPM', hrv: '58 ms', temp: '36.5 °C', fatigue: 'Low-Medium' }
    },
    {
      id: 'movimento',
      title: t('widiu.s2Title'),
      icon: Cpu,
      short: t('widiu.s2Short'),
      metrics: isEn
        ? ['3D Acceleration', 'Axis inclination', 'Fall detection', 'Man-down status']
        : ['Accelerazione 3D', 'Inclinazione asse', 'Rilevamento caduta', 'Stato uomo a terra'],
      desc: t('widiu.s2Desc'),
      telemetry: { g_force: '1.02 G', angle: '12° (Eretto)', impact: 'None', active_time: '180 min' }
    },
    {
      id: 'ambientali',
      title: t('widiu.s3Title'),
      icon: Thermometer,
      short: t('widiu.s3Short'),
      metrics: isEn
        ? ['Temp & Humidity', 'Barometric pressure', 'Noise level (dB)', 'Air quality']
        : ['Temperatura & Umidità', 'Pressione atmosferica', 'Livello acustico (dB)', 'Qualità dell\'aria'],
      desc: t('widiu.s3Desc'),
      telemetry: { temp_amb: '24.2 °C', hum: '48%', noise: '62 dB', air_quality: 'Optimal' }
    },
    {
      id: 'contesto',
      title: t('widiu.s4Title'),
      icon: ShieldCheck,
      short: t('widiu.s4Short'),
      metrics: isEn
        ? ['DVR association', 'Role & risks', 'PPE status', 'Schedulers']
        : ['Associazione DVR', 'Mansione e rischi', 'Stato DPI consigliati', 'Scadenziari'],
      desc: t('widiu.s4Desc'),
      telemetry: { dvr_match: 'Compliant', role: 'HSE Operator', dpi: 'Helmet + Shoes', shift: 'Shift A' }
    }
  ];

  const flowSteps = [
    {
      step: '1',
      title: t('widiu.flow1Title'),
      icon: Activity,
      desc: t('widiu.flow1Desc')
    },
    {
      step: '2',
      title: t('widiu.flow2Title'),
      icon: Cpu,
      desc: t('widiu.flow2Desc')
    },
    {
      step: '3',
      title: t('widiu.flow3Title'),
      icon: BarChart3,
      desc: t('widiu.flow3Desc')
    },
    {
      step: '4',
      title: t('widiu.flow4Title'),
      icon: Bell,
      desc: t('widiu.flow4Desc')
    },
    {
      step: '5',
      title: t('widiu.flow5Title'),
      icon: ShieldCheck,
      desc: t('widiu.flow5Desc')
    }
  ];

  return (
    <div className="py-24 md:py-32 bg-[#F0EFEB] text-[#2C2C2E] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-32"
        >
          {/* Hero Section */}
          <section className="pt-8 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6c73b]/10 border border-[#f6c73b]/25 text-xs font-bold font-mono tracking-widest uppercase text-[#2C2C2E]/80">
                  <Cpu className="w-3.5 h-3.5 text-[#f6c73b]" />
                  {t('widiu.heroBadge')}
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none text-[#2C2C2E]">
                  {t('widiu.heroTitle')}
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-[#2C2C2E]/90 text-balance leading-snug">
                  {t('widiu.heroSub')}
                </p>
                
                <div className="text-xs sm:text-sm leading-relaxed font-mono text-[#5E5E62] space-y-4">
                  <p>{t('widiu.heroP1')}</p>
                  <p>{t('widiu.heroP2')}</p>
                  <p>{t('widiu.heroP3')}</p>
                  <p>{t('widiu.heroP4')}</p>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/contatti"
                    className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold font-mono tracking-wider uppercase bg-[#f6c73b] text-[#2C2C2E] border border-[#f6c73b] rounded-[18px] hover:bg-[#f6c73b]/90 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(242,196,0,0.4)] cursor-pointer"
                  >
                    {t('widiu.heroCta')}
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="lg:col-span-6 w-full flex justify-center items-center">
                <div className="relative w-full max-w-[480px] flex items-center justify-center">
                  {/* Decorative brand yellow tech dots */}
                  <div className="absolute -top-3 left-6 w-3.5 h-3.5 rounded-full bg-[#f6c73b] shadow-[0_0_12px_rgba(242,196,0,0.7)] z-10 pointer-events-none" />
                  <div className="absolute top-1/4 -right-3 w-2.5 h-2.5 rounded-full bg-[#f6c73b]/80 shadow-[0_0_8px_rgba(242,196,0,0.5)] z-10 pointer-events-none" />
                  <div className="absolute -bottom-3 right-12 w-3 h-3 rounded-full bg-[#f6c73b]/90 shadow-[0_0_10px_rgba(242,196,0,0.6)] z-10 pointer-events-none" />
                  <div className="absolute bottom-1/3 -left-3 w-2 h-2 rounded-full bg-[#f6c73b]/60 z-10 pointer-events-none" />
                  <div className="absolute top-6 right-10 w-2 h-2 rounded-full bg-[#f6c73b]/75 z-10 pointer-events-none" />

                  <InteractiveImage
                    src={widiuImage}
                    alt="Smartwatch WIDIU - Wearable intelligente per la sicurezza"
                    aspectRatio="square"
                    objectFit="contain"
                    className="w-full h-auto max-h-[440px] object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </motion.div>

            </div>
          </section>

          {/* Perché WIDIU - Connected Journey */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="space-y-3 text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">{t('widiu.whyBadge')}</span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-[#2C2C2E] tracking-tight">
                {t('widiu.whyTitle')}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#5E5E62] max-w-3xl">
                {t('widiu.whySub')}
              </p>
            </div>

            {/* Interactive, Connected Journey Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch relative">
              {/* Decorative connecting lines (hidden on mobile) */}
              <div className="hidden lg:block absolute top-[15%] left-[28%] right-[28%] h-0.5 border-t border-dashed border-[#f6c73b]/30 -z-10" />

              {/* Step 1 */}
              <div 
                onMouseEnter={() => setHoveredRiskCard(0)}
                onMouseLeave={() => setHoveredRiskCard(null)}
                className="lg:col-span-4 flex flex-col justify-between p-8 card-premium border-[#2C2C2E]/10 hover:border-[#f6c73b]/40 transition-all duration-300 relative overflow-hidden group bg-white/40 cursor-pointer"
                style={{
                  transform: hoveredRiskCard === 0 ? 'translateY(-6px)' : 'translateY(0px)',
                }}
              >
                {/* Top Right Glow */}
                <div 
                  className="absolute -top-10 -right-10 w-[140px] h-[140px] rounded-full pointer-events-none transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle, rgba(242, 196, 0, 0.45), transparent 65%)',
                    opacity: hoveredRiskCard === 0 ? 0.24 : 0.16
                  }}
                />

                <div className="space-y-4 z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#2C2C2E]/40 font-mono">
                      {isEn ? 'PHASE 01 / STATIC' : 'FASE 01 / STATICA'}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2C2C2E]/20 group-hover:bg-[#f6c73b] transition-colors duration-300 shadow-[0_0_8px_rgba(242,196,0,0)] group-hover:shadow-[0_0_12px_#f6c73b]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#2C2C2E] font-sans">
                    {isEn ? 'Traditional Safety' : 'Sicurezza Tradizionale'}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed font-mono text-[#5E5E62]">
                    {isEn
                      ? 'Risk Assessment Documents (DVR), written procedures, and periodic inspections are fundamental, but capture a static snapshot of workplace risk.'
                      : 'I documenti di valutazione (DVR), le procedure scritte e i sopralluoghi periodici sono fondamentali, ma catturano una fotografia istantanea e immutabile del rischio aziendale.'}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#2C2C2E]/5 text-[11px] font-mono text-[#5E5E62]/60 z-10">
                  {isEn ? 'Occasional and administrative tracking' : 'Rilevamento occasionale e burocratico'}
                </div>
              </div>

              {/* Step 2 */}
              <div 
                onMouseEnter={() => setHoveredRiskCard(1)}
                onMouseLeave={() => setHoveredRiskCard(null)}
                className="lg:col-span-4 flex flex-col justify-between p-8 card-premium border-[#2C2C2E]/10 hover:border-[#f6c73b]/40 transition-all duration-300 relative overflow-hidden group bg-white/40 cursor-pointer"
                style={{
                  transform: hoveredRiskCard === 1 ? 'translateY(-6px)' : 'translateY(0px)',
                }}
              >
                {/* Top Right Glow */}
                <div 
                  className="absolute -top-10 -right-10 w-[140px] h-[140px] rounded-full pointer-events-none transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle, rgba(242, 196, 0, 0.45), transparent 65%)',
                    opacity: hoveredRiskCard === 1 ? 0.34 : 0.26
                  }}
                />

                <div className="space-y-4 z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#2C2C2E]/40 font-mono">
                      {isEn ? 'PHASE 02 / EVOLUTION' : 'FASE 02 / EVOLUZIONE'}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2C2C2E]/20 group-hover:bg-[#f6c73b] transition-colors duration-300 shadow-[0_0_8px_rgba(242,196,0,0)] group-hover:shadow-[0_0_12px_#f6c73b]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#2C2C2E] font-sans">
                    {isEn ? 'Risk Dynamics' : 'Dinamica del Rischio'}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed font-mono text-[#5E5E62]">
                    {isEn
                      ? 'During the work shift, actual risk fluctuates constantly. Accumulated fatigue, awkward postures, and environmental spikes alter operational tolerance second by second.'
                      : 'Durante il turno di lavoro, il rischio reale oscilla di continuo. L\'accumulo di stanchezza, le posture incongrue e gli sbalzi ambientali modificano la tollerabilità operativa secondo dopo secondo.'}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#2C2C2E]/5 text-[11px] font-mono text-[#5E5E62]/60 z-10">
                  {isEn ? 'Variable and biometric factors' : 'Fattori variabili e biometrici'}
                </div>
              </div>

              {/* Step 3 */}
              <div 
                onMouseEnter={() => setHoveredRiskCard(2)}
                onMouseLeave={() => setHoveredRiskCard(null)}
                className="lg:col-span-4 flex flex-col justify-between p-8 card-premium border-[#f6c73b]/30 hover:border-[#f6c73b]/60 transition-all duration-300 relative overflow-hidden group bg-white/80 cursor-pointer"
                style={{
                  transform: hoveredRiskCard === 2 ? 'translateY(-6px)' : 'translateY(0px)',
                }}
              >
                {/* Top Right Glow */}
                <div 
                  className="absolute -top-10 -right-10 w-[140px] h-[140px] rounded-full pointer-events-none transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle, rgba(242, 196, 0, 0.45), transparent 65%)',
                    opacity: hoveredRiskCard === 2 ? 0.46 : 0.38
                  }}
                />

                <div className="space-y-4 z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#2C2C2E] font-mono">
                      {isEn ? 'PHASE 03 / ACTIVE PREVENTION' : 'FASE 03 / PREVENZIONE ATTIVA'}
                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#f6c73b] transition-colors duration-300 shadow-[0_0_12px_rgba(242,196,0,0.8)] group-hover:scale-125" />
                  </div>
                  <h4 className="text-lg font-bold text-[#2C2C2E] font-sans">
                    {isEn ? 'WIDIU\'s Response' : 'La Risposta di WIDIU'}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed font-mono text-[#2C2C2E]">
                    {isEn
                      ? 'By integrating real-time personal and environmental sensors with Artificial Intelligence, WIDIU decodes these fluctuations before they solidify into an incident, closing the prevention loop.'
                      : 'Integrando sensori della persona e dell\'ambiente in tempo reale con l\'Intelligenza Artificiale, WIDIU decodifica queste oscillazioni prima che si consolidino in un infortunio, chiudendo il cerchio della prevenzione.'}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#2C2C2E]/10 text-[11px] font-mono text-[#2C2C2E]/80 font-bold z-10">
                  {isEn ? 'Instant connection to dailyplatform' : 'Connessione istantanea a dailyplatform'}
                </div>
              </div>
            </div>

            {/* Connecting visual element - Text + Concept Cards Layout (No Images) */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-white/50 border border-black/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#f6c73b]/5 blur-[80px] pointer-events-none" />
              
              <div className="lg:col-span-6 space-y-4 text-left">
                <span className="text-[9px] font-mono font-bold text-[#f6c73b] uppercase tracking-widest block">
                  {isEn ? 'System Integration' : 'Integrazione di Sistema'}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#2C2C2E] font-sans tracking-tight">
                  {isEn ? 'The integration that makes the difference' : 'L\'integrazione che fa la differenza'}
                </h4>
                <p className="text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
                  {isEn
                    ? 'The WIDIU smartwatch is not an isolated technology: it constantly communicates with dailyplatform to merge physical sensing with job task knowledge and company DVRs. This enables identifying personalized anomalies on the worker\'s actual profile.'
                    : 'Lo smartwatch WIDIU non è un\'isola tecnologica: dialoga costantemente con dailyplatform per unire la sensoristica fisica alla conoscenza delle mansioni lavorative e dei DVR aziendali. Questo consente di identificare anomalie personalizzate sul profilo effettivo del lavoratore.'}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-[#2C2C2E]/85">
                  <span className="w-2 h-2 rounded-full bg-[#f6c73b] animate-pulse" />
                  {isEn ? 'Real-time synchronization with local servers' : 'Sincronizzazione in tempo reale con i server locali'}
                </div>
              </div>

              {/* Graphical Integration Block (NO IMAGES) */}
              <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4 items-center justify-center relative w-full h-full min-h-[220px]">
                {/* Micro Concept Cards with dashed connections */}
                <div className="flex flex-col gap-3 w-full sm:w-1/2">
                  <div className="p-4 rounded-xl bg-white border border-[#f6c73b]/15 shadow-sm space-y-1 transition-all duration-300 hover:border-[#f6c73b]/40">
                    <span className="text-[9px] font-mono font-bold text-[#2C2C2E]/50 block">
                      {isEn ? 'PHYSICAL INPUT' : 'INPUT FISICO'}
                    </span>
                    <h5 className="text-xs font-bold font-sans text-[#2C2C2E]">Smartwatch WIDIU</h5>
                    <p className="text-[10px] font-mono text-[#5E5E62]">
                      {isEn ? 'Biometrics, postures, and acceleration in real time.' : 'Dati biometrici, posture e accelerazione in tempo reale.'}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-black/5 shadow-sm space-y-1 transition-all duration-300 hover:border-[#f6c73b]/40">
                    <span className="text-[9px] font-mono font-bold text-[#2C2C2E]/50 block">
                      {isEn ? 'REGULATORY INPUT' : 'INPUT NORMATIVO'}
                    </span>
                    <h5 className="text-xs font-bold font-sans text-[#2C2C2E]">DVR & {isEn ? 'Tasks' : 'Mansioni'}</h5>
                    <p className="text-[10px] font-mono text-[#5E5E62]">
                      {isEn ? 'Risk factors and exposure limits.' : 'Fattori di rischio associati e limiti di esposizione previsti.'}
                    </p>
                  </div>
                </div>

                {/* Connection line representation */}
                <div className="hidden sm:flex flex-col items-center justify-center h-full w-8">
                  <div className="w-[1px] h-12 border-l border-dashed border-[#f6c73b]/40" />
                  <div className="w-3 h-3 rounded-full bg-[#f6c73b] shadow-[0_0_8px_#f6c73b] flex items-center justify-center my-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2C2C2E]" />
                  </div>
                  <div className="w-[1px] h-12 border-l border-dashed border-[#f6c73b]/40" />
                </div>

                <div className="w-full sm:w-1/2">
                  <div className="p-5 rounded-2xl bg-[#2C2C2E] border border-[#f6c73b]/30 shadow-md text-[#F0EFEB] space-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[100px] h-[100px] rounded-full bg-[#f6c73b]/5 blur-[30px] pointer-events-none" />
                    <span className="text-[8px] font-mono font-bold text-[#f6c73b] uppercase tracking-widest">
                      {isEn ? 'PREVENTIVE OUTPUT' : 'OUTPUT PREVENTIVO'}
                    </span>
                    <h5 className="text-xs font-bold font-sans tracking-tight text-white">dailyplatform AI</h5>
                    <p className="text-[10.5px] font-mono text-[#F0EFEB]/85 leading-relaxed">
                      {isEn
                        ? 'Continuous processing and proactive alerts tailored for the operator.'
                        : 'Elaborazione continua e alert proattivi su misura per l\'operatore.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sezione Sensori - Cosa rileva WIDIU (Reattiva ed Interattiva) */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="text-left max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block mb-2">
                {isEn ? 'Sensors' : 'Sensori'}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-[#2C2C2E] tracking-tight">
                {isEn ? 'What WIDIU detects' : 'Cosa rileva WIDIU'}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed mt-2">
                {isEn
                  ? 'A single intelligent device capable of mapping multiple dimensions simultaneously. Hover over categories to inspect details and estimated real-time telemetry.'
                  : 'Un unico dispositivo intelligente in grado di mappare molteplici dimensioni simultaneamente. Passa con il mouse sulle categorie per osservare i dettagli e la telemetria stimata in tempo reale.'}
              </p>
            </motion.div>

            {/* Interactive Hub */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Main WIDIU Image and Active Status */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-white/45 p-6 sm:p-8 rounded-[32px] border border-black/5 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-[#f6c73b]/3 blur-[120px] pointer-events-none" />
                
                <div className="space-y-4 text-left z-10">
                  <span className="text-[10px] font-mono font-bold text-[#f6c73b] uppercase tracking-widest">
                    {isEn ? 'Active Device ●' : 'Dispositivo Attivo ●'}
                  </span>
                  <h4 className="text-xl font-bold font-sans text-[#2C2C2E] tracking-tight">
                    {isEn ? 'WIDIU in Action' : 'WIDIU in Azione'}
                  </h4>
                  <p className="text-xs font-mono text-[#5E5E62] leading-relaxed">
                    {isEn
                      ? 'A concentrated stack of wearable technology engineered to map physical strain, biometric parameters, and working microclimate, all in a single wrist-worn device.'
                      : 'Un concentrato di tecnologia wearable progettato per mappare le sollecitazioni fisiche, i parametri biometrici e il microclima di lavoro, tutto in un unico dispositivo da polso.'}
                  </p>
                </div>

                {/* Main WIDIU Image Frame */}
                <div className="my-8 flex justify-center items-center z-10 relative">
                  {/* Dynamic Alert Pulse Rings */}
                  <div className="absolute w-[240px] h-[240px] rounded-full border border-[#f6c73b]/30 animate-[ping_3s_infinite] pointer-events-none z-0" />
                  <div className="absolute w-[280px] h-[280px] rounded-full border border-red-500/10 animate-[ping_4.5s_infinite] pointer-events-none z-0" />

                  <div className="relative w-full max-w-[320px] aspect-square rounded-[24px] overflow-hidden bg-white/95 border border-[#f6c73b]/25 p-6 shadow-[0_12px_40px_rgba(242,196,0,0.06)] hover:border-[#f6c73b]/45 transition-all duration-500 group flex items-center justify-center z-10">
                    <InteractiveImage
                      src={widiuImage}
                      alt="WIDIU Smartwatch"
                      aspectRatio="square"
                      objectFit="contain"
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#f6c73b]/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
                    
                    {/* Active Alert Overlay Indicator (Intelligent Preventative Alert) */}
                    <div className="absolute bottom-4 left-4 right-4 bg-[#2C2C2E]/95 border border-[#f6c73b]/40 backdrop-blur-md rounded-xl p-2.5 flex items-center justify-between shadow-lg animate-pulse">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <div className="text-left">
                          <span className="text-[8px] font-mono text-[#f6c73b] font-bold uppercase tracking-wider block leading-none">
                            {isEn ? 'Detection' : 'Rilevamento'}
                          </span>
                          <span className="text-[10px] font-sans font-bold text-white tracking-tight leading-none block mt-0.5">
                            {isEn ? 'Elevated Fatigue Threshold' : 'Soglia Fatica Elevata'}
                          </span>
                        </div>
                      </div>
                      <span className="text-[8px] font-mono px-2 py-0.5 rounded-md bg-[#f6c73b]/20 text-[#f6c73b] font-bold border border-[#f6c73b]/30">
                        {isEn ? 'ALERT SENT' : 'ALERT INVIATO'}
                      </span>
                    </div>

                    {/* Beacon light indicator at top of watch */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#f6c73b] text-[#2C2C2E] font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full border border-white/20 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2C2C2E] animate-ping" />
                      {isEn ? 'PREVENTION' : 'PREVENZIONE'}
                    </div>
                  </div>
                </div>

                {/* Footer status line */}
                <div className="border-t border-[#2C2C2E]/5 pt-4 text-left z-10">
                  <span className="text-[10px] font-mono font-bold text-[#2C2C2E]/40 uppercase tracking-widest">
                    {isEn ? 'Continuous integration with dailyplatform' : 'Integrazione continua con dailyplatform'}
                  </span>
                </div>
              </div>

              {/* Right Column: 2x2 Grid of equal-sized cards */}
              <div className="lg:col-span-7 widiu-sensor-cards grid grid-cols-1 md:grid-cols-2 gap-[18px] items-stretch">
                {SENSOR_CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCat === cat.id;
                  return (
                    <div
                      key={cat.id}
                      onMouseEnter={() => setActiveCat(cat.id)}
                      className={`widiu-sensor-card p-6 sm:p-7 rounded-[28px] border transition-all duration-300 flex flex-col justify-between min-h-[190px] h-full relative overflow-hidden group bg-white/50 ${
                        isActive 
                          ? 'border-[#f6c73b] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.02)]' 
                          : 'border-black/5 hover:border-[#f6c73b]/30 hover:bg-white/70'
                      }`}
                    >
                      <div className="space-y-4 text-left">
                        <div className="flex items-center justify-between">
                          <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                            isActive ? 'bg-[#f6c73b] text-[#2C2C2E]' : 'bg-[#2C2C2E]/5 text-[#2C2C2E] group-hover:bg-[#f6c73b]/10'
                          }`}>
                            <Icon className="w-5 h-5 stroke-[1.75]" />
                          </div>
                          <span className="text-[9px] font-mono font-bold text-[#2C2C2E]/40 uppercase tracking-widest">
                            {cat.short}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-base font-bold font-sans text-[#2C2C2E] tracking-tight group-hover:text-[#f6c73b] transition-colors duration-200">
                            {cat.title}
                          </h4>
                          <p className="text-[11px] leading-relaxed font-mono text-[#5E5E62]">
                            {cat.desc}
                          </p>
                        </div>
                      </div>

                      {/* Display a compact list of metrics at the bottom of each card to keep them completely equal in structure */}
                      <div className="mt-4 pt-3 border-t border-black/[0.03] flex flex-wrap gap-1">
                        {cat.metrics.map((metric) => (
                          <span 
                            key={metric} 
                            className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-[#2C2C2E]/5 text-[#2C2C2E]/80 border border-black/[0.02]"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
          {/* Come funziona (Stesso approccio di dailyplatform) */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="text-left max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block mb-2">
                {isEn ? 'Process' : 'Processo'}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-[#2C2C2E] tracking-tight">
                {isEn ? 'How it works' : 'Come funziona'}
              </h3>
              <p className="text-xs sm:text-sm text-[#5E5E62] font-mono mt-3 leading-relaxed">
                {isEn
                  ? 'WIDIU\'s journey is designed as a continuous, transparent sequential flow: from biological field measurements to strategic HSE decisions.'
                  : 'Il percorso di WIDIU è progettato come un flusso sequenziale continuo e trasparente: dalla misurazione biologica sul campo fino alle decisioni HSE strategiche.'}
              </p>
            </motion.div>

            {/* Sequential Flow - Horizontal on Desktop, Vertical on Mobile */}
            <div className="relative py-8 px-4 bg-white/40 border border-black/5 rounded-[32px] overflow-hidden">
              {/* Dynamic Connecting Line - Desktop Only */}
              <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[3px] bg-gray-200 z-0 overflow-hidden">
                <motion.div 
                  className="h-full bg-[#f6c73b]" 
                  initial={{ width: '0%' }}
                  animate={{ 
                    width: hoveredFlowStep !== null ? `${(hoveredFlowStep / 4) * 100}%` : '20%' 
                  }}
                  transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                />
              </div>

              {/* Steps Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                {flowSteps.map((stepItem, idx) => {
                  const isHovered = hoveredFlowStep === idx;
                  const IconComponent = stepItem.icon;
                  return (
                    <div 
                      key={idx} 
                      onMouseEnter={() => setHoveredFlowStep(idx)}
                      onMouseLeave={() => setHoveredFlowStep(null)}
                      className="flex flex-col items-center lg:items-start text-center lg:text-left px-4 group transition-all duration-300"
                    >
                      {/* Numeric Badge & Connecting Dot */}
                      <div className="flex flex-col items-center lg:items-start w-full relative">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border ${isHovered ? 'bg-[#f6c73b] text-[#2C2C2E] border-[#f6c73b] scale-110 shadow-[0_8px_20px_rgba(242,196,0,0.25)]' : 'bg-white text-[#2C2C2E]/60 border-black/5 group-hover:border-[#f6c73b]/40'}`}>
                          <IconComponent className="w-6 h-6 stroke-[1.75]" />
                        </div>
                        
                        <div className="absolute top-1 left-2 sm:left-4 lg:-top-5 lg:left-0">
                          <span className="text-[10px] font-mono font-bold text-[#2C2C2E]/30 group-hover:text-[#f6c73b] transition-colors duration-300">
                            STEP {stepItem.step}
                          </span>
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="mt-5 space-y-2">
                        <h3 className={`text-base font-bold font-sans tracking-tight uppercase transition-colors duration-300 ${isHovered ? 'text-[#f6c73b]' : 'text-[#2C2C2E]'}`}>
                          {stepItem.title}
                        </h3>
                        <p className="text-xs text-[#5E5E62] leading-relaxed font-mono font-light">
                          {stepItem.desc}
                        </p>
                      </div>

                      {/* Visual separator for mobile vertical layout */}
                      {idx < 4 && (
                        <div className="lg:hidden w-[2px] h-10 bg-gradient-to-b from-[#f6c73b] to-transparent mt-6 self-center" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Alert dinamici e Dati in prevenzione (Macroservizi Card Layout) */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10 text-left w-full">
            
            {/* Card 1: Alert dinamici e raccomandazioni */}
            <div className="bg-[#2C2C2E] text-white rounded-[28px] border border-white/10 p-6 sm:p-8 hover:border-[#f6c73b] shadow-xl transition-all duration-500 relative flex flex-col justify-between group overflow-hidden">
              {/* Top Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f6c73b]/0 via-[#f6c73b]/0 to-[#f6c73b]/10 transition-opacity duration-500 pointer-events-none rounded-[28px]" />

              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div>
                  {/* Icon & Upper Label / Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#f6c73b]/20 border border-[#f6c73b]/40 text-[#f6c73b] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#f6c73b] group-hover:text-[#2C2C2E] transition-all duration-300">
                      <BellRing className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#f6c73b] bg-[#f6c73b]/10 px-3.5 py-1.5 rounded-full border border-[#f6c73b]/30">
                      {isEn ? 'ACTIVE PREVENTION' : 'PREVENZIONE ATTIVA'}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight mb-3">
                    {isEn ? 'Dynamic alerts and recommendations' : 'Alert dinamici e raccomandazioni'}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-mono text-white/80 leading-relaxed mb-5">
                    {isEn
                      ? 'WIDIU supports progressive and contextual alerts generated by the combined reading of biometric parameters, environmental conditions and operational dynamics. Alerts help identify situations that require attention, such as taking a break, hydrating, checking work conditions, reviewing posture or involving a supervisor.'
                      : 'WIDIU supporta alert progressivi e contestualizzati, generati dalla lettura combinata di parametri biometrici, condizioni ambientali e dinamiche operative. Gli avvisi aiutano a riconoscere situazioni che richiedono attenzione, come pausa, idratazione, verifica delle condizioni di lavoro, controllo della postura o intervento del preposto.'}
                  </p>

                  {/* 3 Key Points */}
                  <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3">
                    <span className="text-[9px] font-mono font-bold text-[#f6c73b] uppercase tracking-widest block">
                      {isEn ? 'Key Points' : 'Punti Chiave'}
                    </span>
                    <div className="space-y-2.5">
                      {(isEn ? [
                        'Progressive and contextual alerts',
                        'Combined reading of biometric and environmental parameters',
                        'Support for breaks, hydration, posture and supervisor involvement'
                      ] : [
                        'Alert progressivi e contestualizzati',
                        'Lettura combinata di parametri biometrici e ambientali',
                        'Supporto a pause, idratazione, postura e intervento del preposto'
                      ]).map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs font-mono text-white/90">
                          <CheckCircle className="w-4 h-4 text-[#f6c73b] shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Dati in prevenzione */}
            <div className="bg-[#2C2C2E] text-white rounded-[28px] border border-white/10 p-6 sm:p-8 hover:border-[#f6c73b] shadow-xl transition-all duration-500 relative flex flex-col justify-between group overflow-hidden">
              {/* Top Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f6c73b]/0 via-[#f6c73b]/0 to-[#f6c73b]/10 transition-opacity duration-500 pointer-events-none rounded-[28px]" />

              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div>
                  {/* Icon & Upper Label / Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#f6c73b]/20 border border-[#f6c73b]/40 text-[#f6c73b] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#f6c73b] group-hover:text-[#2C2C2E] transition-all duration-300">
                      <BarChart3 className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#f6c73b] bg-[#f6c73b]/10 px-3.5 py-1.5 rounded-full border border-[#f6c73b]/30">
                      {isEn ? 'OPERATIONAL DATA' : 'DATI OPERATIVI'}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight mb-3">
                    {isEn ? 'Data for prevention' : 'Dati in prevenzione'}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-mono text-white/80 leading-relaxed mb-5">
                    {isEn
                      ? 'The data collected by WIDIU is transformed into indicators, dashboards, dynamic maps, reports and analyses useful for understanding critical issues, trends and recurring conditions. The goal is not to accumulate data, but to make it understandable and usable to improve risk assessment, protocols and operational decisions.'
                      : 'I dati raccolti da WIDIU vengono trasformati in indicatori, dashboard, mappe dinamiche, report e analisi utili a comprendere criticità, trend e condizioni broad. L’obiettivo non è accumulare dati, ma renderli comprensibili e utilizzabili per migliorare valutazione dei rischi, protocolli e decisioni operative.'}
                  </p>

                  {/* 3 Key Points */}
                  <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3">
                    <span className="text-[9px] font-mono font-bold text-[#f6c73b] uppercase tracking-widest block">
                      {isEn ? 'Key Points' : 'Punti Chiave'}
                    </span>
                    <div className="space-y-2.5">
                      {(isEn ? [
                        'Indicators, dashboards and dynamic maps',
                        'Reports and analyses on critical issues and recurring trends',
                        'Support for risk assessment, protocols and operational decisions'
                      ] : [
                        'Indicatori, dashboard e mappe dinamiche',
                        'Report e analisi su criticità e trend ricorrenti',
                        'Supporto a valutazione dei rischi, protocolli e decisioni operative'
                      ]).map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs font-mono text-white/90">
                          <CheckCircle className="w-4 h-4 text-[#f6c73b] shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Privacy, sicurezza e compliance */}
          <motion.div variants={itemVariants} className="space-y-10 text-left">
            <div className="space-y-3 max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">
                Compliance & Trust
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-[#2C2C2E] tracking-tight">
                {isEn ? 'Privacy, security & compliance' : 'Privacy, sicurezza e compliance'}
              </h3>
              <p className="text-sm sm:text-base font-semibold font-sans text-[#2C2C2E]/90">
                {isEn
                  ? 'Predictive prevention must protect people in their data as well.'
                  : 'La prevenzione predittiva deve proteggere le persone anche nei dati.'}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed font-mono text-[#5E5E62]">
                {isEn
                  ? 'WIDIU is engineered to support workplace safety in accordance with data protection, transparency, and proportionality principles. Biometric, environmental, and operational data must be processed exclusively for specified, legitimate prevention purposes, excluding any improper use or generalized performance monitoring.'
                  : 'WIDIU è progettato per supportare la sicurezza sul lavoro nel rispetto dei principi di protezione dei dati, trasparenza e proporzionalità. I dati biometrici, ambientali e operativi devono essere trattati solo per finalità determinate, legittime e connesse alla prevenzione, evitando qualsiasi utilizzo improprio o forma di controllo generalizzato della prestazione lavorativa.'}
              </p>
            </div>

            {/* 4 Card Normative */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Card 1: GDPR */}
              <div className="p-6 md:p-8 card-premium flex flex-col justify-between bg-white/60 border border-black/5 rounded-[24px] hover:border-[#f6c73b]/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6c73b]/15 text-[#2C2C2E] font-bold font-mono text-xs uppercase tracking-wider">
                      GDPR
                    </span>
                    <ShieldCheck className="w-5 h-5 text-[#f6c73b]" />
                  </div>
                  <h4 className="text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">
                    {isEn ? 'Personal and Health Data Protection' : 'Protezione dei dati personali e sanitari'}
                  </h4>
                  <p className="text-xs leading-relaxed font-mono text-[#5E5E62]">
                    {isEn
                      ? 'Processing data collected from wearable devices must comply with principles of lawfulness, transparency, minimization, purpose limitation, security, and confidentiality. Data revealing health status requires heightened safeguards.'
                      : 'Il trattamento dei dati raccolti da dispositivi wearable deve rispettare i principi di liceità, trasparenza, minimizzazione, limitazione della finalità, sicurezza e riservatezza. I dati che possono rivelare lo stato di salute richiedono garanzie rafforzate.'}
                  </p>
                </div>
              </div>

              {/* Card 2: D.Lgs. 81/2008 */}
              <div className="p-6 md:p-8 card-premium flex flex-col justify-between bg-white/60 border border-black/5 rounded-[24px] hover:border-[#f6c73b]/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6c73b]/15 text-[#2C2C2E] font-bold font-mono text-xs uppercase tracking-wider">
                      D.Lgs. 81/2008
                    </span>
                    <FileText className="w-5 h-5 text-[#f6c73b]" />
                  </div>
                  <h4 className="text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">
                    {isEn ? 'Workplace Health and Safety' : 'Salute e sicurezza nei luoghi di lavoro'}
                  </h4>
                  <p className="text-xs leading-relaxed font-mono text-[#5E5E62]">
                    {isEn
                      ? 'Data collected from sensors and IoT devices can support risk assessment, prevention measures, training, and improvement of safety conditions, always respecting regulatory roles and duties.'
                      : 'I dati raccolti da sensori e dispositivi IoT possono supportare la valutazione dei rischi, le misure di prevenzione, la formazione e il miglioramento delle condizioni di sicurezza, sempre nel rispetto dei ruoli e delle responsabilità previste dalla normativa.'}
                  </p>
                </div>
              </div>

              {/* Card 3: AI Act */}
              <div className="p-6 md:p-8 card-premium flex flex-col justify-between bg-white/60 border border-black/5 rounded-[24px] hover:border-[#f6c73b]/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6c73b]/15 text-[#2C2C2E] font-bold font-mono text-xs uppercase tracking-wider">
                      AI Act
                    </span>
                    <Brain className="w-5 h-5 text-[#f6c73b]" />
                  </div>
                  <h4 className="text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">
                    {isEn ? 'Trustworthy and Supervised Artificial Intelligence' : 'Intelligenza Artificiale affidabile e supervisionata'}
                  </h4>
                  <p className="text-xs leading-relaxed font-mono text-[#5E5E62]">
                    {isEn
                      ? 'When AI systems process data to identify anomalies, estimate risk levels, or support workplace decisions, transparency, traceability, data quality, human oversight, accuracy, and cybersecurity must be guaranteed.'
                      : 'Quando sistemi di IA elaborano dati per individuare anomalie, stimare livelli di rischio o supportare decisioni in ambito lavorativo, devono essere garantiti trasparenza, tracciabilità, qualità dei dati, supervisione umana, accuratezza e cybersicurezza.'}
                  </p>
                </div>
              </div>

              {/* Card 4: MDR */}
              <div className="p-6 md:p-8 card-premium flex flex-col justify-between bg-white/60 border border-black/5 rounded-[24px] hover:border-[#f6c73b]/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6c73b]/15 text-[#2C2C2E] font-bold font-mono text-xs uppercase tracking-wider">
                      MDR
                    </span>
                    <Stethoscope className="w-5 h-5 text-[#f6c73b]" />
                  </div>
                  <h4 className="text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">
                    {isEn ? 'Medical Devices, where applicable' : 'Dispositivi medici, ove applicabile'}
                  </h4>
                  <p className="text-xs leading-relaxed font-mono text-[#5E5E62]">
                    {isEn
                      ? 'The MDR regulation applies only if the device is intended for medical or clinical purposes. If used for workplace risk prevention and environmental monitoring without diagnostic intent, compliance with GDPR and D.Lgs. 81/2008 remains central.'
                      : 'Il Regolamento MDR rileva solo se il dispositivo è destinato a finalità mediche o cliniche. Se il sistema è utilizzato per prevenzione dei rischi lavorativi e monitoraggio ambientale senza finalità diagnostiche, resta comunque centrale il rispetto di GDPR e D.Lgs. 81/2008.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Box di chiusura WIDIU */}
            <div className="p-8 md:p-10 rounded-[28px] bg-gradient-to-br from-white to-[#F0EFEB] border border-[#f6c73b]/25 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-[#f6c73b]/20 text-[#2C2C2E]">
                  <EyeOff className="w-5 h-5" />
                </span>
                <h4 className="text-xl font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">
                  {isEn ? 'Protect, not monitor' : 'Proteggere, non controllare'}
                </h4>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed font-mono text-[#5E5E62]">
                {isEn
                  ? 'WIDIU\'s objective is not monitoring the worker, but empowering more timely, measurable, and aware prevention. System architecture adheres to privacy by design and default, ensuring role-based access, pseudonymization where applicable, cybersecurity, traceability, and data usage strictly aligned with health and safety protection.'
                  : 'L’obiettivo di WIDIU non è sorvegliare il lavoratore, ma supportare una prevenzione più tempestiva, misurabile e consapevole. La progettazione del sistema deve seguire i principi di privacy by design e privacy by default, prevedendo accessi profilati, pseudonimizzazione ove possibile, sicurezza informatica, tracciabilità e utilizzo dei dati coerente con le finalità di tutela della salute e sicurezza.'}
              </p>
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div variants={itemVariants} className="p-10 card-premium text-center space-y-6 rounded-[28px]">
            <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'WIDIU - The intelligent smartwatch for workplace safety' : 'WIDIU - Lo smartwatch intelligente per la sicurezza sul lavoro'}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5E62] max-w-xl mx-auto font-mono leading-relaxed">
              {isEn
                ? 'Discover how to integrate WIDIU into your organization and transform data into daily prevention.'
                : 'Scopri come integrare WIDIU nella tua organizzazione e trasformare i dati in prevenzione quotidiana.'}
            </p>
            <div className="pt-2">
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold font-mono tracking-wider uppercase bg-[#f6c73b] text-[#2C2C2E] border border-[#f6c73b] rounded-[18px] hover:bg-[#f6c73b]/90 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(242,196,0,0.4)] cursor-pointer"
              >
                {isEn ? 'Explore WIDIU' : 'Scopri WIDIU'}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
              </Link>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
