import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense object',()=>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('shoud edit the give expense', () => {
    const action = editExpense('asd',{note:'asd'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'asd',
        updates:{
            note:'asd'
        }
    })
});

test('should setup add expense action object with provided values',()=>{
    const expenseData = {
        description: 'Rent',
        amount: 10000,
        createdAt: 1000,
        note: 'This was last month\'s rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values',() => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});