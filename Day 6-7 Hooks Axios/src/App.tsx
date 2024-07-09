import { useState } from 'react'
import './App.css'
import {Home} from './screens/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
