import { deleteFriendship, createFriendship } from "../util/friendship_api_util";
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND' 
export const REMOVE_FRIEND = 'REMOVE_FRIEND'
export const RECEIVE_FRIENDSHIP_ERRORS = 'RECEIVE_FRIENDSHIP_ERRORS' 


const removeFriend = (friendId) => ({
  type: REMOVE_FRIEND, 
  friendId: friendId
}); 

export const receiveFriend = (friend) => ({
  type: RECEIVE_FRIEND, 
  friend
}); 

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_FRIENDSHIP_ERRORS,
    errors
  };
};

export const createFriend = (friendship) => dispatch => {
  return createFriendship(friendship)
      .then(friend => dispatch(receiveFriend(friend)))
      .fail(err => dispatch(receiveErrors(err.responseJSON)));  
}; 

export const deleteFriend = (friendId) => dispatch => {
  return deleteFriendship(friendId)
      .then(friend => dispatch(removeFriend(friend.id)))
      .fail(err => dispatch(receiveErrors(err.responseJSON))); 
}; 

