import Hello from "./hello";

function App() {
  const username = "Rajeev" 
  
  //{any thing in this curly braces is known as a evaluated expression}  or will give the final ourcome
  return (
    <>

    <Hello></Hello>
    <h1>Creating react from vite and it is made by {username}</h1>
    </>     
  )
}

export default App;
