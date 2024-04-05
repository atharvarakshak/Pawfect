import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Help from './components/Help/Help.jsx'
import Service from './components/Service/Service.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Daycare from './components/subpages/Daycare.jsx'
import BreedingAssistance from './components/subpages/BreedingAssistance.jsx'
import Grooming from './components/subpages/Grooming.jsx'
import VeterinaryAssistance from './components/subpages/VeterinaryAssistance.jsx'
import PetTraining from './components/subpages/PetTraining.jsx'
import Walking from './components/subpages/Walking.jsx'
import Book from './components/Booking/Book.jsx'
import Signup from './components/login/signup/Signup.jsx'
import Login from './components/login/signup/Login.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
     <Route path='' element={<Home/>} />
     <Route path='about' element={<About/>} />
     <Route path='help' element={<Help/>} />
     <Route path='service' element={<Service/>} />
     <Route path='daycare' element={<Daycare/>} />
     <Route path='breeding-assistance' element={<BreedingAssistance/>} />
     <Route path='grooming' element={<Grooming/>} />
     <Route path='veterinary-assistance' element={<VeterinaryAssistance/>} />
     <Route path='pettraining' element={<PetTraining/>} />
     <Route path='walking' element={<Walking/>} />
     <Route path='booking' element={<Book/>} />
     <Route path='signup' element={<Signup/>} />
     <Route path='login' element={<Login/>} />
    
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
