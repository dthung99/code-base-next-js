import type { Metadata } from 'next';
import Layout from '@/sections/Layout';
import { CustomThemeProvider, LanguageProvider } from '@/providers';
import { cookies } from 'next/headers';
import { DEFAULT_THEME, THEME_COOKIE_KEY, ThemeMode } from '@/constants/theme';
import { DEFAULT_LOCALE, Language } from '@/constants/locales';
import { getSSRTranslation } from '@/locales/getSSRTranslation';

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }];
}

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
  const languageCookie = cookieStore.get('language');
  // Extract the value and cast it safely
  let initialTheme = DEFAULT_THEME; // Default

  if (themeCookie && themeCookie.value) {
    const cookieValue = themeCookie.value as ThemeMode;
    // Ensure the value is a valid ThemeMode
    if (Object.values(ThemeMode).includes(cookieValue)) {
      initialTheme = cookieValue;
    }
  }

  let initialLanguage = DEFAULT_LOCALE; // Default
  if (languageCookie && languageCookie.value) {
    const cookieValue = languageCookie.value as Language;
    // Ensure the value is a valid Language
    if (Object.values(Language).includes(cookieValue)) {
      initialLanguage = cookieValue;
    }
  }

  // Assuming you want to set the translation based on the language
  const initialTranslation = await getSSRTranslation();

  return (
    <html lang={initialLanguage.toLowerCase()} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <CustomThemeProvider initialTheme={initialTheme}>
          <LanguageProvider
            initialLanguage={initialLanguage}
            initialTranslation={initialTranslation}
          >
            <Layout navbarPosition="left">{children}</Layout>
          </LanguageProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
