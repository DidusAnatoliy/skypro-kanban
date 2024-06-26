import Card from "../Card/Card.jsx"
import * as S from "./Colomn.styled.js"

function Column({status, cardList}) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{status}</p>
      </S.ColumnTitle>
      <S.Cards>
      {cardList.map((card) => {
        return (
          <Card 
          key={card._id}{...card}
          />
        );
        })}
      </S.Cards>
    </S.MainColumn>
  )
}

export default Column
