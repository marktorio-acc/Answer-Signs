import './globals.css';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/sonner';

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://answersigns.example.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Answer Signs — Philippine Signage Pioneers Since 1977',
    template: '%s · Answer Signs',
  },
  description:
    'Answer Signs (Answer Advertising Corporation) has been crafting iconic signage for the Philippines’ most trusted brands since 1977. McDonald’s, Uniqlo, Ayala Land, Megaworld, Robinsons, H&M and more.',
  keywords: [
    'signage Philippines', 'sign maker Philippines', 'acrylic signs', 'thermo-forming acrylic',
    'storefront signage', 'mall signage', 'pylon signs', 'Answer Signs', 'Answer Advertising', 'Parañaque signage',
  ],
  authors: [{ name: 'Answer Signs' }],
  creator: 'Answer Advertising Corporation',
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: siteUrl,
    siteName: 'Answer Signs',
    title: 'Answer Signs — Philippine Signage Pioneers Since 1977',
    description:
      'Crafting iconic signage for the Philippines’ most trusted brands for almost 50 years.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Answer Signs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Answer Signs — Philippine Signage Pioneers Since 1977',
    description: 'Crafting iconic signage for the Philippines’ most trusted brands since 1977.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
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
  '@type': 'LocalBusiness',
  name: 'Answer Signs',
  alternateName: 'Answer Advertising Corporation',
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  foundingDate: '1977',
  description:
    'Signage pioneer in the Philippines since 1977. Specializing in thermo-forming acrylic, lightboxes, channel letters, pylon and architectural signage for the country’s leading brands.',
  email: 'inquiry@answersigns.com',
  telephone: '+63-2-8821-1977',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Parañaque City',
    addressRegion: 'Metro Manila',
    addressCountry: 'PH',
  },
  areaServed: 'PH',
  sameAs: [
    'https://www.linkedin.com/company/answer-signs',
    'https://www.facebook.com/answersigns',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '184',
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
