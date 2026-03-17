import type { GetServerSideProps } from 'next';
import { SITE_URL } from '@/lib/seo';

function generateSitemap(): string {
  const pages = ['/'];

  const urls = pages
    .map(
      (page) => `
  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.write(generateSitemap());
  res.end();
  return { props: {} };
};

export default function SitemapPage() {
  return null;
}
