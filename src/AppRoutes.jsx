import './App.css'
import { GlobalStyle } from './Global.styled.js'
import * as S from "./components/Common/Common.styled.js"
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import { routesPages } from './lib/routes.js'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import SigninPage from './pages/HomePage/SigninPage/SigninPage.jsx'

function AppRoutes() {
  return (
    <>
      <S.Wrapper>
        <GlobalStyle />
        <Routes>
            <Route element={<PrivateRoute />}>
            <Route path={routesPages.MAIN} element={<HomePage />} />
            </Route>
            <Route path={routesPages.SIGNIN} element={<SigninPage/>}/>
        </Routes>
      </S.Wrapper>
    </>
  )
}

export default AppRoutes    
