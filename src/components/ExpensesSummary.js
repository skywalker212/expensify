import React from 'react';
import expensesSelector from '../selectors/expenses';
import selectTotalExpenses from '../selectors/expenses-total';
import {connect} from 'react-redux';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component{
    render(){
        return (
            <h2>
                Viewing {this.props.expenseCount} expense{this.props.expenseCount>1?'s':''} totaling {numeral(this.props.totalExpenses/100).format('$0,0.00')}
            </h2>
        );
    }
}

const mapStateToProps = (state) => {
    const expenses = expensesSelector(state.expenses,state.filters);
    return {
        expenseCount: expenses?expenses.length:0,
        totalExpenses: selectTotalExpenses(expenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);