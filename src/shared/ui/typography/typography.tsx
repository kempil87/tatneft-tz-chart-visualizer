import type { ElementType, HTMLAttributes } from 'react';

import { Root } from './typography.styles';
import {
  type TypographyAlign,
  type TypographyColor,
  type TypographyVariant,
  type TypographyWeight,
  variantTagMap,
} from './types';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  color?: TypographyColor;
  align?: TypographyAlign;
  weight?: TypographyWeight;
  as?: ElementType;
}

export const Typography = ({
  variant = 'body',
  color,
  align,
  weight,
  as,
  children,
  ...props
}: TypographyProps) => {
  const Component = as ?? variantTagMap[variant];

  return (
    <Root
      as={Component}
      $variant={variant}
      $color={color}
      $align={align}
      $weight={weight}
      {...props}
    >
      {children}
    </Root>
  );
};
