import { ChartForm } from '@/features/chart-form';
import { ChartArea } from '@/features/chart-area/chart-area';
import { EntriesList } from '@/features/entries-list/entries-list';
import { AppHeader } from '@/widgets/app-header/app-header';

import { Layout, Outlet } from './app-layout.styles';

export const AppLayout = () => {
  return (
    <Layout>
      <AppHeader />

      <Outlet>
        <ChartForm />

        <ChartArea />

        <EntriesList />
      </Outlet>
    </Layout>
  );
};
