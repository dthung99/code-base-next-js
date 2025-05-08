// sections/Layout/Footer.tsx
'use client';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ opacity: 0.8, backgroundColor: 'background.paper', p: 2 }}
      height={100}
    >
      <Typography variant="body2" color="text.primary" align="center">
        © {new Date().getFullYear()} Your Company Name
      </Typography>
    </Box>
  );
};

export default Footer;
