// sections/Layout/Sidebar.tsx
'use client';

import { LanguageSelector, ThemeSelector } from '@/components/Layout';
import { useLanguage } from '@/providers';
import { Box, Drawer, Stack, Toolbar, Typography } from '@mui/material';

const Sidebar = () => {
  const { t } = useLanguage();
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar>
        <Stack spacing={5}>
          <Typography variant="h6" component="div">
            {t.common.title}
          </Typography>
          <ThemeSelector />
          <LanguageSelector />
        </Stack>
      </Toolbar>
      <Box sx={{ overflow: 'auto' }}>
        {/* Add your navigation items here */}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
