import {useState} from 'react';
import {ArrowUpRight, ChevronDown} from 'lucide-react';
import {Link} from 'react-router-dom';
import {useLanguage} from '../context/LanguageContext';
import {faqContent, type FaqItem} from '../faq/content';
import PageIntro from './PageIntro';

const focusClass = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2C2C2E]';
const linkClass = `rounded-sm underline decoration-[#5E5E62] underline-offset-4 hover:decoration-[#2C2C2E] ${focusClass}`;

function Question({id, question, answer}: FaqItem) {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${id}`;

  return (
    <>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={answerId}
          onClick={() => setOpen(!open)}
          className="group flex min-h-14 w-full cursor-pointer items-center justify-between gap-3 rounded-sm py-3.5 text-left leading-snug font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C2C2E]"
        >
          <span className="underline-offset-4 group-hover:underline">{question}</span>
          <ChevronDown className={`size-5 shrink-0 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </h3>
      <div id={answerId} hidden={!open}>
        <p className="max-w-prose pb-5 leading-relaxed text-[var(--color-ink-soft)]">
          {answer.map((part, index) => typeof part === 'string' ? part : (
            <Link key={index} to={part.to} className={linkClass}>{part.label}</Link>
          ))}
        </p>
      </div>
    </>
  );
}

export default function Faq() {
  const {lang} = useLanguage();
  const {heading, intro, groups, contactHeading, contactText, contactLabel} = faqContent[lang];

  return (
    <article lang={lang} className="mx-auto max-w-7xl px-4 pt-28 pb-16 font-sans text-[var(--color-ink)] sm:px-6 sm:pt-36 sm:pb-24 lg:px-8">
      <PageIntro label="FAQ" title={heading} description={intro} className="border-b border-[#2C2C2E]/15 pb-8 sm:pb-10" />

      <div className="divide-y divide-[#2C2C2E]/15">
        {groups.map(({id, title, questions}) => (
          <section key={id} aria-labelledby={`faq-${id}`} className="grid gap-4 py-7 sm:gap-5 sm:py-9 md:grid-cols-[minmax(0,1fr)_minmax(0,2.35fr)] lg:gap-10">
            <h2 id={`faq-${id}`} className="text-xl leading-tight font-semibold tracking-tight sm:text-2xl md:pt-2">{title}</h2>
            <div className="divide-y divide-[#2C2C2E]/15 rounded-2xl border border-[#2C2C2E]/15 bg-white/60">
              {questions.map((item) => (
                <div key={item.id} className="px-4 sm:px-6"><Question {...item} /></div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section aria-labelledby="faq-contact" className="mt-5 flex flex-col items-start gap-5 rounded-3xl border border-[#2C2C2E]/10 bg-[var(--color-surface-alt)] p-5 sm:p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="faq-contact" className="text-xl font-semibold tracking-tight sm:text-2xl">{contactHeading}</h2>
          <p className="mt-2 leading-relaxed text-[var(--color-ink-soft)]">{contactText}</p>
        </div>
        <Link to="/contatti" className={`cta-button inline-flex min-h-12 shrink-0 items-center gap-2 px-4 py-3 text-sm font-semibold motion-reduce:transition-none ${focusClass}`}>
          {contactLabel} <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </section>
    </article>
  );
}
