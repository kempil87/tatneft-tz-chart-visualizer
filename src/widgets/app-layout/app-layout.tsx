import { ChartForm } from '@/features/chart-form';
import { AppHeader } from '@/widgets/app-header/app-header';

import { Layout, Outlet } from './app-layout.styles';
import { ChartArea } from '@/features/chart-area/chart-area';
import { EntriesListLazy } from '@/features/entries-list/entries-list.lazy';
import { Suspense } from 'react';

export const AppLayout = () => {
  return (
    <Layout>
      <AppHeader />

      <Outlet>
        <ChartForm />

        <ChartArea />

        <Suspense>
          <EntriesListLazy />
        </Suspense>
      </Outlet>
    </Layout>
  );
};
