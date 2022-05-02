import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RightSidebarFriendBalance from "./right_sidebar_friend_balance";
import { selectUser } from "../../selectors/selectors";
import { getFriendInfo } from "../../selectors/selectors";
import { deleteFriend } from "../../actions/friendship_actions";

const mSTP = (state, ownProps) => {
  console.log(ownProps);
  return {
    currentUserId: state.session.id,
    currentUser: selectUser(state.entities.users, state.session.id),
    expenses: Object.values(state.entities.expenses),
    users: Object.values(state.entities.users),
    friendId: ownProps.friendId,
    friendInfo: getFriendInfo(state, Number(ownProps.friendId))
    
  }; 
}; 

const mDTP = (dispatch) => ({
  deleteFriend: (friendId) => dispatch(deleteFriend(friendId)),
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))
}); 

export default withRouter(connect(mSTP, mDTP)(RightSidebarFriendBalance)); 