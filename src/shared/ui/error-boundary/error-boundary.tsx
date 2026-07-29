import { Component, type ErrorInfo, type ReactNode } from 'react';

import { Button } from '@/shared/ui/button';
import { Typography } from '@/shared/ui/typography';

import { FallbackActions, FallbackRoot } from './error-boundary.styles';

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error, reset: () => void) => ReactNode);
  onError?: (error: Error, info: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  error: Error | null;
}

interface DefaultFallbackProps {
  error: Error;
  onReset: () => void;
}

const DefaultFallback = ({ error, onReset }: DefaultFallbackProps) => {
  return (
    <FallbackRoot>
      <Typography variant="h3" weight="bold">
        Что-то пошло не так
      </Typography>

      <Typography variant="bodySm" color="secondary">
        {error.message || 'Произошла непредвиденная ошибка'}
      </Typography>

      <FallbackActions>
        <Button onClick={onReset}>Попробовать снова</Button>
      </FallbackActions>
    </FallbackRoot>
  );
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error, info);
  }

  private reset = () => {
    this.setState({ error: null });
  };

  public render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (!error) {
      return children;
    }

    if (typeof fallback === 'function') {
      return fallback(error, this.reset);
    }

    if (fallback) {
      return fallback;
    }

    return <DefaultFallback error={error} onReset={this.reset} />;
  }
}
