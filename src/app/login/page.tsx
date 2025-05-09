// src/app/login/page.tsx
import { Box, Container, Typography } from '@mui/material';
import { LoginForm } from '@/sections/Auth';
// import { getSSRTranslation } from '@/locales';
import { Metadata } from 'next';
import { getSSRTranslation } from '@/locales/getSSRTranslation';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to access your account',
};

export default async function LoginPage() {
  const t = await getSSRTranslation();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          {t.common.title}
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
}
