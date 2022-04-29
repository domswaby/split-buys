import React from "react";
import { connect } from "react-redux";
import FriendShow from "./friend_show";
import { getFriendInfo } from "../../selectors/selectors";

const mSTP = (state, ownProps) => {
  
  return {
    friendId: ownProps.friendId,
    friendInfo: getFriendInfo(state, ownProps.friendId)
  };

}; 

const mDTP = (dispatch, ownProps) => {
  
  return {
    
  };
}; 
  

export default connect(mSTP, mDTP)(FriendShow); 