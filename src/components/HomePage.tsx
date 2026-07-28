import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  Network,
  Cpu,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  LineChart,
  Workflow,
  FolderOpen,
} from 'lucide-react';
import Hero from './Hero';
import SalvatorePopup from './SalvatorePopup';
import {useTilt} from '../hooks/useTilt';
import InteractiveImage from './InteractiveImage';
import WidiuWorkerInteractive from './WidiuWorkerInteractive';
import corpMeeting from '../assets/images/corp_meeting_1780517573052.png';
import laptopStation from '../assets/images/laptop_station_1780517590251.png';
import {useLanguage} from '../context/LanguageContext';

function TiltCard({children, className}: {children: React.ReactNode; className?: string}) {
  const {ref, style, shineStyle} = useTilt();
  return (
    <div ref={ref} style={style} className={className}>
      {children}
      <div style={shineStyle} />
    </div>
  );
}

function ScrollReveal({children, delay = 0}: {children: React.ReactNode; delay?: number}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 15, filter: 'blur(8px)'}}
      whileInView={{opacity: 1, y: 0, filter: 'blur(0px)'}}
      viewport={{once: true, margin: '-80px'}}
      transition={{duration: 0.8, delay, ease: 'easeOut'}}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const {t} = useLanguage();

  return (
    <>
      <Hero />

      {/* Soluzioni Section */}
      <section 
        className="soluzioni-home-section py-28 md:py-32 relative bg-[#F0EFEB] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${laptopStation})` }}
      >
        <div 
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: 'linear-gradient(135deg, rgba(240, 239, 235, 0.88), rgba(242, 196, 0, 0.14))',
          }}
        />
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#2C2C2E]/20 to-transparent z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
                {t('home.soluzioniSubtitle')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
                {t('home.soluzioniTitle')}
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed max-w-2xl mx-auto">
                {t('home.soluzioniDesc')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <TiltCard className="p-8 card-premium flex flex-col justify-between group relative overflow-hidden h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-[#F2C400]/10 text-[#2C2C2E] border border-[#F2C400]/20 group-hover:bg-[#F2C400]/20 group-hover:border-[#F2C400]/40 transition-all duration-300">
                      <Network className="w-5 h-5 text-[#2C2C2E]" />
                    </span>
                    <span className="text-[10px] font-bold text-[#2C2C2E]/50 uppercase font-mono tracking-widest">{t('home.dailyplatformTitle')}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2C2C2E] mb-3 font-sans lowercase tracking-tight">dailyplatform</h3>
                  <p className="text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono font-normal">
                    {t('home.dailyplatformDesc')}
                  </p>
                </div>
                <Link
                  to="/dailyplatform"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2C2C2E] hover:text-[#F2C400] transition-colors group mt-8 font-mono uppercase tracking-wider"
                >
                  {t('home.dailyplatformLink')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <TiltCard className="p-8 card-premium flex flex-col justify-between group relative overflow-hidden h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-[#F2C400]/10 text-[#2C2C2E] border border-[#F2C400]/20 group-hover:bg-[#F2C400]/20 group-hover:border-[#F2C400]/40 transition-all duration-300">
                      <Cpu className="w-5 h-5 text-[#2C2C2E]" />
                    </span>
                    <span className="text-[10px] font-bold text-[#2C2C2E]/50 uppercase font-mono tracking-widest">{t('home.widiuTitle')}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2C2C2E] mb-3 font-sans uppercase tracking-tight">WIDIU</h3>
                  <p className="text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono font-normal">
                    {t('home.widiuDesc')}
                  </p>
                </div>
                <Link
                  to="/widiu"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2C2C2E] hover:text-[#F2C400] transition-colors group mt-8 font-mono uppercase tracking-wider"
                >
                  {t('home.widiuLink')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <TiltCard className="p-8 card-premium flex flex-col justify-between group relative overflow-hidden h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-[#F2C400]/10 text-[#2C2C2E] border border-[#F2C400]/20 group-hover:bg-[#F2C400]/20 group-hover:border-[#F2C400]/40 transition-all duration-300">
                      <MessageSquare className="w-5 h-5 text-[#2C2C2E]" />
                    </span>
                    <span className="text-[10px] font-bold text-[#2C2C2E]/50 uppercase font-mono tracking-widest">{t('home.salvatoreTitle')}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2C2C2E] mb-3 font-sans uppercase tracking-tight">SALVATORE</h3>
                  <p className="text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono font-normal">
                    {t('home.salvatoreDesc')}
                  </p>
                </div>
                <Link
                  to="/salvatore"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2C2C2E] hover:text-[#F2C400] transition-colors group mt-8 font-mono uppercase tracking-wider"
                >
                  {t('home.salvatoreLink')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <TiltCard className="p-8 card-premium flex flex-col justify-between group relative overflow-hidden h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-[#F2C400]/10 text-[#2C2C2E] border border-[#F2C400]/20 group-hover:bg-[#F2C400]/20 group-hover:border-[#F2C400]/40 transition-all duration-300">
                      <FolderOpen className="w-5 h-5 text-[#2C2C2E]" />
                    </span>
                    <span className="text-[10px] font-bold text-[#2C2C2E]/50 uppercase font-mono tracking-widest">{t('home.veraTitle')}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2C2C2E] mb-3 font-sans uppercase tracking-tight">Vera</h3>
                  <p className="text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono font-normal">
                    {t('home.veraDesc')}
                  </p>
                </div>
                <Link
                  to="/vera"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2C2C2E] hover:text-[#F2C400] transition-colors group mt-8 font-mono uppercase tracking-wider"
                >
                  {t('home.veraLink')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <TiltCard className="p-8 card-premium flex flex-col justify-between group relative overflow-hidden h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-[#F2C400]/10 text-[#2C2C2E] border border-[#F2C400]/20 group-hover:bg-[#F2C400]/20 group-hover:border-[#F2C400]/40 transition-all duration-300">
                      <Workflow className="w-5 h-5 text-[#2C2C2E]" />
                    </span>
                    <span className="text-[10px] font-bold text-[#2C2C2E]/50 uppercase font-mono tracking-widest">{t('home.dailybydailyTitle')}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2C2C2E] mb-3 font-sans uppercase tracking-tight">{t('home.dailybydailyHeadline')}</h3>
                  <p className="text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono font-normal">
                    {t('home.dailybydailyDesc')}
                  </p>
                </div>
                <Link
                  to="/servizi"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2C2C2E] hover:text-[#F2C400] transition-colors group mt-8 font-mono uppercase tracking-wider"
                >
                  {t('home.dailybydailyLink')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <TiltCard className="p-8 card-premium flex flex-col justify-between group relative overflow-hidden h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-[#F2C400]/10 text-[#2C2C2E] border border-[#F2C400]/20 group-hover:bg-[#F2C400]/20 group-hover:border-[#F2C400]/40 transition-all duration-300">
                      <ShieldCheck className="w-5 h-5 text-[#2C2C2E]" />
                    </span>
                    <span className="text-[10px] font-bold text-[#2C2C2E]/50 uppercase font-mono tracking-widest">{t('home.dailySafetyLabTag')}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2C2C2E] mb-3 font-sans tracking-tight">{t('home.dailySafetyLabTitle')}</h3>
                  <p className="text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono font-normal">
                    {t('home.dailySafetyLabDesc')}
                  </p>
                </div>
                <Link
                  to="/daily-safety-lab"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2C2C2E] hover:text-[#F2C400] transition-colors group mt-8 font-mono uppercase tracking-wider"
                >
                  {t('home.dailySafetyLabLink')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Su di noi Section */}
      <ScrollReveal>
        <section className="py-28 md:py-32 relative overflow-hidden bg-[#F0EFEB]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F2C400]/6 rounded-full blur-[130px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="text-left lg:col-span-7 space-y-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">{t('home.aboutBadge')}</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2E] font-sans tracking-tight leading-tight">
                  {t('home.aboutTitle')}
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-[#5E5E62] leading-relaxed font-mono">
                  <p>{t('home.aboutP1')}</p>
                  <p>{t('home.aboutP2')}</p>
                  <p>{t('home.aboutP3')}</p>
                </div>
                <p className="text-sm sm:text-base font-bold text-[#F2C400] font-mono uppercase tracking-wide">
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

              <div className="lg:col-span-5 w-full flex items-center justify-center">
                <WidiuWorkerInteractive />
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-24 border-t relative bg-[#F0EFEB]" style={{borderColor: 'rgba(44, 44, 46, 0.08)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2C2C2E] font-sans tracking-tight">{t('home.ctaTitle')}</h3>
              <p className="text-xs sm:text-sm text-[#5E5E62] mt-2 font-mono">{t('home.ctaSubtitle')}</p>
            </div>
            <Link
              to="/contatti"
              className="cta-button px-8 py-4 text-xs font-bold tracking-wider uppercase font-mono whitespace-nowrap shrink-0"
            >
              {t('home.ctaButton')}
            </Link>
          </div>
        </section>
      </ScrollReveal>

      <SalvatorePopup />
    </>
  );
}
