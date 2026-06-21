import Link from 'next/link';

export function Logo({ className = '' }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Answer Signs home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/answer-signs-logo.png"
        alt="Answer Signs logo — Philippine signage company since 1977"
        width={48}
        height={48}
        className="h-12 w-12 object-contain transition-transform group-hover:scale-105 drop-shadow-sm"
      />
      <span className="hidden sm:flex flex-col leading-none">
        <span className="font-display text-xl tracking-wider text-foreground">
          ANSWER <span className="text-accent">SIGNS</span>
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Since 1977</span>
      </span>
    </Link>
  );
}
