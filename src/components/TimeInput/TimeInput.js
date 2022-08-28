import React from 'react'

const TimeInput = (props) => {

  const onChange = (e) => {
     props.onTimeChange(e, props.toUpdate)
  }


  return (
    <>
    <label htmlFor="{props.name}">{props.lbl}</label>
    <input type="time" id="{props.time}" name="{props.time}" min="08:00" max="18:30" onChange={onChange} required />
    </>
  )
}

export default TimeInput