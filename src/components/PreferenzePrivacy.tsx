import {useEffect, useRef, useState} from 'react';
import {useLocation} from 'react-router-dom';
import PageIntro from './PageIntro';
import IubendaLegalDocument from './IubendaLegalDocument';
import {openCookiePreferences} from '../lib/consent';
import {useLanguage} from '../context/LanguageContext';

export default function PreferenzePrivacy() {
  const {lang} = useLanguage();
  const {hash} = useLocation();
  const english = lang === 'en';
  const opened = useRef(false);
  const [unavailable, setUnavailable] = useState(false);
  useEffect(() => {
    const open = () => {
      if (!opened.current && hash !== '#cookie-policy') opened.current = openCookiePreferences();
    };
    open();
    window.addEventListener('daily-iubenda-ready', open);
    return () => window.removeEventListener('daily-iubenda-ready', open);
  }, [hash]);
  return <section className="pt-28 pb-24 sm:pt-36">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <PageIntro label={english ? 'Cookie preferences' : 'Preferenze cookie'}
        title={english ? 'Your privacy choices' : 'Le tue scelte sulla privacy'}
        description={english ? 'Use the iubenda panel to accept, refuse or change your cookie preferences at any time.' : 'Usa il pannello iubenda per accettare, rifiutare o modificare le tue preferenze cookie in qualsiasi momento.'} />
      <button type="button" className="mt-6 rounded-2xl bg-[#22253B] text-white font-semibold px-6 py-3"
        onClick={() => setUnavailable(!openCookiePreferences())}>
        {english ? 'Manage cookie preferences' : 'Gestisci preferenze cookie'}
      </button>
      {unavailable && <p role="status" className="mt-4 text-sm">
        {english ? 'The preferences panel could not load. Reload the page or check whether your browser is blocking iubenda. Optional tracking stays disabled until a valid choice is available.' : 'Il pannello delle preferenze non è disponibile. Ricarica la pagina o verifica se il browser sta bloccando iubenda. Il tracciamento facoltativo resta disabilitato finché non è disponibile una scelta valida.'}
      </p>}
      <div id="cookie-policy" className="scroll-mt-28 mt-12">
        <h2 className="text-2xl font-bold">Cookie Policy</h2>
        <IubendaLegalDocument cookie />
      </div>
    </div>
  </section>;
}
