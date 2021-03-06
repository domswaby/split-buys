import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_EXPENSE_ERRORS } from "../actions/expense_actions";

const expenseErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];

    case RECEIVE_EXPENSE_ERRORS:
      return action.errors;

    default:
      return state;
  }
};

export default expenseErrorsReducer; 