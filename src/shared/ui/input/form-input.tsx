import type { ChangeEvent } from 'react';
import { Controller, useFormContext, type RegisterOptions } from 'react-hook-form';

import { Input, type InputProps } from './input';

export interface FormInputProps extends Omit<InputProps, 'onChange' | 'name' | 'error'> {
  name: string;
  onChange?: (name: string, value: string) => void;
  rules?: RegisterOptions;
}

export const FormInput = ({ name, onChange, rules, ...props }: FormInputProps) => {
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
          <Input
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
