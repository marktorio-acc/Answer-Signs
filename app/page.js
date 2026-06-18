'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, MessageCircle, Headphones,
  Target, Zap, TrendingUp, Users, Briefcase, Star, Mail, Phone, Calendar,
  Linkedin, Facebook, Twitter, Instagram, MapPin, CheckCircle2, Quote,
  ChevronLeft, ChevronRight, Compass, LineChart, Rocket, BarChart3,
} from 'lucide-react';

import { Navbar } from '@/components/site/Navbar';
import { Section } from '@/components/site/Section';
import { Counter } from '@/components/site/Counter';
import { Logo } from '@/components/site/Logo';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const TRUSTED = [
  'NorthwindCo', 'Lumera', 'Vanta Labs', 'Helio.io', 'PrimeWorks',
  'Stratus', 'Kindred', 'Atlas Group', 'Vertex AI', 'BluePeak',
];

const STATS = [
  { value: 150, suffix: '+', label: 'Projects Delivered', icon: Briefcase },
  { value: 98,  suffix: '%', label: 'Client Satisfaction', icon: ShieldCheck },
  { value: 50,  suffix: '+', label: 'Long-Term Partnerships', icon: Users },
  { value: 12,  suffix: 'yrs', label: 'Years of Experience', icon: TrendingUp },
];

const CASES = [
  {
    industry: 'SaaS',
    client: 'Lumera Analytics',
    challenge: 'Plateaued MRR growth and a 6.4% monthly churn rate eroding revenue.',
    solution: 'Rebuilt onboarding, repositioned ICP, and launched a usage-based pricing pilot.',
    results: 'In 6 months: churn dropped to 1.9%, MRR up 142%, NPS climbed from 22 to 61.',
    metrics: [
      { label: 'MRR Growth', before: '+4%', after: '+142%' },
      { label: 'Monthly Churn', before: '6.4%', after: '1.9%' },
      { label: 'NPS', before: '22', after: '61' },
    ],
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
  },
  {
    industry: 'E-commerce',
    client: 'Northwind Apparel',
    challenge: 'Rising CAC and stagnant repeat-purchase rate across 3 storefronts.',
    solution: 'Implemented full-funnel attribution, retention loops, and creator partnerships.',
    results: 'CAC fell 38%, repeat-purchase rate doubled, annual revenue grew 2.3x.',
    metrics: [
      { label: 'CAC',  before: '$84', after: '$52' },
      { label: 'Repeat Rate', before: '18%', after: '37%' },
      { label: 'Revenue', before: '$4.1M', after: '$9.4M' },
    ],
    gradient: 'from-sky-500/20 via-sky-500/5 to-transparent',
  },
  {
    industry: 'FinTech',
    client: 'Helio Capital',
    challenge: 'Lengthy 11-week sales cycles and inconsistent enterprise pipeline.',
    solution: 'Designed account-based GTM motion with tailored playbooks and outbound system.',
    results: 'Cycle time cut to 5 weeks, qualified pipeline up 3.6x, win rate +27 pts.',
    metrics: [
      { label: 'Sales Cycle', before: '11 wks', after: '5 wks' },
      { label: 'Qualified Pipeline', before: '1.0x', after: '3.6x' },
      { label: 'Win Rate', before: '21%', after: '48%' },
    ],
    gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
  },
];

const WHY = [
  { icon: Target,        title: 'Proven Expertise',           text: 'A team of senior operators with 12+ years of hands-on experience across SaaS, e-commerce, and B2B.' },
  { icon: MessageCircle, title: 'Transparent Communication', text: 'Weekly check-ins, shared dashboards, and no jargon — you always know exactly where things stand.' },
  { icon: Sparkles,      title: 'Customized Solutions',       text: 'No cookie-cutter playbooks. Every engagement is built around your stage, market and goals.' },
  { icon: Headphones,    title: 'Reliable Support',           text: 'Dedicated success leads, async response within 4h, and partnership beyond the project end-date.' },
  { icon: BarChart3,     title: 'Results-Driven Approach',    text: 'We tie every initiative to measurable KPIs. If we don\u2019t move the needle, we don\u2019t move on.' },
  { icon: ShieldCheck,   title: 'Trusted & Accountable',      text: 'Fixed-fee or outcomes-based engagements. Clear scope, honest timelines, no surprise invoices.' },
];

const TESTIMONIALS = [
  {
    name: 'Maya Patel', position: 'CEO', company: 'Lumera Analytics', rating: 5,
    text: 'Apex didn\u2019t just consult — they embedded with our team. Within two quarters we tripled MRR and finally have a repeatable growth engine.',
  },
  {
    name: 'David Chen', position: 'Founder', company: 'Northwind Apparel', rating: 5,
    text: 'The most useful agency engagement we\u2019ve ever had. They cut our CAC by nearly 40% and the systems they built are still running today.',
  },
  {
    name: 'Sara Okonkwo', position: 'VP Marketing', company: 'Helio Capital', rating: 5,
    text: 'Outstanding strategic clarity. They told us hard truths early, then helped us execute. Sales cycle is half what it used to be.',
  },
  {
    name: 'Lukas Meyer', position: 'COO', company: 'Vanta Labs', rating: 5,
    text: 'Refreshingly transparent. Real dashboards, weekly progress, real outcomes. The ROI conversation was over in month two.',
  },
  {
    name: 'Priya Rao', position: 'Head of Growth', company: 'PrimeWorks', rating: 5,
    text: 'They feel like an extension of our leadership team. Smart, fast, and deeply invested in the result, not just the deliverable.',
  },
];

