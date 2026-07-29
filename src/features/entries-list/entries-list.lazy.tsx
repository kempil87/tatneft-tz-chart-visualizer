import { lazy } from 'react';

export const EntriesListLazy = lazy(() =>
  import('./entries-list').then((module) => ({
    default: module.EntriesList,
  })),
);
