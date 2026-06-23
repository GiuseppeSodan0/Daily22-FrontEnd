import React from 'react';
import {motion} from 'motion/react';
import {Link} from 'react-router-dom';
import {ArrowRight, ShieldCheck, Target, Eye, Users} from 'lucide-react';

const teamMembers = [
  {
    name: 'ILARIA LEONARDIS',
    role: 'CEO & Founder',
    bio: 'Ideatrice del progetto e guida strategica dell\'ecosistema daily. Coordina il team, la visione aziendale, le partnership e lo sviluppo di soluzioni innovative dedicate alla salute, alla sicurezza e alla prevenzione nei luoghi di lavoro.',
  },
  {
    name: 'RAFFAELE DE FILIPPIS',
    role: 'COO & CTO',
    bio: 'Coordina la strategia operativa e lo sviluppo tecnologico di daily. Supervisiona l\'infrastruttura software, l\'integrazione dei sensori, i processi digitali e la realizzazione di soluzioni tecnologiche scalabili.',
  },
  {
    name: 'LOREDANA CASTIGLIA',
    role: 'R&D Manager',
    bio: 'Coordina le attività di ricerca e sviluppo, contribuendo alla definizione dei modelli di prevenzione e dei contenuti tecnico-scientifici. Supervisiona l\'integrazione tra dati, dispositivi, normativa e modelli predittivi.',
  },
  {
    name: 'GIUSEPPE SODANO',
    role: 'Software Developer',
    bio: 'Si occupa dello sviluppo delle applicazioni, del gestionale e delle interfacce digitali di daily. Cura le integrazioni software e contribuisce all\'evoluzione tecnologica delle diverse soluzioni dell\'ecosistema.',
  },
  {
    name: 'PAOLO MIRABELLA',
    role: 'Marketing & Go-to-Market',
    bio: 'Supporta le attività di marketing, posizionamento e sviluppo commerciale di daily. Contribuisce alla definizione delle strategie go-to-market, alla valorizzazione dei prodotti e alla gestione dei social media.',
  },
  {
    name: 'SARA SAGNELLI',
    role: 'Supporto organizzativo',
    bio: 'Supporta la gestione quotidiana dell\'ufficio e il coordinamento delle attività organizzative e amministrative. Contribuisce alla continuità operativa del team e alla gestione dei principali flussi interni.',
  },
];

