const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://apexstrategy.example.com';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
