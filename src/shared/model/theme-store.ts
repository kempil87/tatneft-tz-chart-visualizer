import { create } from 'zustand';

import { STORAGE_KEYS } from '@/shared/config/storage';
import { persist } from 'zustand/middleware';

export const ThemeMap = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ThemeMode = (typeof ThemeMap)[keyof typeof ThemeMap];

export interface ThemeState {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
}

export const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

export const getSystemTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return ThemeMap.LIGHT;
  }

  return window.matchMedia(COLOR_SCHEME_QUERY).matches ? ThemeMap.DARK : ThemeMap.LIGHT;
};

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

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: getSystemTheme(),
      setMode: (mode) => set({ mode }),
      toggle: () =>
        set((state) => ({ mode: state.mode === ThemeMap.DARK ? ThemeMap.LIGHT : ThemeMap.DARK })),
    }),
    { name: STORAGE_KEYS.APP_THEME },
  ),
);

export const selectIsDark = (state: ThemeState): boolean => state.mode === ThemeMap.DARK;

export const selectSetMode = (state: ThemeState): ThemeState['setMode'] => state.setMode;

export const selectToggleTheme = (state: ThemeState): ThemeState['toggle'] => state.toggle;
