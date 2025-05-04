// sections/Layout/Layout.tsx
import { Box, Stack } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

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
      <Navbar position={navbarPosition} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
      {navbarPosition === 'top' && <Footer />}
    </Stack>
  );
};

export default Layout;
