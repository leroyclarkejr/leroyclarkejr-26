import type { AppProps } from 'next/app';
import { Provider } from '@/components/ui/provider';
import { geistSans, geistMono, newsreader } from '@/lib/fonts';
import { GeistPixelGrid } from 'geist/font/pixel';
import './main.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} ${GeistPixelGrid.variable}`}
    >
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
