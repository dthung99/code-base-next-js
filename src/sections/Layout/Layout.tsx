// sections/Layout/Layout.tsx
'use client';

import { Box, Stack } from '@mui/material';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Topbar from './Topbar';

interface LayoutProps {
  children: React.ReactNode;
  navbarPosition?: 'left' | 'top';
}

const Layout = ({ children, navbarPosition = 'left' }: LayoutProps) => {
  return (
    <Stack
      minHeight={'100vh'}
      flexDirection={navbarPosition === 'left' ? 'row' : 'column'}
    >
      {navbarPosition === 'top' && <Topbar />}
      {navbarPosition === 'left' && <Sidebar />}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
      {navbarPosition === 'top' && <Footer />}
    </Stack>
  );
};

export default Layout;
