import React from 'react';
import {motion} from 'motion/react';
import {Phone} from 'lucide-react';
import {Link} from 'react-router-dom';

const faqs = [
  {
    q: 'Cos\'è Dailyplatform?',
    a: 'Dailyplatform è una piattaforma conversazionale con intelligenza artificiale che integra dati biometrici, ambientali e di sicurezza aziendale digitalizzati, trasformandoli in modelli di rischio predittivi.',
  },
  {
    q: 'Come funziona WIDIU?',
    a: 'WIDIU è un sistema indossabile intelligente che integra sensori biometrici e ambientali per monitorare in tempo reale le condizioni psicofisiologiche dei lavoratori, generando indicatori predittivi di rischio attraverso l\'intelligenza artificiale.',
  },
  {
    q: 'Cosa fa l\'avatar Salvatore?',
    a: 'Salvatore è un avatar conversazionale dotato di intelligenza artificiale che fornisce assistenza, formazione e prevenzione in materia di sicurezza sul lavoro, interagendo in tempo reale con l\'utente in modo naturale e multilingua.',
  },
  {
    q: 'Quali settori possono beneficiare delle vostre soluzioni?',
    a: 'Le nostre soluzioni sono personalizzabili per ogni settore: industria, edilizia, logistica, sanità, sport, difesa e pubblica amministrazione.',
  },
  {
    q: 'I vostri sistemi sono conformi al GDPR?',
    a: 'Sì, tutti i nostri sistemi sono progettati in conformità con il GDPR e le normative europee sull\'intelligenza artificiale e la sicurezza sul lavoro, garantendo la massima protezione dei dati.',
  },
  {
    q: 'Come posso richiedere una consulenza?',
    a: 'Puoi contattarci tramite il form nella pagina Contatti, via email a info@daily22.it o telefonicamente al +39 320 603 3483.',
  },
];

export default function FAQs() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 bg-gray-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.1}}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-yellow-400 transition-all duration-300 cursor-pointer"
            >
              <summary className="text-sm sm:text-base font-semibold text-gray-900 list-none flex items-center justify-between gap-4">
                {faq.q}
                <span className="text-yellow-600 text-xl font-mono group-open:rotate-45 transition-transform duration-200 shrink-0">+</span>
              </summary>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          className="mt-16 p-8 rounded-3xl bg-white border border-gray-200 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 border border-yellow-200 mb-4">
            <Phone className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Richiedi una consulenza personalizzata.</h3>
          <p className="text-sm text-gray-500 mb-6">Chiamaci oggi al +39 320 603 3483</p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-yellow-600 hover:bg-yellow-500 transition-all"
          >
            Richiedi un preventivo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
