import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Academics from './Pages/Academic/Academics'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/academics' element={<Academics/>}></Route>
    </Routes>
   
  )
}

export default App
