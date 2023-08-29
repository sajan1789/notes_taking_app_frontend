
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from '../Components/HomePage'
import Login from './Login'
import AddNotes from './AddNotes'
import Signup from './SignUp'
import Notes from './Notes'
import { PrivateRoute } from '../Components/PrivateRoutes'
const MainRoutes = () => {
  return (
      <Routes>
           <Route path="/"  element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>

            <Route path='/notes' element={ <PrivateRoute>  <Notes/> </PrivateRoute>}/>
            <Route path='/addnotes' element={<PrivateRoute><AddNotes/></PrivateRoute> }/>

            <Route  path="*"  element={<h3>404 Page not found</h3>}/>
      </Routes>
  )
}

export default MainRoutes