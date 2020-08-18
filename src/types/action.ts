export interface AsyncCallActions {
  loading: string;
  success: string;
  error: string;
}

export interface ApiAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
  meta?: {
    backendCall: () => void;
    loadingStatus: string;
    successStatus: string;
    errorStatus: string;
  };
  error?: string;
}
