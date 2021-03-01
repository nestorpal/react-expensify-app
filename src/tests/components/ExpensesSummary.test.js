import React from 'react';
import { ExpensesSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

test('Should render Expenses Summary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
});

test('Should render Expenses Summary correctly 2', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot();
});