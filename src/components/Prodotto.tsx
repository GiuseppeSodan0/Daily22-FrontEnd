import React from 'react';
import {motion} from 'motion/react';
import {Brain, Users, Scale, Cpu, HeartHandshake, ShieldCheck, BarChart3} from 'lucide-react';
import {Link} from 'react-router-dom';

export default function Prodotto() {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.08}},
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 25},
    visible: {opacity: 1, y: 0, transition: {type: 'spring', stiffness: 90, damping: 18}},
  };

  return (
    <div className="py-24 bg-gray-50 select-none text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Hero */}
        <div className="border-b border-gray-200 pb-20 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-yellow-600 font-mono">
                Dailyplatform Core
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight leading-tight font-sans">
                Racconta la tua storia con Dailyplatform.
              </h2>
              <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                Utilizziamo il <span className="text-yellow-600 font-bold font-mono">deep learning</span> per rendere il nostro software basato sui dati.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2.5 rounded-full text-xs font-semibold bg-yellow-50 border border-yellow-200 text-gray-700 flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-yellow-600" />
                  Un software progettato intorno alle persone
                </span>
                <span className="px-4 py-2.5 rounded-full text-xs font-semibold bg-yellow-50 border border-yellow-200 text-gray-700 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-yellow-600" />
                  AI al servizio della sicurezza
                </span>
              </div>

              <Link
                to="/contatti"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-yellow-600 hover:bg-yellow-500 transition-all"
              >
                Richiedi un preventivo
              </Link>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-gray-200 p-1.5 bg-white shadow-lg">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/src/assets/images/corp_meeting_1780517573052.png"
                  alt="Boardroom meeting"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-gray-900 via-gray-900/85 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                  <blockquote className="text-sm sm:text-base italic text-gray-200 font-light leading-relaxed">
                    "Un software progettato intorno alle persone, dove la tecnologia digitale non soppianta ma protegge l'energia umana e la sicurezza in ogni singolo reparto."
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-yellow-600 text-white font-black text-xs flex items-center justify-center">D22</div>
                    <div>
                      <p className="text-xs font-bold text-white">Daily 22</p>
                      <p className="text-[10px] text-gray-400 font-mono">Impegno Etico Daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: What We Can Do */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">Cosa Possiamo Fare</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 font-sans">Soluzioni software uniche.</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: "-100px"}}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-6 border border-yellow-200 group-hover:bg-yellow-100 transition-all">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-3">Un software progettato intorno alle persone</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                La nostra piattaforma è pensata per mettere le persone al centro, offrendo interfacce intuitive e accessibili che semplificano la gestione della sicurezza sul lavoro.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-6 border border-yellow-200 group-hover:bg-yellow-100 transition-all">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-3">AI al servizio della sicurezza</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                L'intelligenza artificiale supporta l'analisi e la strutturazione delle informazioni, migliorando il controllo e la qualità delle decisioni operative.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Section 3: Trasformiamo i dati in controllo reale */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-yellow-50 to-white border border-gray-200 shadow-lg relative overflow-hidden mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">
              Data Driven
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3 font-sans">
              Trasformiamo i dati in controllo reale.
            </h3>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Attraverso l'analisi intelligente delle informazioni, la piattaforma migliora la gestione degli adempimenti e supporta decisioni più consapevoli e tempestive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <BarChart3 className="w-6 h-6 text-yellow-600 mb-4" />
              <h5 className="text-sm font-bold text-gray-900 mb-3">Dai dati, più valore con l'intelligenza artificiale</h5>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                L'AI supporta l'analisi e la strutturazione delle informazioni, migliorando il controllo e la qualità delle decisioni operative.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <Brain className="w-6 h-6 text-yellow-600 mb-4" />
              <h5 className="text-sm font-bold text-gray-900 mb-3">Modelli predittivi avanzati</h5>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Utilizziamo algoritmi di deep learning per trasformare i dati grezzi in insight predittivi, anticipando le criticità prima che si verifichino.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Compliance */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 font-mono">Oltre il software</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 font-sans">
              Il software su misura per la sicurezza sul lavoro.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-md transition-all duration-300">
              <div className="text-[10px] font-bold text-yellow-600 uppercase tracking-wider mb-4 font-mono">01. Compliance</div>
              <h5 className="text-base font-bold text-gray-900 mb-3">La compliance, finalmente sotto controllo</h5>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                Centralizza in un'unica piattaforma la gestione degli obblighi normativi e organizzativi. AI Compliance Platform supporta le aziende nel monitoraggio continuo della compliance, nell'analisi della documentazione e nella gestione strutturata delle scadenze.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-md transition-all duration-300">
              <div className="text-[10px] font-bold text-yellow-600 uppercase tracking-wider mb-4 font-mono">02. Controllo</div>
              <h5 className="text-base font-bold text-gray-900 mb-3">Il controllo normativo, in tempo reale</h5>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                Accedi a un sistema digitale progettato per adattarsi alla struttura della tua organizzazione. La piattaforma analizza la documentazione, evidenzia criticità, segnala scadenze e supporta le decisioni operative.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-md transition-all duration-300">
              <div className="text-[10px] font-bold text-yellow-600 uppercase tracking-wider mb-4 font-mono">03. Supporto</div>
              <h5 className="text-base font-bold text-gray-900 mb-3">Un supporto intelligente per l'organizzazione</h5>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                AI Compliance Platform opera come strumento di supporto tecnico-organizzativo, aiutando le aziende a mantenere ordine, coerenza e continuità nella gestione della compliance. Modulare, scalabile e trasparente.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Final CTA */}
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-gray-200 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-sans mb-4">
            Racconta la tua storia con Dailyplatform.
          </h3>
          <p className="text-sm text-gray-600 mb-8 max-w-xl mx-auto">
            Utilizziamo il deep learning per rendere il nostro software basato sui dati.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-yellow-600 hover:bg-yellow-500 transition-all"
          >
            Richiedi un preventivo
          </Link>
        </div>

      </div>
    </div>
  );
}
