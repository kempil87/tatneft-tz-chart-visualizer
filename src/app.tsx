import { Dashboard } from '@/app/dashboard';
import { ErrorServiceProvider } from '@/app/providers/error-service-provider';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { ErrorBoundary } from '@/shared/ui/error-boundary';
import { Toaster } from 'sonner';

export const App = () => {
  return (
    <ThemeProvider>
      <ErrorServiceProvider>
        <ErrorBoundary>
          <Dashboard />

          <Toaster position="top-right" richColors closeButton />
        </ErrorBoundary>
      </ErrorServiceProvider>
    </ThemeProvider>
  );
};
