import React, {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {Mail, Phone, Clock, MapPin, Check, Send, Landmark, AlertTriangle} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    oggetto: '',
    messaggio: '',
    consentePrivacy: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPrivacyError, setShowPrivacyError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value, type} = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({...prev, [name]: checkbox.checked}));
      if (name === 'consentePrivacy' && checkbox.checked) {
        setShowPrivacyError(false);
      }
    } else {
      setFormData((prev) => ({...prev, [name]: value}));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentePrivacy) {
      setShowPrivacyError(true);
      return;
    }
    setShowPrivacyError(false);
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append('nome', formData.nome);
      form.append('email', formData.email);
      form.append('telefono', formData.telefono);
      form.append('oggetto', formData.oggetto);
      form.append('messaggio', formData.messaggio);

      const res = await fetch('/sendmail.php', {method: 'POST', body: form});
      const data = await res.json();

      if (!data.success) throw new Error(data.message);

      setSubmitted(true);
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        oggetto: '',
        messaggio: '',
        consentePrivacy: false,
      });
    } catch {
      alert('Errore nell\'invio del messaggio. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50 select-none text-left" id="contatti">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-600" />
            <span className="text-[10px] uppercase tracking-widest text-yellow-600 font-mono font-bold">Contatti & Supporto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1 font-sans">Ottieni una consulenza personale</h2>
          <p className="mt-4 text-sm text-gray-600 font-light max-w-2xl mx-auto">
            Hai bisogno di una soluzione personalizzata? I nostri consulenti sono pronti a risponderti.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight font-sans">Daily 22</h3>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-yellow-50 border border-yellow-200 text-yellow-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-mono uppercase font-black">Email</p>
                    <a href="mailto:info@daily22.it" className="text-xs sm:text-sm text-gray-900 hover:text-yellow-600 font-bold transition-colors">
                      info@daily22.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-yellow-50 border border-yellow-200 text-yellow-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-mono uppercase font-black">Telefono</p>
                    <a href="tel:+393206033483" className="text-xs sm:text-sm text-gray-900 hover:text-yellow-600 font-bold transition-colors">
                      +39 320 603 3483
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-yellow-50 border border-yellow-200 text-yellow-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-mono uppercase font-black">Orari di apertura</p>
                    <p className="text-xs sm:text-sm text-gray-900 font-semibold">Lunedì e venerdì: 9:00 – 17:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-yellow-50 border border-yellow-200 text-yellow-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-mono uppercase font-black">Ufficio</p>
                    <p className="text-xs sm:text-sm text-gray-900 font-semibold">Via Coroglio, 57</p>
                    <p className="text-[11px] text-gray-500 mt-0.5 font-light">c/o Campania Newsteel Srl – Napoli, Italia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Legals */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 space-y-2">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 font-mono">
                <Landmark className="w-4 h-4 text-yellow-600" />
                Informazioni Societarie
              </h4>
              <div className="text-[11px] text-gray-500 space-y-1 font-mono font-medium">
                <p>Daily Practice 22 S.r.l. - Startup Innovativa</p>
                <p>P.IVA: 09637811218</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 font-sans">Compila la tua richiesta</h3>
              <p className="text-xs text-gray-600 mt-1 mb-8">
                Invia una richiesta compilata; sarai contattato direttamente dai nostri esperti.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.95}}
                    className="py-12 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-50 text-yellow-600 mb-6 border border-yellow-200">
                      <Check className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Grazie per il messaggio. È stato inviato.</h4>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-8 font-light leading-relaxed">
                      Ti contatteremo telefonicamente o via mail entro 24 ore lavorative.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-yellow-600 hover:bg-yellow-500 text-white font-bold text-xs cursor-pointer transition-all"
                    >
                      Invia un altro messaggio
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                    {showPrivacyError && (
                      <motion.div
                        initial={{opacity: 0, y: -5}}
                        animate={{opacity: 1, y: 0}}
                        className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700"
                      >
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>È necessario accettare il regolamento privacy GDPR per trasmettere il modulo.</span>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="nome" className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest font-mono">
                          Nome *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Il tuo nome"
                          className="w-full bg-white border border-gray-200 focus:border-yellow-600 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest font-mono">
                          Telefono *
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          required
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="+39 320 603 3483"
                          className="w-full bg-white border border-gray-200 focus:border-yellow-600 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest font-mono">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="nome@azienda.it"
                          className="w-full bg-white border border-gray-200 focus:border-yellow-600 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="oggetto" className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest font-mono">
                          Oggetto
                        </label>
                        <input
                          type="text"
                          id="oggetto"
                          name="oggetto"
                          value={formData.oggetto}
                          onChange={handleChange}
                          placeholder="Richiedi un preventivo"
                          className="w-full bg-white border border-gray-200 focus:border-yellow-600 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="messaggio" className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest font-mono">
                        Come possiamo aiutarti? *
                      </label>
                      <textarea
                        id="messaggio"
                        name="messaggio"
                        required
                        value={formData.messaggio}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Descrivi le tue esigenze..."
                        className="w-full bg-white border border-gray-200 focus:border-yellow-600 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consentePrivacy"
                        name="consentePrivacy"
                        checked={formData.consentePrivacy}
                        onChange={handleChange}
                        className="mt-0.5 accent-yellow-600 w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="consentePrivacy" className="text-[11px] text-gray-600 leading-relaxed cursor-pointer select-none">
                        Dichiaro di aver preso visione dell'informativa e acconsento al trattamento dei miei dati personali da parte di Daily Practice 22 srl ai sensi del regolamento GDPR UE 2016/679. *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full font-bold text-white bg-yellow-600 hover:bg-yellow-500 transition-all flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Invio in corso...
                        </>
                      ) : (
                        <>
                          Richiedi un preventivo
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
