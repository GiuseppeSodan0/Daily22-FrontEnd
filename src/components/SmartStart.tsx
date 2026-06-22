import React from 'react';
import {motion} from 'motion/react';
import {Link} from 'react-router-dom';

export default function SmartStart() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 bg-gray-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.1}}
          className="space-y-6"
        >
          <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-6 text-gray-600 leading-relaxed">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-1">
              <p><strong className="text-gray-900">DAILY PRACTICE 22</strong></p>
              <p>PROGETTO FINANZIATO CON LE AGEVOLAZIONI PREVISTE DAL DECRETO 24 SETTEMBRE 2014 – SMART & START ITALIA</p>
              <p><strong className="text-gray-900">CUP:</strong> C26I24002540008</p>
            </div>

            <p className="text-sm">
              Il progetto <strong className="text-gray-900">DAILY PRACTICE 22</strong>, realizzato con il sostegno della misura nazionale Smart & Start Italia, rappresenta un'iniziativa ad alto contenuto tecnologico finalizzata allo sviluppo di soluzioni innovative per la prevenzione dei rischi nei luoghi di lavoro.
            </p>

            <p className="text-sm">
              <strong className="text-gray-900">Daily</strong> è un sistema integrato per il monitoraggio e la gestione predittiva della sicurezza, sviluppato da Daily Practice 22 S.r.l., startup innovativa operante nei settori della salute e sicurezza sul lavoro, dell'Internet of Things (IoT) e dell'Intelligenza Artificiale applicata alla prevenzione.
            </p>

            <p className="text-sm">
              Il sistema combina dispositivi indossabili intelligenti, sensoristica ambientale IoT e una piattaforma digitale avanzata in grado di raccogliere, integrare e analizzare in tempo reale dati fisiologici e ambientali. Attraverso modelli di Intelligenza Artificiale, il progetto consente l'identificazione anticipata di situazioni potenzialmente pericolose e l'attivazione di alert multilivello a supporto di lavoratori, datori di lavoro e responsabili della sicurezza.
            </p>

            <h3 className="text-lg font-bold text-gray-900">Funzionalità principali</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-500">
              <li>Monitoraggio continuo dei parametri psicofisiologici del lavoratore</li>
              <li>Rilevazione dei fattori di rischio ambientale</li>
              <li>Analisi integrata dei dati tramite algoritmi predittivi</li>
              <li>Generazione di segnalazioni intelligenti e protocolli di prevenzione</li>
              <li>Supporto decisionale per la riduzione degli infortuni e delle malattie professionali</li>
            </ul>

            <p className="text-xs text-gray-500">
              Il progetto contribuisce allo sviluppo dell'innovazione tecnologica nazionale, promuovendo la digitalizzazione dei processi di sicurezza e la diffusione di una cultura della prevenzione fondata su dati, responsabilità e tutela della vita umana.
            </p>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs">
              <p><strong className="text-gray-900">Agevolazione concessa ai sensi del Decreto 24 settembre 2014 – Smart & Start Italia – CUP: C26I24002540008</strong></p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Richiedi una consulenza personalizzata.</h3>
            <p className="text-sm text-gray-500 mb-6">Chiamaci oggi al +39 320 603 3483</p>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-yellow-600 hover:bg-yellow-500 transition-all"
            >
              Richiedi un preventivo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
