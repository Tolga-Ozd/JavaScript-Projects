import React, { createContext, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FirebaseConfig';

export const FirebaseContext =  createContext()


const FireBaseProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(false)
  
    
const createUser = async(email, password) =>{


const userCredential = await  createUserWithEmailAndPassword(auth, currentUser.email, currentUser.password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });
}



  return (
    <FirebaseContext.Provider value={{currentUser,setCurrentUser}}>{children}</FirebaseContext.Provider>
  )
}

export default FireBaseProvider