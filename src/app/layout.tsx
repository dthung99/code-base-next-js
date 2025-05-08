import type { Metadata } from 'next';
import Layout from '@/sections/Layout';
import { CustomThemeProvider } from '@/providers';
import { cookies } from 'next/headers';
import { DEFAULT_THEME, THEME_COOKIE_KEY, ThemeMode } from '@/constants/theme';
import { NextIntlClientProvider } from 'next-intl';
import { LanguageMessages } from '@/i18n/types';

export const metadata: Metadata = {
  title: 'Next.js Codebase',
  description: 'Codebase for Next.js',
  icons: {
    icon: '/favicon.ico', // or the path to your favicon
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the theme preference from cookies server-side
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get(THEME_COOKIE_KEY);

  // Extract the value and cast it safely
  let initialTheme = DEFAULT_THEME; // Default

  if (themeCookie && themeCookie.value) {
    const cookieValue = themeCookie.value as ThemeMode;
    // Ensure the value is a valid ThemeMode
    if (Object.values(ThemeMode).includes(cookieValue)) {
      initialTheme = cookieValue;
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CustomThemeProvider initialTheme={initialTheme}>
          <Layout navbarPosition="left">{children}</Layout>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
