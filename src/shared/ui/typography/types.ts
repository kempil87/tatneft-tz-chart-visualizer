import type { AppTheme } from '@/shared/config/theme';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'bodySm'
  | 'caption'
  | 'label';

export type TypographyColor = keyof AppTheme['colors'];

export type TypographyAlign = 'left' | 'center' | 'right';

export type TypographyWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export const fontWeightMap = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const satisfies Record<TypographyWeight, number>;

export const variantTagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  bodySm: 'p',
  caption: 'span',
  label: 'span',
} as const satisfies Record<TypographyVariant, keyof HTMLElementTagNameMap>;
