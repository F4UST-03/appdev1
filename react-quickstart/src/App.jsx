// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// function Admin() {
//   return (
//     <>
//       <h1>Admin Page</h1>
//       <h3>This is an Admin page</h3>
//     </>
//   )
// }

// function LoginForm() {
//   return (
//     <>
//       <h1>Login Page</h1>
//       <h3>Please log in</h3>
//     </>
//   )
// }

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>; 
}

function App() {
  return (
    <>
      {/* {content} */}
      <ShoppingList />
    </>
  );
}

export default App;
