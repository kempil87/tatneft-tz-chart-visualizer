import { type PropsWithChildren, useLayoutEffect } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/shared/config/theme';
import {
  selectIsDark,
  selectSyncFromSystem,
  selectToggleTheme,
  subscribeSystemTheme,
  useThemeStore,
} from '@/shared/model/theme-store';
import { GlobalStyles } from '@/shared/styles/global-styles';

export const ThemeProvider = ({ children }: Readonly<PropsWithChildren>) => {
  const isDarkMode = useThemeStore(selectIsDark);
  const syncFromSystem = useThemeStore(selectSyncFromSystem);

  useLayoutEffect(() => subscribeSystemTheme(syncFromSystem), [syncFromSystem]);

  return (
    <SCThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />

      {children}
    </SCThemeProvider>
  );
};

export const useTheme = () => {
  const isDarkMode = useThemeStore(selectIsDark);
  const toggle = useThemeStore(selectToggleTheme);

  return {
    isDarkMode,
    toggle,
  };
};
