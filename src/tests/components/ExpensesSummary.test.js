import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';

test('should render expense summary correctly',()=>{
    const wrapper = shallow(<ExpensesSummary/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenses summary for single expense correctly',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} totalExpenses={195}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenses summary for multiple expenses correctly',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={3} totalExpenses={114195}/>);
    expect(wrapper).toMatchSnapshot();
});