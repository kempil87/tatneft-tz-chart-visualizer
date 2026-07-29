import type { AppTheme } from '@/shared/config/theme';

export type SurfaceDisplay = 'block' | 'flex' | 'inline-flex' | 'grid';

export type SurfaceDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type SurfaceAlign = 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';

export type SurfaceJustify =
  'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

export type SurfaceWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type SurfaceSpacing = keyof AppTheme['spacing'];

export type SurfaceRadius = keyof AppTheme['borderRadius'] | 'none';

export type SurfaceType = 'default' | 'clear' | 'raised';

export type SurfaceColor = 'default' | 'brand';
