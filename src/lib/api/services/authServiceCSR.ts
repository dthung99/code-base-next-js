// src/lib/api/services/authService.ts
'use client';

import axiosInstance from '../axios';
import {
  API_ENDPOINTS,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from '@/constants/endpoints';
import Cookies from 'js-cookie';
import { ApiResponse } from '../interface';

// Types for auth
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface TokenData {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresAt: string;
  refreshTokenExpiresAt: string;
}

export interface UserProfile {
  id: string;
  email: string;
  roles: string[];
  createdAt: string;
  updatedAt: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

// Service for authentication-related API calls
const authServiceCSR = {
  // Login user with email and password
  login: async (
    credentials: LoginCredentials,
  ): Promise<ApiResponse<TokenData>> => {
    const response = await axiosInstance.post<ApiResponse<TokenData>>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials,
    );

    // Save tokens to cookies if login successful
    if (response.data.data.accessToken) {
      const { accessToken, refreshToken } = response.data.data;

      Cookies.set(ACCESS_TOKEN_KEY, accessToken);
      Cookies.set(REFRESH_TOKEN_KEY, refreshToken); // Longer expiry for refresh token
    }

    return response.data;
  },

  // Register a new user
  register: async (data: RegisterData): Promise<ApiResponse<UserProfile>> => {
    const response = await axiosInstance.post<ApiResponse<UserProfile>>(
      API_ENDPOINTS.AUTH.REGISTER,
      data,
    );
    return response.data;
  },

  // Logout the current user
  logout: async (): Promise<void> => {
    try {
      // Call logout endpoint if needed
      await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
    } catch {
      // Handle error if logout API call fails
      // Proceed with local logout even if API call fails
      // console.error('Error during logout:', error);
    } finally {
      // Remove tokens from cookies
      Cookies.remove(ACCESS_TOKEN_KEY);
      Cookies.remove(REFRESH_TOKEN_KEY);
    }
  },

  // Add to your authServiceCSR.ts
  googleCallback: async (code: string): Promise<ApiResponse<TokenData>> => {
    const response = await axiosInstance.post<ApiResponse<TokenData>>(
      API_ENDPOINTS.AUTH.GOOGLE_CALLBACK,
      { code },
    );

    // Save tokens to cookies
    if (response.data.data.accessToken) {
      const {
        accessToken,
        refreshToken,
        accessTokenExpiresAt,
        refreshTokenExpiresAt,
      } = response.data.data;

      // Calculate expiry times
      const accessExpiry = new Date(accessTokenExpiresAt);
      const refreshExpiry = new Date(refreshTokenExpiresAt);
      const accessDaysDiff =
        (accessExpiry.getTime() - new Date().getTime()) / (1000 * 3600 * 24);
      const refreshDaysDiff =
        (refreshExpiry.getTime() - new Date().getTime()) / (1000 * 3600 * 24);

      // Set cookies
      Cookies.set(ACCESS_TOKEN_KEY, accessToken, { expires: accessDaysDiff });
      Cookies.set(REFRESH_TOKEN_KEY, refreshToken, {
        expires: refreshDaysDiff,
      });
    }

    return response.data;
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!Cookies.get(ACCESS_TOKEN_KEY);
  },

  // Get access token
  getAccessToken: (): string | undefined => {
    return Cookies.get(ACCESS_TOKEN_KEY);
  },

  // Get refresh token
  getRefreshToken: (): string | undefined => {
    return Cookies.get(REFRESH_TOKEN_KEY);
  },

  // Request password reset email
  forgotPassword: async (email: string): Promise<ApiResponse<any>> => {
    const response = await axiosInstance.post<ApiResponse<any>>(
      API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
      { email },
    );
    return response.data;
  },

  // Reset password with token
  resetPassword: async (
    token: string,
    newPassword: string,
  ): Promise<ApiResponse<any>> => {
    const response = await axiosInstance.post<ApiResponse<any>>(
      API_ENDPOINTS.AUTH.RESET_PASSWORD,
      {
        token,
        password: newPassword,
      },
    );
    return response.data;
  },
};

export default authServiceCSR;
