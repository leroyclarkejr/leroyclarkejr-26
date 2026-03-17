export const SITE_URL = 'https://www.leroyclarkejr.com';

export const DEFAULT_SEO = {
  defaultTitle: 'Leroy Clarke Jr',
  titleTemplate: '%s — Leroy Clarke Jr',
  description: '',
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Leroy Clarke Jr',
    images: [
      {
        url: `${SITE_URL}/leroyclarkejr.jpg`,
        width: 800,
        height: 800,
        alt: 'Leroy Clarke Jr',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/leroyclarkejr.jpg' },
    { rel: 'manifest', href: '/manifest.json' },
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      href: '/feed.xml',
    },
  ],
};
