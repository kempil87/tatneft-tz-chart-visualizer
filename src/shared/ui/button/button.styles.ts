import styled, { css } from 'styled-components';

import type { ButtonColor, ButtonVariant } from './types';

type StyledButtonProps = {
  $variant: ButtonVariant;
  $color: ButtonColor;
  $isStretched: boolean;
};

const getWidth = (isStretched: boolean) => (isStretched ? '100%' : 'fit-content');

const solidStyles = {
  brand: css`
    background-color: ${({ theme }) => theme.colors.brand};
    color: ${({ theme }) => theme.colors.contrast};

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
  default: css`
    background-color: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.foreground};

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.contrast};

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
} as const satisfies Record<ButtonColor, ReturnType<typeof css>>;

const flatStyles = {
  brand: css`
    background-color: ${({ theme }) => theme.colors.brandHover};
    color: ${({ theme }) => theme.colors.brand};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.brandActive};
      color: ${({ theme }) => theme.colors.contrast};
    }
  `,
  default: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.foreground};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.separator};
    }
  `,
  danger: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.danger};

    &:hover:not(:disabled) {
      background-color: rgb(231 76 60 / 10%);
    }
  `,
} as const satisfies Record<ButtonColor, ReturnType<typeof css>>;

export const Root = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: ${({ $isStretched }) => getWidth($isStretched)};
  height: 3rem;
  padding: 0.85rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition:
    opacity 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;

  ${({ $variant, $color }) => ($variant === 'solid' ? solidStyles[$color] : flatStyles[$color])};

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand};
    outline-offset: 2px;
  }
`;
