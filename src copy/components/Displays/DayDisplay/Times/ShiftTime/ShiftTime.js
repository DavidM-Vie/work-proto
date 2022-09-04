import React, { useState } from 'react';
import moment from 'moment';

import TimeInput from '../../../../TimeInput/TimeInput'

const ShiftTime = () => {

   const [ startTime,  setStartTime ] = useState()
   const [ endTime, setEndTime ] =  useState(); 

   const onTimeChange = (e, toUpdate) => {
      console.log('This is the e', e.target.value)
      toUpdate === 'start' ? setStartTime(e.target.value) : setEndTime(e.target.value)
   }  

  return (
    <div className="shift-time">
      <div>
        <TimeInput lbl="Start:" id="shiftStart" name="shiftStart" startTime={startTime} onTimeChange={onTimeChange} toUpdate="start"/>
      </div>
      <div>
        <TimeInput lbl="End:" id="shiftEnd" name="shiftEnd" endTime={endTime} onTimeChange={onTimeChange} toUpdate="end"/>
      </div>
      
    </div>
  )
}

export default ShiftTime