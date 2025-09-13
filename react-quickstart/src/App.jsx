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

const user = {
  name: 'Ryan',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function AdminPanel() {
  return(
    <h1>Welcome to the Admin Panel</h1>
  );
}

function LoginForm() {
  return(
    <h1>Welcome to the Login Form</h1>
  );
}

let isLoggedIn = true;
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

function App() {
  return (
    <>
      {content}
    </>
  );
}

export default App
