import { useTheme } from '@/shared/model/use-theme';
import { Switch } from '@/shared/ui/switch';

export const AppThemeSwitcher = () => {
  const themeApi = useTheme();

  return (
    <Switch isChecked={themeApi.isDarkMode} onChange={themeApi.toggle}>
      {(isChecked) => (isChecked ? 'Светлая тема' : 'Темная тема')}
    </Switch>
  );
};
