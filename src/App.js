import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home/Home';
import NavBar from './Routes/NavBar/NavBar';
import SignIn from './Routes/SignIn/SignIn';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App