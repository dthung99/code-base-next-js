// sections/Layout/Footer.tsx
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'secondary.main' }}
      height={100}
    >
      <Typography variant="body2" color="text.primary" align="center">
        © {new Date().getFullYear()} Your Company Name
      </Typography>
    </Box>
  );
};

export default Footer;
