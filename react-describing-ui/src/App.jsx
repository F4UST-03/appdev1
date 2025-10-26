// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}


function App() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>

  )
}


export default App
