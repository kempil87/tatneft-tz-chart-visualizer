import { useRef, type ChangeEvent } from 'react';

import { selectAddChartEntries, useChartStore } from '@/entities/chart';
import { errorServiceApi } from '@/shared/lib/error-service';
import { Button } from '@/shared/ui/button';

import { HiddenInput } from './import-csv-button.styles';
import { parseChartCsv } from './parse-chart-csv';

export const ImportCsvButton = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const addEntries = useChartStore(selectAddChartEntries);

  const handleOpen = () => {
    inputRef.current?.click();
  };

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';

    if (!file || file.size === 0 || file.type !== 'text/csv') {
      errorServiceApi.handleError('Некорректный файл CSV');
      return;
    }

    try {
      const content = await file.text();
      const entries = parseChartCsv(content);

      addEntries(entries);
      errorServiceApi.clearError();
    } catch (error) {
      errorServiceApi.handleError(
        error instanceof Error ? error.message : 'Не удалось импортировать CSV',
      );
    }
  };

  return (
    <>
      <HiddenInput
        ref={inputRef}
        name="chart-csv"
        type="file"
        accept=".csv,text/csv"
        aria-label="Выбрать CSV-файл для импорта"
        onChange={onChange}
      />

      <Button type="button" variant="flat" isStretched={false} onClick={handleOpen}>
        Импортировать CSV
      </Button>
    </>
  );
};
