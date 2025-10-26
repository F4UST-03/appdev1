// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import ComponentA from './my_components/ComponentA';
import ComponentC from './my_components/ComponentC';

import { greetA } from './my_modules/ModuleA.js';
import { greetB } from './my_modules/ModuleB.js';
import { greetC } from './my_modules/ModuleC.js';


function App() {

  console.log('Hello from RootModule');
  greetA();
  greetB();
  greetC();

  return (
    <div>
      <h1>Root Component</h1>
      <ComponentA />
      <ComponentC />
    </div>
  )
}


export default App
