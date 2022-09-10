import React, { useEffect } from 'react';

import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute =  ({ children }) => {

  const navigate = useNavigate();

  const { user } =  UserAuth();

  useEffect(() => {
    console.log(typeof user)
    !user && navigate('/')
  },[])

  return  children 
}

export default ProtectedRoute