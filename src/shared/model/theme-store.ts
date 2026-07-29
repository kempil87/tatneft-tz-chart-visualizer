import { create } from 'zustand';

import { STORAGE_KEYS } from '@/shared/config/storage';

export const ThemeMap = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ThemeMode = (typeof ThemeMap)[keyof typeof ThemeMap];

export interface ThemeState {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
  syncFromSystem: (mode: ThemeMode) => void;
}

export const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

const isThemeMode = (value: unknown): value is ThemeMode =>
  value === ThemeMap.LIGHT || value === ThemeMap.DARK;

const getThemeFromStorage = (): ThemeMode | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const theme = localStorage.getItem(STORAGE_KEYS.APP_THEME);

  return isThemeMode(theme) ? theme : null;
};

const setThemeToStorage = (mode: ThemeMode) => {
  localStorage.setItem(STORAGE_KEYS.APP_THEME, mode);
};

export const getSystemTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return ThemeMap.LIGHT;
  }

  return window.matchMedia(COLOR_SCHEME_QUERY).matches ? ThemeMap.DARK : ThemeMap.LIGHT;
};

const getInitialTheme = (): ThemeMode => getThemeFromStorage() ?? getSystemTheme();

export const subscribeSystemTheme = (onChange: (mode: ThemeMode) => void): (() => void) => {
  const media = window.matchMedia(COLOR_SCHEME_QUERY);

  const listener = (event: MediaQueryListEvent) => {
    onChange(event.matches ? ThemeMap.DARK : ThemeMap.LIGHT);
  };

  media.addEventListener('change', listener);

  return () => {
    media.removeEventListener('change', listener);
  };
};

export const useThemeStore = create<ThemeState>((set) => ({
  mode: getInitialTheme(),
  setMode: (mode) => {
    setThemeToStorage(mode);
    set({ mode });
  },
  toggle: () =>
    set((state) => {
      const mode = state.mode === ThemeMap.DARK ? ThemeMap.LIGHT : ThemeMap.DARK;

      setThemeToStorage(mode);

      return { mode };
    }),
  syncFromSystem: (mode) => {
    if (getThemeFromStorage() !== null) {
      return;
    }

    set({ mode });
  },
}));

export const selectThemeMode = (state: ThemeState): ThemeMode => state.mode;

export const selectIsDark = (state: ThemeState): boolean => state.mode === ThemeMap.DARK;

export const selectSetMode = (state: ThemeState): ThemeState['setMode'] => state.setMode;

export const selectToggleTheme = (state: ThemeState): ThemeState['toggle'] => state.toggle;

export const selectSyncFromSystem = (state: ThemeState): ThemeState['syncFromSystem'] =>
  state.syncFromSystem;
