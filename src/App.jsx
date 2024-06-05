import './App.css'
import { GlobalStyle } from './Global.styled.js'
import * as S from "./components/Common/Common.styled.js"
import AppRoutes from './AppRoutes.jsx'

function App() {
  
  return (
    <>
      <S.Wrapper>
        <GlobalStyle />
        <AppRoutes/>
        {/* <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header setCards={setCards} cards={cards} />
        <Main cards={cards} /> */}
      </S.Wrapper>
    </>
  )
}

export default App
