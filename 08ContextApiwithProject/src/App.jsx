
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextprovider'

function App() {
  

  return (
    <UserContextProvider>

      <h1>React</h1>
      <Login></Login>
      <Profile/>
     </UserContextProvider>
  )
}

export default App
