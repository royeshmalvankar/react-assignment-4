import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import axios from 'axios'
import { Authcontext } from '../context/Authcontext'
const Login = () => {
    const [login, setLogin] = useState({  
        email: "",
        password: "",
    })
    const navigate = useNavigate()

    const {  auth, loginFunction, logoutFunction } = useContext(Authcontext)



    const handleSubmit = async () => {
        const data={
            email:login.email,
            password:login.password
        }
        console.log(login);
        let response = await axios.post("https://reqres.in/api/login", data)
        loginFunction(response.data.token)
        navigate("/")
    }

  
    return (
        <div className="login">
            <h1>Login</h1>
            <p>Enter your credentials</p>
            <label htmlFor="">Email: </label>
            <input type="text" placeholder="Enter your email" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} />
            <br />
            <br />
            <label htmlFor="">Password: </label>
            <input type="password" placeholder="Enter your password" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} />
            <br />
            <br />
            <Button colorScheme='gray' size='lg' variant="solid" onClick={handleSubmit}>Login</Button>
        </div>

    )
}

export default Login