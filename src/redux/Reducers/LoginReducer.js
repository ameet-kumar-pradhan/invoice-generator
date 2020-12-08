import { GOOGLE_OAUTH2, LOG_IN, LOG_OUT } from '../ActionCreators/types';

const initialState = {};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_OAUTH2:
      return { ...state, ...action.payload };
    case LOG_OUT:
      state = {};
      return { state };
    case LOG_IN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
