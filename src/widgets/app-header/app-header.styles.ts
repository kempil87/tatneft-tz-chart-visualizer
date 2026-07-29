import styled from 'styled-components';

export const Header = styled('header')`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zi.layout};
  padding-inline: ${({ theme }) => theme.spacing.lg};
  height: 4rem;
  min-height: 4rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.separator};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
