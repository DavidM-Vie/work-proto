import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {UserAuth} from '../../context/AuthContext';

const SignIn = () => {

  const { user, signUserIn } = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError('');
    try {
      await signUserIn(email, password);
      navigate('/dashboard')
    }catch(e) {
      setError(e.message);
      console.log(e.message)
    }

  }


  return (

    user ? navigate('/dashboard') : 
    <div className="signin-container">
      
      <div>
        {error}
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
           <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
          </div>
          <div>
            <button className="btn1">Go</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn