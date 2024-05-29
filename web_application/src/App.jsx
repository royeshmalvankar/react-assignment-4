import { useState } from 'react'
import AllRoute from './Route/Allroute'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AllRoute />
      </div>
    </>
  )
}

export default App
