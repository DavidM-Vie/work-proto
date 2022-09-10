import { createContext, useContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut, 
  onAuthStateChanged } 
from 'firebase/auth';
import { auth } from '../db/firebase';

const UserContext = createContext(); 

export const AuthContextProvider = ({children}) => {

  const [user, setUser] = useState('');

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const signUserIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  return (
    <UserContext.Provider value={{createUser, signUserIn, logOut, user}}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}