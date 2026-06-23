import React from 'react';
import {motion} from 'motion/react';
import {ShieldCheck} from 'lucide-react';
import {Link} from 'react-router-dom';

const services = [
  {
    title: 'Sicurezza sul lavoro',
    items: [
      'Consulenza HSE e valutazione dei rischi',
      'Sicurezza predittiva e KPI dinamici',
      'Formazione obbligatoria e specialistica',
      'Benessere lavorativo e performance sicura',
    ],
  },
  {
    title: 'Sistemi e tecnologie',
    items: [
      'Sistemi di gestione e certificazioni',
      'Formazione immersiva VR, AR e MR',
      'Tecnologia, software e dashboard',
      'Ricerca, sviluppo e progetti finanziati',
    ],
  },
];

export default function DailySafetyLab() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32" style={{background: 'linear-gradient(180deg, #faf8f5 0%, #f5f0e8 100%)'}}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.1}}
          className="space-y-8"
        >
          <div className="p-8 rounded-3xl space-y-6" style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.06)'}}>
            <h2 className="text-xl sm:text-2xl font-bold" style={{color: 'var(--color-ink)'}}>Consulenza HSE, sicurezza sul lavoro, ambiente e compliance per aziende e strutture sanitarie</h2>
            <p className="text-sm leading-relaxed" style={{color: 'var(--color-ink-soft)'}}>
              Daily Safety Lab Srl è una società specializzata in <strong style={{color: 'var(--color-ink)'}}>sicurezza sul lavoro, consulenza HSE, formazione, qualità, ambiente e compliance aziendale</strong>. Supportiamo imprese, organizzazioni e strutture sanitarie nella gestione degli adempimenti normativi, nella valutazione dei rischi e nello sviluppo di sistemi organizzativi più sicuri, efficienti e sostenibili.
            </p>
            <p className="text-sm leading-relaxed" style={{color: 'var(--color-ink-soft)'}}>
              Il nostro obiettivo è offrire un servizio integrato, concreto e personalizzato, capace di accompagnare ogni cliente dalla consulenza tecnica alla formazione, dalla gestione documentale agli audit, fino al monitoraggio degli ambienti di lavoro e al miglioramento continuo dei processi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl space-y-4" style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.06)'}}>
              <h3 className="text-lg font-bold text-yellow-600">La nostra mission</h3>
              <p className="text-sm leading-relaxed" style={{color: 'var(--color-ink-soft)'}}>
                Trasformare la sicurezza sul lavoro in un'esperienza quotidiana, reale, predittiva e partecipata, utilizzando tecnologia avanzata, formazione immersiva e dati biometrici per costruire ambienti lavorativi più sani, protetti e consapevoli.
              </p>
            </div>
            <div className="p-8 rounded-3xl space-y-4" style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.06)'}}>
              <h3 className="text-lg font-bold text-yellow-600">La nostra Vision</h3>
              <p className="text-sm leading-relaxed" style={{color: 'var(--color-ink-soft)'}}>
                Diventare il punto di riferimento in Italia per una nuova cultura della sicurezza sul lavoro, basata su dati, persone e innovazione continua, superando il modello tradizionale della sicurezza come adempimento formale.
              </p>
            </div>
          </div>

          {services.map((group) => (
            <div key={group.title} className="p-8 rounded-3xl space-y-6" style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.06)'}}>
              <h3 className="text-lg font-bold" style={{color: 'var(--color-ink)'}}>{group.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item) => (
                  <div key={item} className="p-4 rounded-xl border border-amber-200/40 hover:border-amber-400/50 transition-colors" style={{background: '#fdfaf5'}}>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                      <span className="text-sm" style={{color: 'var(--color-ink-soft)'}}>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="p-8 rounded-3xl text-center" style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.06)'}}>
            <h3 className="text-lg font-bold mb-4" style={{color: 'var(--color-ink)'}}>Richiedi una consulenza personalizzata</h3>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-yellow-600 hover:bg-yellow-500 transition-all"
            >
              Contattaci
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
