// sections/Layout/Topbar.tsx
'use client';

import { LanguageSelector, ThemeSelector } from '@/components/Layout';
import { useLanguage } from '@/providers';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Topbar = () => {
  const { t } = useLanguage();
  return (
    <AppBar position="sticky" sx={{ height: '64px' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t.common.title}
        </Typography>
        <ThemeSelector />
        <LanguageSelector />
        {/* Add your navigation items here */}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
