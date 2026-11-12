import type {Language} from '../i18n/translations';
import {englishCopy, englishGroupTitles, englishQuestions} from './content.en';

export const faqPath = '/faq';

const italianCopy = {
  heading: 'Domande frequenti su daily',
  title: 'FAQ daily | Sicurezza, AI, IoT e dailyplatform',
  description: 'Risposte alle domande su daily e la sicurezza sul lavoro: come funzionano dailyplatform, Salvatore, WIDIU e Vera e come si usano Intelligenza Artificiale e IoT.',
  intro: 'Qui trovi le risposte alle domande sull’ecosistema daily per la sicurezza sul lavoro. Scopri come funzionano dailyplatform e i servizi collegati, e come usano Intelligenza Artificiale, IoT e sensori per supportare la prevenzione.',
  contactHeading: 'Non hai trovato la risposta che cercavi?',
  contactText: 'Scrivici per un chiarimento sui servizi o per parlarci delle esigenze della tua azienda.',
  contactLabel: 'Contatta daily',
  logoAlt: 'Logo daily',
  locale: 'it-IT',
};

export function isFaqPage(pathname: string) {
  return pathname.replace(/\/$/, '') === faqPath;
}

type AnswerPart = string | {label: string; to: string};

export interface FaqItem {
  id: string;
  question: string;
  answer: readonly AnswerPart[];
}

interface FaqGroup {
  id: string;
  title: string;
  questions: readonly FaqItem[];
}

