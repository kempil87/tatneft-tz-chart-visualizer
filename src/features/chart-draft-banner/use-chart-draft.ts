import { useState } from 'react';

import { chartDraftApi, selectAddChartEntries, useChartStore } from '@/entities/chart';

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
