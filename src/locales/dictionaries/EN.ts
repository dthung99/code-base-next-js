import { Dictionary } from '../interface';

// TypeScript object for English translations (EN.ts)
export const EN: Dictionary = {
  common: {
    title: 'My App',
    description: 'Welcome to my app',
    buttons: {
      submit: 'Submit',
      cancel: 'Cancel',
    },
    navigation: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
    },
    language: 'Language',
    theme: {
      light: 'Light',
      dark: 'Dark',
    },
  },
  home: {
    welcome: 'Welcome to our platform',
    getStarted: 'Get started now',
  },
  // Add auth section
  auth: {
    login: {
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      rememberMe: 'Remember me',
      login: 'Sign In',
      forgotPassword: 'Forgot password?',
      signUp: 'Sign Up',
      orContinueWith: 'Or continue with',
      googleLogin: 'Sign in with Google',
      invalidCredentials: 'Invalid email or password',
      loginError: 'An error occurred during login. Please try again.',
      googleLoginError: 'Failed to login with Google',
    },
  },
};
