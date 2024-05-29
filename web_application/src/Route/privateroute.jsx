import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Authcontext } from "../context/Authcontext"
const PrivateRoute = ({children}) => {

    const {auth} = useContext(Authcontext)

    if(auth.isloggedIn===false){
        return <Navigate to="/login"/>
    }
    return children
}

export default PrivateRoute