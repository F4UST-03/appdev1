import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// function MyButton() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }

function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <h1>Counters that update separately</h1>
      <MyButton count={count1} onClick={() => setCount1(count1 + 1)} />
      <MyButton count={count2} onClick={() => setCount2(count2 + 1)} />
      <MyApp />
    </>
  );
}

export default App;
