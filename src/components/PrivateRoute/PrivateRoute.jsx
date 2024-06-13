import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { paths } from '../../data';

function PrivateRoute({ isAuth }) {
  return (isAuth ? <Outlet/> : <Navigate to={paths.LOGIN}/>);
}

export default PrivateRoute;