import React from 'react';
import {motion} from 'motion/react';
import {Link} from 'react-router-dom';

export default function Startup() {
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
            <div className="text-xs font-bold text-yellow-600 uppercase tracking-widest font-mono">Progetti / Agosto 4, 2025</div>
            
            <h2 className="text-xl font-bold text-gray-900">SISTEMA DI PREDIZIONE DEL RISCHIO PER GLI AMBIENTI DI LAVORO</h2>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-1">
              <p><strong className="text-gray-900">Finanziato dalla Regione Campania</strong> – Avviso "PR CAMPANIA FESR 2021-2027 – Asse I – Obiettivo Specifico 1.1 – Azione 1.1.3 – Avviso pubblico CAMPANIA STARTUP 2023"</p>
              <p><strong className="text-gray-900">CUP:</strong> B68I23005700007</p>
              <p><strong className="text-gray-900">Beneficiario:</strong> Daily Practice 22 Srl</p>
              <p><strong className="text-gray-900">Settore:</strong> Innovazione tecnologica per la sicurezza sul lavoro</p>
            </div>

            <h3 className="text-lg font-bold text-gray-900">Sintesi del progetto</h3>
            <p className="text-sm">
              "Daily Risk Prediction" è un progetto di innovazione tecnologica volto a prevenire i rischi nei luoghi di lavoro attraverso una piattaforma integrata che combina <strong className="text-gray-900">dispositivi wearable</strong>, <strong className="text-gray-900">sensori ambientali IoT</strong> e <strong className="text-gray-900">intelligenza artificiale</strong>. Il sistema monitora in tempo reale le condizioni fisiologiche degli operatori e i parametri ambientali del contesto operativo, segnalando in modo proattivo potenziali situazioni di pericolo.
            </p>

            <h3 className="text-lg font-bold text-gray-900">Finalità e obiettivi</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-500">
              <li>Migliorare la prevenzione dei rischi nei luoghi di lavoro</li>
              <li>Fornire strumenti avanzati di monitoraggio in tempo reale</li>
              <li>Realizzare un modello predittivo basato su intelligenza artificiale</li>
              <li>Offrire alle aziende una dashboard unificata per la gestione della sicurezza</li>
              <li>Favorire l'integrazione delle tecnologie nella cultura aziendale della sicurezza</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900">Risultati attesi e raggiunti</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-500">
              <li>Realizzazione di un bracciale wearable proprietario</li>
              <li>Sviluppo della piattaforma IoT per la gestione dei dati biometrici e ambientali</li>
              <li>Integrazione del sistema per la gestione dei profili aziendali e dei lavoratori</li>
              <li>Implementazione di algoritmi di intelligenza artificiale per la valutazione del rischio</li>
              <li>Attivazione di sperimentazioni in contesti reali aziendali</li>
            </ul>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Il presente progetto è finanziato con il supporto della <strong className="text-gray-900">Regione Campania</strong> a valere sul Programma <strong className="text-gray-900">PR CAMPANIA FESR 2021-2027 – Azione 1.1.3 – Campania Startup 2023</strong>.
              </p>
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
