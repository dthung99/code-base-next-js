// src/theme/typography.ts
import { TypographyVariantsOptions } from '@mui/material/styles';

// Use type definition from ThemeOptions instead
const typography: TypographyVariantsOptions = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  h1: {
    fontWeight: 700,
    fontSize: '3.5rem', // 56px
    lineHeight: 1.2,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontWeight: 700,
    fontSize: '2.75rem', // 44px
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontWeight: 600,
    fontSize: '2.25rem', // 36px
    lineHeight: 1.2,
    letterSpacing: '0em',
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.75rem', // 28px
    lineHeight: 1.2,
    letterSpacing: '0.00735em',
  },
  h5: {
    fontWeight: 600,
    fontSize: '1.5rem', // 24px
    lineHeight: 1.2,
    letterSpacing: '0em',
  },
  h6: {
    fontWeight: 600,
    fontSize: '1.25rem', // 20px
    lineHeight: 1.2,
    letterSpacing: '0.0075em',
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: '1rem', // 16px
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.57,
    letterSpacing: '0.00714em',
  },
  body1: {
    fontSize: '1rem', // 16px
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  body2: {
    fontSize: '0.875rem', // 14px
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },
  button: {
    fontWeight: 600,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'none', // Changed from uppercase for modern look
  },
  caption: {
    fontSize: '0.75rem', // 12px
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
  overline: {
    fontSize: '0.625rem', // 10px
    fontWeight: 500,
    lineHeight: 2.66,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
  },
};

export default typography;
