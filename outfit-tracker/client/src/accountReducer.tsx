// accountReducer.js
import { CREATE_ACCOUNT_SUCCESS } from './components/accountActions';

const initialState = {
  account: null,
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT_SUCCESS: // Using the constant here
      return {
        ...state,
        account: action.payload,
      };
    default:
      return state;
  }
}
