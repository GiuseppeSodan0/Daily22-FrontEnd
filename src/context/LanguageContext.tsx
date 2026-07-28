import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from '../i18n/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey | string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('daily_lang');
    return (saved === 'en' || saved === 'it') ? saved : 'it';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('daily_lang', newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let obj: any = translations[lang];
    for (const k of keys) {
      if (obj && typeof obj === 'object' && k in obj) {
        obj = obj[k];
      } else {
        // Fallback to Italian if key missing in target language
        let fallbackObj: any = translations['it'];
        for (const fk of keys) {
          if (fallbackObj && typeof fallbackObj === 'object' && fk in fallbackObj) {
            fallbackObj = fallbackObj[fk];
          } else {
            return fallback || key;
          }
        }
        return typeof fallbackObj === 'string' ? fallbackObj : fallback || key;
      }
    }
    return typeof obj === 'string' ? obj : fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
