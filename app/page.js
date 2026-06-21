'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, MessageCircle, Headphones,
  Target, Zap, TrendingUp, Users, Briefcase, Star, Mail, Phone, Calendar,
  Linkedin, Facebook, Twitter, Instagram, MapPin, CheckCircle2, Quote,
  ChevronLeft, ChevronRight, Compass, LineChart, Rocket, BarChart3, Lightbulb,
  Building2, Hammer, Award,
} from 'lucide-react';

import { Navbar } from '@/components/site/Navbar';
import { Section } from '@/components/site/Section';
import { Counter } from '@/components/site/Counter';
import { Logo } from '@/components/site/Logo';
import { ShieldMark, BlueprintLines, ArrowMotif } from '@/components/site/Decorations';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const TRUSTED = [
  "McDonald's",
  'Torre Lorenzo',
  'Megaworld Lifestyle Malls',
  'Uniqlo',
  'ExpressWash+ Laundry',
  'Ayala Land',
  'Raintree Restaurants',
  'H&M',
  'South Supermarket',
  'Phoenix',
  'Zenutrients',
  'St. Peter',
  'ADP',
  'Metrobank',
  'Robinsons Malls',
  'Subway',
  'KKK Turbo',
];

const STATS = [
  { value: 47, suffix: '+', label: 'Years in Business', icon: Award },
  { value: 50, suffix: '+', label: 'National Brands Served', icon: Building2 },
  { value: 10000, suffix: '+', label: 'Signs Fabricated', icon: Hammer },
  { value: 98, suffix: '%', label: 'Client Retention', icon: ShieldCheck },
];

const TIMELINE = [
  { year: '1977', title: 'A small workshop opens',
    text: 'Archie Trinidad founds Answer Advertising Associates with fewer than five painters at 1078 Pasong Tamo (now Chino Roces), Makati — hand-painting coco-cloth streamers and silkscreen prints.' },
  { year: '1980s', title: 'Pioneering thermo-formed acrylic',
    text: 'The team pioneers thermo-forming acrylic in the Philippines, paving the way for the acquisition of the prestigious Kodak Express account.' },
  { year: '1990s', title: 'McDonald’s comes aboard',
    text: 'Another landmark account, McDonald’s Philippines, is acquired in the mid-nineties — cementing Answer’s reputation as the country’s premier signage partner.' },
  { year: '1997', title: 'Incorporation',
    text: 'After almost 20 years of operations the company incorporates itself — Answer Advertising Corporation is registered at the Securities and Exchange Commission.' },
  { year: 'Today', title: 'Parañaque headquarters',
    text: 'Answer Signs eventually moves to Parañaque City, where our modern offices and signage fabrication factory operate today — serving the Philippines’ most trusted brands.' },
];

const CASES = [
  {
    industry: 'Quick-Service Restaurants',
    client: "McDonald's Philippines",
    challenge: 'Maintaining strict brand consistency across hundreds of nationwide branches — from arches to drive-thru pylons — with reliable turnaround.',
    solution: 'Standardized acrylic channel-letter program with calibrated LED illumination, plus rapid in-house thermo-forming for surge rollouts and remodels.',
    results: 'Nationwide brand-consistent storefronts, on-time store-opening rollouts, and a decades-long partnership across hundreds of locations.',
    metrics: [
      { label: 'Locations', before: 'launch', after: 'nationwide' },
      { label: 'Brand Match', before: '—',     after: '100%' },
      { label: 'Partnership', before: '1990s',   after: '30+ yrs' },
    ],
    gradient: 'from-red-500/15 via-amber-500/10 to-transparent',
  },
  {
    industry: 'Lifestyle Malls',
    client: 'Megaworld Lifestyle Malls',
    challenge: 'Cohesive yet distinctive signage across Forbes Town Center, Burgos Circle, Venice Piazza and Tuscany — each with its own architectural personality.',
    solution: 'Custom architectural signage program: monumental pylons, illuminated tenant directories, faceted facade letters and bespoke wayfinding kits per district.',
    results: 'Four signature destinations brought to life with night-time-ready signage and a unified Megaworld lifestyle standard across the BGC and Mc-Kinley estates.',
    metrics: [
      { label: 'Districts', before: '—', after: '4 estates' },
      { label: 'Sign Types', before: '—', after: '12+' },
      { label: 'Coverage', before: '—', after: 'BGC + McKinley' },
    ],
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
  },
  {
    industry: 'Global Retail',
    client: 'Uniqlo · H&M · Subway',
    challenge: 'Replicating exacting global brand standards locally — every radius, finish and lumen level audited by the international brand team.',
    solution: 'Precision CNC-cut acrylic facades, illuminated halo-lit letters and storefront lightboxes manufactured in-house to spec, installed on tight mall fit-out schedules.',
    results: 'Approved-on-first-inspection storefronts for global flagship retailers — delivered on schedule across multiple Metro Manila and provincial openings.',
    metrics: [
      { label: 'Brands', before: '—', after: 'Uniqlo / H&M / Subway' },
      { label: 'First-pass QA', before: '—', after: 'Approved' },
      { label: 'On-time delivery', before: '—', after: '100%' },
    ],
    gradient: 'from-sky-500/20 via-indigo-500/5 to-transparent',
  },
];

