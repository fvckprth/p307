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
  title: 'P307 ⎯ Stripe meets Alibaba',
  description: 'Enable your community to market and sell your products anywhere on the internet.',
  siteUrl: 'https://www.p307.net',
  twitterHandle: '@p307',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <body className={fkGrotesk.className}>{children}</body>
    </html>
  );
}