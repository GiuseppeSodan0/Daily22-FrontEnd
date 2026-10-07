import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Service {
  name: string;
  body: string[];
  dati?: string;
  luogo?: string;
  durations?: [string, string][];
}

interface Group {
  title: string;
  services: Service[];
}

interface Category {
  title: string;
  intro: string;
  groups: Group[];
}

const CATEGORIES: Category[] = [
  {
    title: 'Necessari',
    intro:
      'daily utilizza Cookie comunemente detti "tecnici" o altri Strumenti di Tracciamento analoghi per svolgere attività strettamente necessarie a garantire il funzionamento o la fornitura del Servizio.',
    groups: [
      {
        title: 'Strumenti di Tracciamento gestiti da terze parti',
        services: [
          {
            name: 'Google Tag Manager (Google Ireland Limited)',
            body: [
              "Google Tag Manager è un servizio di gestione dei tag fornito da Google Ireland Limited. Per conoscere l'utilizzo dei Dati da parte di Google, consulta la loro partner policy e la loro pagina dei Dati Commerciali.",
            ],
            dati: 'Dati di utilizzo e Strumenti di Tracciamento.',
            luogo: 'Irlanda – Privacy Policy.',
          },
          {
            name: 'Stripe ( Stripe Technology Europe Ltd)',
            body: ['Stripe è un servizio di pagamento fornito da Stripe Technology Europe Ltd.'],
            dati: 'cognome, Dati di utilizzo, email, nome e Strumenti di Tracciamento.',
            luogo: 'Unione europea – Privacy Policy.',
            durations: [
              ['1', 'indefinita'],
              ['__Host-LinkSession', '2 anni'],
              ['__stripe_mid', '1 anno'],
              ['__stripe_sid', '30 minuti'],
              ['_mf', 'indefinita'],
              ['dashboard.banner-dismissals', 'durata della sessione'],
              ['link.auth_session_client_secret', 'durata della sessione'],
              ['m', '2 anni'],
              ['pay_sid', '1 anno'],
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Funzionalità',
    intro:
      'daily utilizza Strumenti di Tracciamento per consentire semplici interazioni e attivare funzionalità che permettono agli Utenti di accedere a determinate risorse del Servizio e semplificano la comunicazione con il Titolare.',
    groups: [
      {
        title: 'Strumenti di Tracciamento gestiti direttamente dal Titolare',
        services: [
          {
            name: 'Mailing list o newsletter (daily)',
            body: [
              "Con la registrazione alla mailing list o alla newsletter, l'indirizzo email dell'Utente viene automaticamente inserito in una lista di contatti a cui potranno essere trasmessi messaggi email contenenti informazioni, anche di natura commerciale e promozionale, relative a daily. L'indirizzo email dell'Utente potrebbe anche essere aggiunto a questa lista come risultato della registrazione a daily o dopo aver effettuato un acquisto.",
            ],
            dati: 'Dati di utilizzo, email e Strumenti di Tracciamento.',
          },
        ],
      },
      {
        title: 'Strumenti di Tracciamento gestiti da terze parti',
        services: [
          {
            name: 'LinkedIn OAuth (LinkedIn Corporation)',
            body: [
              'LinkedIn Oauth è un servizio di registrazione ed autenticazione fornito da LinkedIn Corporation e collegato al social network LinkedIn.',
            ],
            dati: 'Dati di utilizzo e Strumenti di Tracciamento.',
            luogo: 'Stati Uniti – Privacy Policy – Opt Out.',
            durations: [
              ['JSESSIONID', 'durata della sessione'],
              ['bcookie', '1 anno'],
              ['bscookie', '1 anno'],
              ['lang', 'durata della sessione'],
              ['lissc', '1 anno'],
              ['sdui_ver', '1 giorno'],
            ],
          },
          {
            name: 'Google OAuth (Google Ireland Limited)',
            body: [
              'Google OAuth è un servizio di registrazione ed autenticazione fornito da Google Ireland Limited e collegato al network Google.',
            ],
            dati: 'Dati di utilizzo, Strumenti di Tracciamento e varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio.',
            luogo: 'Irlanda – Privacy Policy.',
          },
        ],
      },
    ],
  },
  {
    title: 'Esperienza',
    intro:
      'daily utilizza Strumenti di Tracciamento per migliorare la qualità della user experience e consentire le interazioni con contenuti, network e piattaforme esterni.',
    groups: [
      {
        title: 'Strumenti di Tracciamento gestiti da terze parti',
        services: [
          {
            name: 'Google Fonts (Google LLC)',
            body: [
              'Google Fonts è un servizio di visualizzazione di stili di carattere gestito da Google LLC che permette a daily di integrare tali contenuti all\u2019interno delle proprie pagine.',
            ],
            dati: 'Dati di utilizzo e Strumenti di Tracciamento.',
            luogo: 'Stati Uniti – Privacy Policy.',
          },
        ],
      },
    ],
  },
  {
    title: 'Misurazione',
    intro:
      'daily utilizza Strumenti di Tracciamento per misurare il traffico e analizzare il comportamento degli Utenti per migliorare il Servizio.',
    groups: [
      {
        title: 'Strumenti di Tracciamento gestiti da terze parti',
        services: [
          {
            name: 'Google Analytics 4 (Google Ireland Limited)',
            body: [
              'Google Analytics è un servizio di statistica fornito da Google Ireland Limited ("Google"). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l\u2019utilizzo di daily, compilare report e condividerli con gli altri servizi sviluppati da Google. Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network pubblicitario. In Google Analytics 4, gli indirizzi IP vengono utilizzati al momento della raccolta e poi eliminati prima che i dati vengano registrati in qualsiasi data center o server. Per saperne di più, è possibile consultare la documentazione ufficiale di Google. Per conoscere l\u2019utilizzo dei Dati da parte di Google, consulta la loro partner policy e la loro pagina dei Dati Commerciali.',
            ],
            dati: 'Dati di utilizzo, numero di Utenti, statistiche delle sessioni e Strumenti di Tracciamento.',
            luogo: 'Irlanda – Privacy Policy – Opt out.',
            durations: [
              ['_ga', '2 anni'],
              ['_ga_*', '2 anni'],
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Marketing',
    intro:
      'daily utilizza Strumenti di Tracciamento per fornire annunci personalizzati o contenuti di marketing e per misurarne le prestazioni.',
    groups: [
      {
        title: 'Strumenti di Tracciamento gestiti da terze parti',
        services: [
          {
            name: 'Monitoraggio conversioni di Meta ads (pixel di Meta) (Meta Platforms Ireland Limited)',
            body: [
              "Il monitoraggio conversioni di Meta ads (pixel di Meta) è un servizio di statistiche fornito da Meta Platforms Ireland Limited che collega i dati provenienti dal network di annunci Meta con le azioni compiute all'interno di daily. Il pixel di Meta monitora le conversioni che possono essere attribuite alle inserzioni di Facebook, Instagram e Audience Network.",
            ],
            dati: 'Dati di utilizzo e Strumenti di Tracciamento.',
            luogo: 'Irlanda – Privacy Policy – Opt out.',
            durations: [
              ['_fbc', '3 mesi'],
              ['_fbp', '3 mesi'],
              ['fr', '3 mesi'],
              ['lastExternalReferrer', 'durata della sessione'],
              ['lastExternalReferrerTime', 'durata della sessione'],
            ],
          },
          {
            name: 'Monitoraggio conversioni di LinkedIn (LinkedIn Insight Tag) (LinkedIn Corporation)',
            body: [
              "Il monitoraggio conversioni di LinkedIn (LinkedIn Insight Tag) è un servizio di statistiche e di targeting comportamentale fornito da LinkedIn Corporation che collega i dati provenienti dal network di annunci LinkedIn con le azioni compiute all'interno di daily. Il LinkedIn Insight Tag traccia le conversioni che possono essere attribuite agli annunci LinkedIn e permette di individuare come target gruppi di Utenti sulla base del loro precedente utilizzo di daily. Gli Utenti possono fare opt-out dalle funzionalità di pubblicità comportamentale attraverso le impostazioni del loro dispositivo, le impostazioni del loro account LinkedIn o visitando la pagina di opt-out di AdChoices.",
            ],
            dati: 'Dati di utilizzo, informazioni sul dispositivo e Strumenti di Tracciamento.',
            luogo: 'Stati Uniti – Privacy Policy – Opt out.',
            durations: [
              ['AnalyticsSyncHistory', '1 mese'],
              ['JSESSIONID', 'durata della sessione'],
              ['UserMatchHistory', '1 mese'],
              ['bcookie', '1 anno'],
              ['bscookie', '1 anno'],
              ['lang', 'durata della sessione'],
              ['li_gc', '7 mesi'],
              ['lidc', '1 giorno'],
              ['lms_ads', '1 mese'],
              ['lms_analytics', '1 mese'],
              ['sdui_ver', '1 giorno'],
            ],
          },
          {
            name: 'Pubblico simile di Meta (Meta Platforms Ireland Limited)',
            body: [
              "Pubblico simile di Meta è un servizio di advertising e di targeting comportamentale fornito da Meta Platforms Ireland Limited che utilizza i Dati raccolti attraverso il servizio Pubblico personalizzato di Meta al fine di mostrare annunci pubblicitari a Utenti con comportamenti simili a Utenti che sono già in una lista di Pubblico personalizzato sulla base del loro precedente utilizzo di daily o della loro interazione con contenuti rilevanti attraverso le applicazioni e i servizi di Meta. Sulla base di questi Dati, gli annunci personalizzati saranno mostrati agli Utenti suggeriti da Pubblico simile di Meta. Gli Utenti possono scegliere di non utilizzare i Strumenti di Tracciamento di Meta per la personalizzazione degli annunci visitando questa pagina di opt-out.",
            ],
            dati: 'Dati di utilizzo e Strumenti di Tracciamento.',
            luogo: 'Irlanda – Privacy Policy – Opt out.',
            durations: [
              ['_fbp', '3 mesi'],
              ['lastExternalReferrer', 'durata della sessione'],
              ['lastExternalReferrerTime', 'durata della sessione'],
            ],
          },
          {
            name: 'Monitoraggio conversioni di Google Ads (Google Ireland Limited)',
            body: [
              "Il monitoraggio conversioni di Google Ads è un servizio di statistiche fornito da Google Ireland Limited che collega i dati provenienti dal network di annunci Google Ads con le azioni compiute all'interno di daily. Per conoscere l'utilizzo dei Dati da parte di Google, consulta la loro partner policy e la loro pagina dei Dati Commerciali.",
            ],
            dati: 'Dati di utilizzo e Strumenti di Tracciamento.',
            luogo: 'Irlanda – Privacy Policy.',
            durations: [
              ['IDE', '2 anni'],
              ['test_cookie', '15 minuti'],
            ],
          },
          {
            name: 'Google Ad Manager (Google Ireland Limited)',
            body: [
              "Google Ad Manager è un servizio pubblicitario fornito da Google Ireland Limited che consente al Titolare di gestire campagne pubblicitarie in collaborazione con reti pubblicitarie esterne con cui il Titolare, salvo quanto diversamente specificato nel presente documento, non ha alcun rapporto diretto. Questo servizio utilizza Cookie e identificatori simili, incluse informazioni trasmesse automaticamente come gli indirizzi IP degli Utenti, per identificare i dispositivi degli Utenti e monitorare l'utilizzo di daily e il comportamento degli Utenti in relazione ad annunci, prodotti e servizi offerti. Gli Utenti possono gestire le proprie preferenze pubblicitarie e disattivare i Cookie pubblicitari tramite le Impostazioni annunci di Google. Si noti che ciò potrebbe non impedire che i dispositivi degli Utenti vengano identificati sulla base di informazioni trasmesse automaticamente, come il loro indirizzo IP. Per comprendere come Google utilizza i Dati, si consiglia di consultare la loro informativa sui partner e la loro pagina sui Dati aziendali.",
            ],
            dati: 'Dati di utilizzo e Strumenti di Tracciamento.',
            luogo: 'Irlanda – Privacy Policy.',
            durations: [
              ['APC', '6 mesi'],
              ['Conversion', '3 mesi'],
              ['DSID', '14 giorni'],
              ['FCNEC', '1 anno'],
              ['FLC', '10 secondi'],
              ['FPAU', '3 mesi'],
              ['FPGCLAW', '3 mesi'],
              ['FPGCLDC', '3 mesi'],
              ['FPGCLGB', '3 mesi'],
              ['FPGCLGS', '3 mesi'],
              ['FPGSID', '3 mesi'],
              ['GCL_AU_P', '3 mesi'],
              ['GCL_AW_P', '3 mesi'],
              ['GCL_DC_P', '3 mesi'],
              ['GED_PLAYLIST_ACTIVITY', 'durata della sessione'],
              ['IDE', '2 anni'],
              ['NID', '6 mesi'],
              ['RUL', '1 anno'],
              ['TESTCOOKIESENABLED', '1 minuto'],
              ['__eoi', '7 mesi'],
              ['__gads', '2 anni'],
              ['__gpi', '2 anni'],
              ['__gpi_optout', '2 anni'],
              ['__gsas', '2 anni'],
              ['_gac_', '3 mesi'],
              ['_gac_gb_', '3 mesi'],
              ['_gcl_ag', '3 mesi'],
              ['_gcl_au', '3 mesi'],
              ['_gcl_aw', '3 mesi'],
              ['_gcl_dc', '3 mesi'],
              ['_gcl_gb', '3 mesi'],
              ['_gcl_gf', '3 mesi'],
              ['_gcl_gs', '3 mesi'],
              ['_gcl_ha', '3 mesi'],
              ['ar_debug', '3 mesi'],
              ['id', '2 anni'],
              ['receive-cookie-deprecation', '6 mesi'],
              ['test_cookie', '15 minuti'],
            ],
          },
          {
            name: 'Pubblico personalizzato di Meta (Meta Platforms Ireland Limited)',
            body: [
              "Pubblico personalizzato di Meta è un servizio di remarketing e di targeting comportamentale fornito da Meta Platforms Ireland Limited che collega l'attività di daily con la rete pubblicitaria di Meta. Gli Utenti possono scegliere di non utilizzare i Strumenti di Tracciamento di Meta per la personalizzazione degli annunci visitando questa pagina di opt-out.",
            ],
            dati: 'email e Strumenti di Tracciamento.',
            luogo: 'Irlanda – Privacy Policy – Opt out.',
            durations: [
              ['_fbp', '3 mesi'],
              ['lastExternalReferrer', 'durata della sessione'],
              ['lastExternalReferrerTime', 'durata della sessione'],
            ],
          },
        ],
      },
    ],
  },
];

const DEFINITIONS: { term: string; text: string }[] = [
  {
    term: 'Dati Personali (o Dati)',
    text: 'Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.',
  },
  {
    term: 'Dati di Utilizzo',
    text: "Sono le informazioni raccolte automaticamente attraverso daily (anche da applicazioni di parti terze integrate in daily), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall'Utente che si connette con daily, gli indirizzi in notazione URI (Uniform Resource Identifier), l'orario della richiesta, il metodo utilizzato nell'inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all'itinerario seguito all'interno dell'Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all'ambiente informatico dell'Utente.",
  },
  {
    term: 'Utente',
    text: "L'individuo che utilizza daily che, salvo ove diversamente specificato, coincide con l'Interessato.",
  },
  {
    term: 'Interessato',
    text: 'La persona fisica cui si riferiscono i Dati Personali.',
  },
  {
    term: 'Responsabile del Trattamento (o Responsabile)',
    text: 'La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.',
  },
  {
    term: 'Titolare del Trattamento (o Titolare)',
    text: 'La persona fisica o giuridica, l\u2019autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di daily. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di daily.',
  },
  {
    term: 'daily (o questa Applicazione)',
    text: 'Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.',
  },
  {
    term: 'Servizio',
    text: 'Il Servizio fornito da daily così come definito nei relativi termini (se presenti) su questo sito/applicazione.',
  },
  {
    term: 'Unione Europea (o UE)',
    text: 'Salvo ove diversamente specificato, ogni riferimento all\u2019Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell\u2019Unione Europea e dello Spazio Economico Europeo.',
  },
  {
    term: 'Cookie',
    text: "I Cookie sono Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all'interno del browser dell'Utente.",
  },
  {
    term: 'Strumento di Tracciamento',
    text: 'Per Strumento di Tracciamento s\u2019intende qualsiasi tecnologia - es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting - che consenta di tracciare gli Utenti, per esempio raccogliendo o salvando informazioni sul dispositivo dell\u2019Utente.',
  },
  {
    term: 'Riferimenti legali',
    text: 'Ove non diversamente specificato, questa policy riguarda esclusivamente daily.',
  },
];

function Accordion({ title, children }: { title: string; children: React.ReactNode; key?: React.Key }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-[#F0EFEB]/80 border border-[#2C2C2E]/10 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer hover:bg-[#f6c73b]/5 transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-bold font-sans text-[#2C2C2E]">{title}</span>
        <ChevronDown className={`w-4 h-4 shrink-0 text-[#2C2C2E] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-4 border-t border-[#2C2C2E]/10 space-y-3 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function ServiceContent({ service }: { service: Service }) {
  return (
    <>
      {service.body.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {service.dati && (
        <p>
          <span className="font-bold text-[#2C2C2E]">Dati Personali trattati:</span> {service.dati}
        </p>
      )}
      {service.luogo && (
        <p>
          <span className="font-bold text-[#2C2C2E]">Luogo del trattamento:</span> {service.luogo}
        </p>
      )}
      {service.durations && service.durations.length > 0 && (
        <div>
          <p className="font-bold text-[#2C2C2E]">Durata degli Strumenti di Tracciamento:</p>
          <ul className="list-disc pl-5 space-y-1 pt-1 text-[#2C2C2E]">
            {service.durations.map(([cookie, dur], i) => (
              <li key={i}>
                <span className="font-mono">{cookie}</span>: {dur}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default function StrumentiTracciamento() {
  return (
    <div className="p-8 sm:p-12 card-premium space-y-8 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
      <div className="space-y-2">
        <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">
          Come daily utilizza gli Strumenti di Tracciamento
        </h2>
        <p>Di seguito il dettaglio dei servizi e degli Strumenti di Tracciamento utilizzati. Apri ogni sezione per leggere le informazioni complete.</p>
      </div>

      {CATEGORIES.map((cat) => (
        <div key={cat.title} className="space-y-4">
          <h3 className="text-sm sm:text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">{cat.title}</h3>
          <p>{cat.intro}</p>
          {cat.groups.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="text-[11px] font-bold font-mono uppercase tracking-widest text-[#2C2C2E]/60">{group.title}</p>
              {group.services.map((service) => (
                <Accordion key={service.name} title={service.name}>
                  <ServiceContent service={service} />
                </Accordion>
              ))}
            </div>
          ))}
        </div>
      ))}

      {/* Definizioni e riferimenti legali */}
      <div className="space-y-4">
        <h3 className="text-sm sm:text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">Definizioni e riferimenti legali</h3>
        <div className="space-y-3">
          {DEFINITIONS.map((def) => (
            <Accordion key={def.term} title={def.term}>
              <p>{def.text}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}