import { useChartStore } from '@/entities/chart';
import { createErrorService } from '@/shared/lib/error-service';

export const setupErrorService = () => {
  createErrorService({
    setError: (message) => {
      useChartStore.getState().setError(message);
    },
    clearError: () => {
      useChartStore.getState().clearError();
    },
    getError: () => useChartStore.getState().error,
    subscribe: (listener) =>
      useChartStore.subscribe((state, previousState) => {
        if (state.error === previousState.error) {
          return;
        }

        listener(state.error);
      }),
  });
};
