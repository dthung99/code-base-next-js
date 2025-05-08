// src/i18n/types.ts
export interface CommonMessages {
  title?: string;
  description?: string;
  buttons?: {
    submit?: string;
    cancel?: string;
  };
  navigation?: {
    home?: string;
    about?: string;
    contact?: string;
  };
}

export interface HomeMessages {
  welcome?: string;
  getStarted?: string;
}

// Add more message interfaces as needed for different sections

export interface LanguageMessages {
  common?: CommonMessages;
  home?: HomeMessages;
  // Add more sections as needed
}
