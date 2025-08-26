import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>About Me</h1>
      <p><strong>Name:</strong> Ryan Aaron Dela Cruz</p>
      <p><strong>Course/Year:</strong> BS Information Technology 3rd Year</p>
      <p><strong>Fun Fact:</strong> I can copy drawings/sketches ^^</p>
      <hr />
      <h2>Why I Want to Learn React</h2>
      <p>
        I want to study React because it is one of the most widely used libraries in modern industries. And I'd like to create dynamic, responsive and interactive applications. I'd like to explore their SPA, that's all.
      </p>
    </>
  )
}

export default App
