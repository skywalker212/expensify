import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        date: moment(0)
    });
});

test('should generate set end date action object',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});

test('should return empty text filter',()=>{
    const action = setTextFilter('');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should return given text filter',()=>{
    const action = setTextFilter('Rent');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'Rent'
    });
});

test('should set filter sort by date',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});

test('should set filter sort by amount',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});

