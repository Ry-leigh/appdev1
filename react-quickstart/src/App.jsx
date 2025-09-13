import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

function App() {
    return (
    <div>
      <img className="avatar" />
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

export default App
