import React from "react";
import { connect } from "react-redux";
import MainDropDown from "./main_dropdown";
import { logout } from "../../../actions/session_actions";

const mSTP = (state) => ({
    user: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(MainDropDown);