import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { routesPages } from '../../lib/routes'

export default function PrivateRoute({isAuth}) {
  return (
    <>
     {!isAuth ? <Outlet/>:<Navigate to={routesPages.SIGNIN}/>} 
    </>
  )
}
