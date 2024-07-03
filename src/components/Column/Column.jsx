import { Colomns } from "../../data.js";
import Card from "../Card/Card.jsx"
import * as S from "./Colomn.styled.js"
import { Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../../helpDroppable.jsx";

function Column({ status, cardList, index }) {

  return (
    <S.MainColumn>
      <Droppable
        droppableId={Colomns[index].id.toString()}
        key={Colomns[index].id}
        index={index}
      >
        {(provided) => (
          <S.Col
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...provided.dragHandleProps}
          >
            <S.ColumnTitle>
              <p>{status}</p>
            </S.ColumnTitle>

            <S.Cards>
              {cardList.map((card, index) => {
                return (
                  <Draggable
                    draggableId={card._id.toString()}
                    key={card._id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card
                          index={index}
                          id={card._id}
                          status={card.status}
                          key={card._id}
                          {...card} />
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </S.Cards>
            {provided.placeholder}
          </S.Col>
        )}
      </Droppable>
    </S.MainColumn>
  );
}
export default Column;
