// src/theme/index.ts
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import components from './components';
import breakpoints from './breakpoints';
import customShadows from './shadows';

// Create the base theme
const baseTheme = createTheme({
  palette,
  typography,
  breakpoints,
  shape: {
    borderRadius: 8,
  },
});

// Apply shadows and component overrides
const themeWithComponents = createTheme(baseTheme, {
  shadows: customShadows,
  components: components(baseTheme),
});

// Make typography responsive with custom options
const responsiveTheme = responsiveFontSizes(themeWithComponents, {
  breakpoints: ['xs', 'sm'],
  factor: 0.8, // This is the key value - it makes fonts 80% of their size on smaller screens
  variants: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
  ],
});

export default responsiveTheme;
