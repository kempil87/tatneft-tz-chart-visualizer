import styled, { css } from 'styled-components';

import {
  fontWeightMap,
  type TypographyAlign,
  type TypographyColor,
  type TypographyVariant,
  type TypographyWeight,
} from './types';

type StyledTypographyProps = {
  $variant: TypographyVariant;
  $color?: TypographyColor;
  $align?: TypographyAlign;
  $weight?: TypographyWeight;
};

const variantStyles = {
  h1: css`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
  `,
  h2: css`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.25;
  `,
  h3: css`
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.3;
  `,
  h4: css`
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.35;
  `,
  body: css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
  `,
  bodySm: css`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
  `,
  caption: css`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.4;
  `,
  label: css`
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.4;
  `,
} as const satisfies Record<TypographyVariant, ReturnType<typeof css>>;

export const Root = styled.p<StyledTypographyProps>`
  margin: 0;
  color: ${({ theme, $color }) => ($color ? theme.colors[$color] : theme.colors.foreground)};
  text-align: ${({ $align }) => $align ?? 'left'};
  ${({ $variant }) => variantStyles[$variant]};
  ${({ $weight }) =>
    $weight &&
    css`
      font-weight: ${fontWeightMap[$weight]};
    `};
`;
