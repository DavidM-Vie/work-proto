import React, { useState } from 'react';
import moment from 'moment';

import { DateRangePicker } from 'react-dates';

const DisplayMode = () => {
   
     const [ state, setState ] = useState({
      startDate: null,
      endDate: null,
      focusedInput: null
     })

     const onDatesChange = (startDate, endDate) => {
      console.log('startDate', moment(startDate))
      console.log('endDate', moment(endDate))
      setState({...state, startDate, endDate});
     }

  return (

    <div className="display-mode">
   
      <DateRangePicker
        startDate={state.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={state.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={onDatesChange} // PropTypes.func.isRequired,
        focusedInput={state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => setState({ ...state, focusedInput })} // PropTypes.func.isRequired,
      />

    </div>


  )
}

export default DisplayMode