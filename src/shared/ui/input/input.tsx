import type { ChangeEvent, ComponentProps, KeyboardEvent, ReactNode } from 'react';

import { InputWrapper, Label, NativeInput, Root } from './input.styles';
import { useId } from 'react';
import { Controller, useFormContext, type RegisterOptions } from 'react-hook-form';
import { FieldError } from '../field-error/field-error';

export interface InputPrimitiveProps extends ComponentProps<'input'> {
  label?: ReactNode;
  error?: string;
  isDisabled?: boolean;
}

export interface InputProps extends Omit<InputPrimitiveProps, 'onChange' | 'name'> {
  name: string;
  onChange?: (name: string, value: string) => void;
  rules?: RegisterOptions;
}

const preventNumericInput = (event: KeyboardEvent<HTMLInputElement>) => {
  if (event.key === 'e' || event.key === 'E' || event.key === '+' || event.key === '-') {
    event.preventDefault();
  }
};

export const InputPrimitive = ({
  name,
  label,
  error,
  isDisabled = false,
  placeholder,
  ...props
}: InputPrimitiveProps) => {
  const _id = useId();

  const isNumeric = props.type === 'number';

  return (
    <Root htmlFor={_id}>
      {label && (
        <Label as="span" variant="bodySm" weight="bold">
          {label}
        </Label>
      )}

      <InputWrapper $hasError={!!error} $isDisabled={isDisabled}>
        <NativeInput
          id={_id}
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

export const Input = ({ name, onChange, rules, ...props }: InputProps) => {
  const formContextApi = useFormContext();

  return (
    <Controller
      rules={rules}
      control={formContextApi.control}
      name={name}
      render={({ field: { onChange: onControllerChange, ...field }, ...control }) => {
        const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value;

          onChange?.(name, value);
          onControllerChange(value);
        };

        return (
          <InputPrimitive
            error={control.fieldState.error?.message?.toString()}
            onChange={onFieldChange}
            {...field}
            {...props}
          />
        );
      }}
    />
  );
};
