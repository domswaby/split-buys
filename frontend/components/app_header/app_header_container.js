import React from "react";
import { connect } from "react-redux";
import AppHeader from "./app_header";
import { logout } from "../../actions/session_actions";
import { selectUser } from "../../selectors/selectors";
import { receiveCurrentUser } from "../../actions/session_actions";

const mSTP = (state) => {
    
    return {
        dummy: "", 
        // currentUser: selectUser(state.entities.users, state.session.id)
    }
}

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()), 
    // receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))
})

export default connect(mSTP, mDTP)(AppHeader); 