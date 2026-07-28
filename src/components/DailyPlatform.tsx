import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  Shield,
  FileText,
  Activity,
  CloudSun,
  Bell,
  BarChart3,
  Users,
  Radio,
  TrendingUp,
  Signature,
  Cpu,
  Laptop,
  MessageSquare,
  Settings,
  Briefcase,
  HeartPulse,
  HardHat,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building,
  Hammer,
  Heart,
  Truck,
  Award,
  Smartphone,
  UserCheck,
  Lock,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import InteractiveImage from './InteractiveImage';

// Import images representing the dailyplatform dashboard and ecosystem
import dailyPlatformUi from '../assets/images/Dashboard dailyplatform.png';
import supervisorIot from '../assets/images/supervisor_iot_1780517606283.png';
import archivioDailyplatform from '../assets/images/Archivio dailyplatform.png';

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
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const bgDots = [
  { top: '8%', left: '12%', size: 7 },
  { top: '18%', left: '76%', size: 5 },
  { top: '32%', left: '20%', size: 8 },
  { top: '42%', left: '88%', size: 6 },
  { top: '58%', left: '10%', size: 5 },
  { top: '72%', left: '82%', size: 9 },
  { top: '84%', left: '38%', size: 6 },
  { top: '12%', left: '48%', size: 4 },
  
  // additional distributed positions
  { top: '15%', left: '30%', size: 5 },
  { top: '25%', left: '85%', size: 7 },
  { top: '30%', left: '62%', size: 4 },
  { top: '45%', left: '15%', size: 6 },
  { top: '52%', left: '92%', size: 8 },
  { top: '65%', left: '28%', size: 5 },
  { top: '78%', left: '68%', size: 7 },
  { top: '88%', left: '18%', size: 4 },
  { top: '92%', left: '55%', size: 6 },
  { top: '22%', left: '5%', size: 5 },
  { top: '60%', left: '74%', size: 8 },
  { top: '80%', left: '90%', size: 5 },
  { top: '38%', left: '38%', size: 6 },
  { top: '70%', left: '48%', size: 5 }
];

