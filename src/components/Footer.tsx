import React from 'react';
import {Link} from 'react-router-dom';
import {Mail, Phone, Facebook, Linkedin, Instagram} from 'lucide-react';
import logoFull from '../assets/images/LOGO_DAILY_POSITIVO_ORIZZONTALE-png.png';
import {useLanguage} from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const {t} = useLanguage();

  return (
    <footer className="pt-20 pb-12 text-left bg-[#E5E4E0] text-[#2C2C2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link to="/" className="inline-block group">
              <img
                src={logoFull}
                alt="Daily 22"
                className="h-8 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-xs max-w-xs leading-relaxed text-[#2C2C2E]/70 font-mono">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.facebook.com/DailyPlatform1" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors hover:text-[#F2C400] bg-[#2C2C2E]/5 text-[#2C2C2E]" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/ilaria-leonardis-39b20626b" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors hover:text-[#F2C400] bg-[#2C2C2E]/5 text-[#2C2C2E]" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/daily__platform" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors hover:text-[#F2C400] bg-[#2C2C2E]/5 text-[#2C2C2E]" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Tecnologia */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 font-mono text-[#2C2C2E]/55">
              {t('footer.solutions')}
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><Link to="/dailyplatform" className="hover:text-[#F2C400] transition-colors text-[#2C2C2E]/85">dailyplatform</Link></li>
              <li><Link to="/widiu" className="hover:text-[#F2C400] transition-colors text-[#2C2C2E]/85">WIDIU</Link></li>
              <li><Link to="/vera" className="hover:text-[#F2C400] transition-colors text-[#2C2C2E]/85">Vera</Link></li>
              <li><Link to="/salvatore" className="hover:text-[#F2C400] transition-colors text-[#2C2C2E]/85">Salvatore AI</Link></li>
              <li><Link to="/servizi" className="hover:text-[#F2C400] transition-colors text-[#2C2C2E]/85">dailybydaily</Link></li>
            </ul>
          </div>

          {/* Column 3: Azienda */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 font-mono text-[#2C2C2E]/55">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><Link to="/chi-siamo" className="hover:text-[#F2C400] transition-colors text-[#2C2C2E]/85">{t('header.about')}</Link></li>
              <li><Link to="/bandi" className="hover:text-[#F2C400] transition-colors text-[#2C2C2E]/85">{t('header.bandi')}</Link></li>
              <li><Link to="/daily-safety-lab" className="hover:text-[#F2C400] transition-colors text-[#2C2C2E]/85">{t('header.dailySafetyLab')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Contatti */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 font-mono text-[#2C2C2E]/55">
              {t('footer.contacts')}
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li className="flex items-start gap-2 text-[#2C2C2E]/85">
                <Mail className="w-3.5 h-3.5 text-[#F2C400] shrink-0 mt-0.5" />
                <a href="mailto:info@daily22.it" className="hover:text-[#F2C400] hover:underline transition-colors">
                  info@daily22.it
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#2C2C2E]/85">
                <Phone className="w-3.5 h-3.5 text-[#F2C400] shrink-0 mt-0.5" />
                <a href="tel:+393206033483" className="hover:text-[#F2C400] transition-colors">
                  +39 320 603 3483
                </a>
              </li>
              <li className="pt-2 text-[10px] leading-relaxed text-[#2C2C2E]/60">
                Via Coroglio, 57<br />
                c/o Campania Newsteel Srl<br />
                Napoli, Italia
              </li>
            </ul>
          </div>
        </div>

        {/* Lower row with Language Switcher */}
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#2C2C2E]/60" style={{borderColor: 'rgba(44, 44, 46, 0.08)'}}>
          <div>
            <p>© {new Date().getFullYear()} Daily Practice 22 S.r.l. {t('footer.rights')}</p>
            <p className="mt-1">{t('footer.vat')} 09637811218 • Campania NewSteel Incubator • Città della Scienza, Napoli</p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-[#F2C400] transition-colors font-medium">{t('footer.privacy')}</Link>
            <LanguageSwitcher variant="footer" />
          </div>
        </div>

      </div>
    </footer>
  );
}
