import { create } from 'zustand';

import type { ChartEntry, ChartEntryPayload, ChartState } from './types';

const createEntryId = (): string => crypto.randomUUID();

export const useChartStore = create<ChartState>((set) => ({
  data: [],
  error: null,
  formResetKey: 0,

  addEntries: (payload) =>
    set((state) => ({
      data: payload,
      formResetKey: state.formResetKey + 1,
    })),

  addEntry: (payload: ChartEntryPayload) =>
    set((state) => {
      const id = createEntryId();
      const entry = { ...payload, id, createdAt: Date.now() };

      return { data: [...state.data, entry] };
    }),

  removeEntry: (id) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== id),
    })),

  clearEntries: () => set({ data: [], error: null }),

  setError: (message) => set({ error: message }),

  clearError: () => set({ error: null }),
}));

export const selectChartEntries = (state: ChartState): ChartEntry[] => state.data;

export const selectAddChartEntries = (state: ChartState): ChartState['addEntries'] =>
  state.addEntries;

export const selectChartError = (state: ChartState): string | null => state.error;

export const selectFormResetKey = (state: ChartState): number => state.formResetKey;

export const selectAddChartEntry = (state: ChartState): ChartState['addEntry'] =>
  state.addEntry;

export const selectRemoveChartEntry = (
  state: ChartState,
): ChartState['removeEntry'] => state.removeEntry;

export const selectClearChartEntries = (
  state: ChartState,
): ChartState['clearEntries'] => state.clearEntries;

export const selectSetChartError = (state: ChartState): ChartState['setError'] =>
  state.setError;

export const selectClearChartError = (
  state: ChartState,
): ChartState['clearError'] => state.clearError;
