// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function Admin() {
  return (
    <>
      <h1>Admin Page</h1>
      <h3>This is an Admin page</h3>
    </>
  )
}

function LoginForm() {
  return (
    <>
      <h1>Login Page</h1>
      <h3>Please log in</h3>
    </>
  )
}


function App() {

  const isLoggedIn = true;
  let content;
  if (isLoggedIn) {
    content = <Admin />;
  } else {
    content = <LoginForm />;
  }


  return (
    <>
      {/* <h1>Welcome to My App!</h1>
      <MyButton /> */}
      {/* <AboutPage /> */}
      {/* <img className="avatar" /> */}
      {/* <h1>Hello {user.name}!</h1>
      <p>Age: {user.age}</p>
      <img className="avatar" src={user.avatarUrl}/> */}
      {content}
    </>
  )
}

export default App
