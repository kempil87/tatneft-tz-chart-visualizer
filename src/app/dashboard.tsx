import { ChartDraftBanner } from '@/features/chart-draft-banner';
import { ChartForm } from '@/features/chart-form';
import { EntriesList } from '@/features/entries-list';
import { AppHeader } from '@/widgets/app-header';
import { AppLayout } from '@/widgets/app-layout';
import { ChartArea } from '@/widgets/chart-area';

export const Dashboard = () => {
  return (
    <AppLayout header={<AppHeader />} banner={<ChartDraftBanner />}>
      <ChartForm />
      <ChartArea />
      <EntriesList />
    </AppLayout>
  );
};
