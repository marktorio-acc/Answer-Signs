/**
 * Next.js Metadata Route: sitemap.xml
 * Documentation:
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 *
 * NOTE:
 * This is currently a single-page website hosted on Vercel.
 * Once a custom domain is available, update NEXT_PUBLIC_SITE_URL
 * in your environment variables.
 *
 * FUTURE SERVICE PAGES:
 * Uncomment and add these routes when you create dedicated pages:
 *
 *   /architectural-signage
 *   /led-signage
 *   /wayfinding-signage
 *   /pylon-signs
 *   /acrylic-signs
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://answer-signs.vercel.app';

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },

    // FUTURE SERVICE PAGES:
    // {
    //   url: `${SITE_URL}/architectural-signage`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${SITE_URL}/led-signage`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${SITE_URL}/wayfinding-signage`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${SITE_URL}/pylon-signs`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${SITE_URL}/acrylic-signs`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
