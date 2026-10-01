import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Cookie, Check, RotateCcw, ShieldCheck } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

interface CookieState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'daily_cookie_consent';

const DEFAULT_STATE: CookieState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function Toggle({ checked, onChange, disabled }: { checked: boolean; onChange: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6c73b]/50 ${
        checked ? 'bg-[#f6c73b]' : 'bg-[#2C2C2E]/20'
      } ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-300 ${
          checked ? 'translate-x-6' : 'translate-x-0.5'
        }`}
      />
    </button>
  );
}

export default function PreferenzePrivacy() {
  const [consent, setConsent] = useState<CookieState>(DEFAULT_STATE);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setConsent((prev) => ({
          necessary: true,
          analytics: typeof parsed.analytics === 'boolean' ? parsed.analytics : false,
          marketing: typeof parsed.marketing === 'boolean' ? parsed.marketing : false,
        }));
      }
    } catch {
      // Ignore malformed stored value
    }
  }, []);

  const save = (next: CookieState) => {
    setConsent(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...next, savedAt: new Date().toISOString() }));
    } catch {
      // localStorage unavailable
    }
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3000);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => save({ necessary: true, analytics: false, marketing: false });

  return (
    <section className="relative overflow-hidden pt-36 pb-32 bg-[#F0EFEB] text-left">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-[#f6c73b]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Title Banner */}
          <motion.div variants={itemVariants} className="p-8 sm:p-10 card-premium">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#f6c73b]/15 text-[#2C2C2E] border border-[#f6c73b]/30">
                <Cookie className="w-6 h-6 text-[#2C2C2E]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">
                  Centro Preferenze Cookie
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold font-sans text-[#2C2C2E] tracking-tight uppercase">
                  Preferenze Privacy
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
              dailyplatform e il sito Daily possono utilizzare Cookie e altri Strumenti di Tracciamento. I Cookie tecnici necessari sono sempre attivi per garantire il corretto funzionamento del Servizio. Gli altri strumenti vengono attivati esclusivamente in base alle preferenze che esprimi qui.
            </p>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed mt-2">
              Le tue scelte vengono memorizzate sul dispositivo e puoi modificarle in qualsiasi momento tornando su questa pagina. Per maggiori informazioni consulta la Privacy Policy e la Cookie Policy.
            </p>
          </motion.div>

          {/* Consent Actions */}
          <motion.div variants={itemVariants} className="p-6 sm:p-8 card-premium flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#f6c73b]/15 text-[#2C2C2E] border border-[#f6c73b]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold font-sans text-[#2C2C2E]">Gestione del consenso</p>
                <p className="text-[11px] font-mono text-[#5E5E62]">Scegli come vuoi che daily utilizzi i dati raccolti tramite i Cookie.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptAll}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-bold tracking-wider uppercase font-sans text-[#2C2C2E] bg-[#f6c73b] rounded-[18px] transition-all duration-300 hover:shadow-[0_0_22px_rgba(246,199,59,0.55)] hover:scale-[1.02] active:scale-[0.98] shadow-sm whitespace-nowrap"
              >
                <Check className="w-3.5 h-3.5 stroke-[2.5]" /> Accetta tutti
              </button>
              <button
                onClick={rejectAll}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-bold tracking-wider uppercase font-sans text-[#2C2C2E] bg-white border border-[#2C2C2E]/15 rounded-[18px] transition-all duration-300 hover:border-[#f6c73b] hover:shadow-[0_0_15px_rgba(246,199,59,0.2)] hover:scale-[1.02] active:scale-[0.98] shadow-sm whitespace-nowrap"
              >
                <RotateCcw className="w-3.5 h-3.5 stroke-[2.5]" /> Rifiuta non necessari
              </button>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div variants={itemVariants} className="p-8 sm:p-12 card-premium space-y-6 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">

            {/* Strictly necessary */}
            <div className="p-6 rounded-2xl bg-[#F0EFEB]/80 border border-[#2C2C2E]/10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <p className="text-sm sm:text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">Strettamente necessari</p>
                  <span className="text-[9px] font-bold font-mono uppercase tracking-widest text-[#2C2C2E]/60 bg-[#f6c73b]/15 border border-[#f6c73b]/30 rounded-full px-2 py-0.5">Sempre attivi</span>
                </div>
                <p>
                  Utilizzati per autenticazione, sicurezza, gestione delle sessioni, memorizzazione delle preferenze e funzionamento del Servizio. Non possono essere disattivati.
                </p>
              </div>
              <Toggle checked={consent.necessary} onChange={() => {}} disabled />
            </div>

            {/* Analytics */}
            <div className="p-6 rounded-2xl bg-[#F0EFEB]/80 border border-[#2C2C2E]/10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <p className="text-sm sm:text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">Statistica</p>
                </div>
                <p>
                  Strumenti statistici per comprendere il funzionamento e l'utilizzo del sito e della piattaforma. Vengono attivati solo dopo l'acquisizione delle tue preferenze.
                </p>
              </div>
              <Toggle checked={consent.analytics} onChange={() => setConsent((prev) => ({ ...prev, analytics: !prev.analytics }))} />
            </div>

            {/* Marketing */}
            <div className="p-6 rounded-2xl bg-[#F0EFEB]/80 border border-[#2C2C2E]/10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <p className="text-sm sm:text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">Marketing</p>
                </div>
                <p>
                  Previo consenso, utilizzati per misurare l'efficacia delle campagne, comprendere l'interazione con le comunicazioni commerciali e promuovere prodotti e servizi daily. Puoi revocare il consenso in qualsiasi momento.
                </p>
              </div>
              <Toggle checked={consent.marketing} onChange={() => setConsent((prev) => ({ ...prev, marketing: !prev.marketing }))} />
            </div>

            {/* Save */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] font-mono text-[#5E5E62]">
                {saved
                  ? 'Preferenze salvate correttamente.'
                  : 'Salva le tue preferenze per applicarle alla tua navigazione.'}
              </p>
              <button
                onClick={() => save(consent)}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-[11px] font-bold tracking-wider uppercase font-sans text-[#2C2C2E] bg-[#f6c73b] rounded-[18px] transition-all duration-300 hover:shadow-[0_0_22px_rgba(246,199,59,0.55)] hover:scale-[1.02] active:scale-[0.98] shadow-sm whitespace-nowrap"
              >
                Salva preferenze
              </button>
            </div>

            {/* Corporate Summary Box */}
            <div className="mt-12 p-6 rounded-2xl bg-[#F0EFEB] border border-[#2C2C2E]/10 text-xs text-[#5E5E62] space-y-1 font-mono">
              <p className="font-bold text-[#2C2C2E]">Daily Practice 22 S.r.l. – P. IVA 09637811218 – Via Coroglio 57, 80124 Napoli</p>
              <p>Privacy Policy · Termini e Condizioni · Cookie Policy · Preferenze Privacy</p>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}