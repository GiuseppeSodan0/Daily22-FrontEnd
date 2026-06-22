import React from 'react';
import {motion} from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 bg-gray-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.1}}
          className="p-8 rounded-3xl bg-white border border-gray-200"
        >
          <div className="prose prose-sm max-w-none text-gray-600 space-y-6">
            <h2 className="text-lg font-bold text-gray-900">Informativa AI SENSI DEGLI ARTT. 13 E 14 DEL REGOLAMENTO GENERALE SULLA PROTEZIONE DEI DATI (UE) 2016/679</h2>

            <p className="text-sm">
              Ai sensi e per gli effetti degli art. 13 e 14 del Regolamento (UE) 2016/679 sulla Protezione dei Dati Personali, Daily Practice 22 srl è tenuta a fornire alcune informazioni riguardanti l'utilizzo dei dati personali.
            </p>

            <h3 className="text-base font-bold text-gray-900">Titolare e Responsabile del trattamento</h3>
            <p className="text-sm">
              Il titolare del trattamento dei dati personali è Daily Practice 22 srl – P.IVA 09637811218 – Via Terracina, 311 – 80125 Napoli – Email: ileonardis@daily22.it
            </p>

            <h3 className="text-base font-bold text-gray-900">Tipologie di dati raccolti</h3>
            <p className="text-sm">
              Tra i Dati Personali raccolti da questo sito, in modo autonomo o tramite terze parti, ci sono: Cookie, Dati di utilizzo ed E-mail. Altri Dati Personali raccolti potrebbero essere indicati in altre sezioni di questa privacy policy o mediante testi informativi visualizzati contestualmente alla raccolta dei Dati stessi.
            </p>

            <h3 className="text-base font-bold text-gray-900">Finalità del trattamento</h3>
            <p className="text-sm">
              I Dati dell'Utente sono raccolti per consentire al Titolare di fornire i propri servizi, così come per le seguenti finalità: Commento dei contenuti, Statistica, Interazione con social network e piattaforme esterne e Visualizzazione di contenuti da piattaforme esterne.
            </p>

            <h3 className="text-base font-bold text-gray-900">Modalità e Luogo del trattamento</h3>
            <p className="text-sm">
              Il Titolare tratta i Dati Personali degli Utenti adottando le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali. Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.
            </p>

            <h3 className="text-base font-bold text-gray-900">Cookies</h3>
            <p className="text-sm">
              I cookie tecnici sono quelli utilizzati al solo fine di "effettuare la trasmissione di una comunicazione su una rete di comunicazione elettronica". Per l'installazione di tali cookie non è richiesto il preventivo consenso degli utenti, mentre resta fermo l'obbligo di dare l'informativa ai sensi dell'art. 13 del Codice.
            </p>

            <h3 className="text-base font-bold text-gray-900">Diritti degli interessati</h3>
            <p className="text-sm">
              Ai sensi del Regolamento UE 2016/679, Lei ha il diritto di chiedere al Titolare del trattamento l'accesso ai dati personali (art. 15), la rettifica (art. 16), la cancellazione degli stessi o l'oblio (art. 17), la limitazione del trattamento dei dati personali che lo riguardano (art. 18), il diritto alla portabilità dei dati (art. 20) o di opporsi al loro trattamento (art. 21), oltre al diritto di non essere sottoposti a una decisione basata unicamente sul trattamento automatizzato (art. 22).
            </p>

            <p className="text-sm">
              Le richieste potranno essere esercitate nei confronti del Titolare del trattamento inviando una e-mail al seguente indirizzo: ileonardis@daily22.it
            </p>

            <div className="pt-4 border-t border-gray-200 text-xs text-gray-500">
              <p>Daily Practice 22 srl</p>
              <p>Via Terracina, 311 – 80125 – Napoli</p>
              <p>P.IVA 09637811218</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
