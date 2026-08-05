import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Watch, Bot, Activity, Workflow } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ServicesMarquee() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'daily-safety-lab',
      title: t('home.dailySafetyLabTitle', 'Daily Safety Lab'),
      badge: t('home.dailySafetyLabTag', 'CONSULENZA HSE & FORMAZIONE'),
      headline: t('home.dailySafetyLabTitle', 'Daily Safety Lab'),
      description: t('home.dailySafetyLabDesc', 'La divisione operativa daily dedicata a consulenza HSE, formazione, valutazione dei rischi, sistemi di gestione e cultura della prevenzione.'),
      link: '/daily-safety-lab',
      linkText: t('home.dailySafetyLabLink', 'Approfondisci Daily Safety Lab'),
      icon: ShieldCheck,
      accent: 'text-[#e73749]',
      btnBg: 'bg-[#e73749] text-white',
    },
    {
      id: 'vera',
      title: 'Vera',
      badge: t('home.veraBadge', 'IOT DATA ANALYSIS E SOFTWARE DI MONITORAGGIO'),
      headline: t('home.veraTitle', 'Vera'),
      description: t('home.veraDesc', 'Vera è la piattaforma daily per acquisire, normalizzare e monitorare dati IoT in tempo reale, trasformando i segnali dei device, sensori e wearable in indicatori e informazioni operative.'),
      link: '/servizi',
      linkText: t('home.veraLink', 'Approfondisci Vera'),
      icon: Activity,
      accent: 'text-[#f6c73b]',
      btnBg: 'bg-[#f6c73b] text-[#2C2C2E]',
    },
    {
      id: 'widiu',
      title: 'WIDIU',
      badge: t('home.widiuBadge', 'SMARTWATCH BREVETTATO'),
      headline: t('home.widiuTitle', 'WIDIU'),
      description: t('home.widiuDesc', 'WIDIU è lo smartwatch con brevetto registrato sviluppato da daily per tutelare la salute e la sicurezza dei lavoratori. Rileva parametri biometrici, accelerazioni, postura e microclima, trasformando i segnali in informazioni utili alla prevenzione.'),
      link: '/servizi',
      linkText: t('home.widiuLink', 'Approfondisci WIDIU'),
      icon: Watch,
      accent: 'text-[#f6c73b]',
      btnBg: 'bg-[#f6c73b] text-[#2C2C2E]',
    },
    {
      id: 'salvatore',
      title: 'Salvatore',
      badge: t('home.salvatoreBadge', 'AI AGENT'),
      headline: t('home.salvatoreTitle', 'Salvatore'),
      description: t('home.salvatoreDesc', 'Salvatore è l’AI Agent governato di daily per la sicurezza sul lavoro. Aiuta utenti, lavoratori e figure della prevenzione a comprendere rischi, procedure, comportamenti sicuri e contenuti formativi in modo semplice, accessibile e contestualizzato.'),
      link: '/servizi',
      linkText: t('home.salvatoreLink', 'Approfondisci Salvatore'),
      icon: Bot,
      accent: 'text-[#f6c73b]',
      btnBg: 'bg-[#f6c73b] text-[#2C2C2E]',
    },
    {
      id: 'dailybydaily',
      title: 'dailybydaily',
      badge: t('home.dailybydailyTitle', 'ECOSISTEMA & APP'),
      headline: t('home.dailybydailyHeadline', 'dailybydaily App Verticali'),
      description: t('home.dailybydailyDesc', 'Ecosistema di app dedicate a sicurezza, benessere e prevenzione, con questionari, alert, protocolli e contenuti integrati con dailyplatform.'),
      link: '/servizi',
      linkText: t('home.dailybydailyLink', 'Approfondisci dailybydaily'),
      icon: Workflow,
      accent: 'text-[#f6c73b]',
      btnBg: 'bg-[#f6c73b] text-[#2C2C2E]',
    },
  ];

  // Repeat items for continuous infinite marquee
  const marqueeItems = [...services, ...services, ...services];

  return (
    <section className="py-20 md:py-24 bg-[#2C2C2E] text-white relative overflow-hidden border-b border-white/10">
      
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#f6c73b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10 text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#f6c73b] font-mono block mb-2">
          {t('home.soluzioniSubtitle', 'Servizi & Soluzioni')}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
          {t('home.soluzioniTitle', 'Intelligenza e Consulenza al servizio della prevenzione')}
        </h2>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 group">
        
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#2C2C2E] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#2C2C2E] to-transparent z-20 pointer-events-none" />

        <div className="flex w-max animate-services-marquee hover:[animation-play-state:paused] gap-6 sm:gap-8 px-4">
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.id}-${index}`}
                className="w-[300px] sm:w-[380px] shrink-0 p-6 sm:p-8 rounded-[24px] bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between shadow-xl backdrop-blur-xs group/card"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-6 min-h-[50px]">
                    <span className={`p-3 rounded-2xl bg-white/10 ${item.accent} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[8.5px] sm:text-[9.5px] font-bold font-mono tracking-wider uppercase text-white/80 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 text-right leading-tight whitespace-normal break-words">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-sans tracking-tight">
                    {item.headline}
                  </h3>

                  <p className="text-xs text-white/75 leading-relaxed font-mono font-normal line-clamp-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    to={item.link}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 ${item.btnBg} hover:opacity-90 shadow-sm group-hover/card:translate-x-1`}
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
