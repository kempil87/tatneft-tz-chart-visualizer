import styled from 'styled-components';

type RootProps = {
  $isStretched: boolean;
  $count: number;
};

type SegmentProps = {
  $isActive: boolean;
};

export const Root = styled.div<RootProps>`
  display: grid;
  grid-template-columns: repeat(${({ $count }) => $count}, 1fr);
  align-items: stretch;
  width: ${({ $isStretched }) => ($isStretched ? '100%' : 'fit-content')};
  min-width: ${({ $isStretched }) => ($isStretched ? undefined : '12rem')};
  height: 2.5rem;
  padding: 0.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const Segment = styled.button<SegmentProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  border: none;
  border-radius: ${({ theme }) => `calc(${theme.borderRadius.md} - 0.15rem)`};
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.surface : 'transparent')};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.foreground : theme.colors.secondary};
  font: inherit;
  font-weight: 500;
  box-shadow: ${({ $isActive }) => ($isActive ? '0 1px 2px rgb(0 0 0 / 10%)' : 'none')};
  cursor: pointer;
  transition:
    color 0.15s ease,
    background-color 0.15s ease,
    box-shadow 0.15s ease;
  appearance: none;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.foreground};
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
