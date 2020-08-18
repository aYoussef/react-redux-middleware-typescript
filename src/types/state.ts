import { User } from "./user";

export interface BackendResponse<T> {
  loading: boolean;
  data: T | undefined;
  error?: string;
}

export interface State {
  users: BackendResponse<User[]>;
}