const WHY = [
  { icon: Award,       title: 'Almost 50 years of expertise',  text: 'Founded in 1977. Almost five decades of refining signage craft — from hand-painted streamers to precision thermo-formed acrylic.' },
  { icon: Hammer,      title: 'In-house fabrication',           text: 'Our Parañaque factory handles CNC routing, thermo-forming, channel-letter assembly, painting and LED integration end-to-end.' },
  { icon: Lightbulb,   title: 'Philippine signage pioneer',     text: 'First to industrialize thermo-formed acrylic in the country — the same technique behind Kodak Express, McDonald’s and global retailers.' },
  { icon: ShieldCheck, title: 'Built to last in PH conditions', text: 'Engineered for tropical sun, monsoon rain and salt air. Materials and finishes specified for years of daylight-to-night legibility.' },
  { icon: Building2,   title: 'Trusted by national brands',     text: 'Long-term partner to McDonald’s, Ayala Land, Megaworld, Robinsons, Metrobank, Uniqlo, H&M, Subway and more.' },
  { icon: Headphones,  title: 'Responsive nationwide service',  text: 'From Luzon to Mindanao — surveys, fabrication, installation and after-sales support coordinated from a single team.' },
];

const TESTIMONIALS = [
  {
    name: 'Brand Standards Lead', position: 'F&B Group', company: 'Quick-Service Restaurants', rating: 5,
    text: 'Answer has been our signage partner across hundreds of locations. The brand consistency, on-time delivery and after-sales support are simply unmatched in the Philippines.',
  },
  {
    name: 'Project Manager', position: 'Mall Development', company: 'Lifestyle Mall Operator', rating: 5,
    text: 'They handled monumental pylons, facades and wayfinding for an entire lifestyle district — all delivered to spec and installed on schedule. A true craftsmanship partner.',
  },
  {
    name: 'Visual Merchandising', position: 'Asia-Pacific', company: 'Global Retailer', rating: 5,
    text: 'Our global brand team signed off on the first-pass install. That almost never happens for a new market. Answer Signs gets the details right the first time.',
  },
  {
    name: 'Construction Lead', position: 'Mixed-Use Developer', company: 'Major PH Developer', rating: 5,
    text: 'From thermo-formed letters to architectural signage, Answer has been a reliable partner for over a decade. Their factory turnaround keeps our store-opening calendars intact.',
  },
  {
    name: 'Operations Manager', position: 'Banking', company: 'Top-tier PH Bank', rating: 5,
    text: 'Branch signage that survives the elements and stays brand-true year after year. We trust Answer for every new branch and remodel.',
  },
];

const PROCESS = [
  { icon: Compass,   title: 'Survey & Brief',  text: 'On-site survey, brand-guideline review, and a detailed quote — we measure twice before we make anything.' },
  { icon: LineChart, title: 'Design & Engineer', text: 'CAD drawings, material specs, mock-ups and approvals — engineered for legibility, longevity and local building code.' },
  { icon: Hammer,    title: 'Fabricate',          text: 'CNC, thermo-forming, channel-letter assembly, painting and LED integration — all in-house at our Parañaque factory.' },
  { icon: Rocket,    title: 'Install & Support',  text: 'Professional installation nationwide, post-install QA and ongoing maintenance to keep your signs looking new.' },
];

