import type { ChartEntry } from '../model/types';

export const getChartSeries = (entries: ChartEntry[]) => [
  {
    name: 'Параметр 1',
    data: entries.map((entry) => entry.parameter1),
  },
  {
    name: 'Параметр 2',
    data: entries.map((entry) => entry.parameter2),
  },
  {
    name: 'Параметр 3',
    data: entries.map((entry) => entry.parameter3),
  },
];
