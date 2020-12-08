import { combineReducers } from 'redux';
import { LoginReducer } from './LoginReducer';
import { InvoiceReducer } from './InvoiceReducer';

export const rootReducer = combineReducers({
  LoginReducer,
  InvoiceReducer,
});
