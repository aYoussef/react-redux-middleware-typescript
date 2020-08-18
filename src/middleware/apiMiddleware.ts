import { FETCH_REQUEST } from "../actions";
import { MiddlewareAPI, AnyAction, Middleware, Dispatch } from "redux";
import { ApiAction } from "../types/action";

const apiMiddleware: Middleware<Dispatch> = ({ dispatch }: MiddlewareAPI) => {
  return (next: Dispatch) => <A extends AnyAction>(action: A | ApiAction) => {
    if (action.type === FETCH_REQUEST) {
      const {
        backendCall,
        loadingStatus,
        successStatus,
        errorStatus
      } = action.meta;
      dispatch({ type: loadingStatus });
      backendCall().then(
        (response: any) => {
          dispatch({ type: successStatus, payload: response });
        },
        (error: any) => {
          dispatch({ type: errorStatus, error });
        }
      );
    } else {
      next(action);
    }
  };
};

export default apiMiddleware;
