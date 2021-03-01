import React from 'react';
import { connect } from 'react-redux';
import expenses from '../selectors/expenses';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    return (
        <p>
            {`Viewing ${props.expenses.length} ${(props.expenses.length != 1 ? ' expenses' : ' expense' )} totalling ${numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}`}
        </p>
    );
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);