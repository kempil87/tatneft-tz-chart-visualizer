import { useState } from 'react';

import { chartDraftApi, selectSetChartEntries, useChartStore } from '@/entities/chart';

export const useChartDraft = () => {
  const setEntries = useChartStore(selectSetChartEntries);

  const [isVisible, setIsVisible] = useState(() => Boolean(chartDraftApi.read()?.length));

  const handleRestore = () => {
    const draft = chartDraftApi.read();

    if (!draft) {
      return;
    }

    setEntries(draft);
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
