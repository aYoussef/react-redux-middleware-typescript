import { combineReducers } from 'redux';
import { State } from '../types/state';
import { usersReducer } from './users';

const rootReducer = combineReducers<State>({ users: usersReducer });

export default rootReducer;
