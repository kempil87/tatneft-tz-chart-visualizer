import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { Root, Thumb, Track } from '@/shared/ui/switch/switch.styles';
import { Typography } from '@/shared/ui/typography';

export interface SwitchProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onChange' | 'role' | 'type' | 'children'
> {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  isDisabled?: boolean;
  children?: ReactNode | ((isChecked: boolean) => ReactNode);
}

export const Switch = ({
  isChecked,
  onChange,
  isDisabled = false,
  children,
  ...rest
}: SwitchProps) => {
  const handleClick = () => {
    if (isDisabled) return;
    onChange(!isChecked);
  };

  return (
    <Root>
      {children && (
        <Typography weight="medium">
          {typeof children === 'function' ? children(isChecked) : children}
        </Typography>
      )}

      <Track
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={isDisabled}
        $checked={isChecked}
        onClick={handleClick}
        {...rest}
      >
        <Thumb $checked={isChecked} />
      </Track>
    </Root>
  );
};
