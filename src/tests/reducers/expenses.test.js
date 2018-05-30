import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[2].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[1]]);
});

test('should not remove expense if id not found',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense',()=>{
    const action = {
        type:'ADD_EXPENSE',
        expense:{
            id:'123',
            description:'adf',
            note:'',
            createdAt:0
        }
    }
    const result = expensesReducer(expenses,action);
    expect(result).toEqual([...expenses,action.expense]);
});

test('should edit an expense',()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description:'Updated Expense'
        }
    };
    const result = expensesReducer(expenses,action);
    expect(result).toEqual([{...expenses[0],...action.updates},expenses[1],expenses[2]]);
});

test('should not edit expense if expense not found',()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description:'Updated Expense'
        }
    };
    const result = expensesReducer(expenses,action);
    expect(result).toEqual(expenses);
});