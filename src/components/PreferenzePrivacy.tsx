import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Cookie, ChevronDown, X, RotateCcw, ShieldCheck } from 'lucide-react';
import StrumentiTracciamento from './StrumentiTracciamento';

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
    desc: 'Questi cookie sono indispensabili per il funzionamento di dailyplatform: autenticazione, sicurezza, gestione delle sessioni, memorizzazione delle preferenze tecniche, prevenzione di accessi abusivi e corretto funzionamento delle pagine. Non possono essere disattivati.',
    locked: true,
  },
  {
    id: 'functionality',
    title: 'Funzionalità',
    desc: 'Strumenti di Tracciamento che consentono di ricordare le preferenze dell\u2019Utente, mantenere determinate impostazioni, facilitare l\u2019accesso, gestire funzionalità dell\u2019Account e facilitare l\u2019interazione con Daily Practice 22 S.r.l.',
  },
  {
    id: 'experience',
    title: 'Esperienza',
    desc: 'Strumenti di Tracciamento per migliorare la qualità dell\u2019esperienza dell\u2019Utente: visualizzazione delle pagine, preferenze dell\u2019interfaccia, risorse grafiche e integrazione con piattaforme esterne.',
  },
  {
    id: 'measurement',
    title: 'Misurazione',
    desc: 'Strumenti per misurare il traffico e comprendere come gli Utenti utilizzano il sito e dailyplatform (numero di visitatori, pagine visualizzate, durata delle sessioni, eventi di interazione). Vengono attivati esclusivamente a seguito della tua scelta.',
  },
  {
    id: 'marketing',
    title: 'Marketing (con annunci personalizzati)',
    desc: 'Previo consenso, Strumenti di Tracciamento per misurare l\u2019efficacia delle campagne, misurare conversioni, effettuare remarketing e creare pubblici personalizzati. Puoi revocare il consenso in qualsiasi momento.',
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

function PolicyTitle({ num, title }: { num: string; title: string }) {
  return (
    <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
      <span className="text-[#f6c73b]">{num}</span> {title}
    </h2>
  );
}

function PolicySub({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm sm:text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">
      {children}
    </h3>
  );
}

function PolicyBlock({ children }: { children: React.ReactNode }) {
  return <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">{children}</div>;
}

export default function PreferenzePrivacy() {
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_STATE);
  const [saved, setSaved] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showPolicy ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPolicy]);

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
            <button
              type="button"
              onClick={() => setShowPolicy(true)}
              className="pt-3 inline-flex items-center gap-2 text-xs font-bold font-mono text-[#2C2C2E] hover:text-[#b08f00] transition-colors underline underline-offset-4"
            >
              Visualizza Cookie Policy completa
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
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
          </motion.div>

          {/* Dettagli Strumenti di Tracciamento (sezioni espandibili) */}
          <motion.div variants={itemVariants}>
            <StrumentiTracciamento />
          </motion.div>

          {/* Full Cookie Policy (modal) */}
          {showPolicy && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPolicy(false)} />

              {/* Modal card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-3xl bg-[#F0EFEB] border border-[#2C2C2E]/10 shadow-2xl flex flex-col"
              >
                {/* Modal header */}
                <div className="flex items-center justify-between gap-3 px-6 sm:px-8 py-4 border-b border-[#2C2C2E]/10 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#f6c73b]/15 text-[#2C2C2E] border border-[#f6c73b]/30">
                      <Cookie className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">
                        Cookie Policy di dailyplatform
                      </span>
                      <p className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">Cookie Policy completa</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPolicy(false)}
                    className="p-2.5 rounded-full bg-[#2C2C2E]/5 hover:bg-[#2C2C2E]/10 border border-[#2C2C2E]/10 transition-colors shrink-0"
                    aria-label="Chiudi Cookie Policy"
                  >
                    <X className="w-5 h-5 text-[#2C2C2E]" />
                  </button>
                </div>

                {/* Scrollable body */}
                <div className="overflow-y-auto p-6 sm:p-10 space-y-10 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
                  <p className="font-bold text-[#2C2C2E]">Ultimo aggiornamento: 1 ottobre 2026</p>

              {/* Intro */}
              <PolicyBlock>
                <p>
                  Il presente documento contiene informazioni in merito alle tecnologie che consentono a dailyplatform, servizio fornito da Daily Practice 22 S.r.l., di raggiungere le finalità descritte di seguito.
                </p>
                <p>
                  Tali tecnologie permettono al Titolare di raccogliere e salvare informazioni sul dispositivo dell'Utente, per esempio attraverso l'utilizzo di Cookie, oppure di utilizzare risorse presenti sul dispositivo, per esempio mediante l'esecuzione di script, quando l'Utente interagisce con dailyplatform o con il sito Daily.
                </p>
                <p>
                  Per semplicità, nel presente documento tali tecnologie sono complessivamente definite "Strumenti di Tracciamento", salvo che sia necessario distinguerle in modo specifico.
                </p>
                <p>
                  Sebbene i Cookie possano essere utilizzati attraverso browser web sia su computer sia su dispositivi mobili, il termine "Cookie" viene utilizzato nel presente documento per indicare specificamente gli Strumenti di Tracciamento che richiedono l'utilizzo di un browser.
                </p>
                <p>
                  Alcune finalità per le quali vengono utilizzati Strumenti di Tracciamento possono richiedere il consenso dell'Utente.
                </p>
                <p>
                  Quando il trattamento è basato sul consenso, questo può essere liberamente prestato, rifiutato o revocato in qualsiasi momento utilizzando gli strumenti messi a disposizione da Daily Practice 22 S.r.l.
                </p>
                <p>dailyplatform può utilizzare:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>Strumenti di Tracciamento gestiti direttamente da Daily Practice 22 S.r.l., comunemente definiti Strumenti di prima parte;</li>
                  <li>Strumenti di Tracciamento gestiti da soggetti terzi che forniscono determinati servizi alla piattaforma o al sito, comunemente definiti Strumenti di terza parte.</li>
                </ul>
                <p>
                  Quando vengono utilizzati Strumenti di Tracciamento di terza parte, i relativi fornitori possono avere accesso alle informazioni generate attraverso tali strumenti secondo le rispettive condizioni e informative privacy.
                </p>
                <p>
                  La durata e la scadenza dei Cookie e degli altri Strumenti di Tracciamento possono variare in funzione delle impostazioni definite da Daily Practice 22 S.r.l. o dai singoli fornitori terzi.
                </p>
                <p>
                  Alcuni Cookie terminano alla chiusura della sessione di navigazione dell'Utente, mentre altri possono rimanere memorizzati per un periodo più lungo.
                </p>
                <p>
                  Gli Utenti possono ottenere informazioni più dettagliate sulla durata e sulle caratteristiche degli Strumenti di Tracciamento consultando le informative dei rispettivi fornitori o contattando il Titolare.
                </p>
              </PolicyBlock>

              {/* 1. Come dailyplatform utilizza gli Strumenti di Tracciamento */}
              <PolicyBlock>
                <PolicyTitle num="1." title="Come dailyplatform utilizza gli Strumenti di Tracciamento" />

                <PolicySub>Necessari</PolicySub>
                <p>
                  dailyplatform utilizza Cookie tecnici e altri Strumenti di Tracciamento strettamente necessari per consentire il funzionamento e l'erogazione del Servizio.
                </p>
                <p>Tali strumenti possono essere utilizzati, a titolo esemplificativo, per:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>autenticare l'Utente;</li>
                  <li>consentire l'accesso all'Account;</li>
                  <li>mantenere attiva una sessione;</li>
                  <li>garantire la sicurezza della piattaforma;</li>
                  <li>memorizzare impostazioni tecniche;</li>
                  <li>prevenire accessi abusivi;</li>
                  <li>gestire il bilanciamento e la distribuzione del traffico;</li>
                  <li>proteggere il Servizio da spam, bot e attacchi informatici;</li>
                  <li>garantire il corretto funzionamento delle pagine e delle funzionalità.</li>
                </ul>
                <p>
                  Questi Strumenti di Tracciamento sono necessari per il funzionamento del Servizio e, quando utilizzati esclusivamente per tali finalità, non richiedono il consenso dell'Utente nei casi previsti dalla normativa applicabile.
                </p>
                <p className="font-bold text-[#2C2C2E]">Strumenti di Tracciamento gestiti direttamente dal Titolare</p>
                <p>Possono essere utilizzati Cookie tecnici di prima parte relativi a:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>autenticazione;</li>
                  <li>gestione della sessione;</li>
                  <li>sicurezza;</li>
                  <li>memorizzazione delle preferenze tecniche;</li>
                  <li>gestione dell'Account;</li>
                  <li>funzionamento delle funzionalità di dailyplatform.</li>
                </ul>
                <p className="font-bold text-[#2C2C2E]">Strumenti di Tracciamento gestiti da terze parti</p>
                <p>dailyplatform può utilizzare fornitori terzi per attività necessarie quali:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>autenticazione;</li>
                  <li>hosting;</li>
                  <li>infrastruttura cloud;</li>
                  <li>protezione della rete;</li>
                  <li>sicurezza;</li>
                  <li>distribuzione del traffico;</li>
                  <li>gestione dei pagamenti.</li>
                </ul>
                <p>
                  L'elenco dei servizi effettivamente utilizzati viene mantenuto aggiornato nella presente Cookie Policy.
                </p>

                <PolicySub>Funzionalità</PolicySub>
                <p>
                  dailyplatform può utilizzare Strumenti di Tracciamento per consentire interazioni e funzionalità che permettono agli Utenti di accedere alle risorse del Servizio e semplificano l'utilizzo della piattaforma.
                </p>
                <p>Tali strumenti possono essere utilizzati, ad esempio, per:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>ricordare le preferenze dell'Utente;</li>
                  <li>mantenere determinate impostazioni;</li>
                  <li>facilitare l'accesso;</li>
                  <li>gestire funzionalità dell'Account;</li>
                  <li>consentire sistemi di autenticazione;</li>
                  <li>facilitare l'interazione con Daily Practice 22 S.r.l.</li>
                </ul>
                <p className="font-bold text-[#2C2C2E]">Strumenti gestiti direttamente dal Titolare</p>
                <p>Possono rientrare in questa categoria gli strumenti relativi a:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>preferenze dell'Account;</li>
                  <li>comunicazioni;</li>
                  <li>impostazioni dell'interfaccia;</li>
                  <li>funzionalità della piattaforma.</li>
                </ul>
                <p className="font-bold text-[#2C2C2E]">Strumenti gestiti da terze parti</p>
                <p>
                  Qualora dailyplatform utilizzi sistemi esterni di autenticazione o altri servizi funzionali, i relativi Strumenti di Tracciamento saranno indicati nella presente sezione.
                </p>

                <PolicySub>Esperienza</PolicySub>
                <p>
                  dailyplatform può utilizzare Strumenti di Tracciamento per migliorare la qualità dell'esperienza dell'Utente e consentire l'interazione con contenuti o servizi esterni.
                </p>
                <p>Tali strumenti possono, ad esempio:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>migliorare la visualizzazione delle pagine;</li>
                  <li>memorizzare preferenze dell'interfaccia;</li>
                  <li>consentire l'utilizzo di risorse grafiche;</li>
                  <li>permettere l'integrazione con piattaforme esterne.</li>
                </ul>
                <p>
                  Quando tali Strumenti di Tracciamento non sono strettamente necessari al funzionamento del Servizio, vengono utilizzati nel rispetto delle preferenze espresse dall'Utente.
                </p>

                <PolicySub>Misurazione</PolicySub>
                <p>
                  Daily Practice 22 S.r.l. può utilizzare Strumenti di Tracciamento per misurare il traffico e comprendere come gli Utenti utilizzano il sito e dailyplatform.
                </p>
                <p>Tali strumenti possono consentire di raccogliere informazioni relative, ad esempio, a:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>numero di visitatori;</li>
                  <li>pagine visualizzate;</li>
                  <li>durata delle sessioni;</li>
                  <li>funzionalità utilizzate;</li>
                  <li>percorsi di navigazione;</li>
                  <li>eventi di interazione;</li>
                  <li>dispositivo;</li>
                  <li>browser;</li>
                  <li>sistema operativo;</li>
                  <li>informazioni tecniche relative alla sessione.</li>
                </ul>
                <p>Queste informazioni vengono utilizzate per migliorare:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>prestazioni;</li>
                  <li>usabilità;</li>
                  <li>stabilità;</li>
                  <li>funzionamento della piattaforma;</li>
                  <li>esperienza dell'Utente.</li>
                </ul>
                <p>
                  Quando l'utilizzo degli strumenti di misurazione richiede il consenso dell'Utente, tali strumenti vengono attivati esclusivamente a seguito della relativa scelta.
                </p>
                <p className="font-bold text-[#2C2C2E]">Strumenti di Tracciamento gestiti da terze parti</p>
                <p>[Google Analytics 4]</p>

                <PolicySub>Marketing</PolicySub>
                <p>
                  Daily Practice 22 S.r.l. può utilizzare, previo consenso dell'Utente quando richiesto, Strumenti di Tracciamento per attività di marketing, misurazione delle campagne e comunicazione commerciale.
                </p>
                <p>Tali strumenti possono essere utilizzati per:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>misurare l'efficacia delle campagne pubblicitarie;</li>
                  <li>comprendere l'origine delle visite;</li>
                  <li>misurare conversioni;</li>
                  <li>proporre contenuti commerciali pertinenti;</li>
                  <li>effettuare attività di remarketing;</li>
                  <li>creare pubblici personalizzati;</li>
                  <li>analizzare l'interazione con campagne promozionali.</li>
                </ul>
                <p>
                  Gli Strumenti di Tracciamento utilizzati per marketing o profilazione non vengono attivati prima dell'acquisizione del consenso quando questo è richiesto dalla normativa.
                </p>
                <p className="font-bold text-[#2C2C2E]">Strumenti di Tracciamento gestiti da terze parti</p>
                <div className="p-5 rounded-2xl bg-[#F0EFEB]/80 border border-[#2C2C2E]/10 space-y-2 text-[#2C2C2E]">
                  <p className="font-bold font-sans text-sm">Google Tag Manager (Google Ireland Limited)</p>
                  <p>
                    Google Tag Manager è un servizio di gestione dei tag fornito da Google Ireland Limited. Per conoscere l'utilizzo dei Dati da parte di Google, consulta la loro partner policy e la loro pagina dei Dati Commerciali.
                  </p>
                  <p>Dati Personali trattati: Dati di utilizzo e Strumenti di Tracciamento.</p>
                  <p>Luogo del trattamento: Irlanda – Privacy Policy.</p>
                </div>
                <p>[Meta Pixel, LinkedIn Insight Tag, Google Ads]</p>

                <PolicySub>Comunicazioni e newsletter</PolicySub>
                <p>
                  Daily Practice 22 S.r.l. può utilizzare servizi dedicati alla gestione di newsletter, email e comunicazioni con gli Utenti.
                </p>
                <p>Tali servizi possono utilizzare tecnologie che consentono di conoscere, ad esempio:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>se un messaggio è stato consegnato;</li>
                  <li>se è stato aperto;</li>
                  <li>se l'Utente ha selezionato un collegamento presente nella comunicazione;</li>
                  <li>dati tecnici relativi all'interazione con il messaggio.</li>
                </ul>
                <p>
                  L'utilizzo di tali informazioni per finalità commerciali viene effettuato nel rispetto delle preferenze e dei consensi eventualmente espressi dall'Utente.
                </p>
                <p className="font-bold text-[#2C2C2E]">Strumenti gestiti da terze parti</p>
                <p>[Inserire il provider effettivamente utilizzato per newsletter/email marketing.]</p>

                <PolicySub>Autenticazione</PolicySub>
                <p>
                  dailyplatform può utilizzare Cookie o altri strumenti tecnici necessari a identificare l'Utente e consentire l'accesso alle aree riservate.
                </p>
                <p>Questi strumenti possono:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>riconoscere una sessione autenticata;</li>
                  <li>mantenere l'Utente collegato;</li>
                  <li>verificare la validità della sessione;</li>
                  <li>proteggere l'Account;</li>
                  <li>prevenire accessi non autorizzati.</li>
                </ul>
                <p>
                  Quando l'autenticazione viene fornita attraverso servizi di terze parti, tali fornitori possono utilizzare propri Strumenti di Tracciamento secondo le relative condizioni.
                </p>
                <p>[Inserire qui il sistema di autenticazione realmente utilizzato da dailyplatform.]</p>

                <PolicySub>Sicurezza, protezione da spam e bot</PolicySub>
                <p>
                  Daily Practice 22 S.r.l. può utilizzare tecnologie finalizzate alla protezione del sito e della piattaforma da:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>accessi abusivi;</li>
                  <li>spam;</li>
                  <li>bot;</li>
                  <li>attività automatizzate malevole;</li>
                  <li>tentativi di intrusione;</li>
                  <li>attacchi informatici;</li>
                  <li>utilizzi fraudolenti.</li>
                </ul>
                <p>Tali strumenti possono trattare informazioni tecniche quali:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>indirizzo IP;</li>
                  <li>browser;</li>
                  <li>dispositivo;</li>
                  <li>sistema operativo;</li>
                  <li>data e ora;</li>
                  <li>informazioni relative alla sessione;</li>
                  <li>eventi tecnici.</li>
                </ul>
                <p>
                  Quando tali strumenti sono strettamente necessari alla sicurezza del Servizio possono essere utilizzati senza consenso nei limiti previsti dalla normativa.
                </p>

                <PolicySub>Pagamenti</PolicySub>
                <p>
                  Quando l'Utente acquista un Piano a pagamento, Daily Practice 22 S.r.l. può utilizzare fornitori esterni per la gestione dei pagamenti.
                </p>
                <p>
                  Tali servizi possono utilizzare Cookie o altre tecnologie necessarie alla sicurezza della transazione, alla prevenzione delle frodi e al completamento del pagamento.
                </p>
                <p>
                  Le informazioni complete relative allo strumento di pagamento vengono normalmente trattate direttamente dal provider incaricato.
                </p>
                <p>[Inserire qui il provider di pagamento effettivamente utilizzato.]</p>

                <PolicySub>Strumenti di Intelligenza Artificiale</PolicySub>
                <p>
                  Le funzionalità di Intelligenza Artificiale di dailyplatform possono utilizzare servizi tecnologici di terze parti.
                </p>
                <p>
                  L'utilizzo delle funzionalità IA non comporta necessariamente l'utilizzo di Cookie di profilazione.
                </p>
                <p>
                  Eventuali informazioni inviate attraverso prompt, chat, documenti o altri contenuti sono disciplinate dalla Privacy Policy di dailyplatform e dalle specifiche condizioni relative alle funzionalità di Intelligenza Artificiale.
                </p>
                <p>
                  Gli strumenti strettamente necessari al funzionamento tecnico delle funzionalità IA possono essere utilizzati per consentire l'esecuzione della richiesta dell'Utente e la generazione dell'output.
                </p>
              </PolicyBlock>

              {/* 2. Come gestire le preferenze */}
              <PolicyBlock>
                <PolicyTitle num="2." title="Come gestire le preferenze e prestare o revocare il consenso su dailyplatform" />
                <p>
                  Quando l'utilizzo di uno Strumento di Tracciamento è basato sul consenso, l'Utente può prestare, rifiutare o revocare il consenso attraverso il pannello di gestione delle preferenze privacy messo a disposizione sul sito o sulla piattaforma.
                </p>
                <p>L'Utente può in qualsiasi momento selezionare:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li><span className="font-bold text-[#2C2C2E]">Accetta tutti</span> per autorizzare gli Strumenti di Tracciamento facoltativi;</li>
                  <li><span className="font-bold text-[#2C2C2E]">Rifiuta non necessari</span> per utilizzare esclusivamente gli strumenti necessari al funzionamento;</li>
                  <li><span className="font-bold text-[#2C2C2E]">Personalizza</span> per scegliere singolarmente le categorie di Strumenti di Tracciamento da autorizzare.</li>
                </ul>
                <p>Le scelte effettuate possono essere successivamente modificate attraverso il comando:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li><span className="font-bold text-[#2C2C2E]">Preferenze Privacy</span> oppure <span className="font-bold text-[#2C2C2E]">Preferenze Cookie</span> disponibile sul sito o nella piattaforma.</li>
                </ul>
                <p>
                  La revoca del consenso non pregiudica la liceità dei trattamenti effettuati prima della revoca.
                </p>
              </PolicyBlock>

              {/* 3. Strumenti di Tracciamento di terze parti */}
              <PolicyBlock>
                <PolicyTitle num="3." title="Strumenti di Tracciamento di terze parti" />
                <p>
                  Per quanto riguarda gli Strumenti di Tracciamento gestiti da soggetti terzi, gli Utenti possono inoltre gestire le proprie preferenze:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>utilizzando il pannello Cookie di Daily;</li>
                  <li>utilizzando eventuali strumenti di opt-out messi a disposizione dal fornitore;</li>
                  <li>modificando le impostazioni del relativo account presso il fornitore;</li>
                  <li>consultando la privacy policy e la cookie policy del soggetto terzo;</li>
                  <li>contattando direttamente il relativo fornitore.</li>
                </ul>
              </PolicyBlock>

              {/* 4. Controllare o eliminare i Cookie dal browser */}
              <PolicyBlock>
                <PolicyTitle num="4." title="Come controllare o eliminare Cookie e tecnologie analoghe dal browser" />
                <p>Gli Utenti possono utilizzare le impostazioni del browser per:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>verificare quali Cookie sono presenti sul dispositivo;</li>
                  <li>eliminare Cookie già installati;</li>
                  <li>bloccare tutti o alcuni Cookie;</li>
                  <li>impedire l'installazione di determinati Cookie;</li>
                  <li>modificare le preferenze relative al tracciamento.</li>
                </ul>
                <p>
                  La disattivazione indiscriminata di tutti i Cookie attraverso il browser può tuttavia impedire il corretto funzionamento di alcune funzionalità del sito o di dailyplatform.
                </p>
                <p>
                  Gli Utenti possono consultare le istruzioni relative alla gestione dei Cookie nei principali browser, tra cui:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>Google Chrome;</li>
                  <li>Mozilla Firefox;</li>
                  <li>Apple Safari;</li>
                  <li>Microsoft Edge;</li>
                  <li>Brave;</li>
                  <li>Opera.</li>
                </ul>
                <p>
                  Le istruzioni aggiornate sono disponibili direttamente sui siti ufficiali dei rispettivi produttori.
                </p>
              </PolicyBlock>

              {/* 5. Dispositivi mobili */}
              <PolicyBlock>
                <PolicyTitle num="5." title="Dispositivi mobili" />
                <p>
                  Gli Utenti possono gestire alcune tecnologie di tracciamento anche attraverso le impostazioni del proprio dispositivo mobile.
                </p>
                <p>A seconda del sistema operativo utilizzato, possono essere disponibili impostazioni dedicate a:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>privacy;</li>
                  <li>tracciamento;</li>
                  <li>pubblicità personalizzata;</li>
                  <li>identificativi pubblicitari;</li>
                  <li>autorizzazioni delle applicazioni.</li>
                </ul>
              </PolicyBlock>

              {/* 6. Disattivare la pubblicità basata sugli interessi */}
              <PolicyBlock>
                <PolicyTitle num="6." title="Come disattivare la pubblicità basata sugli interessi" />
                <p>
                  Quando Daily Practice 22 S.r.l. utilizza servizi pubblicitari basati sugli interessi, gli Utenti possono inoltre utilizzare gli strumenti di gestione delle preferenze messi a disposizione dai principali operatori del settore.
                </p>
                <p>Tra questi possono rientrare:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                  <li>YourOnlineChoices per l'Unione Europea e il Regno Unito;</li>
                  <li>Network Advertising Initiative;</li>
                  <li>Digital Advertising Alliance;</li>
                  <li>altri strumenti equivalenti messi a disposizione nei rispettivi Paesi.</li>
                </ul>
                <p>
                  L'utilizzo di questi strumenti è aggiuntivo rispetto alle preferenze impostate direttamente attraverso il pannello Cookie di Daily.
                </p>
              </PolicyBlock>

              {/* 7. Conseguenze del rifiuto */}
              <PolicyBlock>
                <PolicyTitle num="7." title="Conseguenze del rifiuto degli Strumenti di Tracciamento" />
                <p>
                  L'Utente è libero di rifiutare gli Strumenti di Tracciamento non necessari.
                </p>
                <p>
                  Il rifiuto di Cookie analytics, marketing o di altri strumenti facoltativi non impedisce l'accesso alle funzionalità essenziali di dailyplatform.
                </p>
                <p>
                  La disattivazione degli Strumenti di Tracciamento strettamente necessari, effettuata ad esempio attraverso le impostazioni del browser, può invece impedire il corretto funzionamento di alcune parti del Servizio, tra cui autenticazione, sicurezza, gestione della sessione o memorizzazione di determinate impostazioni.
                </p>
              </PolicyBlock>

              {/* 8. Titolare del Trattamento dei Dati */}
              <PolicyBlock>
                <PolicyTitle num="8." title="Titolare del Trattamento dei Dati" />
                <div className="p-5 rounded-2xl bg-[#F0EFEB]/80 border border-[#2C2C2E]/10 space-y-1 text-[#2C2C2E]">
                  <p className="font-bold font-sans text-sm">Daily Practice 22 S.r.l.</p>
                  <p>P. IVA 09637811218</p>
                  <p>Via Coroglio 57</p>
                  <p>80124 Napoli – Italia</p>
                  <p>Sito web: <a href="https://daily22.it" className="font-bold hover:underline">daily22.it</a></p>
                  <p>Email: <a href="mailto:info@daily22.it" className="font-bold hover:underline">info@daily22.it</a></p>
                  <p>Segreteria: <a href="mailto:segreteria@dy22.it" className="font-bold hover:underline">segreteria@dy22.it</a></p>
                </div>
                <p>
                  Per qualsiasi informazione relativa agli Strumenti di Tracciamento utilizzati da dailyplatform, l'Utente può contattare il Titolare attraverso i recapiti sopra indicati.
                </p>
              </PolicyBlock>

              {/* 9. Strumenti di terze parti */}
              <PolicyBlock>
                <PolicyTitle num="9." title="Strumenti di terze parti" />
                <p>
                  Poiché alcuni Strumenti di Tracciamento sono gestiti da soggetti terzi, le relative caratteristiche, durata e modalità di funzionamento possono dipendere direttamente dalle configurazioni adottate dai rispettivi fornitori.
                </p>
                <p>
                  I riferimenti agli Strumenti di Tracciamento di terze parti contenuti nella presente Cookie Policy devono pertanto essere letti congiuntamente alle informative privacy e cookie dei rispettivi fornitori.
                </p>
                <p>
                  Daily Practice 22 S.r.l. mantiene aggiornata la presente Cookie Policy in funzione degli strumenti effettivamente utilizzati sul sito e sulla piattaforma.
                </p>
              </PolicyBlock>

              {/* 10. Definizioni */}
              <PolicyBlock>
                <PolicyTitle num="10." title="Definizioni" />
                <p className="font-bold text-[#2C2C2E]">Cookie</p>
                <p>I Cookie sono piccole porzioni di dati che vengono memorizzate all'interno del browser dell'Utente.</p>
                <p className="font-bold text-[#2C2C2E]">Strumento di Tracciamento</p>
                <p>
                  Per Strumento di Tracciamento si intende qualsiasi tecnologia, quali Cookie, identificativi univoci, web beacon, script, pixel, tag o tecnologie analoghe, che consenta di raccogliere o memorizzare informazioni sul dispositivo dell'Utente o sulla sua interazione con il Servizio.
                </p>
                <p className="font-bold text-[#2C2C2E]">Utente</p>
                <p>La persona fisica che utilizza il sito o dailyplatform.</p>
                <p className="font-bold text-[#2C2C2E]">Servizio</p>
                <p>Il servizio fornito da Daily Practice 22 S.r.l. attraverso dailyplatform e le relative funzionalità.</p>
                <p className="font-bold text-[#2C2C2E]">Titolare</p>
                <p>
                  Daily Practice 22 S.r.l., quale soggetto che determina finalità e mezzi dei trattamenti di Dati Personali effettuati per proprie finalità.
                </p>
              </PolicyBlock>

              {/* 11. Modifiche alla Cookie Policy */}
              <PolicyBlock>
                <PolicyTitle num="11." title="Modifiche alla Cookie Policy" />
                <p>
                  Daily Practice 22 S.r.l. può modificare la presente Cookie Policy in conseguenza di modifiche normative, evoluzioni tecnologiche, variazioni della piattaforma o introduzione, sostituzione o eliminazione di Strumenti di Tracciamento.
                </p>
                <p>La versione aggiornata viene pubblicata su questa pagina.</p>
                <p className="font-bold text-[#2C2C2E]">Ultima modifica: 1 ottobre 2026</p>
                <p className="font-bold text-[#2C2C2E]">Versione: 1</p>
              </PolicyBlock>

              {/* Corporate Summary Box */}
              <div className="mt-12 p-6 rounded-2xl bg-[#F0EFEB] border border-[#2C2C2E]/10 text-xs text-[#5E5E62] space-y-1 font-mono">
                <p className="font-bold text-[#2C2C2E]">Daily Practice 22 S.r.l. – P. IVA 09637811218 – Via Coroglio 57, 80124 Napoli</p>
                <p>Privacy Policy · Termini e Condizioni · Cookie Policy · Preferenze Privacy</p>
              </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}