import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Gallery from './components/App'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <Gallery />
    </>
  )
}

export default App
