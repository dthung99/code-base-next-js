// src/app/CustomThemeProvider.tsx
'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';
import responsiveTheme from '@/theme';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

export default function CustomThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={responsiveTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
