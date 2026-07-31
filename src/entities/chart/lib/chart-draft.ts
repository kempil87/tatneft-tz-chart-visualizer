import { STORAGE_KEYS } from '@/shared/config/storage';
import type { ChartEntry } from '@/entities/chart/model/types';

const isChartEntry = (value: unknown): value is ChartEntry => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const entry = value as Record<string, unknown>;

  return (
    typeof entry.id === 'string' &&
    typeof entry.parameter1 === 'number' &&
    typeof entry.parameter2 === 'number' &&
    typeof entry.parameter3 === 'number' &&
    typeof entry.createdAt === 'number'
  );
};

class ChartDraft {
  read(): ChartEntry[] {
    if (typeof window === 'undefined') {
      return [];
    }

    try {
      const dataString = localStorage.getItem(STORAGE_KEYS.CHART_DATA_DRAFT);

      if (!dataString) {
        return [];
      }

      const parsed: unknown = JSON.parse(dataString);

      if (!Array.isArray(parsed) || parsed.length === 0 || !parsed.every(isChartEntry)) {
        localStorage.removeItem(STORAGE_KEYS.CHART_DATA_DRAFT);
        return [];
      }

      return parsed;
    } catch {
      localStorage.removeItem(STORAGE_KEYS.CHART_DATA_DRAFT);
      return [];
    }
  }
  write(entries: ChartEntry[]): void {
    if (typeof window === 'undefined') {
      return;
    }

    if (entries.length === 0) {
      this.clear();
      return;
    }

    localStorage.setItem(STORAGE_KEYS.CHART_DATA_DRAFT, JSON.stringify(entries));
  }
  clear(): void {
    if (typeof window === 'undefined') {
      return;
    }

    localStorage.removeItem(STORAGE_KEYS.CHART_DATA_DRAFT);
  }
}

export const chartDraftApi = new ChartDraft();
