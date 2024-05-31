import { useEffect, useState } from "react"
import { statusList } from "../../data.js"
import Column from "../Column/Column.jsx"
import * as S from "./Main.styled.js"
import { Container } from "../Common/Common.styled.js"

function Main({cards}) {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000); 
  }, []);
  return (
    <S.Main>
      <Container>
      <S.MainBlock>
        {isLoading ? (
          <S.MainContent>
          {statusList.map((status, id) => {
              return <Column 
              key={id}
              status={status}
              cardList={cards.filter((card) => card.status === status)}
              />
            })}
          </S.MainContent>): "Загрузка..."}
          </S.MainBlock>
        </Container>
      </S.Main>
  )
}

export default Main
