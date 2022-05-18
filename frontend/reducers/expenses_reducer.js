import { RECEIVE_EXPENSE, REMOVE_EXPENSE, UPDATE_EXPENSE} from "../actions/expense_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


const expensesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState); 
    
    switch (action.type) {
        case RECEIVE_EXPENSE:
            newState[action.expense.expense.id] = action.expense.expense
            return newState;
        case RECEIVE_CURRENT_USER:   
            if(action.user.expenses){         
                let keys = Object.keys(action.user.expenses); 
                keys.forEach((key) => {
                    action.user.expenses[key].expenders = action.user.expenses[key].expenders.map(ele => ele.id);
                });
                newState = action.user.expenses;
                return newState;
            }else 
                return newState;
        case REMOVE_EXPENSE:
            delete newState[action.expense.id];
            return newState;
        case UPDATE_EXPENSE:   
            newState[action.expense.id] = action.expense
            newState[action.expense.id].expenders = newState[action.expense.id].expender_ids.map((ele) => ele)
            delete newState[action.expense.id].expender_ids;
            return newState;

        default:
            return oldState;
    }
};

export default expensesReducer;

