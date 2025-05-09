// src/constants/path.ts
// App routes
export const APP_PATHS = {
  // Auth routes
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    VERIFY_EMAIL: '/verify-email',
  },

  // Dashboard routes
  DASHBOARD: {
    ROOT: '/dashboard',
    PROFILE: '/dashboard/profile',
    SETTINGS: '/dashboard/settings',
  },

  // Public routes
  PUBLIC: {
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',
    TERMS: '/terms',
    PRIVACY: '/privacy',
  },

  // Error routes
  ERROR: {
    NOT_FOUND: '/404',
    SERVER_ERROR: '/500',
    FORBIDDEN: '/403',
  },
};

// External links
export const EXTERNAL_LINKS = {
  SOCIAL: {
    FACEBOOK: 'https://facebook.com/yourapp',
    TWITTER: 'https://twitter.com/yourapp',
    LINKEDIN: 'https://linkedin.com/company/yourapp',
  },
  HELP: {
    DOCUMENTATION: 'https://docs.yourapp.com',
    SUPPORT: 'https://support.yourapp.com',
  },
};

// File upload paths
export const UPLOAD_PATHS = {
  AVATARS: '/uploads/avatars',
  DOCUMENTS: '/uploads/documents',
  MEDIA: '/uploads/media',
};
