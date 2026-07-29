import { selectIsDark, selectToggleTheme, useThemeStore } from '@/shared/model/theme-store';

export const useTheme = () => {
  const isDarkMode = useThemeStore(selectIsDark);
  const toggle = useThemeStore(selectToggleTheme);

  return {
    isDarkMode,
    toggle,
  };
};
