import React, { Children } from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Kodex from './pages/Kodex'
import Cohort from './pages/Cohort'
import Footer from './components/Footer'
import Layout from './components/Layout'

const App = () => {
  // const allRoutes = createBrowserRouter([{
  //   path:'/',
  //   element:<Layout/>,
  //   children:[{
  //     index:true,
  //     element:<Home/>
  //   },{
  //     index:true,
  //     element:<About/>
  //   },{}]
  // }])
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/courses' element={<Courses />}>
        <Route path='/courses/kodex' element={<Kodex/>}/>
        <Route path='/courses/cohort' element={<Cohort/>}/>
        </Route>
      </Routes>

      <Footer/>
      </div>
  )
}

export default App