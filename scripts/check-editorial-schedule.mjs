import assert from 'node:assert/strict';
import {existsSync, readFileSync, readdirSync} from 'node:fs';
import {join} from 'node:path';

const {metodo22} = JSON.parse(readFileSync('src/blog/schedule.json', 'utf8'));
const buildAt = process.env.EDITORIAL_BUILD_AT ?? new Date().toISOString();
const released = Date.parse(buildAt) >= Date.parse(metodo22.publishAt);
const path = '/blog/prevenzione-sicurezza-lavoro-metodo-22';
const output = `dist/_editorial${path}.html`;

assert.equal(existsSync(output), released, 'Scheduled article availability differs from its publication date');
const blog = readFileSync('dist/_editorial/blog.html', 'utf8');
const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
assert.equal(blog.includes(`href="${path}"`), released, 'Blog listing exposes the wrong publication state');
assert.equal(sitemap.includes(`<loc>https://daily22.it${path}</loc>`), released, 'Sitemap exposes the wrong publication state');

if (released) {
  const html = readFileSync(output, 'utf8');
  const {['@graph']: graph} = JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)[1]);
  const post = graph.find((entity) => entity['@type'] === 'BlogPosting');
  assert.equal(post.author['@type'], 'Person');
  assert.equal(post.author.name, 'Ilaria Leonardis');
  assert.equal(post.publisher.name, 'Daily Practice 22 S.r.l.');
  assert.equal(post.datePublished, metodo22.publishAt);
  assert.equal(post.inLanguage, 'it-IT');
  assert.equal(post.image, 'https://daily22.it/assets/images/metodo22-cultura-prevenzione-lavoro.webp');
  assert.match(html, /property="og:image" content="https:\/\/daily22\.it\/assets\/images\/metodo22-cultura-prevenzione-lavoro\.webp"/);
  assert.match(html, /name="twitter:image" content="https:\/\/daily22\.it\/assets\/images\/metodo22-cultura-prevenzione-lavoro\.webp"/);
  assert.match(html, /<figcaption[^>]*>Il lavoro cambia\. La prevenzione deve saperlo riconoscere\.<\/figcaption>/);
  assert.equal(graph.some((entity) => entity['@type'] === 'FAQPage'), false);
} else {
  const files = readdirSync('dist', {recursive: true}).filter((file) => /\.(?:js|html|xml)$/.test(file));
  for (const file of files) {
    const content = readFileSync(join('dist', file), 'utf8');
    for (const marker of ['prevenzione-sicurezza-lavoro-metodo-22', 'La cultura della prevenzione va oltre']) {
      assert.equal(content.includes(marker), false, `Future article leaked into ${file}`);
    }
  }
}

console.log(`METODO 22 publication state verified at ${buildAt}: ${released ? 'released' : 'scheduled'}`);
