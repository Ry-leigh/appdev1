import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TeaSet from './components/App'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <TeaSet />
    </>
  )
}

export default App
