// sections/Feedback/UnderDevelopment.tsx
'use client';

import { Box, Stack, Typography } from '@mui/material';
import { useLanguage } from '@/providers';
import EngineeringIcon from '@mui/icons-material/Engineering';

export default function UnderDevelopment() {
  const { t } = useLanguage();

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100vh' }}
    >
      <EngineeringIcon sx={{ fontSize: 100 }} />
      <Typography variant="h5" gutterBottom>
        {t.common.underDevelopment.title}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {t.common.underDevelopment.message}
      </Typography>
    </Stack>
  );
}
