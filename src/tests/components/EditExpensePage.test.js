import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense,removeExpense, history, wrapper;

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {
        push: jest.fn()
    };
    wrapper = shallow(<EditExpensePage editExpense={editExpense} expense={expenses[0]} removeExpense={removeExpense} history={history}/>);
});

test('should render EditExpensePage correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense correctly',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});


test('should handle removeExpense correctly',()=>{
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[0].id});
    expect(history.push).toHaveBeenLastCalledWith('/');
});
