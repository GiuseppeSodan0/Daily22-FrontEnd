import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
import test from 'node:test';

const require = createRequire(new URL('../package.json', import.meta.url));
const {transformSync} = require('esbuild');
const source = fs.readFileSync(new URL('../src/lib/consent.ts', import.meta.url), 'utf8');
const bootstrap = fs.readFileSync(new URL('../public/iubenda-consent.js', import.meta.url), 'utf8');
const code = transformSync(source, {loader:'ts', format:'cjs', target:'es2022'}).code;
const denied = {necessary:true, functionality:false, experience:false, measurement:false, marketing:false};
const all = {purposes:{1:true, 2:true, 3:true, 4:true, 5:true}};
const none = {purposes:{1:true, 2:false, 3:false, 4:false, 5:false}};

function browser({preferences = null, language = 'it', pathname = '/', oldCallback} = {}) {
  let current = preferences;
  const calls = [];
  const scripts = [];
  const listeners = new Map();
  const intervals = [];
  const localStorage = {
    getItem(key) {
      if (key === 'daily_lang') return language;
      // An old positive record must never be treated as iubenda consent.
      return JSON.stringify({...denied, measurement:true, marketing:true, savedAt:new Date().toISOString()});
    },
  };
  const listen = (type, fn) => {
    if (!listeners.has(type)) listeners.set(type, []);
    listeners.get(type).push(fn);
  };
  const window = {
    dataLayer:[],
    gtag(...args) { calls.push(args); },
    addEventListener:listen,
    dispatchEvent(event) { for (const listener of listeners.get(event.type) ?? []) listener(event); },
    setInterval(fn) { intervals.push(fn); },
    _iub:{csConfiguration:{callback:{onReady:oldCallback}}, cs:{api:{getPreferences() {
      if (current instanceof Error) throw current;
      return current;
    }, openPreferences() { calls.push(['openPreferences']); }}}},
  };
  const insert = (s) => scripts.push({src:s.src, attributes:s.attributes, gaDisabled:window['ga-disable-G-GGC7N0WSLY']});
  const document = {
    documentElement:{lang:'it'}, hidden:false,
    addEventListener:listen,
    createElement() { return {attributes:{}, setAttribute(k,v) {this.attributes[k] = v;}}; },
    head:{appendChild:insert},
    getElementsByTagName() {return [{parentNode:{insertBefore:insert}}];},
  };
  const module = {exports:{}};
  const context = vm.createContext({window, document, localStorage, location:{pathname}, module, exports:module.exports,
    CustomEvent:class {constructor(type, options={}) {this.type=type; this.detail=options.detail;}}});
  vm.runInContext(bootstrap, context);
  vm.runInContext(code, context);
  const callbacks = window._iub.csConfiguration.callback;
  return {consent:module.exports, window, calls, scripts, callbacks,
    ready() {callbacks.onReady();},
    choose(value) {current=value; callbacks.onPreferenceExpressed();},
    poll(value) {current=value; for (const fn of intervals) fn();},
  };
}

test('old positive consent and an uninitialised CMP never authorise tracking', () => {
  const b=browser({preferences:all});
  b.consent.initConsent();
  assert.equal(b.consent.getStoredConsent(), null);
  assert.equal(b.scripts.length, 0);
  assert.equal(b.window['ga-disable-G-GGC7N0WSLY'], true);
  for (const field of ['analytics_storage','ad_storage','ad_user_data','ad_personalization']) {
    assert.equal(b.calls.at(-1)[2][field], 'denied');
  }
});

test('first visit and explicit rejection keep optional scripts unloaded', () => {
  const b=browser(); b.consent.initConsent(); b.ready(); b.choose(none);
  assert.equal(b.scripts.length, 0);
  assert.equal(b.consent.getStoredConsent().marketing, false);
  assert.equal(b.consent.getStoredConsent().measurement, false);
});

test('valid CMP consent received before the React bundle is restored once', () => {
  let previous=0;
  const b=browser({preferences:all, oldCallback() {previous++;}});
  b.ready(); b.consent.initConsent(); b.consent.initConsent();
  assert.equal(previous, 1);
  assert.equal(b.scripts.length, 2);
  assert.equal(b.window['ga-disable-G-GGC7N0WSLY'], false);
  assert.equal(b.calls.filter(([name])=>name==='config').length, 1);
});

test('per-purpose choices load only the authorised vendor', () => {
  const b=browser(); b.consent.initConsent(); b.ready();
  b.choose({purposes:{4:true,5:false}});
  assert.equal(b.scripts.length, 1);
  assert.match(b.scripts[0].src, /gtag\/js/);
  assert.equal(b.scripts[0].gaDisabled, false);
  const m=browser(); m.consent.initConsent(); m.ready();
  m.choose({purposes:{4:false,5:true}});
  assert.equal(m.scripts.length, 1);
  assert.match(m.scripts[0].src, /fbevents/);
  assert.equal(m.window['ga-disable-G-GGC7N0WSLY'], true);
});

test('malformed values cannot grant tracking', () => {
  for (const value of [null, {}, {purposes:[]}, {purposes:{4:'true',5:1}}, {purposes:{4:null,5:'false'}}]) {
    const b=browser({preferences:value}); b.consent.initConsent(); b.ready();
    assert.equal(b.scripts.length, 0);
  }
});

test('withdrawal disables loaded Analytics and revokes Meta without duplicate tags', () => {
  const b=browser(); b.consent.initConsent(); b.ready(); b.choose(all); b.choose(none);
  assert.equal(b.window['ga-disable-G-GGC7N0WSLY'], true);
  assert.ok(b.window.fbq.queue.some(args=>args[0]==='consent' && args[1]==='revoke'));
  assert.equal(b.calls.at(-1)[2].analytics_storage, 'denied');
  b.choose(all);
  assert.equal(b.scripts.length, 2);
});

test('CMP failure and preference expiry revoke all optional tracking', () => {
  const b=browser({preferences:all}); b.consent.initConsent(); b.ready();
  b.callbacks.onFatalError();
  assert.equal(b.consent.getStoredConsent(), null);
  assert.equal(b.window['ga-disable-G-GGC7N0WSLY'], true);
  const p=browser({preferences:all}); p.consent.initConsent(); p.ready(); p.poll(null);
  assert.equal(p.window['ga-disable-G-GGC7N0WSLY'], true);
});

test('CMP API errors fail closed and a later withdrawal is read on polling', () => {
  const b=browser({preferences:all}); b.consent.initConsent(); b.ready(); b.poll(none);
  assert.equal(b.window['ga-disable-G-GGC7N0WSLY'], true);
  b.poll(new Error('CMP storage unavailable'));
  assert.equal(b.consent.getStoredConsent(), null);
});

test('Meta registration remains consent-gated and fires once', () => {
  const b=browser(); b.consent.initConsent(); b.ready();
  assert.equal(b.consent.trackMetaCompleteRegistration(), false);
  b.choose(all);
  assert.equal(b.consent.trackMetaCompleteRegistration(), true);
  assert.equal(b.consent.trackMetaCompleteRegistration(), false);
});

test('the CMP follows the website language and editorial URL', () => {
  assert.equal(browser({language:'it'}).window._iub.csConfiguration.lang, 'it');
  assert.equal(browser({language:'en'}).window._iub.csConfiguration.lang, 'en-GB');
  assert.equal(browser({language:'en',pathname:'/blog/article'}).window._iub.csConfiguration.lang, 'it');
  assert.equal(browser({language:'it',pathname:'/en/blog/article'}).window._iub.csConfiguration.lang, 'en-GB');
});
