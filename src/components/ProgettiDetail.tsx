import React, {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {ShieldCheck, Cpu, MessageSquare, CheckCircle, HardHat, Globe} from 'lucide-react';

export default function ProgettiDetail() {
  const [selectedSubproject, setSelectedSubproject] = useState<'compliance' | 'child' | 'woman' | 'territorio'>('compliance');

  const mainProjects = [
    {
      id: 'dailyplatform',
      title: 'Dailyplatform',
      badge: 'Piattaforma IA',
      tagline: 'La piattaforma intelligente per la sicurezza del futuro',
      description: 'Dailyplatform è una piattaforma integrata, conversazionale e dotata di intelligenza artificiale, progettata per analizzare, gestire e correlare dati biometrici, ambientali e organizzativi provenienti dal sistema WIDIU e dalle strutture aziendali.',
      icon: ShieldCheck,
      color: 'text-yellow-600 bg-yellow-50 border-yellow-200',
      details: [
        'Raccoglie e integra dati biometrici, ambientali e contestuali in tempo reale',
        'Analizza e interpreta le informazioni con modelli di intelligenza artificiale e machine learning',
        'Genera modelli predittivi di rischio e allert automatici su base individuale o collettiva',
        'Digitalizza le informazioni di sicurezza aziendale: DVR, ruoli, DPI, procedure, formazione',
        'Dialoga con l\'avatar Salvatore per supporto conversazionale e formazione continua',
      ],
    },
    {
      id: 'widiu',
      title: 'WIDIU',
      badge: 'Sistema Indossabile',
      tagline: 'Il sistema indossabile intelligente per la sicurezza e il benessere',
      description: 'WIDIU (Wearable Intelligent Device for Integrated Understanding) è un sistema indossabile intelligente che integra sensoristica biometrica e ambientale per monitorare in tempo reale le condizioni psicofisiologiche e operative dei lavoratori.',
      icon: Cpu,
      color: 'text-yellow-600 bg-yellow-50 border-yellow-200',
      details: [
        'Rileva parametri biometrici: frequenza cardiaca, HRV, temperatura, stress, postura',
        'Analizza dati ambientali: temperatura, umidità, rumore, vibrazioni, illuminazione',
        'Invia i dati in tempo reale a DailyPlatform per elaborazione e correlazione',
        'Genera allert immediati in caso di condizioni critiche',
        'Opera anche in modalità Edge AI, senza necessità di connessione',
      ],
    },
    {
      id: 'salvatore',
      title: 'SALVATORE',
      badge: 'Avatar Conversazionale',
      tagline: 'L\'avatar conversazionale che rende la sicurezza un dialogo accessibile',
      description: 'Salvatore è l\'avatar conversazionale intelligente sviluppato da Daily per portare la cultura della sicurezza sul lavoro in una nuova dimensione: interattiva, empatica e digitale.',
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

  const subprojects: Record<string, {title: string; description: string; features: string[]}> = {
    compliance: {
      title: 'daily 4 Compliance',
      description: 'Il progetto daily dedicato alla gestione completa della conformità aziendale: sicurezza sul lavoro, ambiente, qualità, privacy, Modelli 231, procedure, documenti, scadenze e responsabilità. L\'obiettivo è aiutare ogni azienda a capire con chiarezza quali obblighi deve rispettare e quali azioni deve mettere in campo per mantenere un sistema organizzato e verificabile.',
      features: [
        'Gestione documentale e scadenze normate',
        'Monitoraggio continuo della compliance aziendale',
        'Supporto ai Modelli di Organizzazione ex D.Lgs. 231/2001',
        'Audit interni e tracciabilità delle decisioni',
      ],
    },
    child: {
      title: 'daily 4 Child',
      description: 'Daily 4 Child è un progetto dedicato alla tutela del benessere psicofisico dei minori, con particolare attenzione agli effetti dell\'uso eccessivo di smartphone, social e videogiochi. Attraverso monitoraggio, dati comportamentali e strumenti digitali, il progetto mira a supportare famiglie, scuole e professionisti nella prevenzione precoce di stress, alterazioni del sonno, postura scorretta e dipendenze digitali.',
      features: [
        'Monitoraggio comportamentale per la prevenzione',
        'Supporto a famiglie, scuole e professionisti',
        'Strumenti digitali per la prevenzione precoce',
        'Analisi dello stress e alterazioni del sonno',
      ],
    },
    woman: {
      title: 'daily 4 Woman',
      description: 'Daily 4 Woman è un progetto pensato per proteggere e valorizzare la salute, la sicurezza e il benessere delle donne nei diversi contesti di vita e di lavoro. L\'obiettivo è creare strumenti di prevenzione, monitoraggio e supporto personalizzato, con particolare attenzione a stress, carichi fisici e mentali, conciliazione vita-lavoro, fragilità e situazioni di rischio.',
      features: [
        'Prevenzione e monitoraggio personalizzato',
        'Supporto alla conciliazione vita-lavoro',
        'Attenzione a stress e carichi mentali',
        'Strumenti per la salute e sicurezza femminile',
      ],
    },
    territorio: {
      title: 'WIDIU per il territorio',
      description: 'I cambiamenti climatici, il rischio sismico, il bradisismo, gli incendi, le alluvioni e le emergenze ambientali rendono sempre più importante dotarsi di strumenti innovativi per la prevenzione. Per questo Daily 22 ha sviluppato WIDIU, un ecosistema tecnologico integrato che unisce dispositivi indossabili, sensoristica ambientale, piattaforme digitali e intelligenza artificiale per la tutela delle persone e dei territori.',
      features: [
        'Monitoraggio ambientale e territoriale continuo',
        'Supporto alla pianificazione delle emergenze',
        'Coordinamento tra enti e organizzazioni territoriali',
        'Dalla Smart City alla Smart Community',
      ],
    },
  };

  return (
    <div className="py-24 bg-gray-50 select-none text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">Progetti</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 font-sans">Progetti.</h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            Un'architettura sinergica dove ciascun modulo dialoga costantemente con gli altri per creare una rete di protezione ininterrotta e digitale intorno al lavoratore.
          </p>
        </div>

        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {mainProjects.map((p) => (
            <div
              key={p.id}
              className="flex flex-col h-full rounded-3xl bg-white hover:bg-gray-50 border border-gray-200 hover:border-yellow-400 transition-all duration-300 p-6 md:p-8 shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-yellow-600">
                  {p.badge}
                </span>
                <span className={`p-2.5 rounded-xl border ${p.color}`}>
                  <p.icon className="w-5 h-5 stroke-[2]" />
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-xs text-gray-500 mb-4 italic leading-snug">{p.tagline}</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-light">{p.description}</p>

              <div className="space-y-3 pt-6 mt-auto border-t border-gray-200">
                {p.details.map((d, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle className="w-3.5 h-3.5 text-yellow-600 shrink-0 mt-0.5" />
                    <span className="font-light">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Subprojects */}
        <div className="p-1 border border-gray-200 rounded-3xl bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">Specializzazioni Dedicate</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 font-sans">I Progetti Verticali Daily</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 font-light">
                  Soluzioni modellate per tutele ed ambiti di sicurezza molto specifici.
                </p>

                <div className="flex flex-wrap gap-2 my-8 border-b border-gray-200 pb-6">
                  {Object.keys(subprojects).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedSubproject(key as typeof selectedSubproject)}
                      className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        selectedSubproject === key
                          ? 'bg-yellow-600 text-white font-semibold'
                          : 'text-gray-500 hover:text-gray-900 bg-white border border-gray-200'
                      }`}
                    >
                      {subprojects[key].title}
                    </button>
                  ))}
                </div>

                <div className="min-h-[160px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedSubproject}
                      initial={{opacity: 0, x: 8}}
                      animate={{opacity: 1, x: 0}}
                      exit={{opacity: 0, x: -8}}
                      transition={{duration: 0.2}}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-bold text-gray-900">{subprojects[selectedSubproject].title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                        {subprojects[selectedSubproject].description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {subprojects[selectedSubproject].features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle className="w-4 h-4 text-yellow-600 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full rounded-2xl overflow-hidden self-stretch">
              <img
                src="/src/assets/images/supervisor_iot_1780517606283.png"
                alt="Supervisor checking high-tech telemetry"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-gray-900/60 backdrop-blur border border-white/10">
                <div className="flex items-center gap-2">
                  <HardHat className="w-4 h-4 text-yellow-400 animate-pulse" />
                  <span className="text-[9px] font-mono tracking-widest text-yellow-400 uppercase font-black">SUPERVISIONE INTELLIGENTE</span>
                </div>
                <p className="text-[11px] text-white font-medium mt-1">
                  I sensori verificano il corretto accoppiamento degli elmetti tramite RFID.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* WIDIU per il territorio extra section */}
        <div className="mt-8 p-8 rounded-3xl bg-white border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-yellow-600" />
            <h3 className="text-xl font-bold text-gray-900">Dalla Smart City alla Smart Community</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            L'obiettivo non è soltanto raccogliere dati, ma costruire un ecosistema capace di supportare le comunità locali. Immaginiamo città e territori in cui le scuole, le strutture sanitarie, le amministrazioni locali e la Protezione Civile possano integrare nuove fonti informative a supporto delle proprie attività.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Scuole connesse e sicure',
              'Strutture sanitarie preparate',
              'Dashboard territoriali',
              'Prevenzione partecipata',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-gray-600 p-3 rounded-xl bg-gray-50 border border-gray-200">
                <CheckCircle className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
