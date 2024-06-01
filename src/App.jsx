import { createHashRouter, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Title from './components/Title'
import HomeCards from './components/HomeCards'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import CV from './pages/CV'
import Contact from './pages/Contact'
import Misc from './pages/Misc'

const router = createHashRouter(
  createRoutesFromElements( 
  <Route path='/' element={ <MainLayout /> }>
    <Route index element={ <HomePage /> } />
    <Route path='/cv' element={ <CV /> } />
    <Route path='/contact' element={ <Contact /> } />
    <Route path='/misc' element={ <Misc /> } />
  </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App