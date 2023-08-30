import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head';
import localFont from 'next/font/local';

const fkGrotesk = localFont({
  src: '../public/fonts/FKGrotesk.otf',
  weight: '400',
  variable: '--font-fk-grotesk',
});

export const metadata = {
  title: 'Let anyone sell your products anywhere.',
  description: 'Enable your community to market and sell your products anywhere on the internet.',
  siteUrl: 'https://www.p307.net',
  twitterHandle: '@p307',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const imageUrl = `${metadata.siteUrl}/images/P307-social.png`;
  
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0 viewport-fit=cover" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metadata.siteUrl} />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={imageUrl} />
        <meta property="twitter:type" content="image/png" />
        <meta property="twitter:width" content="1200" />
        <meta property="twitter:height" content="675" />
      </Head>
      <body className={fkGrotesk.className}>{children}</body>
    </html>
  );
}