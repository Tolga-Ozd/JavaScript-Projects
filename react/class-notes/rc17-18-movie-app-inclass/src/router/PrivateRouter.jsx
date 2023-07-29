import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PriviateRouter = () => {
  const user = true;
  return (
    user ? <Outlet /> : <Navigate to="/login"/>
  )
}

export default PriviateRouter