const PROCESS = [
  { icon: Compass,   title: 'Discovery',  text: 'We dig deep into your business, market, and goals to uncover the real growth levers.' },
  { icon: LineChart, title: 'Strategy',   text: 'A focused, measurable plan with prioritized initiatives, owners and weekly milestones.' },
  { icon: Zap,       title: 'Execution',  text: 'Senior operators ship alongside your team — strategy plus the hands to make it real.' },
  { icon: Rocket,    title: 'Growth',     text: 'We measure, optimize and compound results into a durable engine that outlasts the engagement.' },
];

const FAQ = [
  { q: 'What industries do you work with?',
    a: 'We specialize in B2B SaaS, e-commerce, fintech, and professional services — but our methodology applies anywhere measurable outcomes matter. If you\u2019re unsure whether we\u2019re a fit, just reach out and we\u2019ll tell you honestly.' },
  { q: 'How quickly can we get started?',
    a: 'Most engagements kick off within 7\u201310 days of our initial call. For urgent priorities we\u2019ve started in as little as 48 hours. We\u2019ll match scope and timeline to your reality, not ours.' },
  { q: 'What makes your approach different?',
    a: 'We don\u2019t hand you a 60-page deck and disappear. Senior operators stay embedded with your team, ship the work, and tie every dollar spent to measurable KPIs. No fluff, no juniors learning on your dime.' },
  { q: 'How do we communicate during projects?',
    a: 'Weekly progress reviews, a shared Notion workspace, a private Slack channel, and a live dashboard for KPIs. Async response within 4 business hours, every time.' },
  { q: 'What does an engagement cost?',
    a: 'Engagements range from focused 4-week sprints to multi-quarter retainers. We offer fixed-fee or outcomes-based pricing depending on what aligns best with your goals. Book a call and we\u2019ll quote within 48 hours.' },
  { q: 'Do you sign NDAs and ensure confidentiality?',
    a: 'Always. Every engagement begins with a mutual NDA, scoped data access, and clear IP terms. Your roadmap, your customers, and your numbers stay yours.' },
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
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-50" />
        <div className="absolute -top-32 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/10 via-accent/15 to-primary/10 blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob" />
      </div>

      <div className="container">
        <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Accepting 3 new partnerships for Q3
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Helping businesses achieve{' '}
            <span className="relative whitespace-nowrap">
              <span className="text-gradient">faster growth</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" aria-hidden>
                <path d="M2 9 Q 75 2 150 6 T 298 5" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>{' '}
            through proven solutions.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            We are a results-driven growth consultancy that partners with ambitious companies to design strategy, ship execution, and compound measurable outcomes — quarter after quarter.
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
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" />No long contracts</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" />Senior operators only</div>
            <div className="hidden sm:flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" />Outcomes-based pricing</div>
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
                    <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
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
    <section className="border-y border-border/60 bg-secondary/30 py-14">
      <div className="container">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by businesses across multiple industries
        </p>
        <div className="relative mt-8 overflow-hidden mask-fade-r">
          <div className="marquee flex w-max items-center gap-12 pr-12">
            {list.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-12 shrink-0 items-center gap-2 rounded-lg px-5 text-base font-semibold tracking-tight text-muted-foreground/80 hover:text-foreground transition-colors"
              >
                <div className="h-7 w-7 rounded-md bg-gradient-to-br from-muted-foreground/30 to-muted-foreground/10" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SuccessStats = () => {
  const extras = [
    { value: 47, prefix: '$', suffix: 'M+', label: 'Revenue generated for clients' },
    { value: 320, suffix: '%',  label: 'Avg. ROI on our engagements' },
    { value: 4,   suffix: 'h',  label: 'Average response time' },
  ];
  return (
    <Section
      id="about"
      eyebrow="By the numbers"
      title="Real outcomes, not vanity metrics."
      subtitle={"Every engagement is tied to KPIs we agree on together. Here\u2019s what 12 years of partnership looks like in aggregate."}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {extras.map((s) => (
          <motion.div key={s.label} {...fadeUp}>
            <Card className="group relative overflow-hidden p-8 transition-shadow hover:shadow-xl">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-all group-hover:scale-125" />
              <div className="text-5xl font-bold tracking-tight sm:text-6xl">
                {s.prefix}<Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Stories = () => {
  return (
    <Section
      id="stories"
      eyebrow="Success Stories"
      title="Proof in numbers, not slogans."
      subtitle="A sample of recent engagements — anonymized in detail where required, real in outcome."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {CASES.map((c, i) => (
          <motion.div key={c.client} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
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
                    <div className="mt-1 flex items-center justify-center gap-1 text-xs">
                      <span className="text-muted-foreground line-through">{m.before}</span>
                      <ArrowRight className="h-3 w-3 text-accent" />
                      <span className="font-bold text-accent">{m.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const WhyChoose = () => {
  return (
    <Section
      eyebrow="Why teams choose us"
      title="Built for outcomes. Designed for trust."
      subtitle="Six principles that every engagement runs on — non-negotiable."
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
      title="What partners say about working with us."
      subtitle={"Selected feedback from founders, CEOs and operating leaders we\u2019ve worked alongside."}
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
                {t.name.split(' ').map((n) => n[0]).join('')}
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
      title="A simple, focused way to compound results."
      subtitle="Four phases. Every engagement. No mystery."
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
    { label: 'Email',     value: 'hello@apexstrategy.com', sub: 'Reply within 24 hours', href: 'mailto:hello@apexstrategy.com?subject=New%20Project%20Inquiry', Icon: Mail,          color: 'from-sky-500 to-blue-600' },
    { label: 'Phone',     value: '+1 (415) 555-0142',      sub: 'Mon–Fri · 9am–6pm PT',  href: 'tel:+14155550142',                                              Icon: Phone,         color: 'from-emerald-500 to-teal-600' },
    { label: 'WhatsApp',  value: 'Chat instantly',         sub: 'Usually replies in minutes', href: 'https://wa.me/14155550142?text=Hi%20Apex%2C%20I%27d%20love%20to%20talk%20about%20a%20project.', Icon: MessageCircle, color: 'from-green-500 to-emerald-600' },
    { label: 'Messenger', value: 'Facebook chat',          sub: 'Drop us a message',      href: 'https://m.me/apexstrategy',                                     Icon: Facebook,      color: 'from-blue-500 to-indigo-600' },
    { label: 'LinkedIn',  value: 'Connect with us',        sub: 'See our team & posts',   href: 'https://www.linkedin.com/company/apexstrategy',                Icon: Linkedin,      color: 'from-sky-600 to-blue-700' },
    { label: 'Book a call', value: 'Calendly · 30 min',    sub: 'Find a time that works', href: 'https://calendly.com/apexstrategy/intro',                       Icon: Calendar,      color: 'from-violet-500 to-purple-600' },
  ];

  return (
    <section id="contact" className="relative isolate overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute left-1/2 top-20 h-[420px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-r from-accent/15 via-primary/10 to-accent/15 blur-3xl" />
      </div>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Get in touch
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Ready to grow your business?
          </h2>
          <p className="mt-5 text-balance text-base text-muted-foreground sm:text-lg">
            Pick your favorite channel — every button opens directly. Tell us about your goals and we&rsquo;ll come back with a clear point of view, fast.
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
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl"
              onClick={() => {
                if (c.label === 'Email') {
                  try { navigator.clipboard?.writeText('hello@apexstrategy.com'); toast.success('Email copied to clipboard'); } catch (e) {}
                }
              }}
            >
              <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${c.color} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
              <div className="flex items-center justify-between">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-md`}>
                  <c.Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <div className="mt-5">
                <div className="text-sm font-medium text-muted-foreground">{c.label}</div>
                <div className="mt-1 text-lg font-semibold tracking-tight">{c.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.sub}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-center text-xs text-muted-foreground">
          <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> 535 Mission Street, San Francisco, CA 94105</div>
          <div>Or simply email us — we read every message personally.</div>
        </div>
      </div>
    </section>
  );
};

const FaqSection = () => {
  return (
    <Section
      id="faq"
      eyebrow="Frequently asked"
      title="Answers to common questions."
      subtitle={"Still curious? Reach out and we\u2019ll happily answer in detail."}
    >
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
              Apex Strategy is a senior-led growth consultancy partnering with ambitious businesses to design strategy, ship execution, and compound measurable outcomes — quarter after quarter.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Linkedin,  href: 'https://www.linkedin.com/company/apexstrategy', label: 'LinkedIn' },
                { Icon: Twitter,   href: 'https://twitter.com/apexstrategy',              label: 'Twitter' },
                { Icon: Facebook,  href: 'https://facebook.com/apexstrategy',             label: 'Facebook' },
                { Icon: Instagram, href: 'https://instagram.com/apexstrategy',            label: 'Instagram' },
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
              <li><a href="#about" className="hover:text-foreground">About</a></li>
              <li><a href="#stories" className="hover:text-foreground">Success Stories</a></li>
              <li><a href="#process" className="hover:text-foreground">Process</a></li>
              <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-tight">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:hello@apexstrategy.com" className="hover:text-foreground">hello@apexstrategy.com</a></li>
              <li><a href="tel:+14155550142" className="hover:text-foreground">+1 (415) 555-0142</a></li>
              <li>535 Mission Street<br/>San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {year} Apex Strategy. All rights reserved.</p>
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
        <SuccessStats />
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
