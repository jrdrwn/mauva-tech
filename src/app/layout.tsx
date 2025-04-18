import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mauva - Digital Agency',
  description:
    'Mauva is a digital agency that specializes in web and mobile development, UI/UX design, and branding.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  generator: 'Next.js',
  applicationName: 'Mauva',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Mauva',
    'digital agency',
    'web development',
    'mobile development',
    'UI/UX design',
    'branding',
  ],
  authors: [
    {
      name: 'Jordi Irawan',
      url: 'https://wannn.vercel.app',
    },
  ],
  creator: 'Jordi Irawan',
  publisher: 'Jordi Irawan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Mauva - Digital Agency',
    description:
      'Mauva is a digital agency that specializes in web and mobile development, UI/UX design, and branding.',
    url: 'https://mauva-tech.vercel.app',
    siteName: 'Mauva',
    images: [
      {
        url: 'https://mauva-tech.vercel.app/og.png',
        width: 1200,
        height: 630,
        alt: 'Mauva - Digital Agency',
        type: 'image/png',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={'class'}
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
