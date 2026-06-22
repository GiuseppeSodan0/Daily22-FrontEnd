import React from 'react';
import {motion} from 'motion/react';
import {Link} from 'react-router-dom';

const patentInfo = [
  {label: 'Tipologia', value: 'Brevetto per invenzione industriale'},
  {label: 'N. concessione', value: '102023000028365'},
  {label: 'Classificazione EPO', value: 'A61B (monitoraggio condizioni fisiche)'},
  {label: 'Data deposito', value: '29 dicembre 2023'},
  {label: 'Data concessione', value: '7 gennaio 2026'},
  {label: 'Titolare', value: 'Daily Practice 22 S.r.l. (100%)'},
];

export default function Brevetto() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 bg-gray-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.1}}
          className="space-y-8"
        >
          <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Il brevetto che protegge WIDIU</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Daily Practice 22 S.r.l. è titolare di un <strong className="text-gray-900">brevetto per invenzione industriale</strong> concesso dall'Ufficio Italiano Brevetti e Marchi (UIBM) in data <strong className="text-yellow-600">7 gennaio 2026</strong>.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Il brevetto, con numero di concessione <strong className="text-yellow-600">102023000028365</strong>, protegge il cuore tecnologico del sistema WIDIU: un <strong className="text-gray-900">bracciale dotato di un sistema di interconnessione ingegnerizzata per il monitoraggio della sicurezza della persona in relazione all'ambiente in cui si trova</strong>.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              L'invenzione copre l'architettura hardware e il principio di funzionamento del dispositivo indossabile che integra sensoristica biometrica e ambientale in un unico sistema intelligente, capace di rilevare parametri fisiologici e condizioni operative in tempo reale.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Il riconoscimento conferma l'unicità e l'originalità della soluzione sviluppata da Daily: un sistema che non si limita a raccogliere dati, ma li trasforma in <strong className="text-yellow-600">prevenzione attiva</strong> attraverso l'intelligenza artificiale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {patentInfo.map((item) => (
              <div key={item.label} className="p-6 rounded-2xl bg-white border border-gray-200 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">{item.label}</p>
                <p className="text-sm font-semibold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Il fondamento dell'ecosistema Daily</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Il brevetto rappresenta il fondamento su cui si costruisce l'intero ecosistema Daily. L'invenzione protetta è alla base del dispositivo <strong className="text-gray-900">WIDIU</strong> (Wearable Intelligent Device for Integrated Understanding), che alimenta con dati reali la piattaforma <strong className="text-gray-900">DailyPlatform</strong> e l'avatar conversazionale <strong className="text-gray-900">Salvatore</strong>.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              La classificazione internazionale <strong className="text-yellow-600">A61B</strong>, inserita dall'European Patent Office, colloca l'invenzione nell'ambito dei dispositivi per la diagnosi e il monitoraggio delle condizioni fisiche della persona — un posizionamento che riflette la missione di Daily: rendere la sicurezza sul lavoro <strong className="text-yellow-600">predittiva, personalizzata e digitale</strong>.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 text-center">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-yellow-600 hover:bg-yellow-500 transition-all"
            >
              Scopri le nostre soluzioni
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
