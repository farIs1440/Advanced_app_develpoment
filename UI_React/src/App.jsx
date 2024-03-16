import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Contact from "./pages/Contact"
import Weblayout from "./layouts/Weblayout"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Weblayout />}>
      <Route path='/contact' element={<Contact />} />
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App