import React from 'react';
import { ArrowUpRight, Check, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function DailyPlatformPlans() {
  const { t } = useLanguage();

  const getPlanData = (key: 'free' | 'plus' | 'pro') => {
    const rawKeyPoints = t(`home.plans.${key}.keyPoints`, '') as any;
    const keyPoints = Array.isArray(rawKeyPoints) ? rawKeyPoints : [];

    return {
      title: t(`home.plans.${key}.title`),
      headline: t(`home.plans.${key}.headline`),
      price: t(`home.plans.${key}.price`),
      annualPrice: key !== 'free' ? t(`home.plans.${key}.annualPrice`) : null,
      desc: t(`home.plans.${key}.desc`),
      cta: t(`home.plans.${key}.cta`),
      link: t(`home.plans.${key}.link`) || 'https://crm.dailyplatform.it/register',
      keyPoints,
    };
  };

  const freeData = getPlanData('free');
  const plusData = getPlanData('plus');
  const proData = getPlanData('pro');

  return (
    <section id="dailyplatform-piani" className="py-20 md:py-28 bg-[#F0EFEB] relative overflow-hidden border-b border-[#2C2C2E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Section Header */}
        <div className="max-w-4xl mx-auto mb-14 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-[#2C2C2E] tracking-tight leading-tight">
            {t('home.plans.sectionTitle')}
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#2C2C2E] font-sans max-w-3xl mx-auto leading-snug">
            {t('home.plans.sectionSubtitle')}
          </p>

          <p className="text-sm sm:text-base text-[#5E5E62] font-mono leading-relaxed max-w-3xl mx-auto font-normal">
            {t('home.plans.sectionIntro')}
          </p>
        </div>

        {/* 3 Subscription Plan Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* CARD 1: PIANO FREE */}
          <div className="rounded-[28px] bg-white border border-[#2C2C2E]/15 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-mono text-[#5E5E62] uppercase tracking-wider">{freeData.title}</span>
                <span className="px-3 py-1 rounded-full bg-[#2C2C2E]/5 text-[10px] font-bold font-mono text-[#2C2C2E]">Free</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#2C2C2E] font-sans tracking-tight mb-2">{freeData.headline}</h3>
              <p className="text-xs text-[#5E5E62] font-mono mb-6 leading-relaxed min-h-[40px]">{freeData.desc}</p>

              <div className="my-6 pb-6 border-b border-[#2C2C2E]/10">
                <div className="text-3xl font-extrabold text-[#2C2C2E] font-mono tracking-tight">{freeData.price}</div>
              </div>

              {/* Punti chiave */}
              <div className="space-y-3 mb-8">
                {freeData.keyPoints.map((point: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2C2C2E] font-mono">
                    <Check className="w-4 h-4 text-[#f6c73b] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={freeData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider uppercase font-mono text-[#2C2C2E] bg-[#F0EFEB] hover:bg-[#f6c73b] border border-[#2C2C2E]/15 rounded-[18px] transition-all duration-300 shadow-xs mt-auto"
            >
              {freeData.cta}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* CARD 2: PIANO PLUS (EVIDENZA "PIÙ SCELTO") */}
          <div className="rounded-[28px] bg-[#2C2C2E] text-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative border-2 border-[#f6c73b] lg:-translate-y-3">
            
            {/* Ribbon Badge "Più scelto" */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#f6c73b] text-[#2C2C2E] text-[11px] font-extrabold font-mono tracking-wider uppercase shadow-md flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-[#2C2C2E]" />
              <span>{t('home.plans.mostChosen')}</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 pt-2">
                <span className="text-xs font-bold font-mono text-[#f6c73b] uppercase tracking-wider">{plusData.title}</span>
                <span className="px-3 py-1 rounded-full bg-[#f6c73b]/20 text-[10px] font-bold font-mono text-[#f6c73b]">Plus</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight mb-2">{plusData.headline}</h3>
              <p className="text-xs text-white/70 font-mono mb-6 leading-relaxed min-h-[40px]">{plusData.desc}</p>

              <div className="my-6 pb-6 border-b border-white/10 space-y-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#f6c73b] font-mono tracking-tight">{plusData.price}</div>
                {plusData.annualPrice && (
                  <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                    <span className="text-xs text-white/80 font-mono font-medium">{plusData.annualPrice}</span>
                    <span className="annual-saving-badge inline-flex items-center px-2.5 py-1 rounded-full bg-[#f6c73b] text-[#2C2C2E] text-[11px] font-extrabold font-mono tracking-wide uppercase shadow-sm">
                      {t('home.plans.saveTwoMonths')}
                    </span>
                  </div>
                )}
              </div>

              {/* Punti chiave */}
              <div className="space-y-3 mb-8">
                {plusData.keyPoints.map((point: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-white/90 font-mono">
                    <Check className="w-4 h-4 text-[#f6c73b] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={plusData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-extrabold tracking-wider uppercase font-mono text-[#2C2C2E] bg-[#f6c73b] hover:bg-[#f8d468] rounded-[18px] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(246,199,59,0.5)] scale-[1.01] mt-auto"
            >
              {plusData.cta}
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* CARD 3: PIANO PRO */}
          <div className="rounded-[28px] bg-white border border-[#2C2C2E]/15 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-mono text-[#5E5E62] uppercase tracking-wider">{proData.title}</span>
                <span className="px-3 py-1 rounded-full bg-[#2C2C2E]/5 text-[10px] font-bold font-mono text-[#2C2C2E]">Pro</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#2C2C2E] font-sans tracking-tight mb-2">{proData.headline}</h3>
              <p className="text-xs text-[#5E5E62] font-mono mb-6 leading-relaxed min-h-[40px]">{proData.desc}</p>

              <div className="my-6 pb-6 border-b border-[#2C2C2E]/10 space-y-2">
                <div className="text-3xl font-extrabold text-[#2C2C2E] font-mono tracking-tight">{proData.price}</div>
                {proData.annualPrice && (
                  <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                    <span className="text-xs text-[#5E5E62] font-mono font-medium">{proData.annualPrice}</span>
                    <span className="annual-saving-badge inline-flex items-center px-2.5 py-1 rounded-full bg-[#f6c73b] text-[#2C2C2E] text-[11px] font-extrabold font-mono tracking-wide uppercase border border-[#2C2C2E]/10 shadow-xs">
                      {t('home.plans.saveTwoMonths')}
                    </span>
                  </div>
                )}
              </div>

              {/* Punti chiave */}
              <div className="space-y-3 mb-8">
                {proData.keyPoints.map((point: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2C2C2E] font-mono">
                    <Check className="w-4 h-4 text-[#f6c73b] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={proData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider uppercase font-mono text-[#2C2C2E] bg-[#F0EFEB] hover:bg-[#f6c73b] border border-[#2C2C2E]/15 rounded-[18px] transition-all duration-300 shadow-xs mt-auto"
            >
              {proData.cta}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
