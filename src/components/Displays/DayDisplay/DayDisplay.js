import React from 'react';

import moment from 'moment';

import TimeInput from  '../../TimeInput/TimeInput';
import ShiftTimes from './Times/ShiftTimes/ShiftTimes';

const DayDisplay = () => {
  
  
  return (
    <div className="display-container">
        <ShiftTimes />
      <div className="break-times">
        <div className="break1Time">
          <TimeInput time="Break" />  to   
          <TimeInput time="Break End" />
        </div>
        <div className="lunchTime">
          <TimeInput time="Lunch Start" /> to 
          <TimeInput time="Lunch End" />
        </div>
        <div className="break2Time">
          <TimeInput time="Break" />  to   
          <TimeInput time="Break End" />
        </div>  
      </div>    
    </div>
  )
}

export default DayDisplay