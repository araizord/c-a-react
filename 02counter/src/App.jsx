import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    // counter = counter + 1;
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    console.log("Clicked", Math.random()); 
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter value: {counter}</h3>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
