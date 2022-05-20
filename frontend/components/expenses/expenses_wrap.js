import React from "react";
import { connect } from "react-redux";
import Expenses from "./expenses";
import { selectUser } from "../../selectors/selectors";
import { receiveCurrentUser } from "../../actions/session_actions";
import { destroyExpense } from "../../actions/expense_actions";
import { makeComment } from "../../actions/comment_actions";
import { destroyComment } from "../../actions/comment_actions";

const mSTP = (state) => ({
    currentUserId: state.session.id,
    currentUser: selectUser(state.entities.users, state.session.id),
    expenses: Object.values(state.entities.expenses),
    users: Object.values(state.entities.users), 
    comments: Object.values(state.entities.comments)
});
// add current user 
// add receive current user action to dispatch 
// then in compoent did mount check for currentuser dot friends.  

const mDTP = (dispatch) => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    destroyExpense: (expenseId) => dispatch(destroyExpense(expenseId)),
    makeComment: (commentInfo) => dispatch(makeComment(commentInfo)),
    destroyComment: (commentId) => dispatch(destroyComment(commentId))
});

export default connect(mSTP, mDTP)(Expenses);