import Link from 'next/link';

export function Logo({ className = '' }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="Answer Signs home">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
        <svg viewBox="0 0 32 32" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 22 L16 8 L23 22 M12 17 H20" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-bold tracking-tight text-base text-foreground">Answer<span className="text-accent">.</span>Signs</span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Since 1977</span>
      </span>
    </Link>
  );
}
