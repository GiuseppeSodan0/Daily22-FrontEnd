import React from 'react';
import {motion} from 'motion/react';
import {Link} from 'react-router-dom';
import {ArrowRight, ShieldCheck, Cpu, Thermometer, Activity, Bell, BarChart3} from 'lucide-react';

export default function WIDIU() {
  return (
    <div className="py-24 bg-gray-50 select-none text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">WIDIU</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mt-4 tracking-tight leading-tight font-sans">
            Lo smartwatch intelligente per la sicurezza sul lavoro
          </h2>
          <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            WIDIU è lo smartwatch sviluppato da daily per supportare la prevenzione dei rischi nei contesti operativi reali.
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            Attraverso sensori biometrici, di movimento e ambientali, raccoglie dati durante l'attività lavorativa e li integra con le informazioni relative a mansione, ambiente, organizzazione e condizioni operative.
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            L'Intelligenza Artificiale analizza i dati e riconosce variazioni, correlazioni e pattern potenzialmente rilevanti, trasformandoli in indicatori di rischio, alert e informazioni utili per intervenire prima che una condizione critica possa evolvere.
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-3xl mx-auto italic">
            WIDIU non osserva soltanto ciò che è accaduto. Aiuta a comprendere ciò che sta cambiando.
          </p>
          <Link
            to="/contatti"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 shadow-[0_4px_25px_rgba(234,179,8,0.2)] hover:shadow-[0_4px_30px_rgba(234,179,8,0.35)] group"
          >
            Scopri WIDIU
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
          </Link>
        </div>

        {/* Prima che il rischio diventi un evento */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">Perché WIDIU</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 font-sans">
                Prima che il rischio diventi un evento
              </h3>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed font-light">
                La sicurezza tradizionale valuta il rischio attraverso documenti, sopralluoghi, procedure e verifiche periodiche. Strumenti indispensabili, che però descrivono spesso una condizione rilevata in un momento preciso.
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed font-light">
                Durante il lavoro, invece, il rischio può cambiare rapidamente.
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed font-light">
                Affaticamento, stress fisiologico stimato, postura, movimenti ripetitivi, condizioni ambientali sfavorevoli e variazioni operative possono combinarsi e rendere un'attività meno sicura.
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed font-light font-semibold">
                WIDIU nasce per leggere questi segnali mentre evolvono e trasformarli in informazioni utili alla prevenzione.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-yellow-600" />
                <h4 className="text-lg font-bold text-gray-900">Che cos'è WIDIU</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                WIDIU è uno smartwatch intelligente per la sicurezza sul lavoro, progettato per integrare il monitoraggio della persona, del movimento e dell'ambiente in un unico sistema.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Il dispositivo raccoglie dati attraverso sensori indossabili e dialoga con DailyPlatform, dove le informazioni vengono organizzate, contestualizzate e analizzate attraverso modelli di Intelligenza Artificiale.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Il risultato è una lettura più dinamica delle condizioni di lavoro, capace di supportare lavoratori, preposti, RSPP, HSE Manager e datori di lavoro nell'individuazione delle situazioni che richiedono maggiore attenzione.
              </p>
            </div>
          </div>
        </div>

        {/* Cosa rileva WIDIU */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">Sensori</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 font-sans">Cosa rileva WIDIU</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-6 border border-yellow-200 group-hover:bg-yellow-100 transition-all">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Parametri biometrici</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                WIDIU può rilevare e analizzare parametri fisiologici come frequenza cardiaca, variabilità cardiaca, temperatura cutanea e indicatori aggregati collegati allo stress fisiologico stimato e al recupero.
              </p>
              <p className="text-xs text-gray-400 mt-2 font-light">
                Le informazioni vengono interpretate nel tempo e messe in relazione con il contesto operativo, senza sostituire valutazioni cliniche o sanitarie.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-6 border border-yellow-200 group-hover:bg-yellow-100 transition-all">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Movimento e postura</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                Accelerometro e giroscopio consentono di osservare movimento, postura, variazioni improvvise, inattività prolungata e possibili eventi di caduta o "man down".
              </p>
              <p className="text-xs text-gray-400 mt-2 font-light">
                L'analisi può contribuire a individuare posture incongrue, movimenti ripetitivi e condizioni associate a sovraccarico o affaticamento.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-6 border border-yellow-200 group-hover:bg-yellow-100 transition-all">
                <Thermometer className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Condizioni ambientali</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                WIDIU può integrarsi con sensori ambientali per rilevare temperatura, umidità, pressione, rumore, vibrazioni, illuminazione e qualità dell'aria.
              </p>
              <p className="text-xs text-gray-400 mt-2 font-light">
                I dati della persona e dell'ambiente vengono letti insieme, offrendo una visione più completa del rischio effettivo.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-6 border border-yellow-200 group-hover:bg-yellow-100 transition-all">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Contesto lavorativo</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                Le rilevazioni acquistano significato quando vengono correlate con mansione, attività, luogo di lavoro, attrezzature, DPI, procedure e rischi specifici.
              </p>
              <p className="text-xs text-gray-400 mt-2 font-light">
                Per questo WIDIU è integrato con DailyPlatform e con la conoscenza organizzativa dell'azienda.
              </p>
            </div>
          </div>
        </div>

        {/* Come funziona */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">Processo</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 font-sans">Come funziona</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {step: '1', title: 'Rileva', desc: 'Lo smartwatch e i sensori collegati raccolgono dati biometrici, ambientali e di movimento durante l\'attività lavorativa.'},
              {step: '2', title: 'Contestualizza', desc: 'DailyPlatform mette in relazione le rilevazioni con il ruolo del lavoratore, la mansione, l\'ambiente, le attività svolte e i rischi associati.'},
              {step: '3', title: 'Analizza', desc: 'L\'Intelligenza Artificiale riconosce variazioni e combinazioni di segnali, confrontandole con soglie, trend e pattern rilevanti.'},
              {step: '4', title: 'Segnala', desc: 'Quando viene individuata una condizione che richiede attenzione, il sistema può generare alert differenziati per livello di rischio.'},
              {step: '5', title: 'Supporta la prevenzione', desc: 'Le informazioni raccolte alimentano dashboard, report e protocolli di miglioramento, aiutando l\'azienda a definire interventi più mirati.'},
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 transition-all duration-300 text-center group">
                <div className="w-10 h-10 rounded-full bg-yellow-500 text-white font-bold text-sm flex items-center justify-center mx-auto mb-4">{item.step}</div>
                <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alert dinamici */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-4">
              <div className="flex items-center gap-3">
                <Bell className="w-6 h-6 text-yellow-600" />
                <h4 className="text-lg font-bold text-gray-900">Alert dinamici e prevenzione in tempo reale</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                WIDIU è progettato per supportare un sistema di alert progressivi e contestualizzati.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Gli avvisi non dipendono necessariamente da un singolo valore, ma possono essere generati dalla combinazione di più fattori: affaticamento, variazioni fisiologiche, postura, movimento, condizioni ambientali e caratteristiche dell'attività svolta.
              </p>
              <div className="space-y-2 pt-2">
                <p className="text-xs text-gray-500 font-semibold">In base alla configurazione aziendale, gli alert possono suggerire azioni come:</p>
                <ul className="space-y-1.5">
                  {[
                    'Verificare le condizioni del lavoratore',
                    'Effettuare una pausa',
                    'Idratarsi o recuperare',
                    'Controllare l\'ambiente di lavoro',
                    'Correggere la postura',
                    'Interrompere temporaneamente un\'attività',
                    'Richiedere l\'intervento di un preposto o responsabile',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <ArrowRight className="w-3 h-3 text-yellow-600 shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-gray-400 italic font-light">
                WIDIU non sostituisce il giudizio delle persone responsabili della sicurezza, ma fornisce loro informazioni più tempestive per decidere meglio.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-yellow-600" />
                <h4 className="text-lg font-bold text-gray-900">Dati che diventano prevenzione</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Le informazioni raccolte da WIDIU vengono trasformate in strumenti concreti per la gestione HSE:
              </p>
              <ul className="space-y-1.5">
                {[
                  'Indicatori biometrici, ambientali e operativi',
                  'Dashboard dedicate a rischi e trend',
                  'Alert in tempo reale',
                  'Mappe dinamiche delle condizioni di esposizione',
                  'Report giornalieri, settimanali e mensili',
                  'Analisi delle criticità ricorrenti',
                  'Protocolli di mitigazione e miglioramento',
                  'Supporto alla valutazione dei rischi e alle decisioni aziendali',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                    <ArrowRight className="w-3 h-3 text-yellow-600 shrink-0 mt-0.5" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 italic font-light pt-2">
                L'obiettivo non è accumulare dati, ma renderli comprensibili e utilizzabili.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-gray-200 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-sans mb-4">
            WIDIU. Lo smartwatch intelligente per la sicurezza sul lavoro.
          </h3>
          <p className="text-sm text-gray-600 mb-8 max-w-xl mx-auto font-light">
            Scopri come integrare WIDIU nella tua organizzazione e trasformare i dati in prevenzione.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 shadow-[0_4px_25px_rgba(234,179,8,0.2)] group"
          >
            Scopri WIDIU
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
          </Link>
        </div>

      </div>
    </div>
  );
}
