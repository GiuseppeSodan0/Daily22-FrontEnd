import type {ComponentType} from 'react';
import type {Language} from '../i18n/translations';
import {emergencyPlan} from './posts/emergency-plan';
import {emergencyPlanEn} from './posts/emergency-plan.en';
import {metodo22} from './posts/metodo22';

export interface Article {
  slug: string;
  shortTitle: string;
  title: string;
  category: string;
  subcategory?: string;
  author: string;
  authorType?: 'Person' | 'Organization';
  publisher?: string;
  language: 'it-IT' | 'en-GB';
  publishedOn?: string;
  modifiedOn?: string;
  scheduledFor?: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  showExcerpt?: boolean;
  socialTitle: string;
  socialDescription: string;
  keywords: string[];
  tags: string[];
  cover?: {
    filename: string;
    title: string;
    alt: string;
    caption?: string;
    description?: string;
    expectedWidth?: number;
    expectedHeight?: number;
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
    path: '/blog', locale: 'it-IT', title: 'Blog / Approfondimenti', heading: 'Approfondimenti',
    description: 'Approfondimenti di daily sulla sicurezza sul lavoro, la prevenzione e la gestione operativa delle emergenze.',
    breadcrumb: 'Percorso di navigazione', by: 'Di', published: 'Pubblicato il', updated: 'Aggiornato il', faq: 'Domande frequenti',
  },
  en: {
    path: '/en/blog', locale: 'en-GB', title: 'Blog / Insights', heading: 'Insights',
    description: 'Insights from daily on workplace safety, risk prevention and how to manage emergencies in practice.',
    breadcrumb: 'Breadcrumb', by: 'By', published: 'Published on', updated: 'Updated on', faq: 'Frequently asked questions',
  },
} as const;

export const articleTranslations: readonly {it: Article; en?: Article}[] = [
  ...(import.meta.env.VITE_METODO22_RELEASED ? [{it: metodo22}] : []),
  {it: emergencyPlan, en: emergencyPlanEn},
];

export function articlesForLanguage(language: Language) {
  return articleTranslations.flatMap((translations) => {
    const article = translations[language];
    return article ? [article] : [];
  });
}

export function articleLanguage(article: Article): Language {
  return article.language === 'en-GB' ? 'en' : 'it';
}

export function articlePath(article: Article) {
  return `${blog[articleLanguage(article)].path}/${article.slug}`;
}

export function findArticle(pathname: string) {
  const path = pathname.replace(/\/$/, '');
  return blogLanguages.flatMap(articlesForLanguage).find((article) => articlePath(article) === path);
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
    const translated = translations?.[language];
    return translated ? articlePath(translated) : undefined;
  }
  return blogLanguage(pathname) ? blog[language].path : undefined;
}

export function formatArticleDate(date: string, language: Article['language']) {
  return new Intl.DateTimeFormat(language, {dateStyle: 'long', timeZone: 'UTC'}).format(new Date(date));
}