const FAQ = [
  { q: 'What types of signs do you make?',
    a: 'Acrylic and metal channel letters, illuminated lightboxes, pylon and monument signs, architectural facade signage, wayfinding systems, neon and LED, vinyl and digital print, plus the full range of thermo-formed acrylic. If it goes on a storefront, mall, building or roadside, we make it.' },
  { q: 'Do you handle nationwide rollouts?',
    a: 'Yes. We have decades of experience executing nationwide programs — from McDonald’s storefronts to mall pylons — with consistent quality from Luzon to Mindanao. Our Parañaque factory ships fabricated sign kits and our installation crews mobilize across the country.' },
  { q: 'How long does a typical project take?',
    a: 'A simple storefront sign can be designed, fabricated and installed in 2\u20133 weeks. Larger architectural programs, multi-site rollouts and engineered pylons typically run 4\u201312 weeks depending on scope, permits and site readiness. We commit to dates only after the site survey.' },
  { q: 'Can you match international brand standards?',
    a: 'Absolutely. We routinely fabricate to global brand books for Uniqlo, H&M, Subway and others — matching exact Pantone, lumen levels, radius details and finishes. First-pass brand-team approval is our standard.' },
  { q: 'Are your signs built for Philippine weather?',
    a: 'Every sign is engineered for tropical sun, heavy rain and coastal salt air. We specify UV-stable acrylics, marine-grade hardware, sealed LED modules and corrosion-resistant frames so signs stay brand-true for years.' },
  { q: 'How do I get a quote?',
    a: 'Send us your brief, location and any brand guidelines. We’ll respond within 24 hours to schedule a site survey, then come back with a formal quotation and timeline. Reach us by email, phone, WhatsApp or Messenger — whichever is easiest.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTIONS
// ─────────────────────────────────────────────────────────────────────────────

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-blueprint mask-fade-b opacity-40 dark:opacity-25" />
        <div className="absolute -top-32 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-blue/10 via-accent/15 to-brand-blue/10 blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob" />
        {/* Floating technical drawings */}
        <BlueprintLines className="absolute left-4 top-28 hidden h-32 w-[420px] text-foreground/30 lg:block" />
        <ShieldMark      className="absolute right-8  top-32 hidden h-40 w-40 text-accent/15 lg:block" />
      </div>

      <div className="container">
        <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Crafting iconic Philippine signage since 1977
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            The signs behind the country&rsquo;s most{' '}
            <span className="relative whitespace-nowrap">
              <span className="text-gradient">trusted brands</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" aria-hidden>
                <path d="M2 9 Q 75 2 150 6 T 298 5" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            From hand-painted streamers in 1977 to today&rsquo;s precision thermo-formed acrylic and architectural signage — Answer Signs has been the Philippines&rsquo; signage partner of choice for McDonald&rsquo;s, Uniqlo, Ayala Land, Megaworld and dozens more.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-7 text-base shadow-lg shadow-primary/20">
              <a href="#contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 text-base">
              <a href="#stories">View Our Success Stories</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" />In-house fabrication</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" />Nationwide installation</div>
            <div className="hidden sm:flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" />Built for PH weather</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="relative rounded-2xl border border-border bg-card/60 p-2 shadow-2xl shadow-primary/10 backdrop-blur">
            <div className="rounded-xl border border-border bg-gradient-to-br from-background to-secondary/40 p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label} className="text-left">
                    <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <s.icon className="h-4 w-4" />
                    </div>
                    <div className="text-3xl font-display tracking-wider sm:text-4xl">
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustedBy = () => {
  const list = [...TRUSTED, ...TRUSTED];
  return (
    <section className="relative border-y border-border bg-secondary/40 py-12">
      {/* Top + bottom industrial stripes */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-stripes opacity-90" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-stripes opacity-90" />
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
          <span className="h-px w-12 bg-accent" aria-hidden />
          <p className="text-center font-display text-base tracking-[0.25em] text-foreground sm:text-lg">
            TRUSTED BY THE PHILIPPINES&rsquo; MOST RECOGNIZABLE BRANDS
          </p>
          <span className="h-px w-12 bg-accent" aria-hidden />
        </div>
        <div className="relative mt-7 overflow-hidden mask-fade-r">
          <div className="marquee flex w-max items-center gap-10 pr-10">
            {list.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-12 shrink-0 items-center gap-2.5 rounded-md border border-border/60 bg-background px-4 text-[15px] font-semibold tracking-tight text-foreground/85 hover:border-accent/60 hover:text-foreground transition-colors"
              >
                <span className="inline-block h-2 w-2 rotate-45 bg-accent" aria-hidden />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="relative isolate overflow-hidden py-24 sm:py-32">
      {/* Background photo */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/mcdonalds.jpg"
          alt="McDonald's drive-thru pylon signage and channel-letter facade fabricated and installed by Answer Signs in the Philippines"
          loading="lazy"
          className="h-full w-full object-cover object-center scale-105"
        />
        {/* Layered overlays for legibility + brand tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06101f]/92 via-[#06101f]/78 to-[#3a1605]/85" />
        <div className="absolute inset-0 bg-blueprint opacity-[0.08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--brand-blue)/0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.22),transparent_55%)]" />
      </div>

      {/* Top + bottom industrial stripe accents */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-stripes opacity-90" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-stripes opacity-90" />

      {/* Decorative blueprint */}
      <BlueprintLines className="pointer-events-none absolute left-6 bottom-8 hidden h-40 w-[480px] text-white/30 lg:block" />
      <ShieldMark className="pointer-events-none absolute right-8 top-12 hidden h-32 w-32 text-accent/30 lg:block" />

      <div className="container relative">
        {/* Header */}
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            About Us
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A signage story written over <span className="text-orange-blue">five decades</span>.
          </h2>
          <p className="mt-4 text-balance text-base text-white/70 sm:text-lg">
            From a small Makati workshop in 1977 to the partner of choice for the country&rsquo;s most iconic brands &mdash; like the McDonald&rsquo;s pylon above.
          </p>
          <div className="mt-3 text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">
            Pictured: McDonald&rsquo;s Drive-Thru pylon &amp; channel-letter facade &mdash; fabricated &amp; installed by Answer Signs
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Story card */}
          <motion.div {...fadeUp} className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/15 bg-black/55 p-8 text-white backdrop-blur-xl sm:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" aria-hidden />
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium tracking-wide text-white/90">
                  Our Story
                </span>
                <span className="stamp text-[11px] text-accent">Est. 1977</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                How Answer Signs became a Philippine signage pioneer.
              </h3>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-white/85">
                <p>
                  With less than five painters, <span className="font-semibold text-white">Archie Trinidad</span> opened
                  <span className="font-semibold text-white"> Answer Advertising Associates in 1977</span> at 1078 Pasong Tamo St. (now Chino Roces), Makati. From hand-painting coco-cloth streamers and silkscreen printing, the team began pioneering thermo-forming acrylic &mdash; this paved the way to the acquisition of <span className="font-semibold text-white">Kodak Express</span> in the 80s Philippines.
                </p>
                <p>
                  Another prestigious account, <span className="font-semibold text-white">McDonald&rsquo;s</span>, was acquired in the mid-nineties. After almost 20 years of operations, the company incorporated itself and <span className="font-semibold text-white">Answer Advertising Corporation</span> was registered at the Securities and Exchange Commission.
                </p>
                <p>
                  <span className="font-semibold text-white">Answer Signs</span> eventually moved to Para&ntilde;aque, where the offices and factory are located today &mdash; continuing to craft signage for the country&rsquo;s most trusted brands.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {['Thermo-formed acrylic', 'Channel letters', 'Architectural signage', 'Pylon & monument', 'LED & neon', 'Nationwide rollout'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/90">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-black/40 p-7 text-white backdrop-blur-xl sm:p-8">
              <div className="mb-5 flex items-baseline justify-between">
                <div className="font-display text-2xl tracking-wider text-white">TIMELINE</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">1977 &rarr; Today</div>
              </div>
              <div className="relative pl-6">
                <div aria-hidden className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-white/30 to-transparent" />
                <ol className="space-y-5">
                  {TIMELINE.map((t) => (
                    <li key={t.year} className="relative">
                      <span aria-hidden className="absolute -left-[18px] top-1.5 inline-flex h-3 w-3 items-center justify-center rounded-full border-2 border-black bg-accent ring-2 ring-accent/40" />
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-base tracking-wider text-accent">{t.year}</span>
                        <span className="text-sm font-semibold tracking-tight text-white">{t.title}</span>
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-white/70">{t.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stories = () => {
  return (
    <Section
      id="stories"
      eyebrow="Success Stories"
      title="The signs you see every day."
      subtitle={"A small selection of national brands we’ve fabricated and installed signage for — from storefronts to monumental pylons."}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {CASES.map((c, i) => (
          <motion.article key={c.client} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
            <Card className={`group relative h-full overflow-hidden border-border bg-gradient-to-br ${c.gradient} p-7 transition-all hover:-translate-y-1 hover:shadow-2xl`}>
              <div className="mb-5 flex items-center justify-between">
                <Badge variant="secondary" className="rounded-full px-3 py-1 text-[11px] font-medium">{c.industry}</Badge>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{c.client}</h3>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Challenge</div>
                  <p className="leading-relaxed text-foreground/85">{c.challenge}</p>
                </div>
                <div>
                  <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Solution</div>
                  <p className="leading-relaxed text-foreground/85">{c.solution}</p>
                </div>
                <div>
                  <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Results</div>
                  <p className="leading-relaxed font-medium text-foreground">{c.results}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl border border-border bg-background/60 p-3 backdrop-blur">
                {c.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{m.label}</div>
                    <div className="mt-1 text-xs font-semibold text-accent">{m.after}</div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.article>
        ))}
      </div>      {/* Brands strip */}
      <motion.div {...fadeUp} className="mt-12">
        <Card className="p-6 sm:p-8">
          <div className="text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            And many more brands we&rsquo;ve been proud to make signs for
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {TRUSTED.map((name) => (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80 hover:border-accent/50 hover:text-foreground transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {name}
              </span>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};

const WhyChoose = () => {
  return (
    <Section
      eyebrow="Why teams choose us"
      title="Craft, reliability and a 47-year track record."
      subtitle={"Six reasons the country’s most demanding brands keep coming back."}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map((w, i) => (
          <motion.div key={w.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}>
            <Card className="group h-full p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent dark:bg-secondary dark:text-foreground">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS.length;
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);
  const t = TESTIMONIALS[idx];

  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="What brand teams say about working with us."
      subtitle="Selected feedback from operating leaders we’ve worked alongside."
      className="bg-secondary/30 border-y border-border/60"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="relative overflow-hidden p-8 sm:p-12 shadow-xl">
            <Quote className="absolute right-6 top-6 h-12 w-12 text-accent/15" aria-hidden />
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="mt-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
                {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <div className="font-semibold tracking-tight">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.position} · {t.company}</div>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-muted-foreground/40'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" onClick={next} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Process = () => {
  return (
    <Section
      id="process"
      eyebrow="Our process"
      title="From brief to brand-true install."
      subtitle="Four phases. Every project. No mystery."
    >
      <div className="relative">
        <div aria-hidden className="absolute left-0 right-0 top-[72px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <motion.div key={p.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="relative">
              <div className="relative z-10 mb-5 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background shadow-sm">
                  <p.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="text-5xl font-bold tracking-tight text-muted-foreground/15">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Contact = () => {
  const channels = [
    {
      label: 'Email',
      value: 'aac.answersigns@gmail.com',
      sub: 'We reply within 24 hours',
      href: 'mailto:aac.answersigns@gmail.com?subject=New%20Signage%20Inquiry',
      Icon: Mail,
      color: 'from-sky-500 to-blue-600',
      copy: 'aac.answersigns@gmail.com',
    },
    {
      label: 'Phone',
      phones: [
        { display: '+63 2 8824 6909', href: 'tel:+63288246909' },
        { display: '+63 2 8824 6911', href: 'tel:+63288246911' },
      ],
      sub: 'Mon–Fri · 8am–6pm PHT',
      Icon: Phone,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      label: 'WhatsApp',
      value: '+63 917 898 0418',
      sub: 'Usually replies in minutes',
      href: 'https://wa.me/639178980418?text=Hi%20Answer%20Signs%2C%20I%27d%20love%20to%20talk%20about%20a%20signage%20project.',
      Icon: MessageCircle,
      color: 'from-green-500 to-emerald-600',
    },
    {
      label: 'Facebook',
      value: '@answersigns',
      sub: 'Follow our work & projects',
      href: 'https://www.facebook.com/answersigns',
      Icon: Facebook,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      label: 'Book on Google Calendar',
      value: 'Schedule a site survey',
      sub: 'Opens Google Calendar',
      href:
        'https://calendar.google.com/calendar/render?action=TEMPLATE' +
        '&text=' + encodeURIComponent('Site Survey with Answer Signs') +
        '&details=' + encodeURIComponent('Site survey & signage consultation with Answer Signs. Please share your location and any brand guidelines beforehand.') +
        '&add=' + encodeURIComponent('aac.answersigns@gmail.com'),
      Icon: Calendar,
      color: 'from-violet-500 to-purple-600',
    },
  ];

  return (
    <section id="contact" className="relative isolate overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute left-1/2 top-20 h-[420px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-r from-accent/15 via-brand-blue/10 to-accent/15 blur-3xl" />
      </div>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Get in touch
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Ready to make your brand visible?
          </h2>
          <p className="mt-5 text-balance text-base text-muted-foreground sm:text-lg">
            Pick your favorite channel &mdash; every button opens directly. Tell us about your project, location and brand guidelines, and we&rsquo;ll come back with a clear point of view, fast.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            We typically respond within 24 hours
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((c, i) => {
            const isMultiPhone = Array.isArray(c.phones);
            const Wrapper = isMultiPhone ? motion.div : motion.a;
            const wrapperProps = isMultiPhone
              ? {}
              : {
                  href: c.href,
                  target: c.href.startsWith('http') ? '_blank' : undefined,
                  rel: c.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                  onClick: () => {
                    if (c.copy) {
                      try { navigator.clipboard?.writeText(c.copy); toast.success(`${c.label} copied to clipboard`); } catch (e) {}
                    }
                  },
                };

            return (
              <Wrapper
                key={c.label}
                {...wrapperProps}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl"
              >
                <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${c.color} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
                <div className="flex items-center justify-between">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-md`}>
                    <c.Icon className="h-5 w-5" />
                  </div>
                  {!isMultiPhone && (
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  )}
                </div>

                {isMultiPhone ? (
                  <div className="mt-5">
                    <div className="text-sm font-medium text-muted-foreground">{c.label}</div>
                    <div className="mt-2 space-y-1.5">
                      {c.phones.map((p) => (
                        <a
                          key={p.href}
                          href={p.href}
                          className="group/phone flex items-center justify-between rounded-md hover:text-accent transition-colors"
                        >
                          <span className="text-base font-semibold tracking-tight">{p.display}</span>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover/phone:-translate-y-0.5 group-hover/phone:translate-x-0.5 group-hover/phone:text-accent" />
                        </a>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">{c.sub}</div>
                  </div>
                ) : (
                  <div className="mt-5">
                    <div className="text-sm font-medium text-muted-foreground">{c.label}</div>
                    <div className="mt-1 text-lg font-semibold tracking-tight break-all">{c.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{c.sub}</div>
                  </div>
                )}
              </Wrapper>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-center text-xs text-muted-foreground">
          <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Offices &amp; Factory &middot; Para&ntilde;aque City, Metro Manila, Philippines</div>
          <div>Or simply email us &mdash; we read every message personally.</div>
        </div>
      </div>
    </section>
  );
};

const FaqSection = () => {
  // FAQPage JSON-LD: enables rich-result FAQ snippets in Google search results.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <Section
      id="faq"
      eyebrow="Frequently asked"
      title="Answers to common questions."
      subtitle={"Still curious? Reach out and we’ll happily answer in detail."}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQ.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-0 px-6">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Answer Signs is a brand of Answer Advertising Corporation, a Philippine signage pioneer since 1977. We design, fabricate and install signage for the country&rsquo;s most trusted brands — from Makati to Mindanao.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Facebook,  href: 'https://www.facebook.com/answersigns',           label: 'Facebook' },
                { Icon: Instagram, href: 'https://instagram.com/answersigns',              label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-tight">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About Us</a></li>
              <li><a href="#stories" className="hover:text-foreground">Success Stories</a></li>
              <li><a href="#process" className="hover:text-foreground">Our Process</a></li>
              <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-tight">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:aac.answersigns@gmail.com" className="hover:text-foreground">aac.answersigns@gmail.com</a></li>
              <li><a href="tel:+63288246909" className="hover:text-foreground">+63 2 8824 6909</a></li>
              <li><a href="tel:+63288246911" className="hover:text-foreground">+63 2 8824 6911</a></li>
              <li>Para&ntilde;aque City<br/>Metro Manila, Philippines</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {year} Answer Advertising Corporation. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Stories />
        <WhyChoose />
        <Testimonials />
        <Process />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
