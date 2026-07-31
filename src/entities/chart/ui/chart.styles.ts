import styled from 'styled-components';

export const ChartRoot = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ChartCanvas = styled.div`
  position: relative;
  flex: 1;
  min-height: 16rem;

  & > div {
    position: absolute;
    inset: 0;
  }
`;
