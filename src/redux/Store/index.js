import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from '../Reducers';

const middleWares = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
