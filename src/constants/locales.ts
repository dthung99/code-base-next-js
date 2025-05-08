// src/constants/locales.ts
export enum Locale {
  ENGLISH = 'en',
  FRENCH = 'fr',
  SPANISH = 'es',
  // Add more languages as needed
}

export const DEFAULT_LOCALE = Locale.ENGLISH;

export const LOCALES = [
  { code: Locale.ENGLISH, name: 'English', flag: '🇺🇸' },
  { code: Locale.FRENCH, name: 'Français', flag: '🇫🇷' },
  { code: Locale.SPANISH, name: 'Español', flag: '🇪🇸' },
  // Add more languages as needed
];

export const LOCALE_COOKIE_KEY = 'NEXT_LOCALE';
