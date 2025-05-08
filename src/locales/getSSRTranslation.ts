// src/locales/getSSRTranslation.ts
import { cache } from 'react';
import { cookies } from 'next/headers';
import { Dictionary } from './interface';
import { Language } from '@/constants/locales';
import { defaultTranslation } from '.';

export const getSSRTranslation = cache(async (): Promise<Dictionary> => {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value ??
    Language.EN) as unknown as Language;

  // Check if the language is valid
  if (!Object.values(Language).includes(language)) {
    return defaultTranslation;
  }

  try {
    // Dynamic import with correct file extension (.ts instead of .json)
    const module = (await import(`./dictionaries/${language}`)) as Record<
      Language,
      Dictionary
    >;
    return module[language]; // Access the exported constant by language name
  } catch {
    // console.error('Error loading translations:', error);
    return defaultTranslation;
  }
});
