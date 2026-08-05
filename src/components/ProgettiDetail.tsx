import React, { useState } from 'react';
import {
  ShieldCheck, Cpu, MessageSquare, CheckCircle, ArrowRight, Activity,
  ClipboardCheck, Scale, HardHat, Train, Radio, Trophy, HeartHandshake,
  Sparkles, Home, Coffee, ChevronLeft, ChevronRight, Grid, LayoutList,
  Check, Info, Sparkle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

// Import newly generated scontornata product assets
import dailyPlatformUi from '../assets/images/Dashboard dailyplatform.png';
import dashboardVera from '../assets/images/dashboard vera.png';
import widiuSmartwatch from '../assets/images/widiu_smartwatch_perfect_1784275575209.jpg';
import salvatoreRobot from '../assets/images/SALVATORE_ROBOT.png';

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

export default function ProgettiDetail() {
  const { t, lang } = useLanguage();
  const isEn = lang === 'en';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  const mainProjects = [
    {
      id: 'dailyplatform',
      title: 'dailyplatform',
      badge: isEn ? 'AI Platform' : 'Piattaforma IA',
      tagline: t('progetti.platformTagline'),
      description: t('progetti.platformDesc'),
      icon: ShieldCheck,
      color: 'text-[#2C2C2E] bg-[#f6c73b]/10 border-[#f6c73b]/20',
      image: dailyPlatformUi,
      details: [
        t('progetti.platformD1'),
        t('progetti.platformD2'),
        t('progetti.platformD3'),
        t('progetti.platformD4'),
        t('progetti.platformD5'),
      ],
    },
    {
      id: 'widiu',
      title: 'WIDIU',
      badge: isEn ? 'PATENTED SMARTWATCH' : 'SMARTWATCH BREVETTATO',
      tagline: t('progetti.widiuTagline'),
      description: t('progetti.widiuDesc'),
      icon: Cpu,
      color: 'text-[#2C2C2E] bg-[#f6c73b]/10 border-[#f6c73b]/20',
      image: widiuSmartwatch,
      details: [
        t('progetti.widiuD1'),
        t('progetti.widiuD2'),
        t('progetti.widiuD3'),
        t('progetti.widiuD4'),
        t('progetti.widiuD5'),
      ],
    },
    {
      id: 'salvatore',
      title: 'Salvatore',
      badge: 'AI AGENT',
      tagline: t('progetti.salvatoreTagline'),
      description: t('progetti.salvatoreDesc'),
      icon: MessageSquare,
      color: 'text-[#2C2C2E] bg-[#f6c73b]/10 border-[#f6c73b]/20',
      image: salvatoreRobot,
      details: [
        t('progetti.salvatoreD1'),
        t('progetti.salvatoreD2'),
        t('progetti.salvatoreD3'),
        t('progetti.salvatoreD4'),
        t('progetti.salvatoreD5'),
      ],
    },
    {
      id: 'vera',
      title: 'Vera',
      badge: isEn ? 'IOT DATA ANALYSIS AND MONITORING SOFTWARE' : 'IOT DATA ANALYSIS E SOFTWARE DI MONITORAGGIO',
      tagline: 'Vera',
      description: t('progetti.veraDesc'),
      icon: Activity,
      color: 'text-[#2C2C2E] bg-[#f6c73b]/10 border-[#f6c73b]/20',
      image: dashboardVera,
      details: [
        t('progetti.veraD1'),
        t('progetti.veraD2'),
        t('progetti.veraD3'),
        t('progetti.veraD4'),
      ],
    },
  ];

  const dailybydailySolutions = [
    {
      id: 'daily4compliance',
      title: 'daily4compliance',
      badge: isEn ? 'daily Vertical App' : 'App Verticale daily',
      payoff: isEn ? 'Requirements, Deadlines & Regulatory Verification' : 'Adempimenti, Scadenze & Verifica Normativa',
      icon: ClipboardCheck,
      description: t('progetti.d4cDesc'),
      highlights: isEn ? [
        'Guided ATECO requirement analysis',
        'Checklist management & field verification',
        'Task tracking & deadline management'
      ] : [
        'Analisi adempimenti guidata per ATECO',
        'Gestione checklist e verifiche sul campo',
        'Task e tracciabilità scadenze'
      ],
      features: [
        t('progetti.d4cF1'),
        t('progetti.d4cF2'),
        t('progetti.d4cF3'),
        t('progetti.d4cF4'),
      ],
    },
    {
      id: 'daily231',
      title: 'daily231',
      badge: isEn ? 'daily Vertical App' : 'App Verticale daily',
      payoff: isEn ? '231 Model & Organizational Risk Prevention' : 'Modello 231 & Prevenzione Rischi Organizzativi',
      icon: Scale,
      description: t('progetti.d231Desc'),
      highlights: isEn ? [
        '231 crime-risk mapping',
        'Information flows for Supervisory Board',
        'Whistleblowing management & protocols'
      ] : [
        'Mappatura rischi-reato 231',
        'Flussi informativi per l’OdV',
        'Gestione Whistleblowing e protocolli'
      ],
      features: [
        t('progetti.d231F1'),
        t('progetti.d231F2'),
        t('progetti.d231F3'),
        t('progetti.d231F4'),
      ],
    },
    {
      id: 'daily4work',
      title: 'daily4work',
      badge: isEn ? 'daily Vertical App' : 'App Verticale daily',
      payoff: isEn ? 'Tasks, PPE, Training & Check-in' : 'Mansioni, DPI, Formazione & Check-in',
      icon: HardHat,
      description: t('progetti.d4wDesc'),
      highlights: isEn ? [
        'Operational task, PPE, and risk management',
        'Transparent check-ins & incident reporting',
        'Integration with WIDIU, Vera & Salvatore'
      ] : [
        'Gestione operativa mansioni, DPI e rischi',
        'Segnalazioni e check-in trasparenti',
        'Integrazione con WIDIU, Vera e Salvatore'
      ],
      features: [
        t('progetti.d4wF1'),
        t('progetti.d4wF2'),
        t('progetti.d4wF3'),
        t('progetti.d4wF4'),
      ],
    },
    {
      id: 'daily4train',
      title: 'daily4train',
      badge: isEn ? 'daily Vertical App' : 'App Verticale daily',
      payoff: isEn ? 'Skills, Fitness & Railway Sector' : 'Competenze, Idoneità & Settore Ferroviario',
      icon: Train,
      description: t('progetti.d4tDesc'),
      highlights: isEn ? [
        'Shift, qualification & skill monitoring',
        'High-responsibility operational focus',
        'Medical fitness scheduler & continuity'
      ] : [
        'Monitoraggio turni, qualifiche ed abilità',
        'Focus operativo ad alta responsabilità',
        'Scadenziario idoneità e continuità'
      ],
      features: [
        t('progetti.d4tF1'),
        t('progetti.d4tF2'),
        t('progetti.d4tF3'),
        t('progetti.d4tF4'),
      ],
    },
    {
      id: 'dailyinform',
      title: 'dailyinform',
      badge: isEn ? 'daily Vertical App' : 'App Verticale daily',
      payoff: isEn ? 'Active Listening & Prevention Pills' : 'Ascolto Attivo & Pillole di Prevenzione',
      icon: Radio,
      description: t('progetti.dinfDesc'),
      highlights: isEn ? [
        'Quick surveys & self-assessments',
        'Interception of stress & fatigue signals',
        'Rapid deployment of procedures & pills'
      ] : [
        'Questionari e autovalutazioni veloci',
        'Intercettazione segnali di stress e affaticamento',
        'Diffusione rapida di procedure e pillole'
      ],
      features: [
        t('progetti.dinfF1'),
        t('progetti.dinfF2'),
        t('progetti.dinfF3'),
        t('progetti.dinfF4'),
      ],
    },
    {
      id: 'daily4sport',
      title: 'daily4sport',
      badge: isEn ? 'daily Vertical App' : 'App Verticale daily',
      payoff: isEn ? 'Performance, Dual Career & Prevention' : 'Performance, Dual Career & Prevenzione',
      icon: Trophy,
      description: t('progetti.d4sDesc'),
      highlights: isEn ? [
        'Balancing performance & dual career studies',
        'Tools for clubs & student-athletes',
        'Injury prevention & growth pathways'
      ] : [
        'Equilibrio performance e percorso di studio',
        'Strumenti per società e atleti',
        'Prevenzione infortuni e crescita'
      ],
      features: [
        t('progetti.d4sF1'),
        t('progetti.d4sF2'),
        t('progetti.d4sF3'),
        t('progetti.d4sF4'),
      ],
    },
    {
      id: 'daily4child',
      title: 'daily4child',
      badge: isEn ? 'daily Vertical App' : 'App Verticale daily',
      payoff: isEn ? 'Prevention & Well-being in Schools and Families' : 'Prevenzione & Benessere in Scuole e Famiglie',
      icon: HeartHandshake,
      description: t('progetti.d4chDesc'),
      highlights: isEn ? [
        'Prevention in educational contexts',
        'Child protection & maximum privacy',
        'Inclusive awareness pathways'
      ] : [
        'Prevenzione nei contesti educativi',
        'Tutela dei minori e massima privacy',
        'Percorsi di consapevolezza inclusivi'
      ],
      features: [
        t('progetti.d4chF1'),
        t('progetti.d4chF2'),
        t('progetti.d4chF3'),
        t('progetti.d4chF4'),
      ],
    },
    {
      id: 'daily4woman',
      title: 'daily4woman',
      badge: isEn ? 'daily Vertical App' : 'App Verticale daily',
      payoff: isEn ? 'Gender Equality, Health & Organizational Well-being' : 'Parità, Salute & Benessere Organizzativo',
      icon: Sparkles,
      description: t('progetti.d4woDesc'),
      highlights: isEn ? [
        'Promoting equality & inclusive environments',
        'Psychological safety & work-life balance',
        'Confidential listening & prevention'
      ] : [
        'Promozione parità e ambienti inclusivi',
        'Sicurezza psicologica e conciliazione',
        'Ascolto riservato e prevenzione'
      ],
      features: [
        t('progetti.d4woF1'),
        t('progetti.d4woF2'),
        t('progetti.d4woF3'),
        t('progetti.d4woF4'),
      ],
    },
    {
      id: 'dailyathome',
      title: 'dailyathome',
      badge: isEn ? 'daily Vertical App' : 'App Verticale daily',
      payoff: isEn ? 'Domestic Prevention & Safe Routines' : 'Prevenzione Domestica & Routine Sicure',
      icon: Home,
      description: t('progetti.dahDesc'),
      highlights: isEn ? [
        'Prevention in living and care environments',
        'Protection reminders & safe habits',
        'Support for vulnerability, autonomy & comfort'
      ] : [
        'Prevenzione negli ambienti di vita e cura',
        'Promemoria e abitudini di protezione',
        'Supporto a fragilità, autonomia e comfort'
      ],
      features: [
        t('progetti.dahF1'),
        t('progetti.dahF2'),
        t('progetti.dahF3'),
        t('progetti.dahF4'),
      ],
    },
    {
      id: 'dailyOnOff',
      title: 'dailyOn&Off',
      badge: isEn ? 'daily Vertical App' : 'App Verticale daily',
      payoff: isEn ? 'Micro-breaks, Breathing & Recovery' : 'Micro-pause, Respirazione & Recupero',
      icon: Coffee,
      description: t('progetti.donoffDesc'),
      highlights: isEn ? [
        'Short breathing & hydration protocols',
        'Break management & decompression',
        'Rebalancing fatigue and stress'
      ] : [
        'Protocolli brevi di respirazione e idratazione',
        'Gestione delle pause e decompressione',
        'Riequilibrio da affaticamento e stress'
      ],
      features: [
        t('progetti.donoffF1'),
        t('progetti.donoffF2'),
        t('progetti.donoffF3'),
        t('progetti.donoffF4'),
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dailybydailySolutions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dailybydailySolutions.length) % dailybydailySolutions.length);
  };

  return (
    <div className="py-36 bg-[#F0EFEB] text-left services-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {/* Title Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">{t('progetti.headerBadge')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">{t('progetti.headerTitle')}</h2>
            <p className="mt-4 text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
              {t('progetti.headerSubtitle')}
            </p>
          </motion.div>

          {/* Main Projects Column - Alternating image/text layouts */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {mainProjects.map((p) => {
              // dailyplatform & salvatore -> image-left; widiu & vera -> text-left
              const isImageLeft = p.id === 'dailyplatform' || p.id === 'salvatore';
              return (
                <motion.div
                  variants={itemVariants}
                  key={p.id}
                  className={`w-full rounded-[32px] bg-white border border-[#f6c73b]/15 p-8 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_24px_50px_rgba(246,199,59,0.11)] hover:border-[#f6c73b]/30 transition-all duration-500 relative overflow-hidden group service-row ${isImageLeft ? 'image-left' : 'text-left'}`}
                >
                  {/* Decorative gold ambient glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#f6c73b]/0 to-[#f6c73b]/4 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none z-0" />

                  <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-16">
                    {/* Image Block: image-left (image first on desktop) vs text-left (image last on desktop) */}
                    <div className={`w-full lg:w-1/2 flex-shrink-0 ${isImageLeft ? 'lg:order-first' : 'lg:order-last'}`}>
                      <div className={`relative w-full rounded-2xl overflow-hidden bg-[#F0EFEB]/40 border border-[#f6c73b]/10 flex items-center justify-center p-6 sm:p-8 hover:border-[#f6c73b]/25 transition-colors duration-500 service-visual service-image-wrapper service-card-image ${
                        p.id === 'salvatore' ? 'salvatore-image-wrapper' : p.id === 'vera' ? 'vera-card-image-wrapper min-h-[300px]' : 'aspect-[4/3]'
                      }`}>
                        <motion.img
                          src={p.image}
                          alt={p.title}
                          referrerPolicy="no-referrer"
                          className={
                            p.id === 'salvatore' 
                              ? "salvatore-image" 
                              : p.id === 'vera' 
                                ? "vera-dashboard-image transition-transform duration-700 ease-out" 
                                : "w-full h-full object-contain transition-transform duration-700 ease-out"
                          }
                          whileHover={{ scale: 1.06, y: -4 }}
                          style={p.id === 'salvatore' || p.id === 'vera' ? {} : { mixBlendMode: 'multiply' }}
                        />
                      </div>
                    </div>

                    {/* Text Block: image-left (text last on desktop) vs text-left (text first on desktop) */}
                    <div className={`w-full lg:w-1/2 flex flex-col justify-between h-full service-content ${isImageLeft ? 'lg:order-last' : 'lg:order-first'}`}>
                      <div>
                        {/* Badge & Icon Header */}
                        <div className="flex justify-between items-center mb-6">
                          <span className="inline-flex items-center gap-2 text-[10px] uppercase font-mono font-bold tracking-widest text-[#2C2C2E]/60 bg-[#2C2C2E]/5 px-3 py-1.5 rounded-2xl border border-[#2C2C2E]/10 whitespace-normal break-words max-w-full text-left leading-tight">
                            <p.icon className="w-4 h-4 text-[#f6c73b] stroke-[2.5] shrink-0" />
                            <span>{p.badge}</span>
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#2C2C2E] mb-2 tracking-tight group-hover:text-[#f6c73b] transition-colors duration-300">
                          {p.title}
                        </h3>
                        <p className="text-xs mb-4 font-mono text-[#5E5E62] font-semibold tracking-wide uppercase">{p.tagline}</p>
                        <p className="text-xs sm:text-sm leading-relaxed mb-8 font-mono text-[#5E5E62]">{p.description}</p>
                      </div>

                      <div className="pt-6 border-t border-[#2C2C2E]/10 flex flex-col items-stretch gap-6">
                        <div className="space-y-3.5 font-mono text-xs text-[#5E5E62] w-full">
                          {p.details.map((d, index) => (
                            <div key={index} className="flex items-start gap-2.5 group/item">
                              <CheckCircle className="w-3.5 h-3.5 text-[#f6c73b] shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-110" />
                              <span className="group-hover:text-[#2C2C2E] transition-colors duration-200">{d}</span>
                            </div>
                          ))}
                        </div>
                        {p.id === 'dailyplatform' && (
                          <div className="w-full flex justify-center sm:justify-end mt-2">
                            <Link
                              to="/dailyplatform"
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f6c73b] text-[#2C2C2E] text-xs font-bold font-sans uppercase tracking-widest hover:bg-[#f6c73b]/90 hover:brightness-105 transition-all duration-300 shadow-[0_4px_14px_rgba(246,199,59,0.2)] hover:shadow-[0_6px_20px_rgba(246,199,59,0.35)] active:scale-95 whitespace-nowrap"
                            >
                              {t('progetti.discoverPlatform')}
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* dailybydaily Ecosystem */}
          <div className="space-y-8 relative dailybydaily-section">
            {/* Background Decorative Gold Dot Accents */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-gradient-to-r from-[#f6c73b]/0 via-[#f6c73b]/8 to-[#f6c73b]/0 rounded-full blur-3xl pointer-events-none z-0" />

            {/* Header row with left-aligned intro copy and right-aligned slider arrows */}
            <motion.div variants={itemVariants} className="dailybydaily-header-row flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#2C2C2E]/10 pb-6 relative z-10">
              <div className="dailybydaily-copy text-left max-w-3xl space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#2C2C2E] tracking-tight">dailybydaily</h2>
                <h3 className="text-base sm:text-lg font-semibold text-[#2C2C2E] font-sans">
                  {isEn ? 'The daily ecosystem of vertical apps' : 'L’ecosistema di app verticali daily'}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
                  {t('progetti.ecoSub')}
                </p>
              </div>

              {/* Slider Arrow Controls */}
              <div className="dailybydaily-slider-controls flex items-center gap-3 shrink-0 self-start md:self-center">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-full border border-[#2C2C2E]/18 bg-[#f6c73b] text-[#2C2C2E] hover:bg-[#2C2C2E] hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center cursor-pointer group shrink-0"
                  aria-label={isEn ? 'App precedente' : 'App precedente'}
                >
                  <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-full border border-[#2C2C2E]/18 bg-[#f6c73b] text-[#2C2C2E] hover:bg-[#2C2C2E] hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center cursor-pointer group shrink-0"
                  aria-label={isEn ? 'App successiva' : 'App successiva'}
                >
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </motion.div>

            {/* Slider Container */}
            <div className="dailybydaily-slider space-y-6 relative z-10">
              {/* Slider Card View */}
              <div className="relative min-h-[460px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {dailybydailySolutions.map((sol, index) => {
                    if (index !== currentIndex) return null;
                    const IconComponent = sol.icon;
                    return (
                      <motion.div
                        key={sol.id}
                        initial={{ opacity: 0, x: 40, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -40, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="app-card dailybydaily-card slider-card w-full bg-[#2C2C2E] text-white rounded-[28px] border border-[#2C2C2E] p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(246,199,59,0.2)] hover:border-[#f6c73b] transition-all duration-500 relative overflow-hidden group"
                      >
                        {/* Top Ambient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#f6c73b]/0 via-[#f6c73b]/0 to-[#f6c73b]/10 transition-opacity duration-500 pointer-events-none rounded-[28px]" />

                        <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                          {/* Card Header */}
                          <div>
                            <div className="flex items-center justify-between gap-4 mb-5">
                              <div className="w-14 h-14 rounded-2xl bg-[#f6c73b] text-[#2C2C2E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300 shadow-sm">
                                <IconComponent className="w-7 h-7 stroke-[2.2]" />
                              </div>
                              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#f6c73b] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                                {sol.badge}
                              </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white tracking-tight group-hover:text-[#f6c73b] transition-colors">
                              {sol.title}
                            </h3>
                            <p className="text-xs font-mono font-semibold text-[#f6c73b] uppercase tracking-wider mt-1 mb-4">
                              {sol.payoff}
                            </p>

                            <p className="text-xs sm:text-sm font-mono text-white/85 leading-relaxed">
                              {sol.description}
                            </p>
                          </div>

                          {/* Middle Box: Punti Chiave / Benefit */}
                          <div className="bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3">
                            <span className="text-[10px] font-mono font-bold text-[#f6c73b] uppercase tracking-widest block">
                              {isEn ? 'Key Points & Benefits' : 'Punti Chiave & Benefit'}
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                              {sol.highlights.map((h, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs font-mono text-white bg-white/10 px-3 py-2 rounded-xl border border-white/10 shadow-2xs">
                                  <CheckCircle className="w-3.5 h-3.5 text-[#f6c73b] shrink-0" />
                                  <span className="truncate">{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Features List & CTA Footer */}
                          <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono text-white/85">
                              {sol.features.map((f, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <Check className="w-3.5 h-3.5 text-[#f6c73b] shrink-0 mt-0.5 stroke-[3]" />
                                  <span>{f}</span>
                                </div>
                              ))}
                            </div>

                            <Link
                              to="/contatti"
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#f6c73b] text-[#2C2C2E] hover:bg-white hover:text-[#2C2C2E] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-sm shrink-0 group/btn"
                            >
                              <span>{isEn ? 'Request Info' : 'Richiedi Info'}</span>
                              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Dot Pagination */}
              <div className="flex items-center justify-center gap-2 pt-2">
                {dailybydailySolutions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex
                        ? 'w-8 bg-[#f6c73b]'
                        : 'w-2.5 bg-[#2C2C2E]/20 hover:bg-[#2C2C2E]/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
