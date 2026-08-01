import { Surface } from '@/shared/ui/surface';
import { Typography } from '@/shared/ui/typography';
import styled from 'styled-components';

export const Root = styled(Surface)`
  height: 0;
  min-height: 100%;
  overflow: hidden;

  @media (width <= 960px) {
    height: auto;
    min-height: unset;
    overflow: visible;
  }
`;

export const Header = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const EmptyPlaceholder = styled(Typography)`
  margin: auto;
`;

export const ChartSlot = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const ChartFallback = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ChartLoader = styled.div`
  aspect-ratio: 1 / 1;
  width: clamp(24px, 10vw, 36px);
  height: clamp(24px, 10vw, 36px);
  display: block;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.brand};
  border-top-color: transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
