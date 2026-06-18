import './globals.css';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/sonner';

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://apexstrategy.example.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Apex Strategy — Growth Consulting for Ambitious Businesses',
    template: '%s · Apex Strategy',
  },
  description:
    'Apex Strategy helps businesses achieve faster growth through proven strategy, execution, and measurable outcomes. 150+ projects delivered. 98% client satisfaction.',
  keywords: [
    'business consulting', 'growth strategy', 'digital transformation',
    'management consulting', 'agency', 'lead generation', 'B2B consulting',
  ],
  authors: [{ name: 'Apex Strategy' }],
  creator: 'Apex Strategy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Apex Strategy',
    title: 'Apex Strategy — Growth Consulting for Ambitious Businesses',
    description:
      'Proven strategy & execution that drives measurable growth. 150+ projects delivered. 98% satisfaction rate.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Apex Strategy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Strategy — Growth Consulting for Ambitious Businesses',
    description: 'Proven strategy & execution that drives measurable growth.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#040713' },
  ],
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Apex Strategy',
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  description:
    'Growth consulting and execution partner for ambitious businesses.',
  email: 'hello@apexstrategy.com',
  telephone: '+1-415-555-0142',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '535 Mission Street',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/company/apexstrategy',
    'https://twitter.com/apexstrategy',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body>
        <Providers>
          {children}
          <Toaster richColors position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
