import { ERROR_USERS, LOADING_USERS, SUCCESS_USERS } from '../actions/users';
import { ApiAction } from '../types/action';
import { BackendResponse } from '../types/state';
import { User } from '../types/user';
import { handleError, handleLoading, handleSuccess } from './utils';

export const defaultState = <T>(): BackendResponse<T> => {
  return {
    loading: false,
    data: undefined,
    error: undefined,
  };
};
export const usersReducer = (
  state: BackendResponse<User[]> = defaultState<User[]>(),
  action: ApiAction
): BackendResponse<User[]> => {
  switch (action.type) {
    case LOADING_USERS:
      return handleLoading();
    case SUCCESS_USERS:
      return handleSuccess(action.payload);
    case ERROR_USERS:
      return handleError(action.error);
    default:
      return state;
  }
};
