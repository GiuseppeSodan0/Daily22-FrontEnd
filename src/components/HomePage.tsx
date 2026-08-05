import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Hero from './Hero';
import DailyPlatformPlans from './DailyPlatformPlans';
import ServicesMarquee from './ServicesMarquee';
import SuDiNoiInteractive from './SuDiNoiInteractive';
import { useLanguage } from '../context/LanguageContext';

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Nuova Sezione dailyplatform (con i tre piani Free, Plus, Pro) */}
      <DailyPlatformPlans />

      {/* 3. Sezione Servizi (Marquee orizzontale fluido per i servizi attivi) */}
      <ServicesMarquee />

      {/* 4. Sezione "Su di noi" */}
      <ScrollReveal>
        <section className="py-24 md:py-28 relative overflow-hidden bg-[#F0EFEB]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f6c73b]/6 rounded-full blur-[130px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="text-left lg:col-span-7 space-y-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">
                  {t('home.aboutBadge')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] font-sans tracking-tight leading-tight">
                  {t('home.aboutTitle')}
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono">
                  <p>{t('home.aboutP1')}</p>
                  <p>{t('home.aboutP2')}</p>
                  <p>{t('home.aboutP3')}</p>
                </div>
                <p className="text-sm sm:text-base font-bold text-[#f6c73b] font-mono uppercase tracking-wide">
                  {t('home.aboutClaim')}
                </p>
                <div className="pt-4">
                  <Link
                    to="/chi-siamo"
                    className="cta-button inline-flex items-center gap-2 px-8 py-4 text-xs font-bold font-mono tracking-wider uppercase group"
                  >
                    {t('home.aboutLink')}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 w-full flex items-center justify-center p-0">
                <SuDiNoiInteractive />
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
