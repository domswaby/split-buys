import React from "react";
import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { selectFriends } from "../../selectors/selectors";
import { selectUser } from "../../selectors/selectors";
import { receiveCurrentUser } from "../../actions/session_actions";

const mSTP = (state) => ({
    currentUserId: state.session.id,
    currentUser: selectUser(state.entities.users, state.session.id),
    friends: selectFriends(state.entities.users, state.session.id)
});
// add current user 
// add receive current user action to dispatch 
// then in compoent did mount check for currentuser dot friends.  

const mDTP = (dispatch) => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))

});

export default connect(mSTP, mDTP)(Dashboard);