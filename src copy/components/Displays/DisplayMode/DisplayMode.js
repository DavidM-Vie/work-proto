import React, { useState } from 'react'

const DisplayMode = () => {

  const [ state, setState ] = useState('daily')

  const checkMode = () => {
    if(state === 'weekly') {
      return <h2>Weekly: "week here"</h2>
    }else if (state === 'monthly') { 
      return <h2>Monthly: "month here"</h2>
    }else {
      return <h2>Daily: "date here"</h2>
    }
  }

  return (
    <div className="display-mode">
      <div>
        <h1 className="xxl">Daily </h1><h3 className="m">Weekly</h3><h3 className="m">Monthly</h3>

      </div>   
      {
        checkMode()
      } 
    </div>
  )
}

export default DisplayMode