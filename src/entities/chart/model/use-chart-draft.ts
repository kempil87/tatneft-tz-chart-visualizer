import { useState } from 'react';
import { chartDraftApi } from '../lib/chart-draft';
import { useChartStore } from './chart-store';
import { selectAddChartEntries } from './chart-store';

export const useChartDraft = () => {
  const restoreEntries = useChartStore(selectAddChartEntries);

  const [isVisible, setIsVisible] = useState(() => Boolean(chartDraftApi.read()?.length));

  const handleRestore = () => {
    const draft = chartDraftApi.read();

    if (!draft) {
      return;
    }

    restoreEntries(draft);
    setIsVisible(false);
  };

  const handleDiscard = () => {
    chartDraftApi.clear();
    setIsVisible(false);
  };

  return {
    handleRestore,
    handleDiscard,
    isVisible,
  };
};
