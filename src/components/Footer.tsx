import React from 'react';
import {Link} from 'react-router-dom';
import {Mail, Phone, Heart, Facebook, Linkedin, Instagram} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-20 pb-12 select-none text-left">
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
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              dailyplatform è una piattaforma digitale per la gestione HSE e la sicurezza sul lavoro, progettata per integrare dati biometrici, ambientali, organizzativi e documentali. Attraverso l'Intelligenza Artificiale, analizza le informazioni raccolte e le trasforma in KPI, alert e modelli predittivi utili a prevenire i rischi e supportare le decisioni aziendali.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.facebook.com/DailyPlatform1" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white hover:bg-gray-200 text-gray-400 hover:text-yellow-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/ilaria-leonardis-39b20626b" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white hover:bg-gray-200 text-gray-400 hover:text-yellow-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/daily__platform" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white hover:bg-gray-200 text-gray-400 hover:text-yellow-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Tecnologia */}
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 font-mono">
              Tecnologia
            </h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><Link to="/servizi" className="hover:text-yellow-600 transition-colors">Dailyplatform</Link></li>
              <li><Link to="/widiu" className="hover:text-yellow-600 transition-colors">WIDIU</Link></li>
              <li><Link to="/servizi" className="hover:text-yellow-600 transition-colors">Salvatore AI</Link></li>
              <li><Link to="/servizi" className="hover:text-yellow-600 transition-colors">dailybydaily</Link></li>
              <li><Link to="/brevetto" className="hover:text-yellow-600 transition-colors">Brevetto</Link></li>
            </ul>
          </div>

          {/* Column 3: Azienda */}
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 font-mono">
              Azienda
            </h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><Link to="/mission" className="hover:text-yellow-600 transition-colors">Mission</Link></li>
              <li><Link to="/team" className="hover:text-yellow-600 transition-colors">Il Team</Link></li>
              <li><Link to="/faqs" className="hover:text-yellow-600 transition-colors">FAQs</Link></li>
              <li><Link to="/bandi" className="hover:text-yellow-600 transition-colors">Bandi</Link></li>
              <li><Link to="/daily-safety-lab" className="hover:text-yellow-600 transition-colors">Daily Safety Lab</Link></li>
            </ul>
          </div>

          {/* Column 4: Contatti */}
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 font-mono">
              Contatti
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-yellow-500 shrink-0 mt-0.5" />
                <a href="mailto:info@daily22.it" className="hover:text-gray-900 hover:underline transition-colors">
                  info@daily22.it
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-yellow-500 shrink-0 mt-0.5" />
                <a href="tel:+393206033483" className="hover:text-gray-900 transition-colors">
                  +39 320 603 3483
                </a>
              </li>
              <li className="pt-2 text-[10px] text-gray-400 leading-relaxed">
                Via Coroglio, 57<br />
                c/o Campania Newsteel Srl<br />
                Napoli, Italia
              </li>
            </ul>
          </div>
        </div>

        {/* Lower row */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-400">
          <div>
            <p>© {new Date().getFullYear()} Daily Practice 22 S.r.l. Tutti i diritti riservati.</p>
            <p className="mt-1">P.IVA 09637811218 - Campania NewSteel Incubator - Città della Scienza, Napoli</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-yellow-600 transition-colors">Privacy Policy</Link>
            <Link to="/brevetto" className="hover:text-yellow-600 transition-colors">Brevetto</Link>
            <span className="flex items-center gap-1.5 font-medium text-gray-500">
              Tecnologia ed Etica per la sicurezza
              <Heart className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
