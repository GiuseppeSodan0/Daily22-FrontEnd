import {useEffect, useRef} from 'react';
import {useLanguage} from '../context/LanguageContext';

export default function IubendaLegalDocument({cookie = false}: {cookie?: boolean}) {
  const {lang} = useLanguage();
  const container = useRef<HTMLDivElement>(null);
  const id = lang === 'it' ? '20074969' : '26236889';
  const url = 'https://www.iubenda.com/privacy-policy/' + id + (cookie ? '/cookie-policy' : '');
  const title = cookie ? 'Cookie Policy' : 'Privacy Policy';

  useEffect(() => {
    const node = container.current;
    if (!node) return;
    // iubenda owns this subtree; React must not reconcile the injected document.
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.className = 'iubenda-white iubenda-noiframe iubenda-embed iub-body-embed';
    anchor.title = title;
    anchor.textContent = title;
    node.replaceChildren(anchor);
    const script = document.createElement('script');
    script.src = 'https://cdn.iubenda.com/iubenda.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { script.remove(); node.replaceChildren(); };
  }, [url, title]);

  return <div className="mt-8 rounded-2xl bg-white p-5 sm:p-8 border border-[#2C2C2E]/10">
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-sm">
      {lang === 'it' ? 'Apri il documento su iubenda' : 'Open this document on iubenda'}
    </a>
    <div ref={container} className="mt-6 iubenda-document" />
  </div>;
}
