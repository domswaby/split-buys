import { RECEIVE_EXPENSE, REMOVE_EXPENSE } from "../actions/expense_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


const expensesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState); 
    
    switch (action.type) {
        case RECEIVE_EXPENSE:
            newState[action.expense.expense.id] = action.expense.expense
            return newState;
        case RECEIVE_CURRENT_USER:            
            let keys = Object.keys(action.user.expenses); 
            keys.forEach((key) => {
                action.user.expenses[key].expenders = action.user.expenses[key].expenders.map(ele => ele.id);
            });
            newState = action.user.expenses;
            return newState;
        case REMOVE_EXPENSE:
            delete newState[action.expense.id];
            return newState;
        default:
            return oldState;
    }
};

export default expensesReducer;

