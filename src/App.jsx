import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentA from './components/ComponentA'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentA />
     
    </>
  );
}   


export default App
