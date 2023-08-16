import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {


  return (
 <BrowserRouter>
 <Navbar></Navbar>
 <Routes>
  <Route path='/' element={<Home></Home>}></Route>
 </Routes>
 </BrowserRouter>
  )
}

export default App
