import { RECEIVE_FRIEND, REMOVE_FRIEND } from "../actions/friendship_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

 const usersReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  switch(action.type){

    case RECEIVE_CURRENT_USER: 
      return  Object.assign({}, state, { [action.user.id]: action.user }); 

    case RECEIVE_FRIEND: 
      newState[action.friend.friend.id] = action.friend.friend;
      // if(!newState[action.friend.user_id].friend_ids){
      //   newState[action.friend.user_id].friend_ids = [];
      // } 
      newState[action.friend.user_id].friend_ids = newState[action.friend.user_id].friend_ids.concat([action.friend.friend.id]); 
      return newState;
      
    case REMOVE_FRIEND: 

    default: 
      return state; 
  }
}; 

export default usersReducer;