import styled from 'styled-components';

export const FallbackRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const FallbackActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;
