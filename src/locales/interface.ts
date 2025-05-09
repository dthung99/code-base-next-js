// src/locales/interface.ts
// Define a shared interface for the translation structure
export interface Dictionary {
  common: {
    title: string;
    description: string;
    buttons: {
      submit: string;
      cancel: string;
    };
    navigation: {
      home: string;
      about: string;
      contact: string;
    };
    language: string;
    theme: {
      light: string;
      dark: string;
    };
    underDevelopment: {
      title: string;
      message: string;
    };
  };
  home: {
    welcome: string;
    getStarted: string;
  };
  // Add auth section for login
  auth: {
    login: {
      emailLabel: string;
      passwordLabel: string;
      rememberMe: string;
      login: string;
      forgotPassword: string;
      signUp: string;
      orContinueWith: string;
      googleLogin: string;
      invalidCredentials: string;
      loginError: string;
      googleLoginError: string;
    };
  };
}
