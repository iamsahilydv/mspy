import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Components/Home/Dashboard'
import Login from '../Components/Login/Login'

const AllRoutes = () => {
  return (
    <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path='/' element={<Dashboard />} />
    </Routes>
  )
}

export default AllRoutes