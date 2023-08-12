import { CREATE_ACCOUNT_SUCCESS } from '../actions/accountActions';

const initialState = {
  accounts: [],
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };
    default:
      return state;
  }
};

export default accountReducer;
