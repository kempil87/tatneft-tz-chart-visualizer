import { toast } from 'sonner';

export interface ErrorService {
  handleError: (message: string) => void;
  clearError: () => void;
}

export interface ErrorServicePort {
  setError: (message: string) => void;
  clearError: () => void;
  getError: () => string | null;
  subscribe: (listener: (error: string | null) => void) => () => void;
}

class ErrorServiceImpl implements ErrorService {
  private unsubscribe: (() => void) | null = null;
  private readonly port: ErrorServicePort;

  constructor(port: ErrorServicePort) {
    this.port = port;
  }

  handleError(message: string) {
    this.port.setError(message);
  }

  clearError() {
    this.port.clearError();
  }

  init(): () => void {
    if (this.unsubscribe) {
      return this.unsubscribe;
    }

    let previousError = this.port.getError();

    const unsubscribe = this.port.subscribe((nextError) => {
      if (nextError && nextError !== previousError) {
        toast.error(nextError);
      }

      if (!nextError && previousError) {
        toast.dismiss();
      }

      previousError = nextError;
    });

    this.unsubscribe = () => {
      unsubscribe();
      this.unsubscribe = null;
    };

    return this.unsubscribe;
  }
}

let instance: ErrorServiceImpl | null = null;

export const createErrorService = (port: ErrorServicePort): ErrorService => {
  instance = new ErrorServiceImpl(port);
  return instance;
};

const getInstance = (): ErrorServiceImpl => {
  if (!instance) {
    throw new Error(
      'ErrorService is not configured. Call createErrorService() during app bootstrap.',
    );
  }

  return instance;
};

export const errorServiceApi: ErrorService = {
  handleError: (message) => {
    getInstance().handleError(message);
  },
  clearError: () => {
    getInstance().clearError();
  },
};

export const initErrorService = (): (() => void) => getInstance().init();
