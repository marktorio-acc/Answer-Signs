// Decorative SVG components used to give the site a unique, hand-crafted feel
// rather than the typical “AI gradient blur” look.

export function ShieldMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 140" fill="none" aria-hidden>
      <path
        d="M60 6 L110 22 V70 C110 102 88 124 60 134 C32 124 10 102 10 70 V22 L60 6 Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.6"
      />
      <path
        d="M40 70 H80 M70 60 L82 70 L70 80"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlueprintLines({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 400 200" fill="none" aria-hidden>
      <defs>
        <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </pattern>
      </defs>
      <rect x="10" y="20" width="160" height="60" stroke="currentColor" strokeDasharray="2 4" />
      <line x1="10" y1="90" x2="170" y2="90" stroke="currentColor" strokeDasharray="4 4" />
      <text x="10" y="105" fill="currentColor" fontSize="9" fontFamily="monospace" opacity="0.7">3600mm</text>
      <rect x="200" y="20" width="180" height="80" stroke="currentColor" fill="url(#hatch)" />
      <text x="200" y="115" fill="currentColor" fontSize="9" fontFamily="monospace" opacity="0.7">ACRYLIC · LED · ALUMINUM</text>
      <circle cx="30" cy="160" r="4" stroke="currentColor" />
      <line x1="34" y1="160" x2="380" y2="160" stroke="currentColor" strokeDasharray="1 3" />
      <text x="40" y="178" fill="currentColor" fontSize="9" fontFamily="monospace" opacity="0.7">FAB-2024-A · SHEET 01 OF 03</text>
    </svg>
  );
}

export function ArrowMotif({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 140" fill="none" aria-hidden>
      <path d="M10 70 H150 M130 50 L155 70 L130 90" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M170 30 V110" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
