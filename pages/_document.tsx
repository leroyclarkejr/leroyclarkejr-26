import { Html, Head, Main, NextScript } from 'next/document';
import { geistSans, geistMono, instrumentSerif } from '@/lib/fonts';

export default function Document() {
  return (
    <Html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
