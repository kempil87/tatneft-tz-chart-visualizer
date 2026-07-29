import styled from 'styled-components';

type BaseProps = {
  $checked: boolean;
};

export const Track = styled.button<BaseProps>`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  container-type: inline-size;
  width: 2.75rem;
  height: 1.5rem;
  padding: 0.125rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme, $checked }) =>
    $checked ? theme.colors.brand : theme.colors.secondary};
  cursor: pointer;
  transition: background-color 0.2s ease;
  appearance: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand};
    outline-offset: 2px;
  }
`;

export const Thumb = styled.span<BaseProps>`
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
  transform: translateX(${({ $checked }) => ($checked ? 'calc(100cqi - 100%)' : '0')});
  transition: transform 0.2s ease;
`;

export const Root = styled('label')`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;
