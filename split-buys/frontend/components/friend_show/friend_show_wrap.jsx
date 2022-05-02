import React from "react";
import { connect } from "react-redux";
import FriendShow from "./friend_show";
import { selectUser } from "../../selectors/selectors";
import { getFriendInfo } from "../../selectors/selectors";


const mSTP = (state, ownProps) => {
    
  return {
    currentUserId: state.session.id,
    currentUser: selectUser(state.entities.users, state.session.id),
    expenses: Object.values(state.entities.expenses),
    users: Object.values(state.entities.users),
    friendId: ownProps.friendId,
    friendInfo: getFriendInfo(state, ownProps.friendId)
  };

}; 

const mDTP = (dispatch, ownProps) => {
  
  return {
    
  };
}; 
  

export default connect(mSTP, mDTP)(FriendShow); 