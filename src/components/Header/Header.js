import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { UserAuth } from '../../context/AuthContext';

const Header = () => {

  const navigate = useNavigate();

  const {user, logOut} = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/')
      console.log('You are logged out');
    }catch (e) {
      console.log(e.message)
    }
  }

  return (
    <header>
      <div>
        <h1>Bob <h5>the Work Coach</h5></h1>
        <span>{user && user.email}</span>
        <button onClick={handleLogOut}>Log out</button>
      </div>

      <nav>
        +<div className="header-flexi">        
          <div>
            <FontAwesomeIcon icon="clock-rotate-left" className="clock-rotate-left" />
            <p><Link to="/flexi">Flexi</Link></p>
            <p className="flexi-count">(+9hrs 10mins)</p>
          </div>
        </div>
        <div className="header-holidays">        
          <div>
            <FontAwesomeIcon icon="plane-departure" className="plane-departure"/>
            <p><Link to="/holidays">Holidays</Link></p>
            <p className="holiday-count">(20 of 25 spent)</p>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header