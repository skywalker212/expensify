import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altFilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();;
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render expense list filters correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly',()=>{
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change correctly',()=>{
    wrapper.find('input').simulate('change',{
        target:{
            value:'change'
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith('change');
});

test('should handle sort by date correctly',()=>{
    wrapper.find('select').simulate('change',{
        target:{
            value:'date'
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by amount correctly',()=>{
    wrapper.find('select').simulate('change',{
        target:{
            value:'amount'
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

// test('should handle date changes correctly',()=>{
//     wrapper.find('DateRangePicker').prop('onDateChange')({
//         startDate: altFilters.startDate,
//         endDate: altFilters.endDate
//     });
//     expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
//     expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
// });

// test('should handle date focus changes correctly',()=>{
//     const calendarFocused = "endDate";
//     wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
//     expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
// });