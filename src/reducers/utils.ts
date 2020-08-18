import { BackendResponse } from '../types/state';

export const handleLoading = (): BackendResponse<undefined> => {
  return {
    error: undefined,
    data: undefined,
    loading: true,
  };
};

export const handleSuccess = <T>(data: T): BackendResponse<T> => {
  return {
    error: undefined,
    data,
    loading: false,
  };
};

export const handleError = (error: string): BackendResponse<undefined> => {
  return {
    error,
    data: undefined,
    loading: false,
  };
};

export const defaultState = (): BackendResponse<undefined> => {
  return {
    loading: false,
    data: undefined,
    error: undefined,
  };
};
