import React, { useState } from 'react'

import TimeInput from '../../../../TimeInput/TimeInput';

const LunchTime = () => {

  const [ startTime,  setStartTime ] = useState()
  const [ endTime, setEndTime ] =  useState(); 

  const onTimeChange = (e, toUpdate) => {
     console.log('This is the e', e.target.value)
     toUpdate === 'start' ? setStartTime(e.target.value) : setEndTime(e.target.value)
  }  

 return (
   <div className="lunch-time">
     <div>
       <TimeInput lbl="Lunch Start:" id="lunchStart" name="lunchStart" startTime={startTime} onTimeChange={onTimeChange} toUpdate="start" value="13:00" disabled={true} readonly="true"/>
     </div>
     <span>to</span>
     <div>
       <TimeInput lbl="Lunch End:" id="lunchEnd" name="lunchEnd" endTime={endTime}  onTimeChange={onTimeChange} toUpdate="end"/>
     </div>
     
   </div>
 )

  }

export default LunchTime;