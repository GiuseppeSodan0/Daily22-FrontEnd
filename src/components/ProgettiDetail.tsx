import React from 'react';
import {ShieldCheck, Cpu, MessageSquare, CheckCircle} from 'lucide-react';
import {Link} from 'react-router-dom';

const mainProjects = [
  {
    id: 'dailyplatform',
    title: 'Dailyplatform',
    badge: 'Piattaforma IA',
    tagline: 'La piattaforma intelligente per la sicurezza del futuro',
    description: 'DailyPlatform è una piattaforma digitale per la gestione HSE e la sicurezza sul lavoro, progettata per integrare dati biometrici, ambientali, organizzativi e documentali. Attraverso l\'Intelligenza Artificiale, analizza le informazioni raccolte e le trasforma in KPI, alert e modelli predittivi utili a prevenire i rischi e supportare le decisioni aziendali.',
    icon: ShieldCheck,
    color: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    details: [
      'Raccoglie e integra dati biometrici, ambientali e contestuali in tempo reale',
      'Analizza e interpreta le informazioni con modelli di intelligenza artificiale e machine learning',
      'Genera modelli predittivi di rischio e alert automatici su base individuale o collettiva',
      'Digitalizza le informazioni di sicurezza aziendale: DVR, ruoli, DPI, procedure, formazione',
      'Dialoga con il chatbot Salvatore per supporto conversazionale e formazione continua',
    ],
  },
  {
    id: 'widiu',
    title: 'WIDIU',
    badge: 'Smartwatch Intelligente',
    tagline: 'Lo smartwatch intelligente per la sicurezza e il benessere',
    description: 'WIDIU è lo smartwatch sviluppato da daily per supportare la prevenzione dei rischi nei contesti operativi reali. Attraverso sensori biometrici, di movimento e ambientali, raccoglie dati durante l\'attività lavorativa e li integra con DailyPlatform.',
    icon: Cpu,
    color: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    details: [
      'Rileva parametri biometrici: frequenza cardiaca, HRV, temperatura, stress, postura',
      'Analizza dati ambientali: temperatura, umidità, rumore, vibrazioni, illuminazione',
      'Invia i dati in tempo reale a DailyPlatform per elaborazione e correlazione',
      'Genera alert immediati in caso di condizioni critiche',
      'Opera anche in modalità Edge AI, senza necessità di connessione',
    ],
  },
  {
    id: 'salvatore',
    title: 'SALVATORE',
    badge: 'ChatBot',
    tagline: 'Il chatbot IA che rende la sicurezza un dialogo accessibile',
    description: 'Salvatore è il chatbot IA dedicato alla sicurezza sul lavoro, progettato per offrire assistenza, formazione e supporto alla prevenzione. Interagisce in tempo reale con l\'utente, risponde a domande su rischi, procedure e comportamenti sicuri.',
    icon: MessageSquare,
    color: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    details: [
      'Dialoga in tempo reale con lavoratori, preposti, RSPP e datori di lavoro',
      'Fornisce informazioni normative, operative e formative in base al ruolo',
      'Abbatte le barriere culturali e psicologiche, offrendo un canale riservato',
      'Supporta la formazione continua con linguaggio semplice e visivo',
      'Integra dati da DailyPlatform e WIDIU per risposte contestualizzate',
    ],
  },
];

