import React from 'react';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';

export class EditExpensePage extends React.Component{
    onSubmit = (expense)=>{
        this.props.editExpense(
            this.props.expense.id,
            expense
        );
        this.props.history.push('/');
    };

    onClick = () => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };

     render(){
         return (
            <div>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
                <button onClick={this.onClick}>Remove</button>
            </div>
         )
     }
}

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id,updates) => (dispatch(editExpense(id,updates))),
    removeExpense: (id) => (dispatch(removeExpense({id})))
});

const mapStateToProps = (state,props) => ({
    expense: state.expenses.find( item => item.id===props.match.params.id )
});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);