import type { ApexOptions } from 'apexcharts';
import type { DefaultTheme } from 'styled-components';

import type { ChartEntry } from '@/entities/chart/model/types';

const getCategoriesData = (entries: ChartEntry[]) => entries.map((_, index) => `#${index + 1}`);

export const getChartOptions = (entries: ChartEntry[], theme: DefaultTheme): ApexOptions => ({
  chart: {
    toolbar: { show: false },
    background: 'transparent',
    fontFamily: 'Onest, sans-serif',
    parentHeightOffset: 0,
    redrawOnParentResize: true,
    redrawOnWindowResize: true,
  },
  colors: [theme.colors.brand, theme.colors.secondary, theme.colors.danger],
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  grid: {
    borderColor: theme.colors.separator,
    strokeDashArray: 4,
  },
  xaxis: {
    categories: getCategoriesData(entries),
    labels: {
      style: {
        colors: theme.colors.secondary,
      },
    },
    axisBorder: {
      color: theme.colors.separator,
    },
    axisTicks: {
      color: theme.colors.separator,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: theme.colors.secondary,
      },
    },
  },
  legend: {
    labels: {
      colors: theme.colors.foreground,
    },
  },
});
