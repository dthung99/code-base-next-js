// sections/Layout/Topbar.tsx
'use client';

import ThemeSelector from '@/components/Layout/ThemeSelector';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Topbar = () => {
  return (
    <AppBar position="sticky" sx={{ height: '64px' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your App Name
        </Typography>
        <ThemeSelector />
        {/* Add your navigation items here */}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
