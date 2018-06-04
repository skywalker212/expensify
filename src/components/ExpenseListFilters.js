import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate,sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component{

    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(()=>({calendarFocused}));
    }

    onTextChange = (event) => {
        this.props.setTextFilter(event.target.value);
    };

    onSortchange = (e) => {
        e.target.value==='date'?this.props.sortByDate():this.props.sortByAmount();
    };

    render() {
        return (
        <div>
            <input type="text" onChange={this.onTextChange} value={this.props.filters.text}/>
            <select value={this.props.filters.sortBy} onChange={this.onSortchange}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
            <DateRangePicker
             startDate={this.props.filters.startDate} 
             endDate={this.props.filters.endDate} 
             onDatesChange={this.onDatesChange}
             focusedInput={this.state.calendarFocused}
             onFocusChange={this.onFocusChange}
             startDateId="START_DATE_ID"
             endDateId="END_DATE_ID"
             numberOfMonths={1}
             isOutsideRange={()=>false}
             showClearDates={true}
             />
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);