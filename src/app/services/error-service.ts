import { toast } from 'sonner';

import { selectChartError, useChartStore } from '@/entities/chart';

export interface ErrorService {
  handleError: (message: string) => void;
  clearError: () => void;
}

export const errorServiceApi: ErrorService = {
  handleError: (message) => {
    useChartStore.getState().setError(message);
  },
  clearError: () => {
    useChartStore.getState().clearError();
  },
};

let unsubscribe: (() => void) | null = null;

export const initErrorService = (): (() => void) => {
  if (unsubscribe) {
    return unsubscribe;
  }

  let previousError = selectChartError(useChartStore.getState());

  unsubscribe = useChartStore.subscribe((state) => {
    const nextError = state.error;

    if (nextError && nextError !== previousError) {
      toast.error(nextError);
    }

    if (!nextError && previousError) {
      toast.dismiss();
    }

    previousError = nextError;
  });

  return () => {
    unsubscribe?.();
    unsubscribe = null;
  };
};
