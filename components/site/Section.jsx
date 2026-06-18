export function Section({ id, eyebrow, title, subtitle, children, className = '', center = true }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="container">
        {(eyebrow || title || subtitle) && (
          <div className={`mx-auto mb-12 max-w-2xl ${center ? 'text-center' : ''}`}>
            {eyebrow && (
              <div className={`mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground`}>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
