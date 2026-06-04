/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Clock, MapPin, Check, Send, Landmark, AlertTriangle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    azienda: '',
    messaggio: '',
    consentePrivacy: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPrivacyError, setShowPrivacyError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checkbox.checked }));
      if (name === 'consentePrivacy' && checkbox.checked) {
        setShowPrivacyError(false);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentePrivacy) {
      setShowPrivacyError(true);
      return;
    }

    setShowPrivacyError(false);
    setIsSubmitting(true);

    // Simulate sending to back-end
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        azienda: '',
        messaggio: '',
        consentePrivacy: false
      });
    }, 1500);
  };

  return (
    <section className="py-24 bg-black select-none text-left" id="contatti">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Slogan headers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-405" />
            <span className="text-[10px] uppercase tracking-widest text-yellow-400 font-mono font-bold">Contatti & Supporto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-sans">Ottieni una consulenza personale</h2>
          <p className="mt-4 text-sm text-gray-400 font-light max-w-2xl mx-auto">
            Hai bisogno di una soluzione personalizzata o di integrare Dailyplatform nella tua azienda? Il nostro team di ingegneri è a tua completa disposizione per guidarti.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact details (Left side - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight font-sans">Daily 22 Hub</h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Il progresso della tutela sul lavoro passa attraverso un dialogo trasparente. Contattaci direttamente per ordinare una demo sul campo dei wearable WIDIU o richiedere la simulazione dei piani formativi di SALVATORE AI.
              </p>

              {/* Direct access items */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-yellow-405 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono uppercase font-black">Email Primaria</p>
                    <a href="mailto:info@daily22.it" className="text-xs sm:text-sm text-white hover:text-yellow-400 font-bold transition-colors">
                      info@daily22.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-yellow-405 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono uppercase font-black">Helpdesk Italia</p>
                    <a href="tel:+390812244222" className="text-xs sm:text-sm text-white hover:text-yellow-400 font-bold transition-colors">
                      +39 081 2244222 (Hub Campania)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-yellow-405 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono uppercase font-black">Orario Operatività</p>
                    <p className="text-xs sm:text-sm text-white font-semibold">Lunedì - Venerdì: 09:00 - 18:00</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Sabato - Domenica: Chiuso (Presidio d'allarme IoT sempre attivo H24)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-yellow-405 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono uppercase font-black">Sede Operativa / Lab</p>
                    <p className="text-xs sm:text-sm text-white font-semibold flex items-center gap-1.5">Campania NewSteel - Città della Scienza</p>
                    <p className="text-[11px] text-gray-400 mt-0.5 font-light">Via Coroglio, 57/104, 80124 Napoli (NA), Italia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Legals */}
            <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.05] space-y-2">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 font-mono">
                <Landmark className="w-4 h-4 text-yellow-400" />
                Informazioni Societarie
              </h4>
              <div className="text-[11px] text-gray-500 space-y-1 font-mono font-medium">
                <p>Daily 22 S.r.l. - Società Benefit / Startup Innovativa</p>
                <p>C.F. / P.IVA: IT09876543210</p>
                <p>Ufficio Registro Imprese di Napoli - REA: NA-123456</p>
              </div>
            </div>
          </div>

          {/* Form container (Right side - 7 cols) */}
          <div className="lg:col-span-7 bg-white/[0.01] p-8 md:p-10 rounded-3xl border border-white/[0.06] shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white font-sans">Compila la tua richiesta</h3>
              <p className="text-xs text-gray-400 mt-1 mb-8">
                Invia una richiesta compilata; sarai contattato direttamente dai nostri tecnici autorizzati d.lgs 81/08.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/10 text-yellow-400 mb-6 border border-yellow-400/20 shadow-lg">
                      <Check className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Richiesta caricata sui sistemi Daily</h4>
                    <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto mb-8 font-light leading-relaxed">
                      La tua richiesta è stata trasmessa ai nostri ingegneri a Città della Scienza. Ti contatteremo telefonicamente o via mail entro 24 ore lavorative.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs cursor-pointer shadow-[0_0_15px_rgba(250,204,21,0.15)] transition-all"
                    >
                      Invia un altro messaggio
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                    {showPrivacyError && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center gap-2.5 text-xs text-red-400"
                      >
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>È necessario accettare il regolamento privacy GDPR per trasmettere il modulo.</span>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="nome" className="block text-[10px] font-bold text-gray-550 mb-2 uppercase tracking-widest font-mono">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Es: Ing. Salvatore Rossi"
                          className="w-full bg-black border border-white/[0.08] focus:border-yellow-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-[10px] font-bold text-gray-550 mb-2 uppercase tracking-widest font-mono">
                          Indirizzo Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="nome@azienda.it"
                          className="w-full bg-black border border-white/[0.08] focus:border-yellow-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="telefono" className="block text-[10px] font-bold text-gray-550 mb-2 uppercase tracking-widest font-mono">
                          Recapito Telefonico
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="Es: +39 081 123456"
                          className="w-full bg-black border border-white/[0.08] focus:border-yellow-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="azienda" className="block text-[10px] font-bold text-gray-550 mb-2 uppercase tracking-widest font-mono">
                          Nome Azienda / Cantiere *
                        </label>
                        <input
                          type="text"
                          id="azienda"
                          name="azienda"
                          required
                          value={formData.azienda}
                          onChange={handleChange}
                          placeholder="Es: Edilizia Vesuvio S.r.l."
                          className="w-full bg-black border border-white/[0.08] focus:border-yellow-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="messaggio" className="block text-[10px] font-bold text-gray-550 mb-2 uppercase tracking-widest font-mono">
                        Dettaglio Richiesta o Descrizione Cantiere *
                      </label>
                      <textarea
                        id="messaggio"
                        name="messaggio"
                        required
                        value={formData.messaggio}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Quanti addetti si intende monitorare? Descrivi la tipologia di rischio ..."
                        className="w-full bg-black border border-white/[0.08] focus:border-yellow-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-200 placeholder-gray-600 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Privacy checkboxes inside glass */}
                    <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.05] flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consentePrivacy"
                        name="consentePrivacy"
                        checked={formData.consentePrivacy}
                        onChange={handleChange}
                        className="mt-0.5 accent-yellow-400 w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="consentePrivacy" className="text-[11px] text-gray-400 leading-relaxed cursor-pointer select-none">
                        Dichiaro di aver preso visione dell'informativa e acconsento al trattamento dei miei dati personali da parte di Daily 22 s.r.l. ai sensi del regolamento GDPR UE 2016/679. *
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full font-bold text-black bg-yellow-400 hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer shadow-[0_4px_15px_rgba(250,204,21,0.15)] text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Trasmissione dati in corso...
                        </>
                      ) : (
                        <>
                          Invia Richiesta di Consulenza Personale
                          <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
