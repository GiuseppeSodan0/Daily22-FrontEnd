import {articlePath, blog, blogLanguage, blogLanguages, findArticle, isBlogPage, localizedBlogPath, siteUrl} from './articles';
import {faqContent, faqPath, isFaqPage} from '../faq/content';
import type {Language} from '../i18n/translations';

type HeadTag =
  | {tag: 'meta'; attrs: {name: string; content: string} | {property: string; content: string}}
  | {tag: 'link'; attrs: {rel: string; href: string; hrefLang?: string}}
  | {tag: 'script'; attrs: {type: string}; text: string};

export const defaultPageTitle = 'daily - sicurezza sul lavoro';

export function pageHead(pathname: string, language: Language = 'it') {
  const faq = isFaqPage(pathname) ? faqContent[language] : undefined;
  const editorialLanguage = blogLanguage(pathname);
  if (!faq && !editorialLanguage) return {title: defaultPageTitle, tags: [] as HeadTag[]};

  const editorial = blog[editorialLanguage ?? 'it'];
  const article = findArticle(pathname);
  const url = `${siteUrl}${faq ? faqPath : article ? articlePath(article) : editorial.path}`;
  const title = faq?.title ?? article?.seoTitle ?? `${editorial.title} | daily`;
  const description = faq?.description ?? article?.description ?? editorial.description;
  const tags: HeadTag[] = [];
  const meta = (name: string, content: string) => tags.push({tag: 'meta', attrs: {name, content}});
  const og = (property: string, content: string) => tags.push({tag: 'meta', attrs: {property, content}});
  const jsonLd = (schema: object) => tags.push({
    tag: 'script',
    attrs: {type: 'application/ld+json'},
    text: JSON.stringify(schema).replace(/</g, '\\u003c'),
  });

  tags.push({tag: 'link', attrs: {rel: 'canonical', href: url}});
  meta('description', description);
  meta('robots', 'index, follow');
  og('og:title', article?.socialTitle ?? title);
  og('og:description', article?.socialDescription ?? description);
  og('og:type', article ? 'article' : 'website');
  og('og:url', url);
  og('og:locale', (faq?.locale ?? editorial.locale).replace('-', '_'));
  og('og:site_name', 'daily');

  if (faq) {
    const image = `${siteUrl}/assets/images/LOGO_DAILY_POSITIVO_ORIZZONTALE-png.png`;
    og('og:image', image);
    og('og:image:alt', faq.logoAlt);
    meta('twitter:card', 'summary');
    meta('twitter:title', title);
    meta('twitter:description', description);
    meta('twitter:image', image);
    meta('twitter:image:alt', faq.logoAlt);
    jsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${url}#faqpage`,
      url,
      name: faq.heading,
      inLanguage: faq.locale,
      mainEntity: faq.groups.flatMap(({questions}) => questions.map(({question, answer}) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer.map((part) => typeof part === 'string' ? part : part.label).join(''),
        },
      }))),
    });
    return {title, tags};
  }

  for (const language of blogLanguages) {
    const path = localizedBlogPath(pathname, language);
    if (path) tags.push({tag: 'link', attrs: {rel: 'alternate', href: `${siteUrl}${path}`, hrefLang: language}});
  }

  if (!article) return {title, tags};

  meta('twitter:card', 'summary_large_image');
  meta('twitter:title', article.socialTitle);
  meta('twitter:description', article.socialDescription);

  const dateModified = article.modifiedOn ?? article.publishedOn;
  if (article.publishedOn) og('article:published_time', article.publishedOn);
  if (dateModified) og('article:modified_time', dateModified);
  og('article:section', article.category);
  article.tags.forEach((tag) => og('article:tag', tag));

  const {cover} = article;
  const image = cover?.asset ? new URL(cover.asset.src, siteUrl).href : undefined;
  if (image && cover?.asset) {
    og('og:image', image);
    og('og:image:type', 'image/webp');
    og('og:image:width', String(cover.asset.width));
    og('og:image:height', String(cover.asset.height));
    og('og:image:alt', cover.alt);
    meta('twitter:image', image);
    meta('twitter:image:alt', cover.alt);
  }

  const publisher = {'@type': 'Organization', name: 'daily', url: siteUrl};
  const graph = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: article.title,
      description,
      author: {'@type': 'Organization', name: article.author, url: siteUrl},
      publisher,
      mainEntityOfPage: {'@type': 'WebPage', '@id': url},
      datePublished: article.publishedOn,
      dateModified,
      inLanguage: article.language,
      articleSection: article.category,
      keywords: [...new Set([...article.keywords, ...article.tags])],
      image,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {'@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/`},
        {'@type': 'ListItem', position: 2, name: editorial.title, item: `${siteUrl}${editorial.path}`},
        {'@type': 'ListItem', position: 3, name: article.shortTitle, item: url},
      ],
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      ...graph,
      ...(article.faq.length ? [{
        '@type': 'FAQPage',
        '@id': `${url}#article-faq`,
        inLanguage: article.language,
        mainEntity: article.faq.map(({question, answer}) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {'@type': 'Answer', text: answer},
        })),
      }] : []),
    ],
  };

  jsonLd(schema);
  return {title, tags};
}

export function syncPageHead(pathname: string, language: Language) {
  const {dataset} = document.head;
  if (dataset.editorialPath === pathname && (dataset.editorialLanguage ?? 'it') === language) return;
  const existing = document.head.querySelectorAll('[data-editorial]');
  if (!existing.length && !isBlogPage(pathname) && !isFaqPage(pathname)) return;

  const {title, tags} = pageHead(pathname, language);
  document.title = title;
  existing.forEach((tag) => tag.remove());
  if (tags.length) document.head.querySelector('meta[name="description"]')?.remove();
  for (const descriptor of tags) {
    const element = document.createElement(descriptor.tag);
    element.setAttribute('data-editorial', '');
    for (const [name, value] of Object.entries(descriptor.attrs)) element.setAttribute(name, value);
    if (descriptor.tag === 'script') element.textContent = descriptor.text;
    document.head.append(element);
  }
  dataset.editorialPath = pathname;
  dataset.editorialLanguage = language;
}
