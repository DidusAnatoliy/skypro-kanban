
import { statusList } from "../../data.js"
import Column from "../Column/Column.jsx"
import * as S from "./Main.styled.js"
import { Container } from "../Common/Common.styled.js"

function Main({ cards, isLoading, error }) {
  
  return (
    <S.Main>
      <Container>
      <S.MainBlock>
        {isLoading ? (
          <S.MainContent>
          {statusList.map((status, index) => {
              return (
              <Column 
              key={index}
              status={status}
              cardList={cards.filter((card) => card.status === status)}
              />
              );
            })}
          </S.MainContent>): ("Загрузка...")}
          {error && <p style={{ color: "red" }}>Ошибка, попробуйте позже</p>}
          </S.MainBlock>
        </Container>
      </S.Main>
  )
}

export default Main
