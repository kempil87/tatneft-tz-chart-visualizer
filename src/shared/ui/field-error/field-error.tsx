import type { ReactNode } from 'react';

import { Typography } from '../typography/typography';

export interface FieldErrorProps {
  error?: ReactNode;
}

export const FieldError = ({ error }: FieldErrorProps) => {
  if (!error) return null;

  return (
    <Typography as="span" variant="caption" color="danger">
      {error}
    </Typography>
  );
};
