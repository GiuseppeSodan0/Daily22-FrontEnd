import React, { createContext, useContext, useState, useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {blogLanguage, localizedBlogPath} from '../blog/articles';
import { translations, Language, TranslationKey } from '../i18n/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey | string, fallback?: any) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function savedLanguage(): Language {
  const saved = localStorage.getItem('daily_lang') || localStorage.getItem('language');
  return saved === 'it' ? 'it' : 'en';
}

function storeLanguage(language: Language) {
  localStorage.setItem('daily_lang', language);
  localStorage.setItem('language', language);
}

export const LanguageProvider: React.FC<{children: React.ReactNode; initialLanguage?: Language}> = ({children, initialLanguage}) => {
  const {pathname, search, hash} = useLocation();
  const navigate = useNavigate();
  const pageLanguage = blogLanguage(pathname);
  const [preference, setLangState] = useState<Language>(() => initialLanguage ?? pageLanguage ?? savedLanguage());
  const lang = pageLanguage ?? preference;

  useEffect(() => {
    if (pageLanguage) {
      setLangState(pageLanguage);
      storeLanguage(pageLanguage);
    } else if (initialLanguage) {
      setLangState(savedLanguage());
    }
  }, [initialLanguage, pageLanguage]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    storeLanguage(newLang);
    const localizedPath = localizedBlogPath(pathname, newLang);
    if (localizedPath && localizedPath !== pathname) navigate({pathname: localizedPath, search, hash});
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string, fallback?: any): any => {
    const keys = key.split('.');
    let obj: any = translations[lang];
    let found = true;
    for (const k of keys) {
      if (obj && typeof obj === 'object' && k in obj) {
        obj = obj[k];
      } else {
        found = false;
        break;
      }
    }

    if (found && obj !== undefined) {
      return obj;
    }

    let fallbackObj: any = translations['it'];
    let fallbackFound = true;
    for (const fk of keys) {
      if (fallbackObj && typeof fallbackObj === 'object' && fk in fallbackObj) {
        fallbackObj = fallbackObj[fk];
      } else {
        fallbackFound = false;
        break;
      }
    }

    if (fallbackFound && fallbackObj !== undefined) {
      return fallbackObj;
    }

    return fallback !== undefined ? fallback : key;
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
