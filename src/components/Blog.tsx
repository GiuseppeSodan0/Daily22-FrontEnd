import {ArrowUpRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import {articlePath, articles, blogTitle, formatArticleDate} from '../blog/articles';
import ArticleCover from './ArticleCover';

export default function Blog() {
  return (
    <section lang="it" className="mx-auto max-w-5xl px-4 pt-28 pb-20 font-sans sm:px-6 sm:pt-36 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{blogTitle}</h1>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {articles.map((article, index) => (
          <li key={article.slug}>
            <article className="card-premium h-full overflow-hidden">
              <ArticleCover
                cover={article.cover}
                sizes="(min-width: 1024px) 468px, (min-width: 768px) calc(50vw - 36px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                className="block h-auto w-full"
                priority={index === 0}
              />
              <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold text-[#5E5E62]">{article.category}</p>
                <h2 className="mt-3 text-2xl leading-tight font-semibold tracking-tight">
                  <Link to={articlePath(article)} className="inline underline-offset-4 hover:underline focus-visible:underline">
                    {article.title} <ArrowUpRight className="inline size-5 align-text-bottom" aria-hidden="true" />
                  </Link>
                </h2>
                <p className="mt-4 leading-relaxed text-[#4C4C50]">{article.excerpt}</p>
                {article.publishedOn && (
                  <time dateTime={article.publishedOn} className="mt-5 block text-sm text-[#5E5E62]">
                    {formatArticleDate(article.publishedOn)}
                  </time>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
