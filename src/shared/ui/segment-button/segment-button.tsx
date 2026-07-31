import type { HTMLAttributes } from 'react';

import { Root, Segment } from './segment-button.styles';
import type { SegmentButtonOption } from './types';

export interface SegmentButtonProps<T extends string = string> extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange'
> {
  value: T;
  options: ReadonlyArray<SegmentButtonOption<T>>;
  onChange: (value: T) => void;
  isDisabled?: boolean;
  isStretched?: boolean;
}

export function SegmentButton<T extends string>({
  value,
  options,
  onChange,
  isDisabled = false,
  isStretched = false,
  ...rest
}: SegmentButtonProps<T>) {
  const activeIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  );

  return (
    <Root role="radiogroup" $count={options.length || 1} $isStretched={isStretched} {...rest}>
      {options.map((option) => {
        const isActive = option.value === value;
        const isSegmentDisabled = isDisabled || Boolean(option.isDisabled);

        return (
          <Segment
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            tabIndex={isActive ? 0 : -1}
            disabled={isSegmentDisabled}
            $isActive={isActive}
            onClick={() => {
              if (!isSegmentDisabled) {
                onChange(option.value);
              }
            }}
          >
            {option.label}
          </Segment>
        );
      })}
    </Root>
  );
}
