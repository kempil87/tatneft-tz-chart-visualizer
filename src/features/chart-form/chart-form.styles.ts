import { Surface } from '@/shared/ui/surface';
import styled from 'styled-components';

export const Root = styled(Surface)`
  height: fit-content;
  align-self: start;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;
