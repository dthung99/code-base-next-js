// sections/Layout/Navbar.tsx
import { AppBar, Drawer, Toolbar, Typography, Box } from '@mui/material';

interface NavbarProps {
  position: 'left' | 'top';
}

const Navbar = ({ position }: NavbarProps) => {
  const drawerWidth = 240;

  if (position === 'top') {
    return (
      <AppBar position="sticky" sx={{ height: '64px' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your App Name
          </Typography>
          {/* Add your navigation items here */}
        </Toolbar>
      </AppBar>
    );
  }

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
      </Toolbar>
      <Box sx={{ overflow: 'auto' }}>
        {/* Add your navigation items here */}
      </Box>
    </Drawer>
  );
};

export default Navbar;
