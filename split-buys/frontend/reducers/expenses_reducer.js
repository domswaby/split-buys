import { RECEIVE_EXPENSE, REMOVE_EXPENSE } from "../actions/expense_actions";


const expensesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState); 

    switch (action.type) {
        case RECEIVE_EXPENSE:
            newState[action.expense.expense.id] = action.expense.expense
            return newState;
        default:
            return oldState;
    }
};

export default expensesReducer;

