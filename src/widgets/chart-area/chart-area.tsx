import { Suspense } from 'react';

import { ChartLazy, selectChartEntries, useChartStore } from '@/entities/chart';
import { ImportCsvButton } from '@/features/import-chart-csv';
import { Typography } from '@/shared/ui/typography';

import {
  ChartSlot,
  ChartFallback,
  EmptyPlaceholder,
  Header,
  Root,
  ChartLoader,
} from './chart-area.styles';

export const ChartArea = () => {
  const entries = useChartStore(selectChartEntries);
  const shouldPlaceholderVisible = entries.length === 0;

  return (
    <Root type="raised" padding="lg" display="flex" direction="column" gap="md">
      <Header>
        <Typography variant="h3" weight="bold">
          График
        </Typography>

        <ImportCsvButton />
      </Header>

      {shouldPlaceholderVisible ? (
        <EmptyPlaceholder variant="bodySm" color="secondary">
          Здесь появится визуализация данных после заполнения формы или импорта CSV.
        </EmptyPlaceholder>
      ) : (
        <ChartSlot>
          <Suspense
            fallback={
              <ChartFallback>
                <ChartLoader />

                <Typography variant="bodySm" color="secondary">
                  Загрузка графика…
                </Typography>
              </ChartFallback>
            }
          >
            <ChartLazy entries={entries} />
          </Suspense>
        </ChartSlot>
      )}
    </Root>
  );
};
