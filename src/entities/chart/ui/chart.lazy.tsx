import { lazy } from 'react';

export const ChartLazy = lazy(() =>
  import('./chart').then((module) => ({ default: module.Chart })),
);
