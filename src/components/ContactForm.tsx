import React, {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {Mail, Phone, Clock, MapPin, Check, Landmark, AlertTriangle, ArrowRight} from 'lucide-react';
import {useLanguage} from '../context/LanguageContext';

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {opacity: 0, y: 20, filter: 'blur(8px)'},
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {duration: 0.8, ease: 'easeOut'},
  },
};

export default function ContactForm() {
  const {t, lang} = useLanguage();
  const [formData, setFormData] = useState({
    nome: '',
    azienda: '',
    email: '',
    telefono: '',
    oggetto: '',
    messaggio: '',
    consentePrivacy: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPrivacyError, setShowPrivacyError] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    setSubmitError(null);

    // Strict client-side privacy check
    if (!formData.consentePrivacy) {
      setShowPrivacyError(true);
      return;
    }
    setShowPrivacyError(false);
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          azienda: formData.azienda,
          email: formData.email,
          telefono: formData.telefono,
          oggetto: formData.oggetto,
          messaggio: formData.messaggio,
          consentePrivacy: formData.consentePrivacy,
          language: lang,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        const defaultErr = lang === 'en'
          ? 'An error occurred while sending your request. Please try again or contact us directly at segreteria@dy22.it.'
          : 'Si è verificato un errore durante l’invio. Riprova o scrivici direttamente a segreteria@dy22.it.';
        throw new Error(data.error || data.message || defaultErr);
      }

      setSubmitted(true);
      setFormData({
        nome: '',
        azienda: '',
        email: '',
        telefono: '',
        oggetto: '',
        messaggio: '',
        consentePrivacy: false,
      });
    } catch (err: any) {
      const fallbackErr = lang === 'en'
        ? 'An error occurred while sending your request. Please try again or contact us directly at segreteria@dy22.it.'
        : 'Si è verificato un errore durante l’invio. Riprova o scrivici direttamente a segreteria@dy22.it.';
      setSubmitError(err.message || fallbackErr);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-36 bg-[#F0EFEB] text-left" id="contatti">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2C2C2E]/10 bg-white/60 text-[11px] font-bold tracking-wider uppercase text-[#2C2C2E]/70 font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f6c73b]" />
              {t('contact.badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#2C2C2E] tracking-tight">{t('contact.title')}</h2>
            <p className="mt-4 text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Contact Details Column */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col h-full">
              <div className="p-8 card-premium space-y-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-sans text-[#2C2C2E] tracking-tight">daily</h3>
                  <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed mt-3">
                    {t('contact.introText')}
                  </p>

                  <div className="space-y-6 pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-[#f6c73b]/10 border border-[#f6c73b]/20 text-[#2C2C2E] shrink-0">
                        <Mail className="w-5 h-5 text-[#2C2C2E]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#2C2C2E]/55 font-mono uppercase font-bold tracking-widest mb-1">{t('contact.emailLabelHeader') || t('contact.emailLabel')}</p>
                        <a href="mailto:segreteria@dy22.it" className="text-xs sm:text-sm text-[#2C2C2E] hover:text-[#f6c73b] font-bold font-mono transition-colors">
                          segreteria@dy22.it
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-[#f6c73b]/10 border border-[#f6c73b]/20 text-[#2C2C2E] shrink-0">
                        <Phone className="w-5 h-5 text-[#2C2C2E]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#2C2C2E]/55 font-mono uppercase font-bold tracking-widest mb-1">{t('contact.phoneLabelHeader') || t('contact.phoneLabel')}</p>
                        <a href="tel:+393404290395" className="text-xs sm:text-sm text-[#2C2C2E] hover:text-[#f6c73b] font-bold font-mono transition-colors">
                          +39 340 429 0395
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-[#f6c73b]/10 border border-[#f6c73b]/20 text-[#2C2C2E] shrink-0">
                        <Clock className="w-5 h-5 text-[#2C2C2E]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#2C2C2E]/55 font-mono uppercase font-bold tracking-widest mb-1">{t('contact.hoursLabel')}</p>
                        <p className="text-xs sm:text-sm text-[#2C2C2E] font-bold font-mono">{t('contact.hoursValue')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-[#f6c73b]/10 border border-[#f6c73b]/20 text-[#2C2C2E] shrink-0">
                        <MapPin className="w-5 h-5 text-[#2C2C2E]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#2C2C2E]/55 font-mono uppercase font-bold tracking-widest mb-1">{t('contact.officeLabel')}</p>
                        <p className="text-xs sm:text-sm text-[#2C2C2E] font-bold font-mono">{t('contact.address')}</p>
                        <p className="text-[11px] text-[#5E5E62] mt-1 font-mono">{t('contact.addressExtra')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interactive Form Column */}
            <motion.div variants={itemVariants} className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[24px] border border-[#2C2C2E]/5 shadow-[0_20px_50px_rgba(44,44,46,0.03)] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-sans text-[#2C2C2E] mb-1">{t('contact.formTitle')}</h3>
                <p className="text-xs text-[#5E5E62] font-mono mb-8">
                  {t('contact.formSubtitle')}
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{opacity: 0, scale: 0.95}}
                      animate={{opacity: 1, scale: 1}}
                      exit={{opacity: 0, scale: 0.95}}
                      className="py-12 text-center space-y-6"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f6c73b]/10 text-[#2C2C2E] border border-[#f6c73b]/20">
                        <Check className="w-8 h-8 stroke-[2.5]" />
                      </div>
                      <h4 className="text-lg font-bold font-sans text-[#2C2C2E]">{t('contact.successTitle')}</h4>
                      <p className="text-xs sm:text-sm text-[#5E5E62] max-w-md mx-auto font-mono leading-relaxed">
                        {t('contact.successText')}
                      </p>
                      <div className="pt-4">
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setSubmitError(null);
                          }}
                          className="cta-button px-6 py-3 text-xs font-bold font-mono tracking-wider uppercase cursor-pointer"
                        >
                          {t('contact.sendAnother')}
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                      {showPrivacyError && (
                        <motion.div
                          initial={{opacity: 0, y: -5}}
                          animate={{opacity: 1, y: 0}}
                          className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700 font-mono"
                        >
                          <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                          <span>{t('contact.privacyConsentError')}</span>
                        </motion.div>
                      )}

                      {submitError && (
                        <motion.div
                          initial={{opacity: 0, y: -5}}
                          animate={{opacity: 1, y: 0}}
                          className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-xs text-red-700 font-mono"
                        >
                          <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                          <span>{submitError}</span>
                        </motion.div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="nome" className="block text-[10px] font-bold text-[#2C2C2E]/60 mb-2 uppercase tracking-widest font-mono">
                            {t('contact.nameLabel')}
                          </label>
                          <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder={t('contact.namePlaceholder')}
                            className="w-full bg-white border border-[#2C2C2E]/10 focus:border-[#f6c73b] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#2C2C2E] placeholder-[#2C2C2E]/30 focus:outline-none transition-colors font-mono"
                          />
                        </div>
                        <div>
                          <label htmlFor="azienda" className="block text-[10px] font-bold text-[#2C2C2E]/60 mb-2 uppercase tracking-widest font-mono">
                            {t('contact.companyLabel')}
                          </label>
                          <input
                            type="text"
                            id="azienda"
                            name="azienda"
                            value={formData.azienda}
                            onChange={handleChange}
                            placeholder={t('contact.companyPlaceholder')}
                            className="w-full bg-white border border-[#2C2C2E]/10 focus:border-[#f6c73b] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#2C2C2E] placeholder-[#2C2C2E]/30 focus:outline-none transition-colors font-mono"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className="block text-[10px] font-bold text-[#2C2C2E]/60 mb-2 uppercase tracking-widest font-mono">
                            {t('contact.emailLabel')}
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t('contact.emailPlaceholder')}
                            className="w-full bg-white border border-[#2C2C2E]/10 focus:border-[#f6c73b] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#2C2C2E] placeholder-[#2C2C2E]/30 focus:outline-none transition-colors font-mono"
                          />
                        </div>
                        <div>
                          <label htmlFor="telefono" className="block text-[10px] font-bold text-[#2C2C2E]/60 mb-2 uppercase tracking-widest font-mono">
                            {t('contact.phoneLabel')}
                          </label>
                          <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder={t('contact.phonePlaceholder')}
                            className="w-full bg-white border border-[#2C2C2E]/10 focus:border-[#f6c73b] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#2C2C2E] placeholder-[#2C2C2E]/30 focus:outline-none transition-colors font-mono"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="oggetto" className="block text-[10px] font-bold text-[#2C2C2E]/60 mb-2 uppercase tracking-widest font-mono">
                          {t('contact.subjectLabel')}
                        </label>
                        <input
                          type="text"
                          id="oggetto"
                          name="oggetto"
                          value={formData.oggetto}
                          onChange={handleChange}
                          placeholder={t('contact.subjectPlaceholder')}
                          className="w-full bg-white border border-[#2C2C2E]/10 focus:border-[#f6c73b] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#2C2C2E] placeholder-[#2C2C2E]/30 focus:outline-none transition-colors font-mono"
                        />
                      </div>

                      <div>
                        <label htmlFor="messaggio" className="block text-[10px] font-bold text-[#2C2C2E]/60 mb-2 uppercase tracking-widest font-mono">
                          {t('contact.messageLabel')}
                        </label>
                        <textarea
                          id="messaggio"
                          name="messaggio"
                          required
                          value={formData.messaggio}
                          onChange={handleChange}
                          rows={4}
                          placeholder={t('contact.messagePlaceholder')}
                          className="w-full bg-white border border-[#2C2C2E]/10 focus:border-[#f6c73b] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#2C2C2E] placeholder-[#2C2C2E]/30 focus:outline-none transition-colors resize-none font-mono"
                        />
                      </div>

                      <div className="p-4 rounded-xl bg-[#F0EFEB]/60 border border-[#2C2C2E]/5 flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consentePrivacy"
                          name="consentePrivacy"
                          required
                          checked={formData.consentePrivacy}
                          onChange={handleChange}
                          className="mt-0.5 accent-[#f6c73b] w-4 h-4 cursor-pointer"
                        />
                        <label htmlFor="consentePrivacy" className="text-[11px] text-[#5E5E62] leading-relaxed cursor-pointer font-mono">
                          {t('contact.privacyConsent')}
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 text-base font-semibold font-mono tracking-wider uppercase flex items-center justify-center gap-2 bg-[#f6c73b] text-[#2C2C2E] border-none rounded-[18px] hover:bg-[#d9b000] hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(242,196,0,0.4)] disabled:opacity-75 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            {t('contact.sending')}
                          </>
                        ) : (
                          <>
                            {t('contact.submitButton')}
                            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
