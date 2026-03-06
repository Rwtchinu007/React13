import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Kodex from './pages/Kodex'
import Cohort from './pages/Cohort'
import Footer from './components/Footer'

const App = () => {
  const allRoutes = createBrowserRouter([{
    path:'/',
    element:<Home/>
  },{
    path:'/about',
    element:<About/>
  },{
    path:'/courses', 
    element:<Courses/>,
    children=[{
      path:'kodex',
      element:<Kodex/>
    },{
      path:'cohort',
      element:<Cohort/>
    }]
  }]) 
  return (
    <div className=''>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/courses' element={<Courses />}>
        <Route path='/courses/kodex' element={<Kodex/>}/>
        <Route path='/courses/cohort' element={<Cohort/>}/>
        </Route>
      </Routes> */}
      <RouterProvider 

      <Footer/>
      </div>
  )
}

export default App