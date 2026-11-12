import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx';
import {LanguageProvider} from './context/LanguageContext.tsx';
import {initConsent} from './lib/consent.ts';
import './index.css';

// Initialise the consent manager before the app renders so that Google Consent
// Mode is set to the stored choice (or denied by default) and the Meta Pixel is
// never loaded before the user grants consent.
initConsent();

const root = document.getElementById('root')!;
const prerendered = root.hasAttribute('data-prerendered');
const app = (
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider initialLanguage={prerendered ? (document.documentElement.lang === 'en' ? 'en' : 'it') : undefined}>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);

if (prerendered) hydrateRoot(root, app);
else createRoot(root).render(app);
