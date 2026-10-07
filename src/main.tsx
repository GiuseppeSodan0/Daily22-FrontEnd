import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx';
import {LanguageProvider} from './context/LanguageContext.tsx';
import {initConsent} from './lib/consent.ts';
import './index.css';

// Initialise the consent manager before the app renders so that Google Consent
// Mode is set to the stored choice (or denied by default) and the Meta Pixel is
// never loaded before the user grants consent.
initConsent();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
