/**
 * Next.js Metadata Route: sitemap.xml
 * Documentation: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 *
 * Replace https://yourdomain.com with the final custom domain once it is
 * purchased, OR set NEXT_PUBLIC_SITE_URL in the deployment environment.
 *
 * NOTE FOR FUTURE GROWTH:
 * When dedicated service pages are added, append their routes here, e.g.
 *   { path: '/architectural-signage', priority: 0.8 },
 *   { path: '/led-signage',           priority: 0.8 },
 *   { path: '/wayfinding-signage',    priority: 0.8 },
 *   { path: '/pylon-signs',           priority: 0.8 },
 *   { path: '/acrylic-signs',         priority: 0.8 },
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

export default function sitemap() {
  const now = new Date();

  // Single-page site — all primary sections live on '/', but we still expose
  // each anchor URL so search engines understand the information architecture.
  const routes = [
    { path: '/',                 priority: 1.0, changeFrequency: 'monthly' },
    { path: '/#about',           priority: 0.9, changeFrequency: 'monthly' },
    { path: '/#stories',         priority: 0.9, changeFrequency: 'monthly' },
    { path: '/#process',         priority: 0.7, changeFrequency: 'yearly'  },
    { path: '/#faq',             priority: 0.7, changeFrequency: 'yearly'  },
    { path: '/#contact',         priority: 0.9, changeFrequency: 'yearly'  },

    // FUTURE SERVICE PAGES — uncomment & implement these routes when ready:
    // { path: '/architectural-signage', priority: 0.8, changeFrequency: 'monthly' },
    // { path: '/led-signage',           priority: 0.8, changeFrequency: 'monthly' },
    // { path: '/wayfinding-signage',    priority: 0.8, changeFrequency: 'monthly' },
    // { path: '/pylon-signs',           priority: 0.8, changeFrequency: 'monthly' },
    // { path: '/acrylic-signs',         priority: 0.8, changeFrequency: 'monthly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
