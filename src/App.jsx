import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Academics from './Pages/Academic/Academics'
import About from './Pages/About/About'
import AllCourses from './Components/HomeComponent/CurrentCourses'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/academics' element={<Academics/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/allCourses' element={<AllCourses/>}></Route>
    </Routes>
   
  )
}

export default App
