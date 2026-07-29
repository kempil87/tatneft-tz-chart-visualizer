import { type PropsWithChildren, useEffect } from 'react';

import { initErrorService } from '@/app/services/error-service';

export const ErrorServiceProvider = ({ children }: Readonly<PropsWithChildren>) => {
  useEffect(() => {
    return initErrorService();
  }, []);

  return children;
};
