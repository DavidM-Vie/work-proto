import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

import { UserAuth } from "../../context/AuthContext";

const SignUp = () => {
  const { createUser } = UserAuth()
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const navigate = useNavigate();



  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate('/dashboard')
    }catch(e) {
      setError(e.message);
      console.log(e.message);
    }
  }

  return (
    <div className="signup-container">
      <div>
        {error}
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email"/>
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
          </div>
          <div>
            <button className="btn1">Register</button>
          </div>        
        </form>
      </div>
    </div>
  )
}

export default SignUp