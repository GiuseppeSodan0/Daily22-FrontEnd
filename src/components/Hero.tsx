import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageIntro from './PageIntro';

import bimbaDesktop from '../assets/images/BIMBA_DESKTOP.jpg';

export default function Hero() {
  const { t, lang } = useLanguage();
  const isEn = lang === 'en';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="hero-section relative overflow-hidden flex items-center justify-center bg-[#F0EFEB] px-4 sm:px-8 lg:px-10"
    >
      {/* Background Image Layer */}
      <img
        src={bimbaDesktop}
        alt="Daily - Prima che Accada"
        className="hero-image"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-content w-full"
      >
        {/* Homepage introduction and actions */}
        <motion.div
          variants={itemVariants}
          className="hero-left hero-top-content hero-left-copy order-1 relative z-30"
        >
          <PageIntro label={t('hero.badge')} title={t('hero.title')} description={t('hero.subtitle')} className="hero-intro" />

          {/* CTAs - inside hero-left for desktop grid flow; on mobile, display:contents on hero-left
              flattens this, and position:absolute + position:static on hero-content makes it
              position relative to the section */}
          <div className="hero-cta-row mt-5 md:mt-8 flex flex-row items-center gap-3 sm:gap-4 w-full justify-center md:justify-start">
            <Link
              to="/dailyplatform"
              className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold tracking-wider uppercase font-sans text-[#2C2C2E] bg-[#f6c73b] rounded-[18px] transition-all duration-300 hover:shadow-[0_0_22px_rgba(246,199,59,0.55)] hover:scale-[1.02] active:scale-[0.98] shadow-sm whitespace-nowrap"
            >
              {isEn ? 'Discover dailyplatform' : 'Scopri dailyplatform'}
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 stroke-[2.5]" />
            </Link>

            <a
              href="https://crm.dailyplatform.it/register"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold tracking-wider uppercase font-sans text-[#2C2C2E] bg-white border border-[#2C2C2E]/15 rounded-[18px] transition-all duration-300 hover:border-[#f6c73b] hover:shadow-[0_0_15px_rgba(246,199,59,0.2)] hover:scale-[1.02] active:scale-[0.98] shadow-sm whitespace-nowrap"
            >
              {isEn ? 'Register to dailyplatform' : 'Registrati a dailyplatform'}
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
            </a>
          </div>
        </motion.div>

        {/* COLONNA CENTRALE / SAFE AREA */}
        <motion.div
          variants={itemVariants}
          className="hero-center-safe-area hero-center-spacer order-2 relative z-20 pointer-events-none"
        />

      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C2C2E]/10 to-transparent w-full z-20" />
    </section>
  );
}
