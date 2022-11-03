import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Home } from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={<Home/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/signup"
          element={<Register/>}
        />
      </Routes>
    </>
  )
}

export default App
