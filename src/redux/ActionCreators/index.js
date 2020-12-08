import {
  CREATE_INVOICE,
  DELETE_INVOICE,
  //   EDIT_INVOICE,
  GOOGLE_OAUTH2,
  LOG_IN,
  LOG_OUT,
} from './types';

export const googleOAuth2 = googleResponse => {
  return async dispatch => {
    if (googleResponse.error) {
      googleResponse = [];
    }
    dispatch({ type: GOOGLE_OAUTH2, payload: googleResponse });
  };
};

export const logOut = () => {
  return async dispatch => {
    dispatch({ type: LOG_OUT });
  };
};

export const logIn = email => {
  return async dispatch => {
    const accessToken = true;
    dispatch({ type: LOG_IN, payload: { accessToken, profileObj: { email } } });
  };
};

export const createNewInvoice = invoice => {
  return async dispatch => {
    dispatch({ type: CREATE_INVOICE, payload: invoice });
  };
};

export const deleteInvoice = index => {
  return async dispatch => {
    dispatch({ type: DELETE_INVOICE, payload: index });
  };
};
// export const editInvoice = index => {
//   return async dispatch => {
//     dispatch({ type: EDIT_INVOICE, payload: index });
//   };
// };
