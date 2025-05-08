// sections/Layout/Sidebar.tsx
'use client';

import ThemeSelector from '@/components/Layout/ThemeSelector';
import { Box, Drawer, Toolbar, Typography } from '@mui/material';

const Sidebar = () => {
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
        <Typography variant="h6" component="div">
          Your App Name
        </Typography>
        <ThemeSelector />
      </Toolbar>
      <Box sx={{ overflow: 'auto' }}>
        {/* Add your navigation items here */}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
