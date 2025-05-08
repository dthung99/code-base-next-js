// src/components/Layout/ThemeSelector.tsx
'use client';

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { useLanguage } from '@/providers';
import { Language } from '@/constants/locales';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const newTheme = event.target.value as Language;
    setLanguage(newTheme);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="theme-select-label">{t.common.language}</InputLabel>
      <Select
        labelId="theme-select-label"
        id="theme-select"
        value={language}
        label="Theme"
        onChange={handleLanguageChange}
      >
        {Object.values(Language).map((lang) => (
          <MenuItem key={lang} value={lang}>
            {lang}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
