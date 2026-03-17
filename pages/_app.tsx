import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';
import { Provider } from '@/components/ui/provider';
import { geistSans, geistMono, instrumentSerif } from '@/lib/fonts';
import { GeistPixelGrid } from 'geist/font/pixel';
import { DEFAULT_SEO } from '@/lib/seo';
import './main.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${GeistPixelGrid.variable}`}
    >
      <Provider>
        <DefaultSeo {...DEFAULT_SEO} />
        <Component {...pageProps} />
        <Analytics />
      </Provider>
    </div>
  );
}
