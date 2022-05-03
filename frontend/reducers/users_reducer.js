import { RECEIVE_FRIEND, REMOVE_FRIEND } from "../actions/friendship_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_EXPENSE } from "../actions/expense_actions";

 const usersReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch(action.type){

    case RECEIVE_CURRENT_USER: 
        
      // return Object.assign({}, state, { [action.user.id]: action.user }); 
      newState = {}; 
      if(action.user.friends){
        Object.values(action.user.friends).forEach((friend) => {
          newState[friend.id] = friend; 
        }); 
        delete action.user.friends; 
      }
      
      newState[action.user.id] = action.user; 
      return newState;

    case RECEIVE_FRIEND: 
    
      newState[action.friend.friend.id] = action.friend.friend;
      // if(!newState[action.friend.user_id].friend_ids){
      //   newState[action.friend.user_id].friend_ids = [];
      // } 
      newState[action.friend.user_id].friend_ids = newState[action.friend.user_id].friend_ids.concat([action.friend.friend.id]); 
      return newState;
      
    case REMOVE_FRIEND: 
      delete newState[action.ids.friend_id]; 
      newState[action.ids.user_id].friend_ids = newState[action.ids.user_id].friend_ids.filter(ele => ele !== action.ids.friend_id);       
      return newState;

    case RECEIVE_EXPENSE: 
      let expense_id = action.expense.expense.id;
      
      for( let expender of action.expense.expenders ) {  
        if(!newState[expender].hasOwnProperty('expenses')) newState[expender].expenses = [] // check to make sure the user has an expenses field
        if(!Array.isArray(newState[expender].expenses)){
          newState[expender].expenses = Object.values(newState[expender].expenses);
        }
        if(!newState[expender].expenses.includes(expense_id)){
          newState[expender].expenses.push(expense_id);
        }
      }
      return newState;

    default: 
      return state; 
  }
}; 

export default usersReducer;