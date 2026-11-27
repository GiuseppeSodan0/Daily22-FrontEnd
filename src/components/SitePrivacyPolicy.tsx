import PageIntro from './PageIntro';
import IubendaLegalDocument from './IubendaLegalDocument';
import PrivacyPolicy from './PrivacyPolicy';
import {useLanguage} from '../context/LanguageContext';

export default function SitePrivacyPolicy() {
  const {lang} = useLanguage();
  const english = lang === 'en';
  return <section className="pt-28 pb-24 sm:pt-36">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <PageIntro label="daily22.it" title="Privacy Policy"
        description={english ? 'Information about personal data processed through the daily22.it website.' : 'Informazioni sui dati personali trattati attraverso il sito daily22.it.'} />
      <IubendaLegalDocument />
      <details id="dailyplatform" className="mt-10 border-t border-[#2C2C2E]/15 pt-6">
        <summary className="cursor-pointer font-semibold text-lg">
          {english ? 'Privacy information for dailyplatform' : 'Informativa privacy di dailyplatform'}
        </summary>
        <PrivacyPolicy />
      </details>
    </div>
  </section>;
}
