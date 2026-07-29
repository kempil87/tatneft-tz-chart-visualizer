import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { Root } from './button.styles';
import type { ButtonColor, ButtonVariant } from './types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  isDisabled?: boolean;
  children?: ReactNode;
  isStretched?: boolean;
}

export const Button = ({
  variant = 'solid',
  color = 'brand',
  isDisabled = false,
  children,
  isStretched = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <Root
      type={type}
      $variant={variant}
      $color={color}
      $isStretched={isStretched}
      disabled={isDisabled || props.disabled}
      {...props}
    >
      {children}
    </Root>
  );
};