const italianGroups = [
  {
    id: 'ecosistema',
    title: 'daily e l’ecosistema',
    questions: [
      {
        id: 'cos-e-daily',
        question: 'Che cos’è daily?',
        answer: [
          'daily sviluppa tecnologie e servizi per la prevenzione e la sicurezza sul lavoro. Integra Intelligenza Artificiale, IoT, sensori e competenze HSE, cioè di salute, sicurezza e ambiente, per aiutare aziende e lavoratori a riconoscere i segnali di rischio e gestire la prevenzione nel lavoro quotidiano.',
        ],
      },
      {
        id: 'come-funziona-ecosistema',
        question: 'Come funziona l’ecosistema daily?',
        answer: [
          'dailyplatform riunisce dati, documenti e attività di sicurezza in un unico ambiente. WIDIU rileva segnali sul campo e Vera organizza i dati dei dispositivi connessi. Salvatore aiuta a consultare procedure e contenuti formativi, mentre le app dailybydaily supportano attività specifiche come checklist e questionari. La ',
          {label: 'panoramica dei servizi daily', to: '/servizi'},
          ' descrive il ruolo delle singole soluzioni.',
        ],
      },
      {
        id: 'consulenza-formazione',
        question: 'daily offre anche consulenza e formazione sulla sicurezza?',
        answer: [
          'Sì. ',
          {label: 'Daily Safety Lab', to: '/daily-safety-lab'},
          ' è la divisione di daily dedicata alla consulenza HSE e alla formazione. Si occupa anche di valutazione dei rischi e sistemi di gestione, affiancando le aziende nel lavoro operativo sulla prevenzione.',
        ],
      },
    ],
  },
  {
    id: 'piattaforma',
    title: 'dailyplatform',
    questions: [
      {
        id: 'cos-e-dailyplatform',
        question: 'Che cos’è dailyplatform?',
        answer: [
          {label: 'dailyplatform', to: '/dailyplatform'},
          ' è la piattaforma digitale di daily per la gestione della sicurezza sul lavoro. Centralizza dati aziendali, documenti, scadenze, indicatori e attività operative. Può integrare anche le rilevazioni di sensori e dispositivi indossabili, così chi si occupa di prevenzione può consultarle insieme alle altre informazioni aziendali.',
        ],
      },
      {
        id: 'destinatari-dailyplatform',
        question: 'A chi è rivolta dailyplatform?',
        answer: [
          'dailyplatform è rivolta a chi coordina o segue la sicurezza in azienda, tra cui datori di lavoro, RSPP, HSE Manager, preposti, responsabili di stabilimento e consulenti. La piattaforma è pensata anche per organizzazioni che gestiscono la prevenzione tra più sedi o cantieri.',
        ],
      },
      {
        id: 'documentazione-hse',
        question: 'Quali documenti della sicurezza si possono gestire con dailyplatform?',
        answer: [
          'dailyplatform consente di centralizzare il Documento di Valutazione dei Rischi (DVR), i piani operativi di sicurezza (POS), il documento sui rischi da interferenze (DUVRI), le procedure operative e le schede di sicurezza. La piattaforma permette di associare ai documenti evidenze e informazioni raccolte durante le attività sul campo.',
        ],
      },
      {
        id: 'scadenze-hse',
        question: 'Come si tengono sotto controllo le scadenze della sicurezza?',
        answer: [
          'Lo scadenziario di dailyplatform tiene traccia delle scadenze formative e sanitarie, come la validità degli attestati di formazione e le scadenze della sorveglianza sanitaria. Chi segue questi adempimenti può consultarli insieme ai dati aziendali e agli indicatori di sicurezza.',
        ],
      },
    ],
  },
  {
    id: 'intelligenza-artificiale',
    title: 'Intelligenza Artificiale e Salvatore',
    questions: [
      {
        id: 'daily-ia',
        question: 'A cosa serve daily IA?',
        answer: [
          'daily IA è la componente di Intelligenza Artificiale HSE presentata in ',
          {label: 'dailyplatform', to: '/dailyplatform'},
          '. Aiuta a sintetizzare documenti, esaminare contenuti normativi e raccogliere informazioni utili alle decisioni sulla sicurezza sul lavoro.',
        ],
      },
      {
        id: 'cos-e-salvatore',
        question: 'Che cos’è Salvatore?',
        answer: [
          {label: 'Salvatore', to: '/salvatore'},
          ' è l’AI Agent governato di daily per la sicurezza sul lavoro. Attraverso domande in linguaggio naturale, aiuta lavoratori, aziende e figure della prevenzione a comprendere rischi, istruzioni, comportamenti sicuri e contenuti formativi.',
        ],
      },
      {
        id: 'procedure-aziendali',
        question: 'Salvatore può aiutarmi a consultare una procedura aziendale?',
        answer: [
          'Sì. Salvatore supporta la consultazione delle procedure e dei documenti aziendali caricati su dailyplatform, come DVR, POS e DUVRI. L’AI Agent aiuta a orientarsi nei contenuti e a comprendere le istruzioni rilevanti per l’attività.',
        ],
      },
      {
        id: 'responsabilita-prevenzione',
        question: 'Che ruolo hanno i professionisti HSE quando si usa Salvatore?',
        answer: [
          'Le figure competenti della prevenzione mantengono la responsabilità delle valutazioni e delle decisioni sulla sicurezza. Salvatore le affianca rendendo più semplice consultare procedure, istruzioni operative e contenuti formativi.',
        ],
      },
    ],
  },
  {
    id: 'sensoristica',
    title: 'WIDIU e sensoristica',
    questions: [
      {
        id: 'cos-e-widiu',
        question: 'Che cos’è WIDIU?',
        answer: [
          {label: 'WIDIU', to: '/widiu'},
          ' è lo smartwatch di daily pensato per la prevenzione dei rischi sul lavoro. Si indossa al polso e raccoglie parametri biometrici, di movimento e ambientali. I dati possono essere integrati in dailyplatform per il monitoraggio della sicurezza.',
        ],
      },
      {
        id: 'dati-widiu',
        question: 'Quali dati rileva WIDIU?',
        answer: [
          'WIDIU rileva parametri come frequenza cardiaca, temperatura cutanea, accelerazioni, postura e condizioni microclimatiche. Le rilevazioni aiutano a osservare variazioni nelle condizioni di lavoro. La stima dell’affaticamento è un’elaborazione dei segnali raccolti.',
        ],
      },
    ],
  },
  {
    id: 'iot',
    title: 'Vera e IoT',
    questions: [
      {
        id: 'cos-e-vera',
        question: 'Che cos’è Vera?',
        answer: [
          {label: 'Vera', to: '/vera'},
          ' è il software gateway IoT di daily. Acquisisce e normalizza i flussi provenienti da sensori, dispositivi indossabili e macchinari connessi. In questo modo rende i segnali disponibili a dailyplatform, alle dashboard di monitoraggio e ai sistemi di analisi.',
        ],
      },
      {
        id: 'sensori-dailyplatform',
        question: 'Come arrivano i dati dei sensori a dailyplatform?',
        answer: [
          'Vera raccoglie le misurazioni dei dispositivi connessi, organizza i diversi formati e trasmette i dati alla piattaforma. dailyplatform può così integrare le rilevazioni ambientali di un cantiere o di uno stabilimento con altre informazioni sulla sicurezza, come mansioni, fattori di rischio e attività operative.',
        ],
      },
    ],
  },
  {
    id: 'app',
    title: 'dailybydaily',
    questions: [
      {
        id: 'cos-e-dailybydaily',
        question: 'Che cos’è dailybydaily?',
        answer: [
          'dailybydaily è l’insieme delle applicazioni di daily dedicate a specifiche attività di sicurezza, compliance, benessere e prevenzione. A seconda dell’app, le attività includono checklist operative, questionari, segnalazioni e consultazione di contenuti. Le ',
          {label: 'app dell’ecosistema dailybydaily', to: '/servizi'},
          ' sono presentate nella pagina dei servizi.',
        ],
      },
      {
        id: 'app-compliance',
        question: 'Quale app di daily aiuta a gestire gli adempimenti?',
        answer: [
          'daily4compliance è l’app di dailybydaily che aiuta aziende e consulenti a orientarsi tra adempimenti, requisiti e scadenze. Propone percorsi guidati per settore e attività e supporta la gestione di checklist, documenti, attività e verifiche.',
        ],
      },
    ],
  },
  {
    id: 'prevenzione',
    title: 'Prevenzione, dati e supporto',
    questions: [
      {
        id: 'dati-per-prevenzione',
        question: 'Come usa daily i dati per supportare la prevenzione?',
        answer: [
          'dailyplatform mette in relazione le rilevazioni sul campo con le mansioni e i fattori di rischio aziendali. Dashboard, indicatori e avvisi aiutano chi si occupa di sicurezza a individuare variazioni nelle condizioni di lavoro, stabilire le priorità e seguire le azioni di prevenzione.',
        ],
      },
      {
        id: 'informazioni-privacy',
        question: 'Dove trovo le informazioni sul trattamento dei dati personali?',
        answer: [
          'daily pubblica le informazioni sul trattamento dei dati personali e sui diritti degli interessati nell’',
          {label: 'informativa sulla privacy', to: '/privacy-policy'},
          '. Per chiarimenti su una soluzione o su un contesto aziendale specifico, puoi rivolgerti al team daily.',
        ],
      },
      {
        id: 'informazioni-commerciali',
        question: 'Come posso valutare quale soluzione daily è adatta alla mia azienda?',
        answer: [
          'Puoi descrivere le esigenze della tua azienda al team daily tramite il ',
          {label: 'modulo contatti', to: '/contatti'},
          '. Se vuoi approfondire dailyplatform, puoi consultare anche i ',
          {label: 'piani presentati nella pagina della piattaforma', to: '/dailyplatform'},
          '.',
        ],
      },
    ],
  },
] as const satisfies readonly FaqGroup[];

export type FaqGroupId = (typeof italianGroups)[number]['id'];
export type FaqItemId = (typeof italianGroups)[number]['questions'][number]['id'];

const englishGroups = italianGroups.map(({id, questions}) => ({
  id,
  title: englishGroupTitles[id],
  questions: questions.map(({id}) => ({id, ...englishQuestions[id]})),
}));

export const faqContent: Record<Language, typeof italianCopy & {groups: readonly FaqGroup[]}> = {
  it: {...italianCopy, groups: italianGroups},
  en: {...englishCopy, groups: englishGroups},
};
