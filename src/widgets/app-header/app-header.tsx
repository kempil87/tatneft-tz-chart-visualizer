import { Typography } from '@/shared/ui/typography';
import { AppThemeSwitcher } from '@/widgets/app-theme-switcher/app-theme-switcher';

import { Header } from './app-header.styles';

export const AppHeader = () => {
  return (
    <Header>
      <Typography variant="h2" weight="bold" color="brand">
        Татнефть Dashboard
      </Typography>

      <AppThemeSwitcher />
    </Header>
  );
};
