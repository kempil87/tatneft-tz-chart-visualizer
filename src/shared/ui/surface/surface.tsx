import type { ElementType, HTMLAttributes, ReactNode } from 'react';

import { Root } from './surface.styles';
import type {
  SurfaceAlign,
  SurfaceColor,
  SurfaceDirection,
  SurfaceDisplay,
  SurfaceJustify,
  SurfaceRadius,
  SurfaceSpacing,
  SurfaceType,
  SurfaceWrap,
} from './types';

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  type?: SurfaceType;
  display?: SurfaceDisplay;
  direction?: SurfaceDirection;
  align?: SurfaceAlign;
  justify?: SurfaceJustify;
  wrap?: SurfaceWrap;
  gap?: SurfaceSpacing;
  padding?: SurfaceSpacing;
  inlinePadding?: SurfaceSpacing;
  radius?: SurfaceRadius;
  isStretched?: boolean;
  as?: ElementType;
  children?: ReactNode;
  color?: SurfaceColor;
}

export const Surface = ({
  type = 'default',
  display = 'block',
  direction,
  align,
  justify,
  wrap,
  gap,
  padding = 'md',
  inlinePadding,
  radius = 'md',
  isStretched = true,
  color = 'default',
  as,
  ...props
}: SurfaceProps) => {
  return (
    <Root
      as={as}
      $type={type}
      $display={display}
      $direction={direction}
      $align={align}
      $justify={justify}
      $wrap={wrap}
      $gap={gap}
      $padding={padding}
      $inlinePadding={inlinePadding}
      $radius={radius}
      $isStretched={isStretched}
      $color={color}
      {...props}
    />
  );
};
