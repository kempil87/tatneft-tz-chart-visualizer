import { ThemeSwitcher } from '@/features/theme-switcher';
import { Typography } from '@/shared/ui/typography';

import { Header } from './app-header.styles';

export const AppHeader = () => {
  return (
    <Header>
      <Typography variant="h2" weight="bold" color="brand">
        Татнефть Dashboard
      </Typography>

      <ThemeSwitcher />
    </Header>
  );
};
