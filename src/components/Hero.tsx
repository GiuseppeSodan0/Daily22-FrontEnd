import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import bimbaDesktop from '../assets/images/BIMBA_DESKTOP.png';
import bimbaMobile from '../assets/images/BIMBA_MOBILE_.png';

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
      <picture className="hero-picture">
        <source media="(max-width: 767px)" srcSet={bimbaMobile} />
        <img
          src={bimbaDesktop}
          alt="Daily - Prima che Accada"
          className="hero-image"
        />
      </picture>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,44,46,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,44,46,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content w-full"
        >
          {/* COLONNA SINISTRA / BLOCCO INIZIALE: Claim & CTAs */}
          <motion.div
            variants={itemVariants}
            className="hero-left hero-top-content hero-left-copy order-1 relative z-30"
          >
            {/* Minimal Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2C2C2E]/10 bg-white/70 text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase text-[#2C2C2E]/80 font-mono mb-4 md:mb-6 backdrop-blur-sm whitespace-nowrap shrink-0">
              <span>{t('hero.badge')}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-[22px] lg:text-[38px] xl:text-[44px] font-bold tracking-tight text-[#2C2C2E] leading-[1.15] md:leading-[1.1] font-sans text-balance">
              {t('hero.title')}
            </h1>

            {/* Pulsanti CTA */}
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
                {isEn ? 'Access dailyplatform' : 'Accedi a dailyplatform'}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
              </a>
            </div>
          </motion.div>

          {/* COLONNA CENTRALE / SAFE AREA PROTEZIONE PER LA BAMBINA NEL BACKGROUND */}
          <motion.div
            variants={itemVariants}
            className="hero-center-safe-area hero-center-spacer order-2 relative z-20 pointer-events-none"
          />

          {/* COLONNA DESTRA / BLOCCO FINALE */}
          <motion.div
            variants={itemVariants}
            className="hero-right hero-bottom-text hero-right-copy order-3 relative z-30"
          >
            <h2 className="hero-right-text hero-claim">
              <span className="hero-claim-desktop">{t('hero.rightCopy')}</span>
              <span className="hero-claim-mobile">
                <span>{isEn ? 'A NEW ERA' : 'UNA NUOVA ERA'}</span>
                <span>{isEn ? 'FOR WORKPLACE SAFETY' : 'PER LA SICUREZZA SUL LAVORO'}</span>
              </span>
            </h2>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C2C2E]/10 to-transparent w-full z-20" />
    </section>
  );
}
