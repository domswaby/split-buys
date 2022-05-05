import React from "react";
import { connect } from "react-redux";
import CreateExpenseModal from "./create_expense_modal";
import { selectFriends } from "../../selectors/selectors";
import { selectUser } from "../../selectors/selectors";
import { getPayerName } from "../../selectors/selectors";
import { getExpenders } from "../../selectors/selectors";
import { receiveCurrentUser } from "../../actions/session_actions";
import { editExpense } from "../../actions/expense_actions";

const mSTP = (state, ownProps) => {
    // let dummyExpense = {
    //     description: "",
    //     payer: "You",
    //     amount: 1,
    //     date: ""
    // }
    // let optionTags = [
    //     { username: "You" }
    // ]
    // let payer = "You";

    return {
        currentUserId: state.session.id,
        currentUser: selectUser(state.entities.users, state.session.id),
        users: state.entities.users,
        friends: selectFriends(state.entities.users, state.session.id),
        payer: getPayerName(ownProps.expense.payer_id, state.entities.users, state.session.id),
        optionTags: getExpenders(expense.expenders, state.entities.users),
        formType: "edit"
    }
}

const mDTP = (dispatch) => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    makeExpense: (expenseInfo) => dispatch(editExpense(expenseInfo))
})

export default connect(mSTP, mDTP)(CreateExpenseModal);

