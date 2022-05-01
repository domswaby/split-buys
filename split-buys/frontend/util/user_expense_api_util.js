export const deleteUserExpense = (user_expense) => {
    return $.ajax({
        url: `/api/user_expenses/1`,
        method: 'DELETE',
        data: { user_expense },
        error: err => console.log(err),
    });
};

export const createUserExpense = (user_expense) => {
    return $.ajax({
        url: `/api/user_expenses`,
        method: 'POST',
        data: { user_expense },
        error: err => console.log(err),
    });
};

