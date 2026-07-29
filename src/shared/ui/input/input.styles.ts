import styled from 'styled-components';
import { Typography } from '../typography/typography';

type WrapperProps = {
  $hasError: boolean;
  $isDisabled: boolean;
};

export const Root = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
`;

export const Label = styled(Typography)`
  padding-left: 0.5rem;
`;

export const InputWrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  padding: 0 1rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.tertiary};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? 'none' : 'auto')};

  &:focus-within {
    box-shadow: 0 0 0 3px
      ${({ $hasError }) => ($hasError ? 'rgb(231 76 60 / 15%)' : 'rgb(52 152 219 / 15%)')};
  }
`;

export const NativeInput = styled.input`
  appearance: none;
  flex: 1;
  height: 100%;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.foreground};
  font: inherit;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    appearance: none;
  }
`;
