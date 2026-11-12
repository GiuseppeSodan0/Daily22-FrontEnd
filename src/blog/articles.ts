import type {ComponentType} from 'react';
import type {Language} from '../i18n/translations';
import {emergencyPlan} from './posts/emergency-plan';
import {emergencyPlanEn} from './posts/emergency-plan.en';

export interface Article {
  slug: string;
  shortTitle: string;
  title: string;
  category: string;
  author: string;
  language: 'it-IT' | 'en-GB';
  publishedOn?: string;
  modifiedOn?: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  socialTitle: string;
  socialDescription: string;
  keywords: string[];
  tags: string[];
  cover?: {
    filename: string;
    title: string;
    alt: string;
    asset?: {
      src: string;
      width: number;
      height: number;
      variants?: {src: string; width: number}[];
    };
  };
  Body: ComponentType;
  faq: {question: string; answer: string}[];
  cta?: {title: string; text: string; label: string; href: string};
}

export const siteUrl = 'https://daily22.it';
export const blogLanguages = ['it', 'en'] as const;
export const blog = {
  it: {
    path: '/blog', locale: 'it-IT', title: 'Blog / Approfondimenti',
    description: 'Approfondimenti di daily sulla sicurezza sul lavoro, la prevenzione e la gestione operativa delle emergenze.',
    breadcrumb: 'Percorso di navigazione', by: 'Di', published: 'Pubblicato il', updated: 'Aggiornato il', faq: 'Domande frequenti',
  },
  en: {
    path: '/en/blog', locale: 'en-GB', title: 'Blog / Insights',
    description: 'Insights from daily on workplace safety, risk prevention and how to manage emergencies in practice.',
    breadcrumb: 'Breadcrumb', by: 'By', published: 'Published on', updated: 'Updated on', faq: 'Frequently asked questions',
  },
} as const;

export const articleTranslations: readonly Record<Language, Article>[] = [{it: emergencyPlan, en: emergencyPlanEn}];

export function articleLanguage(article: Article): Language {
  return article.language === 'en-GB' ? 'en' : 'it';
}

export function articlePath(article: Article) {
  return `${blog[articleLanguage(article)].path}/${article.slug}`;
}

export function findArticle(pathname: string) {
  const path = pathname.replace(/\/$/, '');
  return articleTranslations.flatMap((group) => Object.values(group)).find((article) => articlePath(article) === path);
}

export function blogLanguage(pathname: string): Language | undefined {
  const path = pathname.replace(/\/$/, '');
  const article = findArticle(path);
  return article ? articleLanguage(article) : blogLanguages.find((lang) => blog[lang].path === path);
}

export function isBlogPage(pathname: string) {
  return Boolean(blogLanguage(pathname));
}

export function localizedBlogPath(pathname: string, language: Language) {
  const article = findArticle(pathname);
  if (article) {
    const translations = articleTranslations.find((group) => group[articleLanguage(article)] === article);
    return translations && articlePath(translations[language]);
  }
  return blogLanguage(pathname) ? blog[language].path : undefined;
}

export function formatArticleDate(date: string, language: Article['language']) {
  return new Intl.DateTimeFormat(language, {dateStyle: 'long', timeZone: 'UTC'}).format(new Date(date));
}
