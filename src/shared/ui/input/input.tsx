import type { ComponentProps, KeyboardEvent, ReactNode } from 'react';
import { useId } from 'react';

import { FieldError } from '@/shared/ui/field-error';

import { InputWrapper, Label, NativeInput, Root } from './input.styles';

export interface InputProps extends ComponentProps<'input'> {
  label?: ReactNode;
  error?: string;
  isDisabled?: boolean;
}

const preventNumericInput = (event: KeyboardEvent<HTMLInputElement>) => {
  if (event.key === 'e' || event.key === 'E' || event.key === '+' || event.key === '-') {
    event.preventDefault();
  }
};

export const Input = ({
  name,
  label,
  error,
  isDisabled = false,
  placeholder,
  ...props
}: InputProps) => {
  const id = useId();
  const isNumeric = props.type === 'number';

  return (
    <Root htmlFor={id}>
      {label && (
        <Label as="span" variant="bodySm" weight="bold">
          {label}
        </Label>
      )}

      <InputWrapper $hasError={!!error} $isDisabled={isDisabled}>
        <NativeInput
          id={id}
          name={name}
          disabled={isDisabled}
          placeholder={placeholder}
          {...(isNumeric && {
            onKeyDown: preventNumericInput,
          })}
          {...props}
        />
      </InputWrapper>

      <FieldError error={error} />
    </Root>
  );
};
