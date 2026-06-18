const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://apexstrategy.example.com';

export default function sitemap() {
  const routes = ['', '#about', '#stories', '#process', '#testimonials', '#faq', '#contact'];
  const now = new Date();
  return routes.map((r) => ({
    url: `${siteUrl}/${r}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: r === '' ? 1.0 : 0.7,
  }));
}