export default function DailyPlatform() {
  const { t } = useLanguage();

  // SEO tab title and meta description setup
  useEffect(() => {
    document.title = "dailyplatform | Piattaforma digitale HSE per sicurezza sul lavoro e prevenzione predittiva";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = "Scopri dailyplatform, la piattaforma digitale HSE di daily che integra dati biometrici, ambientali, organizzativi e documentali per generare KPI, modelli predittivi e supporto alle decisioni.";
    
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 1. Accordion State for "Cosa integra"
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const integrationItems = [
    {
      title: t('dailyplatform.integ1Title'),
      desc: t('dailyplatform.integ1Desc'),
      icon: Users,
    },
    {
      title: t('dailyplatform.integ2Title'),
      desc: t('dailyplatform.integ2Desc'),
      icon: FileText,
    },
    {
      title: t('dailyplatform.integ3Title'),
      desc: t('dailyplatform.integ3Desc'),
      icon: Activity,
    },
    {
      title: t('dailyplatform.integ4Title'),
      desc: t('dailyplatform.integ4Desc'),
      icon: CloudSun,
    },
    {
      title: t('dailyplatform.integ5Title'),
      desc: t('dailyplatform.integ5Desc'),
      icon: TrendingUp,
    },
    {
      title: t('dailyplatform.integ6Title'),
      desc: t('dailyplatform.integ6Desc'),
      icon: BarChart3,
    },
  ];

  // 2. Sequential Flow State (Dal dato alla decisione operativa)
  const [hoveredFlowStep, setHoveredFlowStep] = useState<number | null>(null);
  const flowSteps = [
    {
      step: '01',
      title: t('dailyplatform.flow1Title'),
      desc: t('dailyplatform.flow1Desc'),
      icon: Smartphone,
    },
    {
      step: '02',
      title: t('dailyplatform.flow2Title'),
      desc: t('dailyplatform.flow2Desc'),
      icon: Settings,
    },
    {
      step: '03',
      title: t('dailyplatform.flow3Title'),
      desc: t('dailyplatform.flow3Desc'),
      icon: Cpu,
    },
    {
      step: '04',
      title: t('dailyplatform.flow4Title'),
      desc: t('dailyplatform.flow4Desc'),
      icon: CheckCircle2,
    },
    {
      step: '05',
      title: t('dailyplatform.flow5Title'),
      desc: t('dailyplatform.flow5Desc'),
      icon: TrendingUp,
    },
  ];

  // 3. Carousel Slider State (Gli strumenti principali di dailyplatform)
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const carouselTools = [
    {
      title: t('dailyplatform.tool1Title'),
      desc: t('dailyplatform.tool1Desc'),
      icon: Shield,
    },
    {
      title: t('dailyplatform.tool2Title'),
      desc: t('dailyplatform.tool2Desc'),
      icon: Smartphone,
    },
    {
      title: t('dailyplatform.tool3Title'),
      desc: t('dailyplatform.tool3Desc'),
      icon: BarChart3,
    },
    {
      title: t('dailyplatform.tool4Title'),
      desc: t('dailyplatform.tool4Desc'),
      icon: Laptop,
    },
    {
      title: t('dailyplatform.tool5Title'),
      desc: t('dailyplatform.tool5Desc'),
      icon: TrendingUp,
    },
    {
      title: t('dailyplatform.tool6Title'),
      desc: t('dailyplatform.tool6Desc'),
      icon: FileText,
    },
    {
      title: t('dailyplatform.tool7Title'),
      desc: t('dailyplatform.tool7Desc'),
      icon: Signature,
    },
    {
      title: t('dailyplatform.tool8Title'),
      desc: t('dailyplatform.tool8Desc'),
      icon: Cpu,
    },
  ];

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const progress = scrollWidth > clientWidth ? (scrollLeft / (scrollWidth - clientWidth)) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // 4. Interactive Node Graph State (Il centro operativo dell'ecosistema)
  const [activeNode, setActiveNode] = useState<string>('dailyplatform');
  const nodes = [
    {
      id: 'dailyplatform',
      title: 'dailyplatform',
      role: t('dailyplatform.nodeCenterRole'),
      desc: t('dailyplatform.nodeCenterDesc'),
      x: '50%',
      y: '50%',
      color: 'bg-[#2C2C2E] border-[#F2C400] text-white',
    },
    {
      id: 'salvatore',
      title: 'Salvatore',
      role: t('dailyplatform.nodeSalRole'),
      desc: t('dailyplatform.nodeSalDesc'),
      x: '50%',
      y: '20%',
      color: 'bg-white border-black/10 text-[#2C2C2E]',
    },
    {
      id: 'widiu',
      title: 'WIDIU',
      role: t('dailyplatform.nodeWidRole'),
      desc: t('dailyplatform.nodeWidDesc'),
      x: '18%',
      y: '50%',
      color: 'bg-[#white] border-black/10 text-[#2C2C2E]',
    },
    {
      id: 'vera',
      title: 'Vera',
      role: t('dailyplatform.nodeVeraRole'),
      desc: t('dailyplatform.nodeVeraDesc'),
      x: '82%',
      y: '50%',
      color: 'bg-white border-black/10 text-[#2C2C2E]',
    },
    {
      id: 'dailybydaily',
      title: 'dailybydaily',
      role: t('dailyplatform.nodeDbdRole'),
      desc: t('dailyplatform.nodeDbdDesc'),
      x: '50%',
      y: '80%',
      color: 'bg-white border-black/10 text-[#2C2C2E]',
    }
  ];

  // 5. Sector Tabs State
  const [activeSector, setActiveSector] = useState<number>(0);
  const sectorTabsRef = useRef<HTMLDivElement>(null);

  const scrollSectorTabs = (direction: 'left' | 'right') => {
    if (sectorTabsRef.current) {
      const scrollAmount = 240;
      sectorTabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  const sectors = [
    {
      title: t('dailyplatform.sec1Title'),
      icon: Building,
      badge: t('dailyplatform.sec1Badge'),
      desc: t('dailyplatform.sec1Desc'),
      highlight: t('dailyplatform.sec1High')
    },
    {
      title: t('dailyplatform.sec2Title'),
      icon: Hammer,
      badge: t('dailyplatform.sec2Badge'),
      desc: t('dailyplatform.sec2Desc'),
      highlight: t('dailyplatform.sec2High')
    },
    {
      title: t('dailyplatform.sec3Title'),
      icon: HeartPulse,
      badge: t('dailyplatform.sec3Badge'),
      desc: t('dailyplatform.sec3Desc'),
      highlight: t('dailyplatform.sec3High')
    },
    {
      title: t('dailyplatform.sec4Title'),
      icon: Truck,
      badge: t('dailyplatform.sec4Badge'),
      desc: t('dailyplatform.sec4Desc'),
      highlight: t('dailyplatform.sec4High')
    },
    {
      title: t('dailyplatform.sec5Title'),
      icon: Activity,
      badge: t('dailyplatform.sec5Badge'),
      desc: t('dailyplatform.sec5Desc'),
      highlight: t('dailyplatform.sec5High')
    },
    {
      title: t('dailyplatform.sec6Title'),
      icon: Laptop,
      badge: t('dailyplatform.sec6Badge'),
      desc: t('dailyplatform.sec6Desc'),
      highlight: t('dailyplatform.sec6High')
    }
  ];

  return (
    <div className="py-24 md:py-32 bg-[#F0EFEB] text-[#2C2C2E] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-36"
        >
          {/* Hero Section */}
          <section className="pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2C400]/10 border border-[#F2C400]/25 text-xs font-bold font-mono tracking-widest uppercase text-[#2C2C2E]/80">
                  <Cpu className="w-3.5 h-3.5 text-[#F2C400]" />
                  {t('dailyplatform.heroBadge')}
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none text-[#2C2C2E]">
                  dailyplatform
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-[#2C2C2E]/90 text-balance leading-snug">
                  {t('dailyplatform.heroSubtitle')}
                </p>
                
                <p className="text-xs sm:text-sm leading-relaxed font-mono text-[#5E5E62]">
                  {t('dailyplatform.heroDesc')}
                </p>
                
                {/* Hero CTA buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://crm.dailyplatform.it/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 rounded-[18px] text-xs font-bold font-mono tracking-wider uppercase transition-all duration-300 bg-[#F2C400] text-[#2C2C2E] border border-[#F2C400] hover:bg-[#F2C400]/90 shadow-md hover:shadow-lg cursor-pointer text-center"
                  >
                    {t('dailyplatform.buyBtn')}
                  </a>
                  <button
                    onClick={() => scrollToSection('che-cose-dailyplatform')}
                    className="px-6 py-4 rounded-[18px] text-xs font-bold font-mono tracking-wider uppercase transition-all duration-300 bg-white text-[#2C2C2E] border border-black/10 hover:border-[#F2C400]/40 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    {t('dailyplatform.discoverBtn')}
                  </button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="lg:col-span-6 w-full flex justify-center items-center">
                <div className="relative w-full max-w-[820px] flex items-center justify-center">
                  {/* Decorative brand yellow tech dots */}
                  <div className="absolute -top-3 left-10 w-3.5 h-3.5 rounded-full bg-[#F2C400] shadow-[0_0_12px_rgba(242,196,0,0.7)] z-10 pointer-events-none" />
                  <div className="absolute top-1/3 -right-3 w-2.5 h-2.5 rounded-full bg-[#F2C400]/80 shadow-[0_0_8px_rgba(242,196,0,0.5)] z-10 pointer-events-none" />
                  <div className="absolute -bottom-3 right-1/4 w-3 h-3 rounded-full bg-[#F2C400]/90 shadow-[0_0_10px_rgba(242,196,0,0.6)] z-10 pointer-events-none" />
                  <div className="absolute bottom-1/4 -left-3 w-2 h-2 rounded-full bg-[#F2C400]/60 z-10 pointer-events-none" />
                  <div className="absolute top-8 right-16 w-2 h-2 rounded-full bg-[#F2C400]/75 z-10 pointer-events-none" />

                  <InteractiveImage
                    src={dailyPlatformUi}
                    alt="Interfaccia dailyplatform con dashboard predittiva, scadenziari e telemetria HSE"
                    aspectRatio="video"
                    objectFit="contain"
                    mixBlend="multiply"
                    className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:scale-[1.01]"
                  />
                </div>
              </motion.div>

            </div>
          </section>

          {/* Sezione 1 — Che cos’è dailyplatform */}
          <motion.section 
            id="che-cose-dailyplatform"
            variants={itemVariants} 
            className="pt-16 border-t border-black/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">{t('dailyplatform.visionBadge')}</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2E] tracking-tight leading-tight">
                  {t('dailyplatform.visionTitle')}
                </h2>
                
                <div className="space-y-6 text-sm sm:text-base text-[#5E5E62] leading-relaxed font-mono font-light">
                  <p className="text-gray-900 font-normal text-base">
                    {t('dailyplatform.visionP1')}
                  </p>
                  <p>
                    {t('dailyplatform.visionP2')}
                  </p>
                  <p>
                    {t('dailyplatform.visionP3')}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 w-full flex items-center justify-center">
                <div className="w-full max-w-[760px] aspect-video rounded-[28px] overflow-hidden bg-white/50 border border-[#F2C400]/15 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-[#F2C400]/30 transition-all duration-500 group flex items-center justify-center">
                  <InteractiveImage
                    src={archivioDailyplatform}
                    alt="Piattaforma dailyplatform - Archivio digitale"
                    aspectRatio="video"
                    objectFit="contain"
                    mixBlend="multiply"
                    className="w-full h-full rounded-[18px]"
                  />
                </div>
              </div>

            </div>
          </motion.section>

          {/* Sezione 2 — Cosa integra */}
          <motion.section variants={itemVariants} className="space-y-12">
            <div className="text-left max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block mb-2">{t('dailyplatform.integBadge')}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] tracking-tight">
                {t('dailyplatform.integTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-[#5E5E62] font-mono mt-3 leading-relaxed">
                {t('dailyplatform.integSub')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="integration-card p-8 rounded-[24px] bg-white/70 shadow-sm flex flex-col justify-between h-full text-[#2C2C2E] relative overflow-hidden group"
                  >
                    {/* Subtle top border accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#F2C400]/40 group-hover:bg-[#F2C400] transition-colors duration-300" />
                    <div className="space-y-4">
                      <div className="p-3 w-fit rounded-xl bg-gray-50 border border-black/5 text-[#2C2C2E] group-hover:bg-[#F2C400]/20 group-hover:border-[#F2C400]/40 transition-colors duration-300">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold font-sans tracking-tight uppercase">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* Sezione 3 — Evoluzione del rischio */}
          <motion.section 
            id="evoluzione-del-rischio"
            variants={itemVariants} 
            className="py-16 border-t border-b border-black/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Title + Text */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">{t('dailyplatform.riskBadge')}</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2E] tracking-tight leading-tight">
                  {t('dailyplatform.riskTitle')}
                </h2>
                
                <div className="space-y-6 text-sm sm:text-base text-[#5E5E62] leading-relaxed font-mono font-light">
                  <p className="text-[#2C2C2E] font-normal text-base">
                    {t('dailyplatform.riskP1')}
                  </p>
                  <p>
                    {t('dailyplatform.riskP2')}
                  </p>
                </div>
              </div>

              {/* Right Column: Prominent Manifesto sentence */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start justify-center relative py-8 px-4 text-center lg:text-left">
                <div className="relative space-y-4 max-w-md mx-auto">
                  {/* Decorative quotation mark in background */}
                  <span className="absolute -top-12 -left-6 text-8xl text-[#F2C400]/25 font-serif select-none pointer-events-none">“</span>
                  
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans tracking-tight text-[#2C2C2E] leading-tight relative z-10">
                    {t('dailyplatform.quote')}
                  </p>
                  
                  {/* Elegant yellow line under */}
                  <div className="h-1 w-24 bg-[#F2C400] rounded-full shadow-sm" />
                </div>
              </div>

            </div>
          </motion.section>

          {/* Sezione 4 — Dal dato alla decisione operativa */}
          <motion.section variants={itemVariants} className="space-y-12">
            <div className="text-left max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block mb-2">{t('dailyplatform.flowBadge')}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] tracking-tight">
                {t('dailyplatform.flowTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-[#5E5E62] font-mono mt-3 leading-relaxed">
                {t('dailyplatform.flowSub')}
              </p>
            </div>

            {/* Sequential Flow - Horizontal on Desktop, Vertical on Mobile */}
            <div className="relative py-8 px-4 bg-white/40 border border-black/5 rounded-[32px] overflow-hidden">
              {/* Dynamic Connecting Line - Desktop Only */}
              <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[3px] bg-gray-200 z-0 overflow-hidden">
                <motion.div 
                  className="h-full bg-[#F2C400]" 
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
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border ${isHovered ? 'bg-[#F2C400] text-[#2C2C2E] border-[#F2C400] scale-110 shadow-[0_8px_20px_rgba(242,196,0,0.25)]' : 'bg-white text-[#2C2C2E]/60 border-black/5 group-hover:border-[#F2C400]/40'}`}>
                          <IconComponent className="w-6 h-6 stroke-[1.75]" />
                        </div>
                        
                        <div className="absolute top-1 left-2 sm:left-4 lg:-top-5 lg:left-0">
                          <span className="text-[10px] font-mono font-bold text-[#2C2C2E]/30 group-hover:text-[#F2C400] transition-colors duration-300">
                            STEP {stepItem.step}
                          </span>
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="mt-5 space-y-2">
                        <h3 className={`text-base font-bold font-sans tracking-tight uppercase transition-colors duration-300 ${isHovered ? 'text-[#F2C400]' : 'text-[#2C2C2E]'}`}>
                          {stepItem.title}
                        </h3>
                        <p className="text-xs text-[#5E5E62] leading-relaxed font-mono font-light">
                          {stepItem.desc}
                        </p>
                      </div>

                      {/* Visual separator for mobile vertical layout */}
                      {idx < 4 && (
                        <div className="lg:hidden w-[2px] h-10 bg-gradient-to-b from-gray-300 to-transparent mt-6 self-center" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          {/* Sezione 5 — Gli strumenti principali */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="text-left max-w-2xl space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">{t('dailyplatform.toolsBadge')}</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] tracking-tight">
                  {t('dailyplatform.toolsTitle')}
                </h2>
                <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
                  {t('dailyplatform.toolsSub')}
                </p>
              </div>

              {/* Slider Navigation controls */}
              <div className="flex items-center gap-3 self-start md:self-end">
                <button
                  onClick={() => scrollCarousel('left')}
                  className="p-3.5 rounded-full border border-black/10 bg-white hover:bg-gray-100 transition-colors cursor-pointer group"
                  aria-label="Precedente"
                >
                  <ArrowLeft className="w-4 h-4 text-[#2C2C2E] group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => scrollCarousel('right')}
                  className="p-3.5 rounded-full border border-black/10 bg-white hover:bg-gray-100 transition-colors cursor-pointer group"
                  aria-label="Successivo"
                >
                  <ArrowRight className="w-4 h-4 text-[#2C2C2E] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Slider container with snap behavior */}
            <div className="relative">
              <div
                ref={carouselRef}
                onScroll={handleScroll}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-none scroll-smooth touch-pan-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {carouselTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[85vw] sm:w-[50vw] lg:w-[30vw] snap-start snap-always"
                  >
                    <div className="daily-card p-8 rounded-[28px] flex flex-col justify-between h-[300px] group relative overflow-hidden">
                      {/* Subtle yellow top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F2C400] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      
                      <div className="space-y-4">
                        <div className="p-3 w-fit rounded-xl bg-gray-50 text-[#2C2C2E] border border-black/5 group-hover:bg-[#F2C400]/10 group-hover:border-[#F2C400]/35 transition-colors duration-300">
                          <tool.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#2C2C2E] tracking-tight uppercase">
                          {tool.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono font-light">
                          {tool.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Bar Indicator */}
              <div className="w-full h-[2px] bg-gray-200 rounded-full overflow-hidden mt-4">
                <motion.div
                  className="h-full bg-[#F2C400]"
                  style={{ width: `${Math.max(scrollProgress, 5)}%` }}
                  layoutId="carouselProgressBar"
                />
              </div>
            </div>
          </motion.section>

          {/* Sezione 6 — Il centro operativo dell’ecosistema */}
          <motion.section variants={itemVariants} className="space-y-12">
            <div className="text-left max-w-3xl space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">{t('dailyplatform.ecoBadge')}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] tracking-tight">
                {t('dailyplatform.ecoTitle')}
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed font-mono text-[#5E5E62]">
                {t('dailyplatform.ecoSub')}
              </p>
            </div>

            {/* Interactive Graph Area */}
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/40 border border-black/5 rounded-[32px] p-6 sm:p-10 items-center overflow-hidden">
              
              {/* Graphic Stage Area */}
              <div className="ecosistema-box lg:col-span-7 h-[420px] bg-white border border-black/5 rounded-[24px] relative overflow-hidden flex items-center justify-center p-4 z-10">
                
                {/* Floating yellow dots background */}
                <div className="ecosistema-dots">
                  {bgDots.map((dot, idx) => (
                    <span
                      key={idx}
                      className="ecosistema-dot"
                      style={{
                        top: dot.top,
                        left: dot.left,
                        width: `${dot.size}px`,
                        height: `${dot.size}px`,
                      }}
                    />
                  ))}
                </div>

                <div className="ecosistema-content absolute inset-0 w-full h-full relative z-10 pointer-events-none">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <defs>
                      <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F2C400" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#2C2C2E" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    
                    <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="url(#yellowGrad)" strokeWidth="1.5" strokeDasharray="5,5" className="animate-pulse" />
                    <line x1="18%" y1="50%" x2="50%" y2="50%" stroke="url(#yellowGrad)" strokeWidth="1.5" strokeDasharray="5,5" className="animate-pulse" />
                    <line x1="82%" y1="50%" x2="50%" y2="50%" stroke="url(#yellowGrad)" strokeWidth="1.5" strokeDasharray="5,5" className="animate-pulse" />
                    <line x1="50%" y1="80%" x2="50%" y2="50%" stroke="url(#yellowGrad)" strokeWidth="1.5" strokeDasharray="5,5" className="animate-pulse" />
                  </svg>

                  {nodes.map((node) => {
                    const isActive = activeNode === node.id;
                    const positionClass = 
                      node.id === 'dailyplatform' ? 'center' :
                      node.id === 'salvatore' ? 'top' :
                      node.id === 'widiu' ? 'left' :
                      node.id === 'vera' ? 'right' :
                      node.id === 'dailybydaily' ? 'bottom' : '';
                    return (
                      <button
                        key={node.id}
                        onClick={() => setActiveNode(node.id)}
                        className={`ecosistema-node ${positionClass} absolute pointer-events-auto rounded-2xl p-3 sm:p-4 text-xs font-bold font-mono tracking-wider uppercase border shadow-md cursor-pointer transition-all duration-300 flex flex-col items-center justify-center z-10 ${node.color} ${isActive ? 'scale-110 ring-4 ring-[#F2C400]/25 border-[#F2C400] z-20 shadow-[0_10px_25px_rgba(242,196,0,0.15)]' : 'hover:scale-105 hover:border-gray-400'}`}
                        style={{ left: node.x, top: node.y, transform: `translate(-50%, -50%)` }}
                      >
                        <span className="font-sans font-bold tracking-tight text-xs sm:text-sm">{node.title}</span>
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* Informative Description Card on the Right */}
              <div className="lg:col-span-5 h-full flex flex-col justify-between p-2 z-10">
                <AnimatePresence mode="wait">
                  {nodes.map((node) => {
                    if (node.id !== activeNode) return null;
                    return (
                      <motion.div
                        key={node.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-[#F2C400] font-mono block">
                            {node.role}
                          </span>
                          <h3 className={`text-2xl font-bold font-sans tracking-tight text-[#2C2C2E] ${node.id === 'dailyplatform' ? 'lowercase' : 'uppercase'}`}>
                            {node.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono">
                          {node.desc}
                        </p>
                        
                        {node.id !== 'dailyplatform' && (
                          <div className="pt-4 border-t border-black/5">
                            <Link
                              to={node.id === 'widiu' ? '/widiu' : node.id === 'vera' ? '/vera' : '/servizi'}
                              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2C2C2E] text-white text-[11px] font-bold font-mono uppercase tracking-wider transition-colors hover:bg-black"
                            >
                              {t('dailyplatform.exploreBtn')} {node.title}
                              <ArrowRight className="w-3.5 h-3.5 text-[#F2C400]" />
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

            </div>
          </motion.section>

          {/* Sezione 7 — Per chi è pensata */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="text-left max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block mb-2">{t('dailyplatform.targetBadge')}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] tracking-tight">
                {t('dailyplatform.targetTitle')}
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                t('dailyplatform.target1'),
                t('dailyplatform.target2'),
                t('dailyplatform.target3'),
                t('dailyplatform.target4'),
                t('dailyplatform.target5'),
                t('dailyplatform.target6'),
                t('dailyplatform.target7'),
                t('dailyplatform.target8'),
                t('dailyplatform.target9'),
                t('dailyplatform.target10'),
              ].map((role, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2.5 rounded-full bg-white text-[#2C2C2E] border border-black/5 font-mono text-xs font-semibold tracking-wide shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-[#F2C400] hover:bg-[#F2C400]/5 transition-all duration-300"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Sezione 8 — Benefici */}
          <motion.section variants={itemVariants} className="space-y-12">
            <div className="text-left max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block mb-2">{t('dailyplatform.benBadge')}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] tracking-tight">
                {t('dailyplatform.benTitle')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: t('dailyplatform.ben1Title'),
                  desc: t('dailyplatform.ben1Desc'),
                  icon: Users,
                },
                {
                  title: t('dailyplatform.ben2Title'),
                  desc: t('dailyplatform.ben2Desc'),
                  icon: TrendingUp,
                },
                {
                  title: t('dailyplatform.ben3Title'),
                  desc: t('dailyplatform.ben3Desc'),
                  icon: Settings,
                },
                {
                  title: t('dailyplatform.ben4Title'),
                  desc: t('dailyplatform.ben4Desc'),
                  icon: Cpu,
                },
                {
                  title: t('dailyplatform.ben5Title'),
                  desc: t('dailyplatform.ben5Desc'),
                  icon: Signature,
                },
                {
                  title: t('dailyplatform.ben6Title'),
                  desc: t('dailyplatform.ben6Desc'),
                  icon: Hammer,
                },
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="daily-card p-8 rounded-[24px] flex flex-col justify-between h-full group">
                    <div className="space-y-4">
                      <div className="p-3 w-fit rounded-xl bg-gray-50 border border-black/5 text-[#2C2C2E] group-hover:bg-[#F2C400]/10 group-hover:border-[#F2C400]/25 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#2C2C2E] tracking-tight uppercase">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono font-light">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* Sezione 9 — Applicazioni nei settori */}
          <motion.section variants={itemVariants} className="space-y-12">
            <div className="text-left max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block mb-2">{t('dailyplatform.sectorsBadge')}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] tracking-tight">
                {t('dailyplatform.sectorsTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-[#5E5E62] font-mono mt-3 leading-relaxed">
                {t('dailyplatform.sectorsSub')}
              </p>
            </div>

            {/* Horizontal Tabs Selection with Scroll Controls */}
            <div className="relative w-full flex items-center border-b border-black/5 pb-2">
              <button
                onClick={() => scrollSectorTabs('left')}
                className="p-2.5 rounded-full border border-black/10 bg-white hover:bg-[#F2C400] text-[#2C2C2E] transition-all shadow-sm shrink-0 mr-2 z-10 cursor-pointer lg:hidden"
                aria-label="Scorri a sinistra"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div
                ref={sectorTabsRef}
                className="flex overflow-x-auto gap-2.5 py-1 scroll-smooth no-scrollbar flex-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {sectors.map((sec, idx) => {
                  const isActive = activeSector === idx;
                  const Icon = sec.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveSector(idx)}
                      className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold font-mono tracking-wider uppercase border transition-all duration-300 shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#2C2C2E] text-white border-[#2C2C2E] shadow-sm scale-[1.02]'
                          : 'bg-white text-[#2C2C2E]/70 border-black/5 hover:border-[#F2C400]/60 hover:text-[#2C2C2E]'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-[#F2C400]" />
                      {sec.title}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => scrollSectorTabs('right')}
                className="p-2.5 rounded-full border border-black/10 bg-[#F2C400] text-[#2C2C2E] hover:bg-[#F2C400]/80 transition-all shadow-sm shrink-0 ml-2 z-10 cursor-pointer lg:hidden"
                aria-label="Scorri a destra"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Active Tab Showcase Area */}
            <div className="bg-white border border-black/5 rounded-[32px] p-8 sm:p-12">
              <AnimatePresence mode="wait">
                {sectors.map((sec, idx) => {
                  if (idx !== activeSector) return null;
                  const SectorIcon = sec.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      <div className="lg:col-span-8 space-y-5 text-left">
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-[#F2C400]/10 border border-[#F2C400]/30 text-[#2C2C2E] font-mono font-bold text-[10px] uppercase rounded-full">
                            {sec.badge}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#2C2C2E] uppercase">
                          {t('dailyplatform.safetyIn')} {sec.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono max-w-3xl">
                          {sec.desc}
                        </p>
                        
                        <div className="pt-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#F2C400]" />
                          <span className="text-xs font-bold font-mono text-[#2C2C2E] uppercase">
                            {t('dailyplatform.impactLabel')}: {sec.highlight}
                          </span>
                        </div>
                      </div>

                      <div className="lg:col-span-4 flex justify-center lg:justify-end">
                        <div className="w-32 h-32 rounded-3xl bg-[#F0EFEB] flex items-center justify-center text-[#2C2C2E] border border-black/5 relative shadow-inner">
                          <SectorIcon className="w-14 h-14" />
                          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F2C400] flex items-center justify-center text-[10px] font-bold">
                            ✓
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.section>

          {/* Sezione 10 — Governance dei dati e conformità */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="text-left max-w-4xl space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">
                {t('dailyplatform.govBadge')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] tracking-tight">
                {t('dailyplatform.govTitle')}
              </h2>
              <p className="text-sm sm:text-base font-semibold font-sans text-[#2C2C2E]/90">
                {t('dailyplatform.govSub')}
              </p>
              <p className="text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono font-light pt-1">
                {t('dailyplatform.govDesc')}
              </p>
            </div>

            {/* 4 Moduli / Card compatte */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: '1',
                  title: t('dailyplatform.gov1Title'),
                  desc: t('dailyplatform.gov1Desc'),
                  icon: FileText,
                },
                {
                  num: '2',
                  title: t('dailyplatform.gov2Title'),
                  desc: t('dailyplatform.gov2Desc'),
                  icon: Lock,
                },
                {
                  num: '3',
                  title: t('dailyplatform.gov3Title'),
                  desc: t('dailyplatform.gov3Desc'),
                  icon: Signature,
                },
                {
                  num: '4',
                  title: t('dailyplatform.gov4Title'),
                  desc: t('dailyplatform.gov4Desc'),
                  icon: UserCheck,
                },
              ].map((mod, idx) => {
                const Icon = mod.icon;
                return (
                  <div key={idx} className="daily-card p-6 rounded-[24px] flex flex-col justify-between h-full space-y-4 group bg-white/60 border border-black/5 hover:border-[#F2C400]/30 transition-all duration-300">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="p-2.5 rounded-xl bg-[#F2C400]/15 text-[#2C2C2E] group-hover:bg-[#F2C400] transition-colors">
                          <Icon className="w-5 h-5" />
                        </span>
                        <span className="text-xs font-mono font-bold text-[#2C2C2E]/40">
                          0{mod.num}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#2C2C2E] font-sans uppercase tracking-tight">
                        {mod.title}
                      </h4>
                      <p className="text-xs text-[#5E5E62] font-mono leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* Sezione 11 — CTA finale */}
          <motion.section variants={itemVariants} className="pt-8">
            <div className="rounded-[24px] bg-[#FFFFFF] border border-[#F2C400]/15 p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto space-y-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F2C400]/5 via-transparent to-[#F2C400]/2 pointer-events-none" />
              
              <div className="space-y-4 max-w-2xl mx-auto relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] tracking-tight">
                  {t('dailyplatform.ctaTitle')}
                </h2>
                <p className="text-xs sm:text-sm leading-relaxed font-mono text-[#5E5E62]">
                  {t('dailyplatform.ctaDesc')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <a
                  href="https://crm.dailyplatform.it/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-[18px] text-xs font-bold font-mono tracking-wider uppercase transition-all duration-300 bg-[#F2C400] text-[#2C2C2E] border border-[#F2C400] hover:bg-[#F2C400]/90 shadow-md hover:shadow-lg cursor-pointer"
                >
                  {t('dailyplatform.buyBtn')}
                </a>
                <Link
                  to="/servizi"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-[18px] text-xs font-bold font-mono tracking-wider uppercase transition-all duration-300 bg-white text-[#2C2C2E] border border-black/10 hover:border-[#F2C400]/40 shadow-sm hover:shadow-md cursor-pointer"
                >
                  {t('dailyplatform.discoverEcoBtn')}
                </Link>
              </div>
            </div>
          </motion.section>

        </motion.div>
      </div>
    </div>
  );
}
