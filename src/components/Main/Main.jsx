
import { Colomns } from "../../data.js"
import Column from "../Column/Column.jsx"
import * as S from "./Main.styled.js"
import { Container } from "../Common/Common.styled.js"
import { useCardContext } from "../../contexts/useUser.jsx"
import { DragDropContext } from "react-beautiful-dnd"

function Main({ isLoading, error }) {
  const {cards, setCards} = useCardContext();

  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          {isLoading ? (
            <DragDropContext
              onDragEnd={({ source, destination }) => {
                if (!destination) return;
                if (
                  source.droppableId === destination.droppableId &&
                  source.index === destination.index
                ) {
                  return;
                }

                const newCards = Array.from(cards);
                const [removedCard] = newCards.splice(source.index, 1);
                newCards.splice(destination.index, 0, removedCard);

                setCards(newCards);
              }}
            >
              <S.MainContent>
                {Colomns.map((status, index) => {
                  return (
                    <Column
                      key={index}
                      index={index}
                      status={status.status}
                      cardList={cards.filter(
                        (card) => card.status === status.status
                      )}
                    />
                  );
                })}
              </S.MainContent>
            </DragDropContext>
          ) : (
            "Загрузка..."
          )}
          {error && <p style={{ color: "red" }}>Ошибка, попробуйте позже</p>}
        </S.MainBlock>
      </Container>
      </S.Main>
  );
}
export default Main;