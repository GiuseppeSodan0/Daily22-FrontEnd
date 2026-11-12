import type {ComponentType} from 'react';
import {emergencyPlan} from './posts/emergency-plan';

export interface Article {
  slug: string;
  shortTitle: string;
  title: string;
  category: string;
  author: string;
  language: 'it-IT';
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
export const blogPath = '/blog';
export const blogTitle = 'Blog / Approfondimenti';
export const articles: readonly Article[] = [emergencyPlan];

export function articlePath(article: Article) {
  return `${blogPath}/${article.slug}`;
}

export function findArticle(pathname: string) {
  return articles.find((article) => articlePath(article) === pathname.replace(/\/$/, ''));
}

export function isBlogPage(pathname: string) {
  return pathname.replace(/\/$/, '') === blogPath || Boolean(findArticle(pathname));
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat('it-IT', {dateStyle: 'long', timeZone: 'UTC'}).format(new Date(date));
}
