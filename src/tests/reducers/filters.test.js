import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'mike123' });
    expect(state.text).toBe('mike123');
});

test('Should set startDate filter', () => {
    const date = moment();
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', date });
    expect(state.startDate).toEqual(date);
});

test('Should set endDate filter', () => {
    const date = moment();
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', date });
    expect(state.endDate).toEqual(date);
});