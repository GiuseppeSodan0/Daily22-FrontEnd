import {ArrowUpRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import {articlePath, articleTranslations, blog, formatArticleDate} from '../blog/articles';
import type {Language} from '../i18n/translations';
import ArticleCover from './ArticleCover';
import PageIntro from './PageIntro';

export default function Blog({language}: {language: Language}) {
  const {heading, description} = blog[language];
  const articles = articleTranslations.map((translations) => translations[language]);

  return (
    <section lang={language} className="mx-auto max-w-7xl px-4 pt-28 pb-20 font-sans sm:px-6 sm:pt-36 lg:px-8">
      <PageIntro label="Blog" title={heading} description={description} />
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {articles.map((article, index) => (
          <li key={article.slug}>
            <article className="h-full">
              <Link
                to={articlePath(article)}
                aria-labelledby={`blog-title-${article.slug}`}
                className="card-premium group block h-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2C2C2E]"
              >
                <ArticleCover
                  cover={article.cover}
                  sizes="(min-width: 1280px) 596px, (min-width: 1024px) calc(50vw - 44px), (min-width: 768px) calc(50vw - 36px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                  className="block h-auto w-full"
                  priority={index === 0}
                />
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-semibold text-[#5E5E62]">{article.category}</p>
                  <h2 id={`blog-title-${article.slug}`} className="mt-3 text-2xl leading-tight font-semibold tracking-tight underline-offset-4 group-hover:underline group-focus-visible:underline">
                    {article.title} <ArrowUpRight className="inline size-5 align-text-bottom" aria-hidden="true" />
                  </h2>
                  <p className="mt-4 leading-relaxed text-[#4C4C50]">{article.excerpt}</p>
                  {article.publishedOn && (
                    <time dateTime={article.publishedOn} className="mt-5 block text-sm text-[#5E5E62]">
                      {formatArticleDate(article.publishedOn, article.language)}
                    </time>
                  )}
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
