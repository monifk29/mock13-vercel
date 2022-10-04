import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Users from '../pages/Users'
import Form from "../pages/Form"
import List from "../pages/List"


const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/user' element={<Users/>}></Route>
    <Route path='/admin' element={<Admin/>}></Route>

    <Route path='/admin' element={<Admin/>}></Route>
    <Route path='/admin/form' element={<Form/>}></Route>
    <Route path='/admin/list' element={<List/>}></Route>



   </Routes>
  )
}

export default AllRoutes