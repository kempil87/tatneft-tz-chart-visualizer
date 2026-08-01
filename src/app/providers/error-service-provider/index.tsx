import { type PropsWithChildren, useEffect } from 'react';

import { setupErrorService } from '@/app/services/setup-error-service';
import { initErrorService } from '@/shared/lib/error-service';

setupErrorService();

export const ErrorServiceProvider = ({ children }: Readonly<PropsWithChildren>) => {
  useEffect(() => {
    return initErrorService();
  }, []);

  return children;
};
