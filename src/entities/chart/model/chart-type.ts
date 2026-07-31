export const CHART_TYPES = {
  LINE: 'line',
  BAR: 'bar',
} as const;

export type ChartType = (typeof CHART_TYPES)[keyof typeof CHART_TYPES];

export const CHART_TYPE_OPTIONS: ReadonlyArray<{ value: ChartType; label: string }> = [
  { value: CHART_TYPES.LINE, label: 'Линейная' },
  { value: CHART_TYPES.BAR, label: 'Столбчатая' },
];
