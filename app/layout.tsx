import './globals.css'
import localFont from 'next/font/local';
import { Metadata } from 'next';

const fkGrotesk = localFont({
  src: '../public/fonts/FKGrotesk.otf',
  weight: '400',
  variable: '--font-fk-grotesk',
});

export const metadata: Metadata = {
  title: 'Let anyone sell your products anywhere.',
  description: 'Enable your community to market and sell your products anywhere on the internet.',
  openGraph: {
    images: [
      {
        url: 'https://p307.net/images/P307-social.png',
        width: 1200,
        height: 675,
      },
    ],
    url: 'https://www.p307.net',
    siteName: 'P307',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@p307',
    images: [
      {
        url: 'https://p307.net/images/P307-social.png',
      },
    ],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={fkGrotesk.className}>{children}</body>
    </html>
  );
}