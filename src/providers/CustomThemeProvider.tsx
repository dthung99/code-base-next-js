// src/providers/CustomThemeProvider.tsx
'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';
import createResponsiveTheme from '@/theme';
import { DEFAULT_THEME, ThemeMode } from '@/constants/theme';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

export default function CustomThemeProvider({
  children,
  initialTheme = DEFAULT_THEME,
}: {
  children: ReactNode;
  initialTheme?: ThemeMode;
}) {
  // Create theme based on actual mode
  const theme = createResponsiveTheme(initialTheme);
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
