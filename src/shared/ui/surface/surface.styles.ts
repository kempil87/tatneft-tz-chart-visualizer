import styled, { css } from 'styled-components';

import type {
  SurfaceAlign,
  SurfaceDirection,
  SurfaceDisplay,
  SurfaceJustify,
  SurfaceRadius,
  SurfaceSpacing,
  SurfaceWrap,
  SurfaceType,
  SurfaceColor,
} from './types';

export type StyledSurfaceProps = {
  $type?: SurfaceType;
  $display?: SurfaceDisplay;
  $direction?: SurfaceDirection;
  $align?: SurfaceAlign;
  $justify?: SurfaceJustify;
  $wrap?: SurfaceWrap;
  $gap?: SurfaceSpacing;
  $padding?: SurfaceSpacing;
  $radius?: SurfaceRadius;
  $isStretched?: boolean;
  $color?: SurfaceColor;
  $inlinePadding?: SurfaceSpacing;
};

const typeStyles = {
  default: css`
    background-color: ${({ theme }) => theme.colors.surface};
  `,
  clear: css`
    background-color: transparent;
    box-shadow: none;
  `,
  raised: css`
    background-color: ${({ theme }) => theme.colors.surface};
    box-shadow: 2px 2px 10px 0 rgb(0 0 0 / 10%);
  `,
} as const satisfies Record<SurfaceType, ReturnType<typeof css>>;

const colorStyles = {
  default: css`
    background-color: ${({ theme }) => theme.colors.surface};
  `,
  brand: css`
    background-color: ${({ theme }) => theme.colors.brandHover};
  `,
} as const satisfies Record<SurfaceColor, ReturnType<typeof css>>;

export const Root = styled.div<StyledSurfaceProps>`
  border-radius: ${({ theme, $radius = 'md' }) =>
    $radius === 'none' ? '0' : theme.borderRadius[$radius]};
  display: ${({ $display = 'block' }) => $display};
  width: ${({ $isStretched }) => ($isStretched ? '100%' : undefined)};
  ${({ $type = 'default' }) => typeStyles[$type]};

  ${({ $padding, theme }) =>
    $padding &&
    css`
      padding: ${theme.spacing[$padding]};
    `};

  ${({ $inlinePadding, theme }) =>
    $inlinePadding &&
    css`
      padding-inline: ${theme.spacing[$inlinePadding]};
    `};

  ${({ $color = 'default' }) => colorStyles[$color]};

  ${({ $display = 'block', $direction, $align, $justify, $wrap, $gap, theme }) =>
    ($display === 'flex' || $display === 'inline-flex' || $display === 'grid') &&
    css`
      ${
        $direction &&
        css`
          flex-direction: ${$direction};
        `
      }
      ${
        $align &&
        css`
          align-items: ${$align};
        `
      }
      ${
        $justify &&
        css`
          justify-content: ${$justify};
        `
      }
      ${
        $wrap &&
        css`
          flex-wrap: ${$wrap};
        `
      }
      ${
        $gap &&
        css`
          gap: ${theme.spacing[$gap]};
        `
      }
    `};
`;
