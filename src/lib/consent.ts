// Analytics adapters: all choices come exclusively from iubenda.
export type ConsentCategory =
  | 'necessary'
  | 'functionality'
  | 'experience'
  | 'measurement'
  | 'marketing';

export interface ConsentState {
  necessary: boolean;
  functionality: boolean;
  experience: boolean;
  measurement: boolean;
  marketing: boolean;
}

export const CONSENT_STORAGE_KEY = 'daily_cookie_consent';
export const CONSENT_EVENT = 'daily-consent-changed';

const META_PIXEL_ID = '1392170737307178';
const GA_MEASUREMENT_ID = 'G-GGC7N0WSLY';

export const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  functionality: false,
  experience: false,
  measurement: false,
  marketing: false,
};

// iubenda is the only source of consent. Legacy records cannot grant tracking.
export function getStoredConsent(): ConsentState | null {
  const preferences = (window as any).__dailyIubendaPreferences;
  const purposes = preferences?.purposes;
  if (!purposes || typeof purposes !== 'object' || Array.isArray(purposes)) return null;
  return {
    necessary: true,
    functionality: purposes['2'] === true,
    experience: purposes['3'] === true,
    measurement: purposes['4'] === true,
    marketing: purposes['5'] === true,
  };
}

export function openCookiePreferences(): boolean {
  const api = (window as any)._iub?.cs?.api;
  if (typeof api?.openPreferences !== 'function') return false;
  api.openPreferences();
  return true;
}

function gtagConsentUpdate(state: ConsentState): void {
  const w = window as any;
  const payload = {
    ad_storage: state.marketing ? 'granted' : 'denied',
    ad_user_data: state.marketing ? 'granted' : 'denied',
    ad_personalization: state.marketing ? 'granted' : 'denied',
    analytics_storage: state.measurement ? 'granted' : 'denied',
    functionality_storage: state.functionality ? 'granted' : 'denied',
    personalization_storage: state.experience ? 'granted' : 'denied',
    security_storage: 'granted',
  };
  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', payload);
  } else {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(['consent', 'update', payload]);
  }
}

let metaPixelLoaded = false;
let metaPageViewSent = false;
let googleTagLoaded = false;

function ensureGoogleTag(): void {
  const w = window as any;
  if (googleTagLoaded) return;
  const s = document.createElement('script');
  s.async = true;
  // This tag is already gated by an explicit CMP purpose, before insertion.
  s.setAttribute('data-cmp-ab', '1');
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag === 'function') {
    w.gtag('js', new Date());
    w.gtag('config', GA_MEASUREMENT_ID);
  } else {
    w.dataLayer.push(['js', new Date()]);
    w.dataLayer.push(['config', GA_MEASUREMENT_ID]);
  }
  googleTagLoaded = true;
}

function ensureMetaPixel(): void {
  const w = window as any;
  if (metaPixelLoaded || typeof w.fbq === 'function') {
    metaPixelLoaded = true;
    return;
  }
  const n: any = function (...args: any[]) {
    if (n.callMethod) {
      n.callMethod.apply(n, args);
    } else {
      n.queue.push(args);
    }
  };
  w.fbq = n;
  if (!w._fbq) w._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];

  const t = document.createElement('script');
  t.async = true;
  t.setAttribute('data-cmp-ab', '1');
  t.src = 'https://connect.facebook.net/en_US/fbevents.js';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode?.insertBefore(t, s);

  w.fbq('init', META_PIXEL_ID);
  metaPixelLoaded = true;
}

function applyMetaConsent(state: ConsentState): void {
  const w = window as any;
  if (state.marketing) {
    ensureMetaPixel();
    if (typeof w.fbq === 'function') {
      w.fbq('consent', 'grant');
      if (!metaPageViewSent) {
        w.fbq('track', 'PageView');
        metaPageViewSent = true;
      }
    }
  } else if (typeof w.fbq === 'function') {
    // Revoke any consent previously granted to Meta in this session.
    w.fbq('consent', 'revoke');
  }
}

export function applyConsent(state: ConsentState): void {
  // This also stops an already-loaded Google tag after consent is withdrawn.
  (window as any)[`ga-disable-${GA_MEASUREMENT_ID}`] = !state.measurement;
  gtagConsentUpdate(state);
  if (state.measurement) ensureGoogleTag();
  applyMetaConsent(state);
}

let initialised = false;

export function initConsent(): void {
  if (initialised) return;
  initialised = true;
  const sync = () => {
    const state = getStoredConsent() || DEFAULT_CONSENT;
    applyConsent(state);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { ...state } }));
  };
  window.addEventListener('daily-iubenda-preferences', sync);
  sync();
}

let completeRegistrationFired = false;

export function trackMetaCompleteRegistration(): boolean {
  if (completeRegistrationFired) return false;
  try {
    const w = window as any;
    const stored = getStoredConsent();
    const consentState = stored || DEFAULT_CONSENT;
    if (!consentState.marketing) return false;
    if (!metaPixelLoaded && typeof w.fbq !== 'function') {
      ensureMetaPixel();
    }
    if (typeof w.fbq !== 'function') return false;
    w.fbq('track', 'CompleteRegistration');
    completeRegistrationFired = true;
    return true;
  } catch {
    return false;
  }
}
