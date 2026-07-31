import styled from 'styled-components';

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg} 0;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;
