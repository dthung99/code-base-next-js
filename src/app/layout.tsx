import { Roboto } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import CustomThemeProvider from '@/providers/CustomThemeProvider';
import Layout from '@/sections/Layout';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Next.js Codebase',
  description: 'Codebase for Next.js',
  icons: {
    icon: '/favicon.ico', // or the path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <CustomThemeProvider>
          <Layout navbarPosition="top">{children}</Layout>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
