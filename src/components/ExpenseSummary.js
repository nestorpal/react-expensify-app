import React from 'react';
import { connect } from 'react-redux';
import expenses from '../selectors/expenses';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    return (
        <div>
            <p>
                {`Viewing ${expenseCount} ${(expenseCount != 1 ? ' expenses' : ' expense' )} totalling ${numeral(expensesTotal / 100).format('$0,0.00')}`}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);