// src/theme/palette.ts
import { PaletteOptions } from '@mui/material/styles';
import { ThemeMode } from '@/constants/theme';

// Define light mode palette
const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#2563eb', // Blue
    light: '#60a5fa',
    dark: '#1d4ed8',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#8b5cf6', // Purple
    light: '#a78bfa',
    dark: '#7c3aed',
    contrastText: '#ffffff',
  },
  error: {
    main: '#ef4444', // Red
    light: '#f87171',
    dark: '#dc2626',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#f59e0b', // Amber
    light: '#fbbf24',
    dark: '#d97706',
    contrastText: '#ffffff',
  },
  info: {
    main: '#0ea5e9', // Sky
    light: '#38bdf8',
    dark: '#0284c7',
    contrastText: '#ffffff',
  },
  success: {
    main: '#10b981', // Emerald
    light: '#34d399',
    dark: '#059669',
    contrastText: '#ffffff',
  },
  grey: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  background: {
    default: '#f9fafb',
    paper: '#dddddd',
  },
  text: {
    primary: '#111827',
    secondary: '#4b5563',
    disabled: '#9ca3af',
  },
  divider: '#e5e7eb',
};

// Define dark mode palette
const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#60a5fa', // Lighter blue for dark mode
    light: '#93c5fd',
    dark: '#3b82f6',
    contrastText: '#000000',
  },
  secondary: {
    main: '#a78bfa', // Lighter purple for dark mode
    light: '#c4b5fd',
    dark: '#8b5cf6',
    contrastText: '#000000',
  },
  error: {
    main: '#f87171', // Lighter red for dark mode
    light: '#fca5a5',
    dark: '#ef4444',
    contrastText: '#000000',
  },
  warning: {
    main: '#fbbf24', // Lighter amber for dark mode
    light: '#fcd34d',
    dark: '#f59e0b',
    contrastText: '#000000',
  },
  info: {
    main: '#38bdf8', // Lighter sky for dark mode
    light: '#7dd3fc',
    dark: '#0ea5e9',
    contrastText: '#000000',
  },
  success: {
    main: '#34d399', // Lighter emerald for dark mode
    light: '#6ee7b7',
    dark: '#10b981',
    contrastText: '#000000',
  },
  grey: {
    50: '#111827',
    100: '#1f2937',
    200: '#374151',
    300: '#4b5563',
    400: '#6b7280',
    500: '#9ca3af',
    600: '#d1d5db',
    700: '#e5e7eb',
    800: '#f3f4f6',
    900: '#f9fafb',
  },
  background: {
    default: '#111827',
    paper: '#1f2937',
  },
  text: {
    primary: '#f9fafb',
    secondary: '#e5e7eb',
    disabled: '#6b7280',
  },
  divider: '#374151',
};

// Define a function to get palette based on mode
const getPalette = (mode: ThemeMode): PaletteOptions => {
  return mode === ThemeMode.LIGHT ? lightPalette : darkPalette;
};

export default getPalette;
