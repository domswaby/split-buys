export const deleteExpense = (expenseId) => {
    return $.ajax({
        url: `/api/expenses/${expenseId}`,
        method: 'DELETE',
        error: err => console.log(err),
    });
};

export const createExpense = (expense) => {
    return $.ajax({
        url: `/api/expenses`,
        method: 'POST',
        data: { expense },
        error: err => console.log(err),
    });
};

export const updateExpense = (expense) => {
    return $.ajax({
        url: `/api/expenses/${expense.id}`,
        method: 'PATCH',
        data: { expense },
        error: err => console.log(err),
    });
};
