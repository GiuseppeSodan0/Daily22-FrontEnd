// Central consent manager for the site.
//
// This is the single source of truth for cookie/tracking consent. It:
//  - stores the user's choice in localStorage;
//  - drives Google Consent Mode (default denied is set in index.html, updates here);
//  - loads/updates the Meta Pixel strictly based on the marketing consent;
//  - notifies the UI when the choice changes.
//
// It intentionally mirrors the category model used by the Preferences page and the
// cookie banner, so there is only ONE consent system on the site.

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

export function getStoredConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      necessary: true,
      functionality: !!parsed.functionality,
      experience: !!parsed.experience,
      measurement: !!parsed.measurement,
      marketing: !!parsed.marketing,
    };
  } catch {
    return null;
  }
}

export function hasStoredConsent(): boolean {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY) !== null;
  } catch {
    return false;
  }
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
  // Update Consent Mode first, then load Google tags only when measurement is allowed.
  gtagConsentUpdate(state);
  if (state.measurement) ensureGoogleTag();
  applyMetaConsent(state);
}

export function saveConsent(state: ConsentState): void {
  const normalised: ConsentState = {
    necessary: true,
    functionality: !!state.functionality,
    experience: !!state.experience,
    measurement: !!state.measurement,
    marketing: !!state.marketing,
  };
  try {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ ...normalised, savedAt: new Date().toISOString() })
    );
  } catch {
    // localStorage unavailable
  }
  applyConsent(normalised);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: normalised }));
}

let initialised = false;

export function initConsent(): void {
  if (initialised) return;
  initialised = true;
  // Apply the stored choice, or the safe default (all non-essential denied).
  applyConsent(getStoredConsent() || DEFAULT_CONSENT);
  window.addEventListener(CONSENT_EVENT, (e: any) => {
    if (e?.detail) applyConsent(e.detail as ConsentState);
  });
}
