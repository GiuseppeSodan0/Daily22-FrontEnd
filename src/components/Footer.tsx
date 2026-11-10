import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Mail, Phone, Facebook, Linkedin, Instagram, MapPin, X, ExternalLink} from 'lucide-react';
import logoFull from '../assets/images/LOGO_DAILY_POSITIVO_ORIZZONTALE-png.png';
import institutionalLogos from '../assets/images/loghi-istituzionali.png';
import {useLanguage} from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const {t} = useLanguage();
  const [showEthicCode, setShowEthicCode] = useState(false);

  return (
    <footer className="pt-20 pb-12 text-left bg-[#E5E4E0] text-[#2C2C2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 lg:grid-cols-[1.35fr_0.8fr_1fr_1fr] mb-10">
          
          {/* Column 1: Brand */}
          <div className="col-span-2 space-y-4 lg:col-span-1">
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
              <a href="https://www.facebook.com/share/1D7BoWLCHr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors hover:text-[#f6c73b] bg-[#2C2C2E]/5 text-[#2C2C2E]" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/daily-22/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors hover:text-[#f6c73b] bg-[#2C2C2E]/5 text-[#2C2C2E]" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/daily__practice22?igsh=MTZ6YTJrZHo3bzExbQ==" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors hover:text-[#f6c73b] bg-[#2C2C2E]/5 text-[#2C2C2E]" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 font-mono text-xs font-bold uppercase tracking-wide">
              {t('footer.company')}
            </h2>
            <ul className="space-y-3 text-sm font-mono text-[#2C2C2E]/85">
              <li><Link to="/chi-siamo" className="hover:underline underline-offset-4">{t('header.about')}</Link></li>
              <li><Link to="/bandi" className="hover:underline underline-offset-4">{t('header.bandi')}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-mono text-xs font-bold uppercase tracking-wide">
              {t('footer.platformAndServices')}
            </h2>
            <ul className="space-y-3 text-sm font-mono text-[#2C2C2E]/85">
              <li><Link to="/dailyplatform" className="hover:underline underline-offset-4">dailyplatform</Link></li>
              <li><Link to="/servizi" className="hover:underline underline-offset-4">{t('header.allServices')}</Link></li>
              <li><Link to="/daily-safety-lab" className="hover:text-[#e73449] focus-visible:text-[#e73449] hover:underline underline-offset-4 transition-colors">{t('header.dailySafetyLab')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Contatti */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="mb-3 font-mono text-xs font-bold uppercase tracking-wide">
              {t('footer.contacts')}
            </h2>
            <ul className="space-y-2.5 text-xs font-mono">
              <li><Link to="/contatti" className="font-semibold hover:underline underline-offset-4">{t('hero.contactUs')}</Link></li>
              <li className="flex items-start gap-2 text-[#2C2C2E]/85">
                <Mail className="w-3.5 h-3.5 text-[#f6c73b] shrink-0 mt-0.5" />
                <a href="mailto:info@dy22.it" className="hover:text-[#f6c73b] hover:underline transition-colors">
                  info@dy22.it
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#2C2C2E]/85">
                <Phone className="w-3.5 h-3.5 text-[#f6c73b] shrink-0 mt-0.5" />
                <a href="tel:+393404290395" className="hover:text-[#f6c73b] transition-colors">
                  +39 340 429 0395
                </a>
              </li>
              <li className="pt-2 text-[10px] leading-relaxed text-[#2C2C2E]/60 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#f6c73b] shrink-0 mt-0.5" />
                <div>
                  Via Coroglio, 57<br />
                  c/o Campania Newsteel Srl<br />
                  Napoli, Italia
                </div>
              </li>
            </ul>
          </div>
        </div>

        <img
          src={institutionalLogos}
          alt={t('footer.institutionalLogosAlt')}
          width={2172}
          height={724}
          loading="lazy"
          decoding="async"
          className="mx-auto my-6 block aspect-[8/1] h-auto w-full max-w-[640px] object-cover object-[center_48%]"
        />

        {/* Lower row with Language Switcher */}
        <div className="pt-4 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 text-[11px] font-mono text-[#2C2C2E]/60">
          <div>
            <p>© {new Date().getFullYear()} Daily Practice 22 S.r.l. {t('footer.rights')}</p>
            <p className="mt-1">{t('footer.vat')} 09637811218 • Campania NewSteel Incubator • Città della Scienza, Napoli</p>
          </div>
          <div className="flex flex-wrap items-center gap-6 md:mb-0 mb-1">
            <Link to="/privacy-policy" className="hover:text-[#f6c73b] transition-colors font-medium">{t('footer.privacy')}</Link>
            <Link to="/termini-condizioni" className="hover:text-[#f6c73b] transition-colors font-medium">Termini e Condizioni</Link>
            <button type="button" onClick={() => setShowEthicCode(true)} className="hover:text-[#f6c73b] transition-colors font-medium">Codice Etico</button>
            <Link to="/preferenze-privacy" className="hover:text-[#f6c73b] transition-colors font-medium">Preferenze cookie</Link>
            <LanguageSwitcher variant="footer" />
          </div>
        </div>

      </div>

      {showEthicCode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true" aria-label="Codice Etico Daily">
          <button
            type="button"
            aria-label="Chiudi codice etico"
            className="absolute inset-0 bg-black/70"
            onClick={() => setShowEthicCode(false)}
          />
          <div className="relative z-10 w-full max-w-5xl h-[88vh] sm:h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#2C2C2E]/10 bg-[#F0EFEB] shrink-0">
              <p className="text-xs font-bold uppercase tracking-widest font-mono text-[#2C2C2E] truncate">
                Codice Etico Daily
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="/Codice-Etico-Daily.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase font-mono bg-[#2C2C2E] text-[#F0EFEB] hover:bg-[#f6c73b] hover:text-[#2C2C2E] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Apri il PDF</span>
                  <span className="sm:hidden">PDF</span>
                </a>
                <button
                  type="button"
                  aria-label="Chiudi"
                  onClick={() => setShowEthicCode(false)}
                  className="p-2 rounded-full bg-white/90 hover:bg-white text-[#2C2C2E] shadow"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <iframe
              src="/Codice-Etico-Daily.pdf"
              title="Codice Etico Daily"
              className="w-full flex-1 min-h-0 bg-white"
            />
          </div>
        </div>
      )}
    </footer>
  );
}
