import {ArrowUpRight, ChevronDown, ChevronRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import {type Article, blogPath, blogTitle, formatArticleDate} from '../blog/articles';
import ArticleCover from './ArticleCover';

export default function BlogArticle({article}: {article: Article}) {
  const {Body, cover, cta, faq, publishedOn, modifiedOn} = article;

  return (
    <article lang={article.language} className="mx-auto max-w-7xl px-4 pt-28 pb-20 font-sans sm:px-6 sm:pt-36 lg:px-8">
      <nav aria-label="Percorso di navigazione" className="mb-8 text-sm text-[#5E5E62]">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li><Link to="/" className="underline-offset-4 hover:underline">Home</Link></li>
          <li className="flex items-center gap-2">
            <ChevronRight className="size-3 shrink-0" aria-hidden="true" />
            <Link to={blogPath} className="underline-offset-4 hover:underline">{blogTitle}</Link>
          </li>
          <li className="flex items-center gap-2" aria-current="page">
            <ChevronRight className="size-3 shrink-0" aria-hidden="true" />
            {article.shortTitle}
          </li>
        </ol>
      </nav>

      <header className="border-b border-[#2C2C2E]/15 pb-8 sm:pb-10">
        <p className="flex items-center gap-2 text-sm font-semibold">
          <span className="size-2 rounded-full bg-[#F6C73B]" aria-hidden="true" />
          {article.category}
        </p>
        <h1 className="mt-4 text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.08] font-bold tracking-tight text-balance">
          {article.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#4C4C50] sm:text-xl">{article.excerpt}</p>
        <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm text-[#5E5E62]">
          <span>Di <span className="font-semibold text-[#2C2C2E]">{article.author}</span></span>
          {publishedOn && <span>Pubblicato il <time dateTime={publishedOn}>{formatArticleDate(publishedOn)}</time></span>}
          {modifiedOn && modifiedOn !== publishedOn && (
            <span>Aggiornato il <time dateTime={modifiedOn}>{formatArticleDate(modifiedOn)}</time></span>
          )}
        </div>
      </header>

      <ArticleCover
        cover={cover}
        sizes="(min-width: 1280px) 1216px, (min-width: 1024px) calc(100vw - 64px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
        className="mt-8 h-auto w-full rounded-3xl"
        priority
      />

      <div className="mt-8 sm:mt-12">
        <div className="editorial-prose"><Body /></div>

        {faq.length > 0 && (
          <section className="mt-14" aria-labelledby="article-faq">
            <h2 id="article-faq" className="mb-5 text-2xl font-semibold tracking-tight sm:text-3xl">Domande frequenti</h2>
            <div className="divide-y divide-[#2C2C2E]/15 rounded-2xl border border-[#2C2C2E]/15 bg-white/60">
              {faq.map(({question, answer}) => (
                <details key={question} className="group px-4 sm:px-6">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                    {question}
                    <ChevronDown className="size-5 shrink-0 group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="pb-5 leading-relaxed text-[#4C4C50]">{answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {cta && (
          <section className="mt-10 rounded-3xl border border-[#2C2C2E]/10 bg-[#E5E4E0] p-5 sm:p-8" aria-labelledby="article-cta">
            <h2 id="article-cta" className="text-2xl font-semibold tracking-tight">{cta.title}</h2>
            <p className="mt-3 leading-relaxed text-[#4C4C50]">{cta.text}</p>
            <Link to={cta.href} className="cta-button mt-5 inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold">
              {cta.label} <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </section>
        )}
      </div>
    </article>
  );
}
