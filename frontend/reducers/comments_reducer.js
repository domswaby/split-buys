import { REMOVE_EXPENSE } from "../actions/expense_actions";
import { REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState; 
    // case REMOVE_EXPENSE:
    //   delete newState[action.expense.id];
    //   return newState;
    
    default:
      return oldState;
  }
};

export default commentsReducer;

