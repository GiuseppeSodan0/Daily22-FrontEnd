import {mkdir, readFile, writeFile} from 'node:fs/promises';
import {dirname} from 'node:path';
import {renderToStaticMarkup, renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from '../App';
import {LanguageProvider} from '../context/LanguageContext';
import {articlePath, articles, blogPath, siteUrl} from './articles';
import {editorialHead} from './seo';

const template = await readFile('dist/index.html', 'utf8');
if (!template.includes('<div id="root"></div>') || !/<title>[^<]*<\/title>/.test(template)) {
  throw new Error('Editorial prerender requires the root and title in dist/index.html');
}

for (const article of articles) {
  for (const date of [article.publishedOn, article.modifiedOn]) {
    if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || new Date(date).toISOString().slice(0, 10) !== date)) {
      throw new Error(`Invalid editorial date for ${article.slug}: ${date}`);
    }
  }
  if (article.modifiedOn && (!article.publishedOn || article.modifiedOn < article.publishedOn)) {
    throw new Error(`Modification date precedes publication for ${article.slug}`);
  }
}

const pages = [
  {path: blogPath, lastmod: undefined},
  ...articles.map((article) => ({path: articlePath(article), lastmod: article.modifiedOn ?? article.publishedOn})),
];

for (const {path} of pages) {
  const {title, tags} = editorialHead(path);
  const head = renderToStaticMarkup(
    <>
      <title>{title}</title>
      {tags.map((descriptor, index) => {
        const Tag = descriptor.tag;
        const text = Tag === 'script' ? {dangerouslySetInnerHTML: {__html: descriptor.text}} : {};
        return <Tag key={index} data-editorial="" {...descriptor.attrs} {...text} />;
      })}
    </>,
  );
  const markup = renderToString(
    <StaticRouter location={path}>
      <LanguageProvider initialLanguage="it">
        <App />
      </LanguageProvider>
    </StaticRouter>,
  );
  const preloads = markup.match(/^(?:<link rel="preload"[^>]*>)+/)?.[0] ?? '';
  const html = template
    .replace('<head>', `<head data-editorial-path="${path}">`)
    .replace(/<title>[^<]*<\/title>/, () => head + preloads)
    .replace('<div id="root"></div>', () => `<div id="root" data-prerendered>${markup.slice(preloads.length)}</div>`);

  const output = `dist/_editorial${path}.html`;
  await mkdir(dirname(output), {recursive: true});
  await writeFile(output, html);
}

const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const entries = pages.map(({path, lastmod}) => [
  '  <url>',
  `    <loc>${siteUrl}${path}</loc>`,
  ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
  '  </url>',
].join('\n'));
await writeFile('dist/sitemap.xml', sitemap.replace('</urlset>', `${entries.join('\n')}\n</urlset>`));
