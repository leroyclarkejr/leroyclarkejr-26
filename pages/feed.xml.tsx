import type { GetServerSideProps } from 'next';
import constants from '@/constants';
import { SITE_URL } from '@/lib/seo';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRss(): string {
  const items = constants.projects
    .map(
      (project) => `
    <item>
      <title>${escapeXml(project.title)}</title>
      <link>${escapeXml(project.link.href)}</link>
      <description>${escapeXml(project.description)}</description>
      <pubDate>${new Date(project.date).toUTCString()}</pubDate>
      <guid>${escapeXml(project.link.href)}</guid>
    </item>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Leroy Clarke Jr</title>
    <link>${SITE_URL}</link>
    <description>Projects and writing by Leroy Clarke Jr</description>
    <language>en-us</language>
    <managingEditor>hello@leroyclarkejr.com (Leroy Clarke Jr)</managingEditor>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
  res.write(generateRss());
  res.end();
  return { props: {} };
};

export default function FeedPage() {
  return null;
}
