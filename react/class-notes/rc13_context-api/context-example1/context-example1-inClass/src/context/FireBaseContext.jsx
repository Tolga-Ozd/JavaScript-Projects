import React from 'react'
import { createContext } from 'react'

const FireBaseContext = createContext()



const FireBaseProvider = ({children}) => {



  return (
    <FireBaseContext.Provider value={null}>{children}</FireBaseContext.Provider>
  )
}

export default FireBaseProvider