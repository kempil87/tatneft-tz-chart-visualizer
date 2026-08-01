import { useMemo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from 'styled-components';

import { getChartOptions } from '../lib/get-chart-options';
import { getChartSeries } from '../lib/get-chart-series';
import { CHART_TYPE_OPTIONS, CHART_TYPES, type ChartType } from '../model/chart-type';
import type { ChartEntry } from '../model/types';
import { ChartCanvas, ChartRoot } from './chart.styles';
import { SegmentButton } from '@/shared/ui/segment-button';

export interface ChartProps {
  entries: ChartEntry[];
}

export const Chart = ({ entries }: ChartProps) => {
  const [chartType, setChartType] = useState<ChartType>(CHART_TYPES.LINE);
  const theme = useTheme();

  const series = useMemo(() => getChartSeries(entries), [entries]);
  const options = useMemo(
    () => getChartOptions(entries, theme, chartType),
    [entries, theme, chartType],
  );

  return (
    <ChartRoot>
      <SegmentButton
        value={chartType}
        options={CHART_TYPE_OPTIONS}
        aria-label="Тип графика"
        onChange={setChartType}
      />

      <ChartCanvas>
        <ReactApexChart
          key={chartType}
          type={chartType}
          width="100%"
          height="100%"
          options={options}
          series={series}
        />
      </ChartCanvas>
    </ChartRoot>
  );
};
