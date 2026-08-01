import styled from 'styled-components';

export const Layout = styled('main')`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};

  @media (width <= 960px) {
    grid-template-columns: 1fr;
  }
`;
