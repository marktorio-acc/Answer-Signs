import './globals.css';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/sonner';

/**
 * Production site URL.
 * Replace the placeholder “https://yourdomain.com” with the final custom domain
 * once it is purchased, OR set NEXT_PUBLIC_SITE_URL in the deployment environment
 * (Vercel → Project Settings → Environment Variables).
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://answer-signs.vercel.app';

export const metadata = {
  // metadataBase is required for resolving relative OG/Twitter image URLs and
  // for the `alternates.canonical` shortcut to work as a relative path.
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Custom Signage Solutions Philippines | Answer Signs',
    template: '%s | Answer Signs',
  },
  description:
    'Answer Signs has been providing architectural signage, acrylic signs, LED signage, and nationwide installation services in the Philippines since 1977.',

  keywords: [
    'custom signage Philippines',
    'architectural signage',
    'acrylic signs',
    'LED signage',
    'channel letters',
    'pylon signs',
    'wayfinding signage',
    'storefront signage',
    'mall signage',
    'thermo-forming acrylic',
    'sign maker Philippines',
    'Answer Signs',
    'Answer Advertising Corporation',
    'Parañaque signage',
  ],

  authors: [{ name: 'Answer Signs', url: SITE_URL }],
  creator: 'Answer Advertising Corporation',
  publisher: 'Answer Advertising Corporation',
  applicationName: 'Answer Signs',
  category: 'Signage & Manufacturing',

  // Canonical URL of the homepage (relative is resolved against metadataBase).
  alternates: {
    canonical: '/',
  },

  // Open Graph metadata for Facebook, LinkedIn, WhatsApp etc.
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: SITE_URL,
    siteName: 'Answer Signs',
    title: 'Custom Signage Solutions Philippines | Answer Signs',
    description:
      'Answer Signs has been providing architectural signage, acrylic signs, LED signage, and nationwide installation services in the Philippines since 1977.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Answer Signs — custom signage solutions in the Philippines since 1977.',
      },
    ],
  },

  // Twitter / X card metadata.
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Signage Solutions Philippines | Answer Signs',
    description:
      'Answer Signs has been providing architectural signage, acrylic signs, LED signage, and nationwide installation services in the Philippines since 1977.',
    images: ['/og.png'],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },

  // Optional verification placeholders — fill in once Google / Bing tokens are issued.
  // verification: { google: 'TODO', other: { 'msvalidate.01': 'TODO' } },

  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#040713' },
  ],
  width: 'device-width',
  initialScale: 1,
};

/**
 * Organization / LocalBusiness JSON-LD
 * Helps Google show the rich Knowledge-Panel-style result for the business.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Answer Signs',
  alternateName: 'Answer Advertising Corporation',
  url: SITE_URL,
  logo: `${SITE_URL}/brand/answer-signs-logo.png`,
  image: `${SITE_URL}/og.png`,
  foundingDate: '1977',
  description:
    'Answer Signs has been providing architectural signage, acrylic signs, LED signage, and nationwide installation services in the Philippines since 1977.',
  email: 'aac.answersigns@gmail.com',
  telephone: ['+63-2-8824-6909', '+63-2-8824-6911'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Parañaque City',
    addressRegion: 'Metro Manila',
    addressCountry: 'PH',
  },
  areaServed: 'PH',
  sameAs: ['https://www.facebook.com/answersigns'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '184',
  },
  knowsAbout: [
    'Architectural signage',
    'Acrylic signs',
    'LED signage',
    'Wayfinding signage',
    'Pylon signs',
    'Channel letters',
    'Thermo-formed acrylic',
    'Storefront signage',
  ],
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
