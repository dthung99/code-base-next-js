// app/login/google-callback/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Box, CircularProgress, Typography, Alert } from '@mui/material';
import authServiceCSR from '@/lib/api/services/authServiceCSR';
import { APP_PATHS } from '@/constants/path';

export default function GoogleCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleGoogleCallback = async () => {
      try {
        const code = searchParams.get('code');

        if (!code) {
          setError('No authorization code received from Google');
          return;
        }

        // Exchange code for tokens with your backend
        await authServiceCSR.googleCallback(code);
        // Redirect to dashboard
        router.push(APP_PATHS.PUBLIC.HOME);
      } catch {
        // console.error('Google authentication error:', error);
        setError('Failed to authenticate with Google. Please try again.');
      }
    };

    void handleGoogleCallback();
  }, [router, searchParams]);

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Typography variant="body1">
          You will be redirected to the login page in a few seconds...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
      }}
    >
      <CircularProgress size={60} />
      <Typography variant="h6" sx={{ mt: 3 }}>
        Completing login...
      </Typography>
    </Box>
  );
}
