import { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from 'styled-components';

import { getChartOptions } from '@/entities/chart/lib/get-chart-options';
import { getChartSeries } from '@/entities/chart/lib/get-chart-series';
import type { ChartEntry } from '@/entities/chart/model/types';
import { ChartRoot } from '@/entities/chart/ui/chart.styles';

export interface ChartProps {
  entries: ChartEntry[];
}

export const Chart = ({ entries }: ChartProps) => {
  const theme = useTheme();

  const options = useMemo(() => getChartOptions(entries, theme), [entries, theme]);
  const series = useMemo(() => getChartSeries(entries), [entries]);

  return (
    <ChartRoot>
      <ReactApexChart type="line" width="100%" height="100%" options={options} series={series} />
    </ChartRoot>
  );
};
