import React from 'react';
import {motion} from 'motion/react';
import {Link} from 'react-router-dom';
import {ArrowRight, ShieldCheck, Target, Eye, Users} from 'lucide-react';
import InteractiveImage from './InteractiveImage';
import bimbaDesk from '../assets/images/BIMBA_DESK.jpg';
import IlariaCEOInteractive from './IlariaCEOInteractive';
import {useLanguage} from '../context/LanguageContext';

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {opacity: 0, y: 20, filter: 'blur(8px)'},
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {duration: 0.8, ease: 'easeOut'},
  },
};

export default function ChiSiamo() {
  const {t} = useLanguage();

  const teamMembers = [
    {
      name: 'ILARIA LEONARDIS',
      role: 'CEO & Founder',
      bio: t('about.teamIlaria'),
    },
    {
      name: 'RAFFAELE DE FILIPPIS',
      role: 'COO & CTO',
      bio: t('about.teamRaffaele'),
    },
    {
      name: 'LOREDANA CASTIGLIA',
      role: 'R&D Manager',
      bio: t('about.teamLoredana'),
    },
    {
      name: 'GIUSEPPE SODANO',
      role: 'Software Developer',
      bio: t('about.teamGiuseppe'),
    },
    {
      name: 'SARA SAGNELLI',
      role: t('about.roleSara'),
      bio: t('about.teamSara'),
    },
    {
      name: 'PAOLO MIRABELLA',
      role: 'Marketing & Go-to-Market',
      bio: t('about.teamPaolo'),
    },
    {
      name: 'ROBERTA SIANO',
      role: 'Data Analyst',
      bio: t('about.teamRoberta'),
    },
    {
      name: 'SIMONE LA MARCA',
      role: t('about.roleSimone'),
      bio: t('about.teamSimone'),
    },
  ];

  return (
    <section className="relative overflow-hidden pt-36 pb-32 text-left bg-[#F0EFEB]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-[#F2C400]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >

          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">{t('header.about')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">{t('about.title')}</h2>
          </motion.div>

          {/* Statement */}
          <motion.div variants={itemVariants} className="text-center sm:text-left py-4 max-w-5xl mx-auto">
            <h3 className="about-statement font-sans font-bold text-[#2C2C2E] tracking-tight text-balance">
              {t('about.subtitle')}
            </h3>
          </motion.div>

          {/* Intro description and image */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-7 space-y-6 leading-relaxed">
              <div className="space-y-5 text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
                <p>{t('about.p4')}</p>
              </div>
              <div className="pt-6 border-t border-[#2C2C2E]/10">
                <p className="text-xs sm:text-sm font-bold text-[#F2C400] font-mono uppercase tracking-wide leading-relaxed">
                  {t('about.visionStatement')}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <IlariaCEOInteractive />
            </div>
          </motion.div>

          {/* Mission + Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="p-8 card-premium space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-[#F2C400]/10 text-[#2C2C2E] border border-[#F2C400]/20">
                  <Target className="w-5 h-5 text-[#2C2C2E]" />
                </span>
                <h3 className="text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">{t('about.missionTitle')}</h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                {t('about.missionP1')}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                {t('about.missionP2')}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed font-bold text-[#2C2C2E] font-mono">
                {t('about.missionP3')}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 card-premium space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-[#F2C400]/10 text-[#2C2C2E] border border-[#F2C400]/20">
                  <Eye className="w-5 h-5 text-[#2C2C2E]" />
                </span>
                <h3 className="text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">{t('about.visionTitle')}</h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed font-bold text-[#2C2C2E] font-mono uppercase tracking-wide">
                {t('about.visionTagline')}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                {t('about.visionP1')}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                {t('about.visionP2')}
              </p>
              <div className="pt-2">
                <p className="text-xs sm:text-sm font-bold text-[#F2C400] font-mono uppercase tracking-wide">
                  {t('about.visionQuote')}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Team */}
          <div className="space-y-12">
            <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-[#F2C400]/10 text-[#2C2C2E] border border-[#F2C400]/20">
                  <Users className="w-6 h-6 text-[#2C2C2E]" />
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#2C2C2E] tracking-tight">{t('about.teamTitle')}</h3>
              <p className="mt-4 text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
                {t('about.teamSubtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <motion.div
                  variants={itemVariants}
                  key={member.name}
                  className="p-8 card-premium text-center group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-16 h-16 rounded-full bg-[#F2C400]/10 mx-auto mb-6 flex items-center justify-center border border-[#F2C400]/25 group-hover:scale-105 transition-transform duration-350">
                      <span className="text-2xl font-bold text-[#2C2C2E]">{member.name.charAt(0)}</span>
                    </div>
                    <h4 className="text-base font-bold mb-1 font-sans text-[#2C2C2E]">{member.name}</h4>
                    <p className="text-[10px] font-bold text-[#F2C400] uppercase tracking-widest mb-4 font-mono">{member.role}</p>
                    <p className="text-xs leading-relaxed text-[#5E5E62] font-mono">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <motion.div 
            variants={itemVariants} 
            className="p-8 sm:p-10 card-premium text-center space-y-4"
          >
            <h3 className="text-base sm:text-lg font-bold text-[#2C2C2E] font-mono uppercase tracking-wide">
              {t('about.claimTag')}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5E62] max-w-xl mx-auto font-mono">
              {t('about.ctaSubtitle')}
            </p>
            <div className="pt-4">
              <Link
                to="/contatti"
                className="cta-button inline-flex items-center gap-2 px-8 py-4 text-xs font-bold font-mono tracking-wider uppercase"
              >
                {t('header.contact')}
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
