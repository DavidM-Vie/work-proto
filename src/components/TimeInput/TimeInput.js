import React from 'react'

const TimeInput = (props) => {

  const onChange = (e) => {
     props.onTimeChange(e, props.toUpdate)
  }

  console.log('what the fuck are props? ', props)

  return (
    <>
    <label htmlFor={props.name}>{props.lbl}</label>
    <input type="time" id={props.id} name={props.name} min="08:00" max="18:30" onChange={onChange} disabled={props.disabled} value={props.value} required/>
    </>
  )
}

export default TimeInput