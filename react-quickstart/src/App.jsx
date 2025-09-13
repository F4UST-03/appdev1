// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function MyButton() {
//   return (
//     <button>Click</button>
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


function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
      {/* <h1>Welcome to My App!</h1>
      <MyButton /> */}
      <AboutPage />
    </>
  )
}

export default App
