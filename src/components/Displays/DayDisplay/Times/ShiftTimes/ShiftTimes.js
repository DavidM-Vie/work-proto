import React, { useState } from 'react';
import moment from 'moment';

import TimeInput from '../../../../TimeInput/TimeInput'

const ShiftTimes = () => {

   const [ startTime,  setStartTime ] = useState()
   const [ endTime, setEndTime ] =  useState(); 

   const onTimeChange = (e, toUpdate) => {
      console.log('This is the e', e.target.value)
      toUpdate === 'start' ? setStartTime(e.target.value) : setEndTime(e.target.value)
   }  

  return (
    <div className="shift-times">
      <TimeInput lbl="Start" name="shiftStart" startTime={startTime} onTimeChange={onTimeChange} toUpdate="start"/>
      <TimeInput lbl="End" name="shiftEnd" endTime={endTime} onTimeChange={onTimeChange} toUpdate="end"/>
  </div>
  )
}

export default ShiftTimes