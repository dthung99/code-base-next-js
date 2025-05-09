// src/lib/api/axios.ts
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import Cookies from 'js-cookie';
import {
  ACCESS_TOKEN_KEY,
  API_ENDPOINTS,
  API_URL,
  REFRESH_TOKEN_KEY,
} from '@/constants/endpoints';
import { ApiResponse } from './interface';
import { TokenData } from './services/authServiceCSR';
import { APP_PATHS } from '@/constants/path';

// Create axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor for adding auth token
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get(ACCESS_TOKEN_KEY);

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    // Handle 401 Unauthorized errors (token expired)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Get refresh token
        const refreshToken = Cookies.get(REFRESH_TOKEN_KEY);

        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        // Call refresh token endpoint
        const response: AxiosResponse<ApiResponse<TokenData>> =
          await axiosInstance.post(
            `${API_URL}${API_ENDPOINTS.AUTH.REFRESH_TOKEN}`,
            {
              refreshToken,
            },
          );

        // Extract new tokens
        const { accessToken, refreshToken: newRefreshToken } =
          response.data.data;

        // Update tokens in cookies
        Cookies.set(ACCESS_TOKEN_KEY, accessToken);
        Cookies.set(REFRESH_TOKEN_KEY, newRefreshToken);

        // Retry the original request with new token
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }
        return axiosInstance(originalRequest);
      } catch {
        // If refresh fails, redirect to login
        Cookies.remove(ACCESS_TOKEN_KEY);
        Cookies.remove(REFRESH_TOKEN_KEY);

        if (typeof window !== 'undefined') {
          window.location.href = APP_PATHS.AUTH.LOGIN;
        }
        // Handle other errors
        return Promise.reject(error);
      }
    }

    // Handle other errors
    return Promise.reject(error);
  },
);

export default axiosInstance;
