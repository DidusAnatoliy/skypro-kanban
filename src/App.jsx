import './App.css'
import { GlobalStyle } from './Global.styled.js'
import * as S from "./components/Common/Common.styled.js"
import AppRoutes from './Routes.jsx'

function App() {
  
  return (
    <>
      <S.Wrapper>
        <GlobalStyle />
        <AppRoutes/>

      </S.Wrapper>
    </>
  )
}

export default App
