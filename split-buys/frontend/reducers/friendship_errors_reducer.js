import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_FRIENDSHIP_ERRORS } from "../actions/friendship_actions";

const friendshipErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];

    case RECEIVE_FRIENDSHIP_ERRORS:
      return action.errors;

    default:
      return state;
  }
};

export default friendshipErrorsReducer; 