// src/theme/index.ts
import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';
import getPalette from './palette';
import typography from './typography';
import components from './components';
import breakpoints from './breakpoints';
import customShadows from './shadows';
import { ThemeMode } from '@/constants/theme';

// Create responsive theme with specified mode
const createResponsiveTheme = (mode: ThemeMode = ThemeMode.LIGHT): Theme => {
  // Create the base theme with dynamic palette based on mode
  const baseTheme = createTheme({
    palette: getPalette(mode),
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
  return responsiveFontSizes(themeWithComponents, {
    breakpoints: ['xs', 'sm'],
    factor: 0.8,
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
};

export default createResponsiveTheme;
