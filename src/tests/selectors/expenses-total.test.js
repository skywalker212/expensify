import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 for empty expenses',()=>{
    expect(getExpensesTotal([])).toBe(0);
});

test('should add correctly for single expense',()=>{
    expect(getExpensesTotal([expenses[0]])).toBe(195);
});

test('should add correctly for multiple expenses',()=>{
    expect(getExpensesTotal(expenses)).toBe(114195);
});