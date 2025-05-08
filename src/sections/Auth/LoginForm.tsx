// src/sections/Auth/LoginForm.tsx
'use client';

import { Google as GoogleIcon } from '@mui/icons-material';
import { Divider, Stack, Typography } from '@mui/material';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useLanguage } from '@/providers';

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function LoginForm() {
  const router = useRouter();
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Here you would normally make an API call to authenticate
      // For example:
      // const response = await authService.login(formData.email, formData.password);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, check for a test account
      if (
        formData.email === 'test@example.com' &&
        formData.password === 'password'
      ) {
        // Store auth token or user info in cookies/localStorage here
        router.push('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch {
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      // Here you would integrate with Google OAuth
      // For example: window.location.href = '/api/auth/google';
      // Or use a library like next-auth

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes
      alert('Google login would redirect to OAuth flow');
    } catch {
      setError('Failed to login with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={void handleSubmit}
      sx={{ mt: 3, width: '100%' }}
      autoComplete="on"
    >
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label={t.auth.login.emailLabel}
        name="email"
        autoComplete="email"
        autoFocus
        value={formData.email}
        onChange={handleChange}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label={t.auth.login.passwordLabel}
        type="password"
        id="password"
        autoComplete="current-password"
        value={formData.password}
        onChange={handleChange}
        // Add these props to help with autofill
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      />

      <FormControlLabel
        control={
          <Checkbox
            name="rememberMe"
            color="primary"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
        }
        label={t.auth.login.rememberMe}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : t.auth.login.login}
      </Button>

      <Box sx={{ mt: 3, mb: 3 }}>
        <Divider>
          <Typography variant="body2" color="text.secondary" sx={{ px: 1 }}>
            {t.auth.login.orContinueWith}
          </Typography>
        </Divider>
      </Box>

      <Button
        fullWidth
        variant="outlined"
        startIcon={<GoogleIcon />}
        onClick={void handleGoogleLogin}
        disabled={loading}
        sx={{ mb: 2 }}
      >
        {t.auth.login.googleLogin}
      </Button>

      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Link href="/forgot-password" variant="body2">
          {t.auth.login.forgotPassword}
        </Link>
        <Link href="/register" variant="body2">
          {t.auth.login.signUp}
        </Link>
      </Stack>
    </Box>
  );
}
