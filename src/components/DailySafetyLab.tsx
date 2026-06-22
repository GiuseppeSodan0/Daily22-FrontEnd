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
    <section className="relative overflow-hidden pt-24 pb-32 bg-gray-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.1}}
          className="space-y-8"
        >
          <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Consulenza HSE, sicurezza sul lavoro, ambiente e compliance per aziende e strutture sanitarie</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Daily Safety Lab Srl è una società specializzata in <strong className="text-gray-900">sicurezza sul lavoro, consulenza HSE, formazione, qualità, ambiente e compliance aziendale</strong>. Supportiamo imprese, organizzazioni e strutture sanitarie nella gestione degli adempimenti normativi, nella valutazione dei rischi e nello sviluppo di sistemi organizzativi più sicuri, efficienti e sostenibili.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Il nostro obiettivo è offrire un servizio integrato, concreto e personalizzato, capace di accompagnare ogni cliente dalla consulenza tecnica alla formazione, dalla gestione documentale agli audit, fino al monitoraggio degli ambienti di lavoro e al miglioramento continuo dei processi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-4">
              <h3 className="text-lg font-bold text-yellow-600">La nostra mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trasformare la sicurezza sul lavoro in un'esperienza quotidiana, reale, predittiva e partecipata, utilizzando tecnologia avanzata, formazione immersiva e dati biometrici per costruire ambienti lavorativi più sani, protetti e consapevoli.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-4">
              <h3 className="text-lg font-bold text-yellow-600">La nostra Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Diventare il punto di riferimento in Italia per una nuova cultura della sicurezza sul lavoro, basata su dati, persone e innovazione continua, superando il modello tradizionale della sicurezza come adempimento formale.
              </p>
            </div>
          </div>

          {services.map((group) => (
            <div key={group.title} className="p-8 rounded-3xl bg-white border border-gray-200 space-y-6">
              <h3 className="text-lg font-bold text-gray-900">{group.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item) => (
                  <div key={item} className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 transition-colors">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Un team multidisciplinare al servizio delle imprese</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Daily Safety Lab si avvale di professionisti con competenze integrate in materia di sicurezza sul lavoro, ambiente, formazione, qualità, igiene industriale, prevenzione e medicina del lavoro. Il team comprende consulenti HSE, tecnici della prevenzione, docenti qualificati, valutatori di sistemi di gestione, esperti di organizzazione aziendale, igienisti industriali e medici competenti.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Perché scegliere Daily Safety Lab</h3>
            <p className="text-sm text-gray-500 mb-6 max-w-xl mx-auto">
              Scegliere Daily Safety Lab significa affidarsi a un partner competente per la gestione integrata di sicurezza, ambiente, formazione e compliance.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-yellow-600 hover:bg-yellow-500 transition-all"
            >
              Contattaci per una consulenza personalizzata
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
