// create expense

let expense = {
    "description": "test description",
    "amount": 100.0,
    "split_type": "equal",
    "date_incurred": "2022-04-20", 
    "payer_id": 2
}

// delete expense just needs an id sent along

// create user_expense 

let user_expense = {
    "user_id": 4,
    "expense_id": 6,
    "balance": 30
}

// delete user_expense 

let user_expense = {
    "user_id": 4,
    "expense_id": 6
}

// to feed into makeExpense action

let fed_to_makeExpense = {
    "description": "test description",
    "amount": 100.0,
    "split_type": "equal",
    "date_incurred": "2022-04-20",
    "payer_id": 2,
    "expender_ids": [2,3,4]
}

let fed_to_updateExpense = {
    id: 2,
    description: "breakfast updated",
    amount: 160.0,
    split_type: "equal",
    payer_id: 2,
    date_incurred: "2022-03-10"
}