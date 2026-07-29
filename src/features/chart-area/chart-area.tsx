import { Suspense, useMemo } from 'react';

import {
  selectAddChartEntries,
  selectChartEntries,
  useChartStore,
  type ChartEntry,
} from '@/entities/chart';
import { ChartLazy } from '@/entities/chart/ui/chart.lazy';
import { ChartSlot, EmptyPlaceholder, Header, Root } from '@/features/chart-area/chat-area.styles';
import { ImportCsvButton } from '@/features/import-chart-csv';
import { errorServiceApi } from '@/app/services/error-service';
import { Typography } from '@/shared/ui/typography';

export const ChartArea = () => {
  const entries = useChartStore(selectChartEntries);
  const setEntries = useChartStore(selectAddChartEntries);

  const shouldPlaceholderVisible = useMemo(() => entries.length === 0, [entries]);

  const onSuccess = (rows: ChartEntry[]) => {
    setEntries(rows);

    errorServiceApi.clearError();
  };

  const onError = (error: Error) => {
    errorServiceApi.handleError(
      error instanceof Error ? error.message : 'Не удалось импортировать CSV',
    );
  };

  return (
    <Root type="raised" padding="lg" display="flex" direction="column" gap="md">
      <Header>
        <Typography variant="h3" weight="bold">
          График
        </Typography>

        <ImportCsvButton onSuccess={onSuccess} onError={onError} />
      </Header>

      {shouldPlaceholderVisible ? (
        <EmptyPlaceholder variant="bodySm" color="secondary">
          Здесь появится визуализация данных после заполнения формы или импорта CSV.
        </EmptyPlaceholder>
      ) : (
        <ChartSlot>
          <Suspense>
            <ChartLazy entries={entries} />
          </Suspense>
        </ChartSlot>
      )}
    </Root>
  );
};
