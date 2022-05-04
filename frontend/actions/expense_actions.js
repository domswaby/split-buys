import { deleteExpense, createExpense } from "../util/expense_api_util";
import { createUserExpense, deleteUserExpense } from "../util/user_expense_api_util";
export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE'
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE' 
export const RECEIVE_EXPENSE_ERRORS = 'RECEIVE_EXPENSE_ERRORS'

const receiveExpense = (expense) => ({
    type: RECEIVE_EXPENSE,
    expense
});

const removeExpense = (expense) => ({
    type: REMOVE_EXPENSE,
    expense
}); 

export const makeExpense = (expenseInfo) => dispatch => {
    let expenders = expenseInfo.expenders; 
    let userExpenseCalls = []
    delete expenseInfo.expenders 

    return createExpense(expenseInfo)
        .then((expense) => {
            for(let expender of expenders) { 
                let newUserExpense = {
                    user_id: expender,
                    expense_id: expense.id, 
                    balance: expense.amount / expenders.length
                }
                userExpenseCalls.push(createUserExpense(newUserExpense))
            }
            Promise.all(userExpenseCalls) 
                .then((resArr) => {
                    expense.expenders = expenders
                    let newExpense = {
                        expense,
                        expenders
                    }
                    dispatch(receiveExpense(newExpense))                    
                })
        })
}; 

export const destroyExpense = (expenseId) => dispatch => {
    return deleteExpense(expenseId)
        .then((expense) => dispatch(removeExpense(expense)))
        .fail(err => dispatch(receiveErrors(err.responseJSON)));
};