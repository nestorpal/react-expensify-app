import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should add expense', () => {
    const expense = { description: 'Test expense' };
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
    expect(state).toEqual(expenses.concat(expense));
});

test('Should remove expense', () => {
    const id = '2';
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id });
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if not found', () => {
    const id = '100';
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id });
    expect(state).toEqual(expenses);
});

test('Should edit expense', () => {
    const expense = { id: '1', description: 'Modified expense' };
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: '1', updates: expense });
    expect(state).toEqual([{ ...expenses[0], ...expense }, expenses[1], expenses[2]]);
});

test('Should not edit expense if not found', () => {
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: '100', updates: undefined });
    expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
    const state = expensesReducer([], { type: 'SET_EXPENSES', expenses: [expenses[1]] });
    expect(state).toEqual([expenses[1]]);
});