import React from 'react';
import {Link} from 'react-router-dom';
import {Mail, Phone, Heart, Facebook, Linkedin, Instagram} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-20 pb-12 select-none text-left" style={{background: '#1c1917', color: '#a8a29e'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link to="/" className="inline-block group">
              <img
                src="/src/assets/images/logo_full.png"
                alt="Daily 22"
                className="h-8 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-xs max-w-xs leading-relaxed" style={{color: '#a8a29e'}}>
              dailyplatform è una piattaforma digitale per la gestione HSE e la sicurezza sul lavoro, progettata per integrare dati biometrici, ambientali, organizzativi e documentali. Attraverso l'Intelligenza Artificiale, analizza le informazioni raccolte e le trasforma in KPI, alert e modelli predittivi utili a prevenire i rischi e supportare le decisioni aziendali.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.facebook.com/DailyPlatform1" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors hover:text-yellow-400" style={{background: 'rgba(255,255,255,0.06)', color: '#a8a29e'}}>
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/ilaria-leonardis-39b20626b" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors hover:text-yellow-400" style={{background: 'rgba(255,255,255,0.06)', color: '#a8a29e'}}>
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/daily__platform" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-colors hover:text-yellow-400" style={{background: 'rgba(255,255,255,0.06)', color: '#a8a29e'}}>
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Tecnologia */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 font-mono" style={{color: '#78716c'}}>
              Tecnologia
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/servizi" className="hover:text-yellow-400 transition-colors" style={{color: '#a8a29e'}}>Dailyplatform</Link></li>
              <li><Link to="/widiu" className="hover:text-yellow-400 transition-colors" style={{color: '#a8a29e'}}>WIDIU</Link></li>
              <li><Link to="/servizi" className="hover:text-yellow-400 transition-colors" style={{color: '#a8a29e'}}>Salvatore AI</Link></li>
              <li><Link to="/servizi" className="hover:text-yellow-400 transition-colors" style={{color: '#a8a29e'}}>dailybydaily</Link></li>
              <li><Link to="/brevetto" className="hover:text-yellow-400 transition-colors" style={{color: '#a8a29e'}}>Brevetto</Link></li>
            </ul>
          </div>

          {/* Column 3: Azienda */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 font-mono" style={{color: '#78716c'}}>
              Azienda
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/chi-siamo" className="hover:text-yellow-400 transition-colors" style={{color: '#a8a29e'}}>Su di noi</Link></li>
              <li><Link to="/faqs" className="hover:text-yellow-400 transition-colors" style={{color: '#a8a29e'}}>FAQs</Link></li>
              <li><Link to="/bandi" className="hover:text-yellow-400 transition-colors" style={{color: '#a8a29e'}}>Bandi</Link></li>
              <li><Link to="/daily-safety-lab" className="hover:text-yellow-400 transition-colors" style={{color: '#a8a29e'}}>Daily Safety Lab</Link></li>
            </ul>
          </div>

          {/* Column 4: Contatti */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 font-mono" style={{color: '#78716c'}}>
              Contatti
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-yellow-500 shrink-0 mt-0.5" />
                <a href="mailto:info@daily22.it" className="hover:text-yellow-400 hover:underline transition-colors" style={{color: '#a8a29e'}}>
                  info@daily22.it
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-yellow-500 shrink-0 mt-0.5" />
                <a href="tel:+393206033483" className="hover:text-yellow-400 transition-colors" style={{color: '#a8a29e'}}>
                  +39 320 603 3483
                </a>
              </li>
              <li className="pt-2 text-[10px] leading-relaxed" style={{color: '#78716c'}}>
                Via Coroglio, 57<br />
                c/o Campania Newsteel Srl<br />
                Napoli, Italia
              </li>
            </ul>
          </div>
        </div>

        {/* Lower row */}
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between text-[11px]" style={{borderColor: 'rgba(255,255,255,0.08)', color: '#78716c'}}>
          <div>
            <p>© {new Date().getFullYear()} Daily Practice 22 S.r.l. Tutti i diritti riservati.</p>
            <p className="mt-1">P.IVA 09637811218 - Campania NewSteel Incubator - Città della Scienza, Napoli</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <Link to="/brevetto" className="hover:text-yellow-400 transition-colors">Brevetto</Link>
            <span className="flex items-center gap-1.5 font-medium" style={{color: '#a8a29e'}}>
              Tecnologia ed Etica per la sicurezza
              <Heart className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
