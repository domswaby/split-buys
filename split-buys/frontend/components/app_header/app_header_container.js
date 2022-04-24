import React from "react";
import { connect } from "react-redux";
import AppHeader from "./app_header";
import { logout } from "../../actions/session_actions";

const mSTP = (state) => ({
    dummy: ""
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(AppHeader); 