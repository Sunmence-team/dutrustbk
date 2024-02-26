import React from 'react'
import Home from './pages/home/home'
import About from './pages/about/about'
import Savings from './pages/savings/savings'
import Loan from './pages/loan/loan'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/savings' element={<Savings/>}/>
        <Route path='/loan' element={<Loan/>}/>
      </Routes>
    </div>
  )
}

export default App
