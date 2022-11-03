import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import { AuthContext } from './context/AuthContext'
import { Home } from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const {currentUser} = useContext(AuthContext)
  
  console.log("currentUser",currentUser)
  return (
    <> 
      <Routes>
        <Route path="/" exact element={currentUser ?<Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
