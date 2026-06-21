/**
 * Next.js Metadata Route: robots.txt
 * Documentation: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 *
 * Replace https://yourdomain.com with the final custom domain once it is
 * purchased, OR set NEXT_PUBLIC_SITE_URL in the deployment environment.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // disallow: ['/api/'], // Uncomment if/when private API routes exist.
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
