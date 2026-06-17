import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/signIn'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App