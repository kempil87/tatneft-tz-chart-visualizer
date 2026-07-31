import { useId, useRef, type ChangeEvent } from 'react';

import { parseChartCsv } from '@/features/import-chart-csv/parse-chart-csv';

import { Button } from '@/shared/ui/button';
import { HiddenInput } from './import-csv-button.styles';
import type { ChartEntry } from '@/entities/chart';

interface ImportCsvButtonProps {
  onSuccess: (entries: ChartEntry[]) => void;
  onError: (error: Error) => void;
}

export const ImportCsvButton = ({ onSuccess, onError }: ImportCsvButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  const handleOpen = () => {
    inputRef.current?.click();
  };

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    event.target.value = '';

    if (!file) {
      return;
    }

    try {
      const content = await file.text();
      const rows = parseChartCsv(content);

      onSuccess(rows);
    } catch (error) {
      onError(error as Error);
    }
  };

  return (
    <>
      <HiddenInput
        ref={inputRef}
        id={inputId}
        name="chart-csv"
        type="file"
        accept=".csv,text/csv"
        aria-label="Выбрать CSV-файл для импорта"
        onChange={onChange}
      />

      <Button
        type="button"
        variant="flat"
        isStretched={false}
        aria-controls={inputId}
        onClick={handleOpen}
      >
        Импортировать CSV
      </Button>
    </>
  );
};