const dailybydailySolutions = [
  {
    id: 'daily4compliance',
    title: 'daily4compliance',
    description: 'daily4compliance è la soluzione dedicata alla gestione degli adempimenti aziendali in materia di sicurezza sul lavoro, ambiente, qualità, privacy e autorizzazioni. Aiuta ogni organizzazione a individuare gli obblighi applicabili in base al settore, alle attività svolte e alle caratteristiche aziendali, trasformandoli in attività chiare, verificabili e sempre sotto controllo.',
    features: [
      'Individuazione degli adempimenti in base al settore ATECO',
      'Gestione di documenti, autorizzazioni e scadenze normative',
      'Monitoraggio dello stato di conformità aziendale',
      'Checklist, task e report dedicati alla compliance',
    ],
  },
  {
    id: 'daily231',
    title: 'daily231',
    description: 'daily231 è la soluzione dedicata alla gestione dei Modelli di Organizzazione, Gestione e Controllo ai sensi del D.Lgs. 231/2001. Supporta aziende, consulenti e Organismi di Vigilanza nella valutazione dei rischi-reato, nella raccolta dei documenti e nel monitoraggio continuo delle misure adottate.',
    features: [
      'Analisi dei rischi-reato e delle aree aziendali sensibili',
      'Gestione del Modello 231, dei protocolli e delle procedure',
      'Raccolta documentale e flussi informativi verso l\'OdV',
      'Monitoraggio delle attività, delle evidenze e delle azioni correttive',
    ],
  },
  {
    id: 'daily4work',
    title: 'daily4work',
    description: 'daily4work è la soluzione dedicata alla gestione quotidiana della salute, della sicurezza e del benessere nei luoghi di lavoro. Consente alle aziende di organizzare lavoratori, mansioni, rischi, DPI, formazione, procedure e attività operative attraverso un\'esperienza semplice, accessibile anche da smartphone.',
    features: [
      'Gestione di lavoratori, mansioni, reparti e rischi associati',
      'Controllo di DPI, formazione, procedure e scadenze',
      'Questionari, segnalazioni e check-in giornalieri',
      'Alert e indicazioni personalizzate per la prevenzione (incluso woman4work)',
    ],
  },
  {
    id: 'daily4train',
    title: 'daily4train',
    description: 'daily4train è la soluzione dedicata alla gestione e al monitoraggio delle attività dei lavoratori del settore ferroviario, supportando operatori, tecnici e personale viaggiante nella pianificazione, nel controllo e nella sicurezza delle attività quotidiane.',
    features: [
      'Pianificazione dei turni e gestione del personale ferroviario',
      'Monitoraggio delle condizioni di lavoro e dello stato di affaticamento',
      'Gestione della formazione, delle abilitazioni e degli aggiornamenti',
      'Controllo delle condizioni operative e della sicurezza dei lavoratori',
    ],
  },
  {
    id: 'dailyinform',
    title: 'dailyinform',
    description: 'dailyinform è l\'app dedicata all\'informazione, ai questionari e all\'ascolto attivo dei lavoratori. Raccoglie autovalutazioni sullo stato fisico, organizzativo e lavorativo e restituisce contenuti informativi, suggerimenti e protocolli di recupero coerenti con le condizioni rilevate.',
    features: [
      'Questionari sul benessere e sulle condizioni di lavoro',
      'Autovalutazioni periodiche semplici e immediate',
      'Contenuti informativi personalizzati',
      'Protocolli di pausa, respirazione, idratazione e defaticamento',
    ],
  },
  {
    id: 'daily4sport',
    title: 'daily4sport',
    description: 'daily4sport applica le tecnologie daily al mondo dello sport, supportando atleti, tecnici, società e organizzazioni nella lettura delle condizioni fisiche, ambientali e di recupero. La soluzione favorisce una pratica sportiva più consapevole e orientata alla prevenzione.',
    features: [
      'Monitoraggio di attività, fatica e recupero',
      'Analisi delle condizioni ambientali durante l\'allenamento',
      'Questionari sul benessere e sulla percezione dello sforzo',
      'Indicazioni personalizzate per prevenzione e recupero',
    ],
  },
  {
    id: 'daily4child',
    title: 'daily4child',
    description: 'daily4child è il progetto dedicato alla tutela del benessere dei minori e all\'uso consapevole delle tecnologie digitali. Aiuta famiglie e professionisti a osservare abitudini, segnali di stress e qualità del recupero, con un approccio educativo, preventivo e non invasivo.',
    features: [
      'Analisi delle abitudini legate a smartphone, social e videogiochi',
      'Monitoraggio di sonno, postura, stress e recupero',
      'Questionari per minori e famiglie',
      'Suggerimenti educativi e strategie preventive personalizzate',
    ],
  },
  {
    id: 'daily4woman',
    title: 'daily4woman',
    description: 'daily4woman è la soluzione dedicata al benessere, alla prevenzione e alla lettura dei segnali che possono influire sulla vita quotidiana delle donne. Integra autovalutazioni, dati e protocolli personalizzati per aiutare ogni utente a riconoscere affaticamento, stress, carico mentale e difficoltà di recupero.',
    features: [
      'Monitoraggio del benessere fisico ed emotivo',
      'Analisi di stress, sonno, energia e carico mentale',
      'Questionari e percorsi personalizzati',
      'Suggerimenti pratici per recupero e prevenzione',
    ],
  },
  {
    id: 'dailyathome',
    title: 'dailyathome',
    description: 'dailyathome è la soluzione dedicata al lavoro da remoto e allo smart working. Aiuta il lavoratore a organizzare meglio la giornata, riconoscere i segnali di affaticamento e migliorare postura, concentrazione, recupero e qualità dell\'ambiente domestico di lavoro.',
    features: [
      'Controllo di postura, pause e organizzazione della giornata',
      'Valutazione di stress, concentrazione e affaticamento digitale',
      'Analisi del comfort della postazione domestica',
      'Protocolli di recupero e suggerimenti per il lavoro da remoto',
    ],
  },
  {
    id: 'dailyOnOff',
    title: 'dailyOn&Off',
    description: 'dailyOn&Off è la soluzione dedicata alla gestione dell\'attivazione, del carico e del recupero. Aiuta la persona a riconoscere quando è il momento di sostenere la performance e quando è necessario rallentare, recuperare e ristabilire un equilibrio fisico e mentale.',
    features: [
      'Rilevazione dei segnali di affaticamento e sovraccarico',
      'Analisi dei momenti di attività e recupero',
      'Suggerimenti per pause e defaticamento',
      'Protocolli personalizzati per favorire il riequilibrio',
    ],
  },
];

