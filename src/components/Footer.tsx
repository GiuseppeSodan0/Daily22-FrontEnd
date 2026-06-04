/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Mail, Phone, Heart } from 'lucide-react';

interface FooterProps {
  onTabChange: (tab: 'home' | 'prodotto' | 'progetti' | 'contatti') => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.06] pt-20 pb-12 select-none text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Info and Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onTabChange('home')}>
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-500 to-amber-500 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5 text-black" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-sans">
                daily<span className="text-yellow-400">22</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-xs leading-relaxed font-light">
              Piattaforma conversazionale con intelligenza artificiale che integra dati biometrici, ambientali e di sicurezza aziendale digitalizzati, trasformandoli in modelli di rischio predittivi.
            </p>
          </div>

          {/* Column 2: Offerings */}
          <div>
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 font-mono">
              La Tecnologia
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => onTabChange('progetti')} className="hover:text-yellow-400 transition-colors cursor-pointer text-left">
                  DAILYPLATFORM
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('progetti')} className="hover:text-yellow-400 transition-colors cursor-pointer text-left">
                  SALVATORE AI
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('progetti')} className="hover:text-yellow-400 transition-colors cursor-pointer text-left">
                  WIDIU Wearable
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('prodotto')} className="hover:text-yellow-400 transition-colors cursor-pointer text-left">
                  Soluzioni IoT & Deep Learning
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Verticals */}
          <div>
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 font-mono">
              Iniziative Daily 4
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => onTabChange('progetti')} className="hover:text-yellow-400 transition-colors cursor-pointer text-left">
                  daily 4 Compliance
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('progetti')} className="hover:text-yellow-400 transition-colors cursor-pointer text-left">
                  daily 4 Child
                </button>
              </li>
              <li>
                <button onClick={() => onTabChange('progetti')} className="hover:text-yellow-400 transition-colors cursor-pointer text-left">
                  daily 4 Woman
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legals & Contacts */}
          <div>
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 font-mono">
              Contatti Rapidi
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-yellow-405" />
                <a href="mailto:info@daily22.it" className="hover:text-white hover:underline transition-colors">
                  info@daily22.it
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-yellow-450" />
                <a href="tel:+390812244222" className="hover:text-white transition-colors">
                  +39 081 2244222
                </a>
              </li>
              <li className="pt-2 text-[10px] text-gray-500 border-t border-white/[0.04] font-mono font-medium">
                Sempre allineato alle linee guida INAIL
              </li>
            </ul>
          </div>
        </div>

        {/* Lower row */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500">
          <div>
            <p>© {new Date().getFullYear()} Daily 22 S.r.l. Tutti i diritti riservati. Startup Innovativa Benefit.</p>
            <p className="mt-1">P.IVA IT09876543210 - Campania NewSteel Incubator - Città della Scienza, Napoli</p>
          </div>
          <div className="flex items-center gap-1.5 mt-4 md:mt-0 font-medium text-gray-400">
            <span>Tecnologia ed Etica per la sicurezza</span>
            <Heart className="w-3.5 h-3.5 text-yellow-450 fill-yellow-450" />
          </div>
        </div>

      </div>
    </footer>
  );
}
