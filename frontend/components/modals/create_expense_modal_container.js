import React from "react";
import { connect } from "react-redux";
import CreateExpenseModal from "./create_expense_modal";
import { selectFriends } from "../../selectors/selectors";
import { selectUser } from "../../selectors/selectors";
import { receiveCurrentUser } from "../../actions/session_actions";
import { makeExpense } from "../../actions/expense_actions";

const mSTP = (state) => {
    
    return {
        currentUserId: state.session.id,
        currentUser: selectUser(state.entities.users, state.session.id),
        users: state.entities.users,
        friends: selectFriends(state.entities.users, state.session.id)
    }
}

const mDTP = (dispatch) => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    makeExpense: (expenseInfo) => dispatch (makeExpense(expenseInfo))
})

export default connect(mSTP, mDTP)(CreateExpenseModal);

