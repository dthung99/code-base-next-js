// src/components/Layout/ThemeSelector.tsx
'use client';

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { THEME_COOKIE_KEY, ThemeMode } from '@/constants/theme';
import Cookies from 'js-cookie';

export default function ThemeSelector() {
  const theme = useTheme();

  const [themeMode, setThemeMode] = useState<ThemeMode>(
    theme.palette.mode as ThemeMode,
  );

  const handleThemeChange = (event: SelectChangeEvent) => {
    const newTheme = event.target.value as ThemeMode;
    setThemeMode(newTheme);
    Cookies.set(THEME_COOKIE_KEY, newTheme);
    window.location.reload(); // Reload the window to apply the new theme
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="theme-select-label">Theme</InputLabel>
      <Select
        labelId="theme-select-label"
        id="theme-select"
        value={themeMode}
        label="Theme"
        onChange={handleThemeChange}
      >
        <MenuItem value={ThemeMode.LIGHT}>Light</MenuItem>
        <MenuItem value={ThemeMode.DARK}>Dark</MenuItem>
      </Select>
    </FormControl>
  );
}
