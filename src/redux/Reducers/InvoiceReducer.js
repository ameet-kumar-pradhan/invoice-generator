import { CREATE_INVOICE, DELETE_INVOICE } from '../ActionCreators/types';

const initialState = {
  invoices: [
    {
      name: 'Phones',
      description: 'Cell Phones',
      units: 20,
      price: 59000,
      discount: 10,
      tax: 18,
    },
  ],
};

export const InvoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INVOICE:
      return { ...state, invoices: [...state.invoices, action.payload] };
    case DELETE_INVOICE:
      state.invoices.splice(action.payload, 1);
      return { ...state };
    default:
      return state;
  }
};