export default function ChiSiamo() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 select-none text-left" style={{background: 'linear-gradient(180deg, #faf8f5 0%, #f5f0e8 100%)'}}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.1}}
          className="space-y-12"
        >

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">Su di noi</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 font-sans" style={{color: 'var(--color-ink)'}}>Su di noi.</h2>
          </div>

          {/* Intro: daily nasce dall'esperienza */}
          <div className="p-8 rounded-3xl space-y-6 leading-relaxed" style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.06)', color: 'var(--color-ink-soft)'}}>
            <h3 className="text-xl sm:text-2xl font-bold" style={{color: 'var(--color-ink)'}}>daily nasce dall'esperienza reale nei luoghi di lavoro</h3>
            <p className="text-sm sm:text-base">
              <strong className="text-gray-900">daily</strong> è una startup innovativa nata dall'esperienza ventennale di <strong className="text-yellow-600">Ilaria Leonardis</strong> nel settore della salute e sicurezza sul lavoro.
            </p>
            <p className="text-sm sm:text-base">
              Anni di attività a stretto contatto con aziende, lavoratori e contesti operativi reali hanno mostrato con chiarezza un limite della sicurezza tradizionale: documenti, controlli e verifiche periodiche sono indispensabili, ma da soli non sempre riescono a intercettare un rischio mentre sta evolvendo.
            </p>
            <p className="text-sm sm:text-base">
              Con daily, Ilaria porta la prevenzione a un nuovo livello: non più soltanto adempimento normativo, ma <strong className="text-yellow-600">protezione intelligente, continua e predittiva delle persone.</strong>
            </p>
            <p className="text-sm sm:text-base">
              daily integra competenze HSE, sensoristica avanzata, Internet of Things e Intelligenza Artificiale per sviluppare soluzioni capaci di raccogliere dati, riconoscere segnali di rischio e supportare aziende e lavoratori nella prevenzione di infortuni, condizioni critiche e situazioni di pericolo.
            </p>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm font-semibold text-yellow-600 italic">
                La nostra visione parte da un principio semplice: la tecnologia deve aiutare a comprendere prima ciò che potrebbe accadere, per intervenire nel momento in cui la prevenzione può fare davvero la differenza.
              </p>
            </div>
          </div>

          {/* Mission + Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl space-y-4" style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.06)'}}>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-yellow-50 text-yellow-600 border border-yellow-200">
                  <Target className="w-5 h-5" />
                </span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-ink)'}}>La nostra mission</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{color: 'var(--color-ink-soft)'}}>
                Trasformare la sicurezza sul lavoro in un'esperienza quotidiana, reale, predittiva e partecipata, utilizzando tecnologia avanzata, formazione e analisi dei dati per costruire ambienti lavorativi più sani, protetti e consapevoli.
              </p>
              <p className="text-sm leading-relaxed" style={{color: 'var(--color-ink-soft)'}}>
                daily aiuta le aziende a superare una visione della sicurezza come semplice obbligo normativo, trasformandola in uno strumento concreto di prevenzione, crescita e miglioramento organizzativo.
              </p>
              <p className="text-sm leading-relaxed font-semibold" style={{color: 'var(--color-ink-soft)'}}>
                La nostra missione è proteggere le persone, migliorare i processi aziendali e rendere la prevenzione più comprensibile, misurabile e integrata nelle attività di ogni giorno.
              </p>
            </div>

            <div className="p-8 rounded-3xl space-y-4" style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.06)'}}>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-yellow-50 text-yellow-600 border border-yellow-200">
                  <Eye className="w-5 h-5" />
                </span>
                <h3 className="text-xl font-bold" style={{color: 'var(--color-ink)'}}>La nostra vision</h3>
              </div>
              <p className="text-sm leading-relaxed font-semibold" style={{color: 'var(--color-ink-soft)'}}>
                Rendere la sicurezza più umana, tecnologica e proattiva
              </p>
              <p className="text-sm leading-relaxed" style={{color: 'var(--color-ink-soft)'}}>
                daily porta la prevenzione a un nuovo livello: non più soltanto documenti, scadenze e verifiche periodiche, ma un sistema capace di leggere il rischio mentre evolve.
              </p>
              <p className="text-sm leading-relaxed" style={{color: 'var(--color-ink-soft)'}}>
                La sicurezza tradizionale fotografa il rischio in un momento preciso. daily vuole misurarlo, interpretarlo e prevenirlo nel tempo, integrando dati, tecnologia e conoscenza dei contesti operativi.
              </p>
              <div className="pt-2">
                <p className="text-sm font-semibold text-yellow-600 italic">
                  Prevenire significa intervenire prima, non spiegare dopo.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-yellow-50 text-yellow-600 border border-yellow-200">
                  <Users className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-sans" style={{color: 'var(--color-ink)'}}>Il nostro team</h3>
              <p className="mt-4 text-sm font-light" style={{color: 'var(--color-ink-soft)'}}>
                daily nasce dall'incontro tra esperienza HSE, competenze tecnologiche, ricerca, sviluppo software, organizzazione e strategia di mercato. Un team multidisciplinare che lavora con un obiettivo comune: trasformare la sicurezza in un sistema quotidiano di protezione delle persone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="p-8 rounded-3xl card-premium transition-all duration-300 text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 mx-auto mb-6 flex items-center justify-center border border-yellow-200">
                    <span className="text-3xl font-bold text-yellow-600">{member.name.charAt(0)}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-1" style={{color: 'var(--color-ink)'}}>{member.name}</h4>
                  <p className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-4 font-mono">{member.role}</p>
                  <p className="text-xs leading-relaxed" style={{color: 'var(--color-ink-soft)'}}>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="p-8 rounded-3xl text-center" style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.06)'}}>
            <h3 className="text-lg font-bold mb-4" style={{color: 'var(--color-ink)'}}>
              daily. L'istinto di proteggere, l'intelligenza per farlo.
            </h3>
            <p className="text-sm mb-6 max-w-xl mx-auto" style={{color: 'var(--color-ink-soft)'}}>
              Scopri come daily può supportare la tua azienda nella prevenzione dei rischi.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-yellow-600 hover:bg-yellow-500 transition-all"
            >
              Contattaci
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
