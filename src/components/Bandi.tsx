import React from 'react';
import {motion} from 'motion/react';
import {Link} from 'react-router-dom';

export default function Bandi() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32" style={{background: 'linear-gradient(180deg, #faf8f5 0%, #f5f0e8 100%)'}}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.1}}
          className="space-y-8"
        >

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">Bandi</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 font-sans" style={{color: 'var(--color-ink)'}}>Bandi e Progetti Finanziati.</h2>
            <p className="mt-4 text-sm font-light leading-relaxed" style={{color: 'var(--color-ink-soft)'}}>
              Daily partecipa a programmi di finanziamento regionali e nazionali per lo sviluppo di soluzioni innovative per la sicurezza sul lavoro.
            </p>
          </div>

          {/* Campania Startup 2023 */}
          <div className="p-8 rounded-3xl space-y-6 leading-relaxed" style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.06)', color: 'var(--color-ink-soft)'}}>
            <div className="text-xs font-bold text-yellow-600 uppercase tracking-widest font-mono">Progetti / Agosto 4, 2025</div>
            
            <h3 className="text-xl font-bold" style={{color: 'var(--color-ink)'}}>SISTEMA DI PREDIZIONE DEL RISCHIO PER GLI AMBIENTI DI LAVORO</h3>

            <div className="p-4 rounded-xl text-xs space-y-1" style={{background: '#fdfaf5', border: '1px solid rgba(0,0,0,0.05)'}}>
              <p><strong style={{color: 'var(--color-ink)'}}>Finanziato dalla Regione Campania</strong> – Avviso "PR CAMPANIA FESR 2021-2027 – Asse I – Obiettivo Specifico 1.1 – Azione 1.1.3 – Avviso pubblico CAMPANIA STARTUP 2023"</p>
              <p><strong style={{color: 'var(--color-ink)'}}>CUP:</strong> B68I23005700007</p>
              <p><strong style={{color: 'var(--color-ink)'}}>Beneficiario:</strong> Daily Practice 22 Srl</p>
              <p><strong style={{color: 'var(--color-ink)'}}>Settore:</strong> Innovazione tecnologica per la sicurezza sul lavoro</p>
            </div>

            <h4 className="text-lg font-bold" style={{color: 'var(--color-ink)'}}>Sintesi del progetto</h4>
            <p className="text-sm">
              "Daily Risk Prediction" è un progetto di innovazione tecnologica volto a prevenire i rischi nei luoghi di lavoro attraverso una piattaforma integrata che combina <strong style={{color: 'var(--color-ink)'}}>dispositivi wearable</strong>, <strong style={{color: 'var(--color-ink)'}}>sensori ambientali IoT</strong> e <strong style={{color: 'var(--color-ink)'}}>intelligenza artificiale</strong>. Il sistema monitora in tempo reale le condizioni fisiologiche degli operatori e i parametri ambientali del contesto operativo, segnalando in modo proattivo potenziali situazioni di pericolo.
            </p>

            <h4 className="text-lg font-bold" style={{color: 'var(--color-ink)'}}>Finalità e obiettivi</h4>
            <ul className="list-disc list-inside text-sm space-y-1" style={{color: 'var(--color-ink-soft)'}}>
              <li>Migliorare la prevenzione dei rischi nei luoghi di lavoro</li>
              <li>Fornire strumenti avanzati di monitoraggio in tempo reale</li>
              <li>Realizzare un modello predittivo basato su intelligenza artificiale</li>
              <li>Offrire alle aziende una dashboard unificata per la gestione della sicurezza</li>
              <li>Favorire l'integrazione delle tecnologie nella cultura aziendale della sicurezza</li>
            </ul>

            <h4 className="text-lg font-bold" style={{color: 'var(--color-ink)'}}>Risultati attesi e raggiunti</h4>
            <ul className="list-disc list-inside text-sm space-y-1" style={{color: 'var(--color-ink-soft)'}}>
              <li>Realizzazione di un bracciale wearable proprietario</li>
              <li>Sviluppo della piattaforma IoT per la gestione dei dati biometrici e ambientali</li>
              <li>Integrazione del sistema per la gestione dei profili aziendali e dei lavoratori</li>
              <li>Implementazione di algoritmi di intelligenza artificiale per la valutazione del rischio</li>
              <li>Attivazione di sperimentazioni in contesti reali aziendali</li>
            </ul>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs" style={{color: 'var(--color-ink-soft)'}}>
                Il presente progetto è finanziato con il supporto della <strong style={{color: 'var(--color-ink)'}}>Regione Campania</strong> a valere sul Programma <strong style={{color: 'var(--color-ink)'}}>PR CAMPANIA FESR 2021-2027 – Azione 1.1.3 – Campania Startup 2023</strong>.
              </p>
            </div>
          </div>

          {/* Smart & Start Italia */}
          <div className="p-8 rounded-3xl space-y-6 leading-relaxed" style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.06)', color: 'var(--color-ink-soft)'}}>
            <div className="p-4 rounded-xl text-xs space-y-1" style={{background: '#fdfaf5', border: '1px solid rgba(0,0,0,0.05)'}}>
              <p><strong style={{color: 'var(--color-ink)'}}>DAILY PRACTICE 22</strong></p>
              <p>PROGETTO FINANZIATO CON LE AGEVOLAZIONI PREVISTE DAL DECRETO 24 SETTEMBRE 2014 – SMART & START ITALIA</p>
              <p><strong style={{color: 'var(--color-ink)'}}>CUP:</strong> C26I24002540008</p>
            </div>

            <p className="text-sm">
              Il progetto <strong style={{color: 'var(--color-ink)'}}>DAILY PRACTICE 22</strong>, realizzato con il sostegno della misura nazionale Smart & Start Italia, rappresenta un'iniziativa ad alto contenuto tecnologico finalizzata allo sviluppo di soluzioni innovative per la prevenzione dei rischi nei luoghi di lavoro.
            </p>

            <p className="text-sm">
              <strong style={{color: 'var(--color-ink)'}}>Daily</strong> è un sistema integrato per il monitoraggio e la gestione predittiva della sicurezza, sviluppato da Daily Practice 22 S.r.l., startup innovativa operante nei settori della salute e sicurezza sul lavoro, dell'Internet of Things (IoT) e dell'Intelligenza Artificiale applicata alla prevenzione.
            </p>

            <p className="text-sm">
              Il sistema combina dispositivi indossabili intelligenti, sensoristica ambientale IoT e una piattaforma digitale avanzata in grado di raccogliere, integrare e analizzare in tempo reale dati fisiologici e ambientali. Attraverso modelli di Intelligenza Artificiale, il progetto consente l'identificazione anticipata di situazioni potenzialmente pericolose e l'attivazione di alert multilivello a supporto di lavoratori, datori di lavoro e responsabili della sicurezza.
            </p>

            <h4 className="text-lg font-bold" style={{color: 'var(--color-ink)'}}>Funzionalità principali</h4>
            <ul className="list-disc list-inside text-sm space-y-1" style={{color: 'var(--color-ink-soft)'}}>
              <li>Monitoraggio continuo dei parametri psicofisiologici del lavoratore</li>
              <li>Rilevazione dei fattori di rischio ambientale</li>
              <li>Analisi integrata dei dati tramite algoritmi predittivi</li>
              <li>Generazione di segnalazioni intelligenti e protocolli di prevenzione</li>
              <li>Supporto decisionale per la riduzione degli infortuni e delle malattie professionali</li>
            </ul>

            <p className="text-xs" style={{color: 'var(--color-ink-soft)'}}>
              Il progetto contribuisce allo sviluppo dell'innovazione tecnologica nazionale, promuovendo la digitalizzazione dei processi di sicurezza e la diffusione di una cultura della prevenzione fondata su dati, responsabilità e tutela della vita umana.
            </p>

            <div className="p-4 rounded-xl text-xs" style={{background: '#fdfaf5', border: '1px solid rgba(0,0,0,0.05)'}}>
              <p><strong style={{color: 'var(--color-ink)'}}>Agevolazione concessa ai sensi del Decreto 24 settembre 2014 – Smart & Start Italia – CUP: C26I24002540008</strong></p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="p-8 rounded-3xl text-center" style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.06)'}}>
            <h3 className="text-lg font-bold mb-4" style={{color: 'var(--color-ink)'}}>Richiedi una consulenza personalizzata.</h3>
            <p className="text-sm mb-6" style={{color: 'var(--color-ink-soft)'}}>Chiamaci oggi al +39 320 603 3483</p>
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
