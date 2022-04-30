import React from "react";
import { connect } from "react-redux";
import { selectFriends } from "../../selectors/selectors";
import CreateExpenseModal from "./create_expense_modal";

const mSTP = (state) => ({
    currentUserId: state.session.id,
    friends: selectFriends(state.entities.users, state.session.id)
})

const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(CreateExpenseModal);

