import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { paths } from '../../data';

function PrivateRoute({ user }) {
  return (user ? <Outlet/> : <Navigate to={paths.LOGIN}/>);
}

export default PrivateRoute;