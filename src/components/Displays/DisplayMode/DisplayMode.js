import React, { useState } from 'react'

const DisplayMode = () => {

  const [ state, setState ] = useState('daily')

  const checkMode = () => {
    if(state === 'weekly') {
      return <h4>Weekly: "week here"</h4>
    }else if (state === 'monthly') { 
      return <h4>Monthly: "month here"</h4>
    }else {
      return <h4>Daily: "date here"</h4>
    }
  }

  return (
    <>
    <div className="display-mode">
      <div>
        <h3 className="l chosen">Daily</h3><h3 className="l">Weekly</h3><h3 className="l">Monthly</h3>

      </div>   

    </div>
    {
      checkMode()
    } 
    </>
  )
}

export default DisplayMode