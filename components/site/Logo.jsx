import Link from 'next/link';

export function Logo({ className = '' }) {
  return (
    <Link href="/" className={`group flex items-center gap-2 ${className}`} aria-label="Apex Strategy home">
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
        <svg viewBox="0 0 32 32" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 22 L16 8 L23 22 M12 17 H20" />
        </svg>
      </span>
      <span className="font-bold tracking-tight text-lg text-foreground">Apex<span className="text-accent">.</span></span>
    </Link>
  );
}
