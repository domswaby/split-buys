import React from "react";
import { connect } from "react-redux";
import LeftSidebar from "./left_sidebar";
import { createFriend } from "../../actions/friendship_actions";
import { selectFriends } from "../../selectors/selectors"; 

const mSTP = (state) => ({
    currentUserId: state.session.id, 
    friends: selectFriends(state.entities.users, state.session.id)
}); 

const mDTP = (dispatch) => ({
    createFriend: (friendship) => dispatch(createFriend(friendship))
}); 

export default connect(mSTP, mDTP)(LeftSidebar)