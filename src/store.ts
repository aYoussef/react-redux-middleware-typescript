import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import apiMiddleware from './middleware/apiMiddleware';
import rootReducer from './reducers';

const middleware = [thunk, apiMiddleware, logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
