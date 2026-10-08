import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { hasStoredConsent, saveConsent } from '../lib/consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Show the banner only if no consent choice has been stored yet.
  useEffect(() => {
    if (!hasStoredConsent()) {
      const t = window.setTimeout(() => setVisible(true), 600);
      return () => window.clearTimeout(t);
    }
  }, []);

  // Hide the banner if a choice has been stored elsewhere (e.g. Preferences page).
  useEffect(() => {
    if (hasStoredConsent()) setVisible(false);
  }, [location.pathname]);

  const decide = (all: boolean) => {
    saveConsent({
      necessary: true,
      functionality: all,
      experience: all,
      measurement: all,
      marketing: all,
    });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] p-3 sm:p-4">
      <div className="max-w-7xl mx-auto rounded-2xl bg-[#22253B] text-white shadow-2xl border border-white/10 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-white/5 border border-[#f6c73b]/30 shrink-0 hidden sm:block">
            <Cookie className="w-5 h-5 text-[#f6c73b]" />
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-xs sm:text-sm font-mono leading-relaxed text-white/90">
              Noi e terze parti selezionate utilizziamo cookie o tecnologie simili per finalità tecniche e, con il tuo consenso, anche per le finalità di funzionalità, esperienza, misurazione e &ldquo;marketing (con annunci personalizzati)&rdquo; come specificato nella{' '}
              <Link to="/preferenze-privacy" className="underline underline-offset-2 hover:text-[#f6c73b] transition-colors">
                cookie policy
              </Link>
              .
            </p>
            <p className="text-[11px] sm:text-xs font-mono leading-relaxed text-white/70">
              Puoi liberamente prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento, accedendo al pannello delle preferenze. Il rifiuto del consenso può rendere non disponibili le relative funzioni.
            </p>
          </div>
          <button
            type="button"
            onClick={() => decide(false)}
            aria-label="Chiudi questa informativa"
            className="p-2 rounded-full hover:bg-white/10 transition-colors shrink-0"
          >
            <X className="w-4 h-4 text-white/80" />
          </button>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <Link
            to="/preferenze-privacy"
            onClick={() => setVisible(false)}
            className="order-3 sm:order-1 sm:mr-auto inline-flex items-center justify-center px-5 py-3 text-[11px] font-bold tracking-wider uppercase font-sans text-white/90 border border-white/25 rounded-[18px] transition-colors hover:bg-white/10 whitespace-nowrap"
          >
            Scopri di più e personalizza
          </Link>
          {/* Rifiuta and Accetta share identical size, padding, font and prominence (no dark pattern) */}
          <button
            type="button"
            onClick={() => decide(false)}
            className="order-2 sm:order-2 inline-flex items-center justify-center px-8 py-3 text-[11px] font-bold tracking-wider uppercase font-sans text-[#22253B] bg-white rounded-[18px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm whitespace-nowrap sm:min-w-[150px]"
          >
            Rifiuta
          </button>
          <button
            type="button"
            onClick={() => decide(true)}
            className="order-1 sm:order-3 inline-flex items-center justify-center px-8 py-3 text-[11px] font-bold tracking-wider uppercase font-sans text-[#22253B] bg-[#f6c73b] rounded-[18px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm whitespace-nowrap sm:min-w-[150px]"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}