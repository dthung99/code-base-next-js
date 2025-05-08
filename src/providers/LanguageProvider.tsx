// src/providers/LanguageProvider.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';
import {
  DEFAULT_LOCALE,
  Language,
  LOCALE_COOKIE_KEY,
} from '@/constants/locales';
import { defaultTranslation, Dictionary } from '@/locales';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LOCALE,
  setLanguage: () => {},
  t: defaultTranslation,
});

export function LanguageProvider({
  children,
  initialLanguage,
  initialTranslation,
}: {
  children: ReactNode;
  initialLanguage: Language;
  initialTranslation: Dictionary;
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const setLanguage = (lang: Language) => {
    if (lang === language) return; // Avoid unnecessary state updates
    // Validate the language
    if (!Object.values(Language).includes(lang)) {
      //   console.error(`Invalid language: ${lang}`);
      return;
    }
    setLanguageState(lang);
    Cookies.set(LOCALE_COOKIE_KEY, lang);
    window.location.reload(); // Reload to apply new language
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: initialTranslation }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
