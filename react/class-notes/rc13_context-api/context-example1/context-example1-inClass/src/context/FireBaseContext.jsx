import React, { createContext, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FirebaseConfig';

export const FirebaseContext =  createContext()


const FireBaseProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(false)
  
    
const createUser = async(email, password) =>{





  return (
    <FirebaseContext.Provider value={{currentUser,setCurrentUser}}>{children}</FirebaseContext.Provider>
  )
}

export default FireBaseProvider