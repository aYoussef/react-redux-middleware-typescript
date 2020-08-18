import { ApiAction, AsyncCallActions } from '../types/action';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const createApiAction = (
  backendCall: () => void,
  actions: AsyncCallActions
): ApiAction => {
  const { loading, success, error } = actions;
  return {
    type: FETCH_REQUEST,
    meta: {
      backendCall,
      loadingStatus: loading,
      successStatus: success,
      errorStatus: error,
    },
  };
};
