import { ThemeProvider } from '@/app/providers/theme-provider';
import { ErrorServiceProvider } from '@/app/providers/error-service-provider';
import { ErrorBoundary } from '@/shared/ui/error-boundary';
import { AppLayout } from '@/widgets/app-layout/app-layout';
import { Toaster } from 'sonner';

export const App = () => {
  return (
    <ThemeProvider>
      <ErrorServiceProvider>
        <ErrorBoundary>
          <AppLayout />

          <Toaster position="top-right" richColors closeButton />
        </ErrorBoundary>
      </ErrorServiceProvider>
    </ThemeProvider>
  );
};
