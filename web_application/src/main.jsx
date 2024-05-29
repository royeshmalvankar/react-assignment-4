import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthcontextProvider from './context/Authcontext.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <AuthcontextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthcontextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
