import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <header>
      <h1>David</h1>
      <nav>
        +<div className="header-flexi">        
          <div>
            <FontAwesomeIcon icon="clock-rotate-left" className="clock-rotate-left" />
            <p>Flexi</p>
            <p className="flexi-count">(+9hrs 10mins)</p>
          </div>
        </div>
        <div className="header-holidays">        
          <div>
            <FontAwesomeIcon icon="plane-departure" className="plane-departure"/>
            <p>Holidays</p>
            <p className="holiday-count">(20 of 25 spent)</p>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header