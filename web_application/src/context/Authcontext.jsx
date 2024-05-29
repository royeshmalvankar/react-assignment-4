import { createContext, useState } from "react"

export const Authcontext = createContext()
const AuthcontextProvider = ({children}) => {
    const [auth, setAuth] = useState({
        isloggedIn: true,
        token: null
    })

    const loginFunction = (token) => {
        setAuth({
            isloggedIn:true,
            token: token
        })
    }

    const logoutFunction = () => {
        setAuth({
            isloggedIn:false,
            token: null
        })
    }
    return (
       <Authcontext.Provider value={{auth, setAuth, loginFunction, logoutFunction}}>
        {children}
        </Authcontext.Provider>
    )
}

export default AuthcontextProvider