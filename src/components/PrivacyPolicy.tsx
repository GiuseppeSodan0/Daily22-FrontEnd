import React from 'react';
import {motion} from 'motion/react';
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

export default function PrivacyPolicy() {
  const {t} = useLanguage();

  return (
    <section className="relative overflow-hidden pt-36 pb-32 bg-[#F0EFEB] text-left">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-[#F2C400]/5 blur-[160px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="p-8 sm:p-10 card-premium"
          >
            <div className="space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">Privacy Policy</span>
              <h2 className="text-xl sm:text-2xl font-bold font-sans text-[#2C2C2E] tracking-tight uppercase">
                {t('privacy.title')}
              </h2>

              <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                {t('privacy.intro')}
              </p>

              <h3 className="text-base font-bold font-sans text-[#2C2C2E] tracking-tight uppercase">{t('privacy.controllerTitle')}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                {t('privacy.controllerText')}
              </p>

              <h3 className="text-base font-bold font-sans text-[#2C2C2E] tracking-tight uppercase">{t('privacy.typesTitle')}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                {t('privacy.typesText')}
              </p>

              <h3 className="text-base font-bold font-sans text-[#2C2C2E] tracking-tight uppercase">{t('privacy.purposeTitle')}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                {t('privacy.purposeText')}
              </p>

              <h3 className="text-base font-bold font-sans text-[#2C2C2E] tracking-tight uppercase">{t('privacy.methodTitle')}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                {t('privacy.methodText')}
              </p>

              <h3 className="text-base font-bold font-sans text-[#2C2C2E] tracking-tight uppercase">Cookies</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                {t('privacy.cookiesText')}
              </p>

              <h3 className="text-base font-bold font-sans text-[#2C2C2E] tracking-tight uppercase">{t('privacy.rightsTitle')}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                {t('privacy.rightsText')}
              </p>

              <div className="pt-6 border-t border-[#2C2C2E]/10 space-y-4">
                <h3 className="text-base font-bold font-sans text-[#2C2C2E] tracking-tight uppercase">
                  {t('privacy.normativeTitle')}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono">
                  {t('privacy.normativeText')}
                </p>
                <ul className="space-y-2 text-xs text-[#5E5E62] font-mono pl-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#2C2C2E] shrink-0">• GDPR:</span>
                    <span>{t('privacy.gdprBullet')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#2C2C2E] shrink-0">• D.Lgs. 81/2008:</span>
                    <span>{t('privacy.dlgsBullet')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#2C2C2E] shrink-0">• AI Act:</span>
                    <span>{t('privacy.aiActBullet')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#2C2C2E] shrink-0">• MDR:</span>
                    <span>{t('privacy.mdrBullet')}</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono pt-2">
                {t('privacy.contactInfo')}
              </p>

              <div className="pt-6 border-t border-[#2C2C2E]/10 text-xs text-[#5E5E62]/70 font-mono">
                <p>Daily Practice 22 srl</p>
                <p>Via Terracina, 311 – 80125 – Napoli</p>
                <p>P.IVA 09637811218</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
