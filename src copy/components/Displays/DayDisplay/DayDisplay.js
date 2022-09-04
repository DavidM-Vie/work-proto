import React from 'react';


import TimeInput from  '../../TimeInput/TimeInput';
import ShiftTime from './Times/ShiftTime/ShiftTime';
import LunchTime from './Times/LunchTime/LunchTime';

const DayDisplay = () => {
  
  
  return (
    <div className="display-container">
        <ShiftTime />      
        <LunchTime />
    </div>
  )
}

export default DayDisplay