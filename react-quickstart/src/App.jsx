import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }

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

// let isLoggedIn = true;
// let content;
// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;
// }

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

function MyButton({ count, onClick}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}




function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </>
  );
}

export default App
