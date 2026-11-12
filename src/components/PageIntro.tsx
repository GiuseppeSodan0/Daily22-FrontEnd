import type {ReactNode} from 'react';

interface PageIntroProps {
  label: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export default function PageIntro({label, title, description, children, className = ''}: PageIntroProps) {
  return (
    <header className={`text-left font-sans text-[var(--color-ink)] ${className}`}>
      <div className="mb-5 h-1 w-12 rounded-full bg-[var(--accent-color,#F6C73B)]" aria-hidden="true" />
      <p className="mb-3 text-sm font-semibold text-[var(--color-ink-soft)]">{label}</p>
      <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08] font-bold tracking-tight text-balance">{title}</h1>
      {description && (
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-[var(--color-ink-soft)]">{description}</p>
      )}
      {children}
    </header>
  );
}
