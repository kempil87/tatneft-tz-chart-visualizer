export interface AppTheme {
  colors: {
    brand: string;
    brandHover: string;
    brandActive: string;
    danger: string;
    secondary: string;
    background: string;
    surface: string;
    foreground: string;
    separator: string;
    contrast: string;
    tertiary: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  borderRadius: {
    full: string;
    sm: string;
    md: string;
    lg: string;
  };
  zi: {
    layout: number;
  };
}

const baseTheme = {
  colors: {
    brand: '#1ba373',
    brandHover: '#1ba3731a',
    brandActive: '#1ba373',
    danger: '#e74c3c',
    contrast: '#fff',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
    xxl: '6rem',
    xxxl: '8rem',
  },
  borderRadius: {
    sm: '0.8rem',
    md: '1rem',
    lg: '1.2rem',
    full: '9999px',
  },
  zi: {
    layout: 100,
  },
};

const { colors, ...restTheme } = baseTheme;

export const lightTheme: AppTheme = {
  colors: {
    ...colors,
    secondary: '#95a5a6',
    background: '#f8f9fa',
    surface: '#ffffff',
    foreground: '#000',
    separator: '#e0e0e0',
    tertiary: '#e9ecef',
  },
  ...restTheme,
};

export const darkTheme: AppTheme = {
  colors: {
    ...colors,
    secondary: '#95a5a6',
    background: '#1a1a1a',
    surface: '#242424',
    foreground: '#fff',
    separator: '#2c2c2c',
    tertiary: '#333333',
  },
  ...restTheme,
};
