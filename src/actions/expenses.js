import uuid from 'uuid';
import  database from '../firebase/firebase'

// ADD_EXPENSE
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, state) => {
        const {
            description = '', note = '', amount = 0, createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };

        return database.ref('expenses')
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    };
};

// REMOVE EXPENSE
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export { addExpense, removeExpense, editExpense }