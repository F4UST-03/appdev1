// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function MyButton() {
//   return (
//     <button>Click</button>
//   );
// }

// function AboutPage() {
//   return (
//     <>
//       <h1>About</h1>
//       <p>Hello there.<br />How do you do?</p>
//     </>
//   );
// }


function App() {
  // const [count, setCount] = useState(0)
  const user = {
    name: 'Jori',
    age: 22,
    avatarUrl: 'https://avatars.githubusercontent.com/u/184085946?v=4'
  }

  return (
    <>
      {/* <h1>Welcome to My App!</h1>
      <MyButton /> */}
      {/* <AboutPage /> */}
      {/* <img className="avatar" /> */}
      <h1>Hello {user.name}!</h1>
      <p>Age: {user.age}</p>
      <img className="avatar" src={user.avatarUrl}/>
    </>
  )
}

export default App
