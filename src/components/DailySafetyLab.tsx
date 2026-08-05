import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Target, 
  Eye, 
  LineChart, 
  BookOpen, 
  Cpu, 
  Heart, 
  Award, 
  LayoutDashboard, 
  Lightbulb, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveImage from './InteractiveImage';
import logoDailySafetyLab from './Logo daily safety lab.png';
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
  hidden: { opacity: 0, y: 25, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function DailySafetyLab() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(16);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const servicesData = [
    {
      id: 1,
      title: t('dsl.s1Title'),
      text: t('dsl.s1Text'),
      icon: ShieldCheck,
      tag: 'Compliance'
    },
    {
      id: 2,
      title: t('dsl.s2Title'),
      text: t('dsl.s2Text'),
      icon: LineChart,
      tag: 'Dati & IoT'
    },
    {
      id: 3,
      title: t('dsl.s3Title'),
      text: t('dsl.s3Text'),
      icon: BookOpen,
      tag: 'Formazione'
    },
    {
      id: 4,
      title: t('dsl.s4Title'),
      text: t('dsl.s4Text'),
      icon: Cpu,
      tag: 'Tecnologia'
    },
    {
      id: 5,
      title: t('dsl.s5Title'),
      text: t('dsl.s5Text'),
      icon: Heart,
      tag: 'Benessere'
    },
    {
      id: 6,
      title: t('dsl.s6Title'),
      text: t('dsl.s6Text'),
      icon: Award,
      tag: 'Certificazioni'
    },
    {
      id: 7,
      title: t('dsl.s7Title'),
      text: t('dsl.s7Text'),
      icon: LayoutDashboard,
      tag: 'Software'
    },
    {
      id: 8,
      title: t('dsl.s8Title'),
      text: t('dsl.s8Text'),
      icon: Lightbulb,
      tag: 'Innovazione'
    },
  ];

  const virtualData = [...servicesData, ...servicesData, ...servicesData];

  // Auto scroll effect
  useEffect(() => {
    if (isHovered || dragStartX !== null) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, activeIndex, dragStartX]);

  // Turn transitioning back on after instant silent wraps
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    const originalLength = servicesData.length;
    if (activeIndex >= originalLength * 3) {
      setIsTransitioning(false);
      setActiveIndex(activeIndex - originalLength);
    } else if (activeIndex < originalLength * 1) {
      setIsTransitioning(false);
      setActiveIndex(activeIndex + originalLength);
    }
  };

  const handleDotClick = (idx: number) => {
    setIsTransitioning(true);
    setActiveIndex(16 + idx);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - dragStartX);
  };

  const handleTouchEnd = () => {
    if (dragStartX === null) return;
    const threshold = 60;
    if (dragOffset < -threshold) {
      handleNext();
    } else if (dragOffset > threshold) {
      handlePrev();
    }
    setDragStartX(null);
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartX === null) return;
    setDragOffset(e.clientX - dragStartX);
  };

  const handleMouseUp = () => {
    if (dragStartX === null) return;
    const threshold = 60;
    if (dragOffset < -threshold) {
      handleNext();
    } else if (dragOffset > threshold) {
      handlePrev();
    }
    setDragStartX(null);
    setDragOffset(0);
  };

  const currentActiveDot = activeIndex % 8;

  return (
    <section className="daily-safety-lab-page relative overflow-hidden pt-36 pb-32 bg-[#F0EFEB] text-left">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-[#e73749]/10 blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Main Hero Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#e73749] font-mono block">
                {t('dsl.heroBadge')}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans text-[#2C2C2E] tracking-tight leading-tight">
                {t('dsl.heroTitle')}
              </h1>
              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                <p>{t('dsl.heroP1')}</p>
                <p>{t('dsl.heroP2')}</p>
              </div>
              <div className="pt-2">
                <Link
                  to="/contatti"
                  className="dsl-primary-cta inline-flex items-center gap-2 px-8 py-4 text-xs font-bold font-mono tracking-wider uppercase rounded-full bg-[#e73749] text-white hover:bg-[#e73749] hover:shadow-[0_0_18px_rgba(231,55,73,0.38)] hover:-translate-y-0.5 transition-all duration-300 shadow-md active:scale-95 group/btn"
                >
                  <span>{t('header.contact')}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] text-white group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <div className="relative w-full max-w-[360px] flex items-center justify-center">
                {/* Decorative brand red tech dots */}
                <div className="absolute -top-3 left-4 w-3.5 h-3.5 rounded-full bg-[#e73749] shadow-[0_0_12px_rgba(231,55,73,0.7)] z-10 pointer-events-none" />
                <div className="absolute top-1/4 -right-3 w-2.5 h-2.5 rounded-full bg-[#e73749]/80 shadow-[0_0_8px_rgba(231,55,73,0.5)] z-10 pointer-events-none" />
                <div className="absolute -bottom-3 right-8 w-3 h-3 rounded-full bg-[#e73749]/90 shadow-[0_0_10px_rgba(231,55,73,0.6)] z-10 pointer-events-none" />
                <div className="absolute bottom-1/3 -left-3 w-2 h-2 rounded-full bg-[#e73749]/60 z-10 pointer-events-none" />
                <div className="absolute top-6 right-12 w-2 h-2 rounded-full bg-[#e73749]/75 z-10 pointer-events-none" />

                <InteractiveImage 
                  src={logoDailySafetyLab} 
                  alt="Logo Daily Safety Lab" 
                  aspectRatio="square"
                  objectFit="contain"
                  dotColor="#e73749"
                  className="w-full h-auto max-h-[300px] object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
                />
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={itemVariants} 
              className="p-8 sm:p-10 card-premium flex flex-col md:flex-row gap-6 items-start bg-white/50 border border-black/5 hover:border-[#e73749]/40 transition-all duration-300"
            >
              <div className="p-4 rounded-2xl bg-[#e73749]/10 text-[#e73749] shrink-0 border border-[#e73749]/20">
                <Target className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold font-sans text-[#2C2C2E] tracking-tight">{t('dsl.missionTitle')}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                  {t('dsl.missionText')}
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="p-8 sm:p-10 card-premium flex flex-col md:flex-row gap-6 items-start bg-white/50 border border-black/5 hover:border-[#e73749]/40 transition-all duration-300"
            >
              <div className="p-4 rounded-2xl bg-[#e73749]/10 text-[#e73749] shrink-0 border border-[#e73749]/20">
                <Eye className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div className="space-y-3 text-left">
                <h3 className="text-xl font-bold font-sans text-[#2C2C2E] tracking-tight">{t('dsl.visionTitle')}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                  {t('dsl.visionText')}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Servizi Section Header */}
          <motion.div variants={itemVariants} className="space-y-4 text-left pt-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#e73749] font-mono block">
                  {t('dsl.servSectionBadge')}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-[#2C2C2E] tracking-tight">
                  {t('dsl.servSectionTitle')}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-[#5E5E62] max-w-2xl">
                  {t('dsl.servSectionSub')}
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white border border-black/5 hover:border-[#e73749] hover:text-[#e73749] hover:bg-[#e73749]/5 text-[#2C2C2E] transition-all duration-200 hover:shadow-sm cursor-pointer"
                  aria-label="Precedente"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2]" />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white border border-black/5 hover:border-[#e73749] hover:text-[#e73749] hover:bg-[#e73749]/5 text-[#2C2C2E] transition-all duration-200 hover:shadow-sm cursor-pointer"
                  aria-label="Successivo"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2]" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Custom Slider */}
          <motion.div 
            variants={itemVariants}
            className="relative mt-8 select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="dsl-carousel-container cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div 
                className="dsl-carousel-track"
                onTransitionEnd={handleTransitionEnd}
                style={{
                  transform: `translateX(calc(50% - (var(--card-width) / 2) - ${activeIndex} * (var(--card-width) + var(--gap)) + ${dragOffset}px))`,
                  transition: dragStartX !== null ? 'none' : (isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'),
                }}
              >
                {virtualData.map((srv, idx) => {
                  const IconComp = srv.icon;
                  const isActive = idx === activeIndex;
                  return (
                    <div 
                      key={`${srv.id}-${idx}`}
                      className={`dsl-service-card p-6 sm:p-8 flex flex-col justify-between group ${isActive ? 'active' : ''}`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className={`p-3 rounded-xl border transition-all duration-300 ${
                            isActive 
                              ? 'bg-[#e73749]/20 text-[#e73749] border-[#e73749]/40' 
                              : 'bg-[#e73749]/10 text-[#e73749] border-[#e73749]/20 group-hover:bg-[#e73749]/20'
                          }`}>
                            <IconComp className="w-5 h-5 stroke-[1.75]" />
                          </div>
                          <span className="text-[9px] font-mono font-bold text-[#2C2C2E]/40 uppercase tracking-widest bg-[#2C2C2E]/5 px-2.5 py-1 rounded-md">
                            {srv.tag}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h3 className={`text-base sm:text-lg font-bold font-sans text-[#2C2C2E] tracking-tight transition-colors duration-200 ${
                            isActive ? 'text-[#2C2C2E]' : 'group-hover:text-[#e73749]'
                          }`}>
                            {srv.title}
                          </h3>
                          <p className="text-[11.5px] leading-relaxed font-mono text-[#5E5E62] text-left">
                            {srv.text}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-black/[0.04] flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#2C2C2E]/30">
                          DSL // 0{srv.id}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#e73749]">
                          INFO <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 mt-6">
              {servicesData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentActiveDot === idx 
                      ? 'w-6 bg-[#e73749]' 
                      : 'w-2 bg-[#2C2C2E]/10 hover:bg-[#2C2C2E]/25'
                  }`}
                  aria-label={`Vai al servizio ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div 
            variants={itemVariants}
            className="p-10 card-premium text-center space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#2C2C2E] tracking-tight">{t('dsl.ctaTitle')}</h3>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono">
              {t('dsl.ctaSub')}
            </p>
            <div className="pt-4">
              <Link
                to="/contatti"
                className="dsl-primary-cta inline-flex items-center gap-2 px-8 py-4 text-xs font-bold font-mono tracking-wider uppercase rounded-full bg-[#e73749] text-white hover:bg-[#e73749] hover:shadow-[0_0_18px_rgba(231,55,73,0.38)] hover:-translate-y-0.5 transition-all duration-300 shadow-md active:scale-95 group/btn"
              >
                <span>{t('header.contact')}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] text-white group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
