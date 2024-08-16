import { useState } from 'react';
import './App.css';

function App() {
let [counter , setcounter] = useState(0);

const addValue = () =>{
  if (counter>19) {
    alert("DOn't click any further");
    setcounter(counter);
  }
  else{
    console.log("The counter value is to be increased" ,counter);
    counter = counter + 1 ;
    setcounter(counter);
  }
}

const removeValue = () =>{
  if (counter <=0) {
    alert("DOn't click any further");
    setcounter(counter);
  }
  else{
    console.log("The counter value is to be increased" ,counter);
    counter = counter - 1 ;
    setcounter(counter);
  }
}

  return (

    <>
      <h1>React Project 1</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter} </button>
      <br/>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
                     