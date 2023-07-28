import { useContext } from "react"
import { createContext , useState } from "react"

//! 1- Login Context'i olusuturuldu
const LoginContext = createContext()

//! 2-sarmallayıcı (provider) oluşturduk
const LoginProvider = ({children}) => {

// Local State
  const [user, setUser] = useState({ email: "", password: "" })

  const values = { 
    user , 
    setUser
  }

  return (
    <LoginContext.Provider value={ values} > {children} </LoginContext.Provider>
  )
}

//! 3-Consuming custom hook oluşturma

export const useLoginContext =()=>{
    return useContext(LoginContext)
}


export default LoginProvider
 