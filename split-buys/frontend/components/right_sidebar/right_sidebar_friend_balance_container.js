import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RightSidebarFriendBalance from "./right_sidebar_friend_balance";
import { deleteFriend } from "../../actions/friendship_actions";

const mSTP = (state, ownProps) => {
  console.log(ownProps);
  return {
    friendId: ownProps.friendId
    
  }; 
}; 

const mDTP = (dispatch) => ({
  deleteFriend: (friendId) => dispatch(deleteFriend(friendId))
}); 

export default withRouter(connect(mSTP, mDTP)(RightSidebarFriendBalance)); 