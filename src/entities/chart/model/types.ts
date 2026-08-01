export interface ChartEntry {
  id: string;
  parameter1: number;
  parameter2: number;
  parameter3: number;
  createdAt: number;
}

export type ChartEntryPayload = Omit<ChartEntry, 'id' | 'createdAt'>;

export interface ChartState {
  data: ChartEntry[];
  error: string | null;
  formResetKey: number;
  addEntry: (payload: ChartEntryPayload) => void;
  addEntries: (payloads: ChartEntryPayload[]) => void;
  setEntries: (entries: ChartEntry[]) => void;
  removeEntry: (id: string) => void;
  clearEntries: () => void;
  setError: (message: string) => void;
  clearError: () => void;
}
