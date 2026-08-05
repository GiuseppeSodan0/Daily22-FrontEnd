import React from 'react';
import {motion} from 'motion/react';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import {useLanguage} from '../context/LanguageContext';
import loghiBandiCampania from '../assets/images/Loghi-Bandi-Campania-2.png';

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

export default function Bandi() {
  const {t, lang} = useLanguage();
  const isEn = lang === 'en';

  return (
    <section className="relative overflow-hidden pt-36 pb-32 bg-[#F0EFEB] text-left">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-[#f6c73b]/5 blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >

          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">{t('bandi.badge')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">{t('bandi.title')}</h2>
            <p className="mt-4 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
              {t('bandi.subtitle')}
            </p>
          </motion.div>

          {/* Campania Startup 2023 */}
          <motion.div 
            variants={itemVariants}
            className="p-8 card-premium space-y-6 leading-relaxed"
          >
            <div className="text-[10px] font-bold text-[#f6c73b] uppercase tracking-widest font-mono">{t('bandi.campaniaDate')}</div>
            
            <h3 className="text-xl font-bold font-sans text-[#2C2C2E] tracking-tight">{t('bandi.campaniaTitle')}</h3>

            <div className="p-4 rounded-xl text-xs space-y-1 bg-[#f6c73b]/5 border border-[#f6c73b]/15 font-mono text-[#2C2C2E]/90">
              <p><strong className="text-[#2C2C2E]">{t('bandi.campaniaFunded')}</strong> – {t('bandi.campaniaCall')}</p>
              <p><strong className="text-[#2C2C2E]">CUP:</strong> B68I23005700007</p>
              <p><strong className="text-[#2C2C2E]">{t('bandi.beneficiary')}:</strong> Daily Practice 22 Srl</p>
              <p><strong className="text-[#2C2C2E]">{t('bandi.sector')}:</strong> {t('bandi.sectorValue')}</p>
            </div>

            <h4 className="text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-wider">{t('bandi.summaryTitle')}</h4>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
              {t('bandi.summaryP1')}
            </p>

            <h4 className="text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-wider">{t('bandi.goalsTitle')}</h4>
            <ul className="space-y-1.5 font-mono text-xs sm:text-sm text-[#5E5E62]">
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.goal1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.goal2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.goal3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.goal4')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.goal5')}</span>
              </li>
            </ul>

            <h4 className="text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-wider">{t('bandi.resultsTitle')}</h4>
            <ul className="space-y-1.5 font-mono text-xs sm:text-sm text-[#5E5E62]">
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.result1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.result2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.result3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.result4')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.result5')}</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#2C2C2E]/10">
              <p className="text-[11px] text-[#5E5E62]/70 font-mono">
                {t('bandi.campaniaFooter')}
              </p>
            </div>
          </motion.div>

          {/* Smart & Start Italia */}
          <motion.div 
            variants={itemVariants}
            className="p-8 card-premium space-y-6 leading-relaxed"
          >
            <div className="p-4 rounded-xl text-xs space-y-1 bg-[#f6c73b]/5 border border-[#f6c73b]/15 font-mono text-[#2C2C2E]/90">
              <p><strong className="text-[#2C2C2E]">DAILY PRACTICE 22</strong></p>
              <p>{t('bandi.smartHeader')}</p>
              <p><strong className="text-[#2C2C2E]">CUP:</strong> C26I24002540008</p>
            </div>

            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
              {t('bandi.smartP1')}
            </p>

            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
              {t('bandi.smartP2')}
            </p>

            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
              {t('bandi.smartP3')}
            </p>

            <h4 className="text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-wider">{t('bandi.smartFuncTitle')}</h4>
            <ul className="space-y-1.5 font-mono text-xs sm:text-sm text-[#5E5E62]">
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.smartFunc1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.smartFunc2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.smartFunc3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.smartFunc4')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f6c73b] mt-0.5">•</span>
                <span>{t('bandi.smartFunc5')}</span>
              </li>
            </ul>

            <p className="text-[11px] text-[#5E5E62]/70 font-mono leading-relaxed pt-2">
              {t('bandi.smartFooter')}
            </p>

            <div className="p-4 rounded-xl text-xs bg-[#f6c73b]/5 border border-[#f6c73b]/15 font-mono text-[#2C2C2E]/90">
              <p><strong className="text-[#2C2C2E]">{t('bandi.smartConcession')}</strong></p>
            </div>
          </motion.div>

          {/* Brevetto WIDIU Box */}
          <motion.div 
            variants={itemVariants}
            className="p-6 card-premium border-[#f6c73b]/15 bg-white/50 hover:border-[#f6c73b]/30 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="space-y-3 flex-1">
                <div className="text-[9px] font-bold text-[#f6c73b] uppercase tracking-widest font-mono">{t('bandi.patentBadge')}</div>
                <h3 className="text-lg font-bold font-sans text-[#2C2C2E] tracking-tight">{t('bandi.patentTitle')}</h3>
                <p className="text-xs text-[#5E5E62] font-mono leading-relaxed">
                  {t('bandi.patentDesc')}
                </p>
              </div>
              <div className="w-full md:w-auto shrink-0 p-4 rounded-xl text-[11px] bg-[#f6c73b]/5 border border-[#f6c73b]/10 font-mono text-[#2C2C2E]/85 space-y-1 md:min-w-[280px]">
                <p><span className="text-[#2C2C2E]/50">{t('bandi.patentType')}:</span> {t('bandi.patentTypeValue')}</p>
                <p><span className="text-[#2C2C2E]/50">{t('bandi.grantNumber')}:</span> 102023000028365</p>
                <p><span className="text-[#2C2C2E]/50">{t('bandi.epoClass')}:</span> A61B</p>
                <p><span className="text-[#2C2C2E]/50">{t('bandi.filingDate')}:</span> {t('bandi.filingDateValue')}</p>
                <p><span className="text-[#2C2C2E]/50">{t('bandi.grantDate')}:</span> {t('bandi.grantDateValue')}</p>
                <p><span className="text-[#2C2C2E]/50">{t('bandi.holder')}:</span> Daily Practice 22 S.r.l.</p>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div variants={itemVariants} className="p-10 card-premium text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#2C2C2E] tracking-tight">{t('bandi.ctaTitle')}</h3>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed max-w-xl mx-auto">
              {isEn ? (
                <>
                  Call us today at{' '}
                  <a href="tel:+393404290395" className="font-bold text-[#2C2C2E] hover:text-[#f6c73b] transition-colors underline">
                    +39 340 429 0395
                  </a>{' '}
                  to discover how daily can support your business.
                </>
              ) : (
                <>
                  Chiamaci oggi al{' '}
                  <a href="tel:+393404290395" className="font-bold text-[#2C2C2E] hover:text-[#f6c73b] transition-colors underline">
                    +39 340 429 0395
                  </a>{' '}
                  per scoprire come daily può supportare la tua azienda.
                </>
              )}
            </p>
            <div className="pt-2">
              <Link
                to="/contatti"
                className="cta-button inline-flex items-center gap-2 px-8 py-4 text-xs font-bold font-mono tracking-wider uppercase"
              >
                {t('header.contact')}
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </motion.div>

          {/* Grants Logos Section */}
          <motion.div variants={itemVariants} className="grants-logos-section">
            <img 
              src={loghiBandiCampania} 
              alt="Loghi Bandi Campania e FESR" 
              className="max-w-[980px] w-full h-auto object-contain mx-auto block"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