export default function ProgettiDetail() {
  return (
    <div className="py-24 select-none text-left" style={{background: 'linear-gradient(180deg, #faf8f5 0%, #f5f0e8 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">Servizi</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 font-sans" style={{color: 'var(--color-ink)'}}>Servizi.</h2>
          <p className="mt-4 text-xs sm:text-sm font-light leading-relaxed" style={{color: 'var(--color-ink-soft)'}}>
            Un'architettura sinergica dove ciascun modulo dialoga costantemente con gli altri per creare una rete di protezione ininterrotta e digitale intorno al lavoratore.
          </p>
        </div>

        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {mainProjects.map((p) => (
            <div
              key={p.id}
              className="flex flex-col h-full rounded-3xl card-premium transition-all duration-300 p-6 md:p-8 shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-yellow-600">
                  {p.badge}
                </span>
                <span className={`p-2.5 rounded-xl border ${p.color}`}>
                  <p.icon className="w-5 h-5 stroke-[2]" />
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-ink)'}}>{p.title}</h3>
              <p className="text-xs mb-4 italic leading-snug" style={{color: 'var(--color-ink-soft)'}}>{p.tagline}</p>
              <p className="text-xs sm:text-sm leading-relaxed mb-6 font-light" style={{color: 'var(--color-ink-soft)'}}>{p.description}</p>

              <div className="space-y-3 pt-6 mt-auto border-t border-gray-200">
                {p.details.map((d, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs" style={{color: 'var(--color-ink-soft)'}}>
                    <CheckCircle className="w-3.5 h-3.5 text-yellow-600 shrink-0 mt-0.5" />
                    <span className="font-light">{d}</span>
                  </div>
                ))}
              </div>
              {p.id === 'widiu' && (
                <Link
                  to="/widiu"
                  className="inline-flex items-center gap-1 text-[10px] font-bold text-yellow-600 hover:text-yellow-700 transition-colors mt-4 uppercase tracking-wider font-mono"
                >
                  Scopri WIDIU →
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* dailybydaily Ecosystem */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">Ecosistema</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-3 font-sans" style={{color: 'var(--color-ink)'}}>I Progetti Verticali daily — L'ecosistema dailybydaily</h3>
            <p className="mt-4 text-xs sm:text-sm font-light leading-relaxed" style={{color: 'var(--color-ink-soft)'}}>
              Soluzioni progettate per specifici ambiti di sicurezza, compliance, benessere e prevenzione, integrate nell'ecosistema tecnologico daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dailybydailySolutions.map((sol) => (
              <div
                key={sol.id}
                className="p-6 md:p-8 rounded-3xl card-premium transition-all duration-300 flex flex-col"
              >
                <h4 className="text-lg font-bold mb-3" style={{color: 'var(--color-ink)'}}>{sol.title}</h4>
                <p className="text-xs sm:text-sm leading-relaxed mb-4 font-light" style={{color: 'var(--color-ink-soft)'}}>{sol.description}</p>
                <div className="space-y-2 pt-4 mt-auto border-t border-gray-100">
                  {sol.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs" style={{color: 'var(--color-ink-soft)'}}>
                      <CheckCircle className="w-3 h-3 text-yellow-600 shrink-0 mt-0.5" />
                      <span className="font-light">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Safety Lab */}
        <div className="p-8 rounded-3xl text-center" style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.06)'}}>
          <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">Consulenza</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold mt-3 mb-6 font-sans" style={{color: 'var(--color-ink)'}}>Daily Safety Lab</h3>
          <p className="text-sm mb-8 max-w-2xl mx-auto font-light leading-relaxed" style={{color: 'var(--color-ink-soft)'}}>
            Daily Safety Lab Srl è una società specializzata in sicurezza sul lavoro, consulenza HSE, formazione, qualità, ambiente e compliance aziendale. Supportiamo imprese, organizzazioni e strutture sanitarie nella gestione degli adempimenti normativi, nella valutazione dei rischi e nello sviluppo di sistemi organizzativi più sicuri, efficienti e sostenibili.
          </p>
          <Link
            to="/daily-safety-lab"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-yellow-600 hover:bg-yellow-500 transition-all"
          >
            Scopri Daily Safety Lab
          </Link>
        </div>

      </div>
    </div>
  );
}
