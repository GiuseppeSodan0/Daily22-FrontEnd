/* Keep the CMP callbacks available before the generated iubenda widget runs. */
(function () {
  var iub = window._iub = window._iub || [];
  var config = iub.csConfiguration = iub.csConfiguration || {};
  var callbacks = config.callback = config.callback || {};
  var ready = false;
  var lastValue;
  var language = document.documentElement.lang;
  try {
    language = localStorage.getItem('daily_lang') || localStorage.getItem('language') || 'en';
  } catch (_) {}
  if (location.pathname === '/en/blog' || location.pathname.startsWith('/en/blog/')) language = 'en';
  else if (location.pathname === '/blog' || location.pathname.startsWith('/blog/')) language = 'it';
  config.lang = language === 'it' ? 'it' : 'en-GB';

  function publish(preferences) {
    window.__dailyIubendaPreferences = preferences;
    var value = JSON.stringify(preferences);
    if (value !== lastValue) {
      lastValue = value;
      window.dispatchEvent(new CustomEvent('daily-iubenda-preferences'));
    }
  }
  function sync() {
    try {
      var api = window._iub && window._iub.cs && window._iub.cs.api;
      publish(ready && api && api.getPreferences ? api.getPreferences() : null);
    } catch (_) { publish(null); }
  }
  function addCallback(name, action) {
    var previous = callbacks[name];
    callbacks[name] = function () {
      try { if (typeof previous === 'function') previous.apply(this, arguments); }
      finally { action(); }
    };
  }
  addCallback('onReady', function () {
    ready = true;
    sync();
    window.dispatchEvent(new CustomEvent('daily-iubenda-ready'));
  });
  ['onPreferenceExpressed', 'onPreferenceFirstExpressed', 'onPreferenceChange'].forEach(function (name) {
    addCallback(name, sync);
  });
  ['onStartupFailed', 'onFatalError'].forEach(function (name) {
    addCallback(name, function () { ready = false; publish(null); });
  });
  window.addEventListener('focus', sync);
  document.addEventListener('visibilitychange', sync);
  // Read only the CMP API, never the old banner's localStorage choice.
  window.setInterval(function () { if (!document.hidden) sync(); }, 2000);
  publish(null);
})();
