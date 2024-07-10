import { useState } from 'react'
import './App.css'
import { InputSearch } from './components/InputSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <InputSearch/>
  )
}

export default App
