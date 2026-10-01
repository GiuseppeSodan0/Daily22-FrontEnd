import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cookie, ExternalLink, FileText, RotateCcw } from 'lucide-react';

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

interface ConsentState {
  necessary: boolean;
  functionality: boolean;
  experience: boolean;
  measurement: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'daily_cookie_consent';

const DEFAULT_STATE: ConsentState = {
  necessary: true,
  functionality: false,
  experience: false,
  measurement: false,
  marketing: false,
};

type CategoryId = keyof ConsentState;

const CATEGORIES: { id: CategoryId; title: string; desc: string; locked?: boolean }[] = [
  {
    id: 'necessary',
    title: 'Strettamente necessari',
    desc: 'Questi cookie sono indispensabili per il funzionamento di dailyplatform: autenticazione, sicurezza, gestione delle sessioni, memorizzazione delle preferenze e funzionamento del Servizio. Non possono essere disattivati.',
    locked: true,
  },
  {
    id: 'functionality',
    title: 'Funzionalità',
    desc: 'Cookie che consentono di ricordare le scelte effettuate dall\u2019Utente (lingua, preferenze, impostazioni) e di fornire funzionalità avanzate per migliorare l\u2019esperienza di utilizzo.',
  },
  {
    id: 'experience',
    title: 'Esperienza',
    desc: 'Cookie che permettono di migliorare e ottimizzare l\u2019esperienza di navigazione, adattando il sito e la piattaforma alle modalità di utilizzo e alle interazioni dell\u2019Utente.',
  },
  {
    id: 'measurement',
    title: 'Misurazione',
    desc: 'Strumenti statistici e di misurazione per comprendere il funzionamento e l\u2019utilizzo del sito e della piattaforma. Vengono attivati esclusivamente dopo l\u2019acquisizione delle tue preferenze.',
  },
  {
    id: 'marketing',
    title: 'Marketing (con annunci personalizzati)',
    desc: 'Previo consenso, utilizzati per misurare l\u2019efficacia delle campagne, comprendere l\u2019interazione con le comunicazioni commerciali e promuovere prodotti e servizi daily. Puoi revocare il consenso in qualsiasi momento.',
  },
];

function Toggle({ checked, onChange, disabled }: { checked: boolean; onChange: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6c73b]/50 ${
        checked ? 'bg-[#f6c73b]' : 'bg-[#2C2C2E]/20'
      } ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-300 ${
          checked ? 'translate-x-6' : 'translate-x-0.5'
        }`}
      />
    </button>
  );
}

export default function PreferenzePrivacy() {
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_STATE);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setConsent((prev) => {
          const next = { ...prev };
          (Object.keys(next) as CategoryId[]).forEach((k) => {
            if (k !== 'necessary' && typeof parsed[k] === 'boolean') {
              next[k] = parsed[k];
            }
          });
          next.necessary = true;
          return next;
        });
      }
    } catch {
      // Ignore malformed stored value
    }
  }, []);

  const save = (next: ConsentState) => {
    setConsent(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...next, savedAt: new Date().toISOString() }));
    } catch {
      // localStorage unavailable
    }
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3000);
  };

  const acceptAll = () => save({ necessary: true, functionality: true, experience: true, measurement: true, marketing: true });
  const rejectAll = () => save({ necessary: true, functionality: false, experience: false, measurement: false, marketing: false });
  const toggle = (id: CategoryId) => setConsent((prev) => ({ ...prev, [id]: !prev[id] }));

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
              Noi e terze parti selezionate utilizziamo cookie o tecnologie simili per finalità tecniche e, con il tuo consenso, anche per le finalità di funzionalità, esperienza, misurazione e \u201cmarketing (con annunci personalizzati)\u201d come specificato nella cookie policy.
            </p>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed mt-2">
              Puoi liberamente prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento, accedendo al pannello delle preferenze. Il rifiuto del consenso può rendere non disponibili le relative funzioni.
            </p>
            <div className="pt-3">
              <Link
                to="/cookie-policy"
                className="inline-flex items-center gap-2 text-xs font-bold font-mono text-[#2C2C2E] hover:text-[#b08f00] transition-colors underline underline-offset-4"
              >
                Visualizza Cookie Policy completa
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Consent Actions */}
          <motion.div variants={itemVariants} className="p-6 sm:p-8 card-premium flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#f6c73b]/15 text-[#2C2C2E] border border-[#f6c73b]/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold font-sans text-[#2C2C2E]">Gestione del consenso</p>
                <p className="text-[11px] font-mono text-[#5E5E62]">Scegli come vuoi che daily utilizzi i dati raccolti tramite i Cookie.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptAll}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-bold tracking-wider uppercase font-sans text-white bg-[#2C2C2E] rounded-[18px] transition-all duration-300 hover:shadow-[0_0_22px_rgba(44,44,46,0.35)] hover:scale-[1.02] active:scale-[0.98] shadow-sm whitespace-nowrap"
              >
                Accetta
              </button>
              <button
                onClick={rejectAll}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-bold tracking-wider uppercase font-sans text-[#2C2C2E] bg-white border border-[#2C2C2E]/15 rounded-[18px] transition-all duration-300 hover:border-[#f6c73b] hover:shadow-[0_0_15px_rgba(246,199,59,0.2)] hover:scale-[1.02] active:scale-[0.98] shadow-sm whitespace-nowrap"
              >
                <RotateCcw className="w-3.5 h-3.5 stroke-[2.5]" /> Rifiuta
              </button>
            </div>
          </motion.div>

          {/* Category flags */}
          <motion.div variants={itemVariants} className="p-8 sm:p-12 card-premium space-y-4 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="p-6 rounded-2xl bg-[#F0EFEB]/80 border border-[#2C2C2E]/10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm sm:text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">{cat.title}</p>
                    {cat.locked && (
                      <span className="text-[9px] font-bold font-mono uppercase tracking-widest text-[#2C2C2E]/60 bg-[#f6c73b]/15 border border-[#f6c73b]/30 rounded-full px-2 py-0.5">
                        Sempre attivi
                      </span>
                    )}
                  </div>
                  <p>{cat.desc}</p>
                </div>
                <Toggle checked={consent[cat.id]} onChange={() => toggle(cat.id)} disabled={cat.locked} />
              </div>
            ))}

            {/* Save */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] font-mono text-[#5E5E62]">
                {saved
                  ? 'Preferenze salvate correttamente.'
                  : 'Salva le tue preferenze per applicarle alla tua navigazione. Le tue scelte vengono memorizzate sul dispositivo.'}
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