import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'header' | 'mobile' | 'footer';
}

export default function LanguageSwitcher({ className = '', variant = 'header' }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();

  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center gap-2 font-mono text-xs ${className}`}>
        <button
          type="button"
          onClick={() => setLang('en')}
          className={`px-2 py-1 rounded transition-colors ${
            lang === 'en'
              ? 'bg-[#f6c73b] text-[#2C2C2E] font-bold'
              : 'text-[#5E5E62] hover:text-[#2C2C2E]'
          }`}
          aria-label="Select English Language"
        >
          EN
        </button>
        <span className="text-[#2C2C2E]/30">|</span>
        <button
          type="button"
          onClick={() => setLang('it')}
          className={`px-2 py-1 rounded transition-colors ${
            lang === 'it'
              ? 'bg-[#f6c73b] text-[#2C2C2E] font-bold'
              : 'text-[#5E5E62] hover:text-[#2C2C2E]'
          }`}
          aria-label="Seleziona Lingua Italiana"
        >
          IT
        </button>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center p-0.5 rounded-full bg-[#2C2C2E]/5 border border-[#2C2C2E]/10 font-mono text-xs ${className}`}>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all duration-200 cursor-pointer ${
          lang === 'en'
            ? 'bg-[#f6c73b] text-[#2C2C2E] shadow-sm'
            : 'text-[#2C2C2E]/70 hover:text-[#2C2C2E]'
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('it')}
        className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all duration-200 cursor-pointer ${
          lang === 'it'
            ? 'bg-[#f6c73b] text-[#2C2C2E] shadow-sm'
            : 'text-[#2C2C2E]/70 hover:text-[#2C2C2E]'
        }`}
        aria-label="Italiano"
      >
        IT
      </button>
    </div>
  );
}
