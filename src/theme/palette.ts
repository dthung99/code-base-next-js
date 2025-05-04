// src/theme/palette.ts
import { PaletteOptions } from '@mui/material/styles';

// Define your color palette
const palette: PaletteOptions = {
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
    paper: '#ffffff',
  },
  text: {
    primary: '#111827',
    secondary: '#4b5563',
    disabled: '#9ca3af',
  },
  divider: '#e5e7eb',
};

export default palette;
