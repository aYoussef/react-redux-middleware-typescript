import { loadUsersApi } from "../api";
import { createApiAction } from "./";
import { Dispatch } from "redux";
import { ApiAction } from "../types/action";
export const LOADING_USERS = "LOADING_USERS";
export const SUCCESS_USERS = "SUCCESS_USERS";
export const ERROR_USERS = "ERROR_USERS";

export const loadUsers = () => async (dispatch: Dispatch<ApiAction>) => {
  dispatch(
    createApiAction(loadUsersApi, {
      loading: LOADING_USERS,
      success: SUCCESS_USERS,
      error: ERROR_USERS
    })
  );
};
