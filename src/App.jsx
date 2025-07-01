import React from 'react'
import { Route, BrowserRouter as Router, Routes }  from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Toaster } from './components/ui/toaster'

const App = () => {
  return (
    <>
    <Toaster/>
   <Router>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
   </Router>
    </>
  )
}

export default App