import { useTheme } from '@/app/providers/theme-provider';
import { Switch } from '@/shared/ui/switch';

export const AppThemeSwitcher = () => {
  const themeApi = useTheme();

  return (
    <Switch isChecked={themeApi.isDarkMode} onChange={themeApi.toggle}>
      {!themeApi.isDarkMode ? 'Темная тема' : 'Светлая тема'}
    </Switch>
  );
};
