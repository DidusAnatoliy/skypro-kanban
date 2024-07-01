import { Link, useNavigate } from "react-router-dom"
import Calendar from "../../Calendar/Calendar.jsx"
import { useParams } from "react-router-dom"
import { useCardContext, useUserContext } from "../../../contexts/useUser.jsx"
import {
  BtnBg,
  BtnBor,
  BtnGroup,
  CategotiesTheme,
  FormBrowseArea,
  PopBrows,
  PopBrowseBlock,
  PopBrowseBtn,
  PopBrowseCalendar,
  PopBrowseCalendarTtl,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseFormBlock,
  PopBrowseStatus,
  PopBrowseStatusP,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopBrowseWrap,
  StatusTheme,
  StatusThemes,
  Subttl,
  EditInput,
  StatusThemeLight,
  EditLabel
} from "./PopBrowseStyle";
import { paths, statusList } from "../../../data.js";
import { deleteTodos, editTodos } from "../../../Api.js";
import { useEffect, useState } from "react";


function PopBrowse() {
  const { id } = useParams()
  const { cards, setCards } = useCardContext();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const currentCard = cards.find((element) => id === element._id)
  const [popEdit, setPopEdit] = useState(false);
  const [selected, setSelected] = useState();

  const [saveCards, setSaveCards] = useState({
    title: currentCard.title,
    description: currentCard.description,
    topic: currentCard.topic,
    date: currentCard.date,
    status: currentCard.status,
  });
  const handleInputChange = (status) => {
   setSaveCards({...saveCards,status})
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();

    deleteTodos({ _id: currentCard._id, token: user.token })
      .then((response) => {
        // Обновляем состояние с новыми данными карточек
        setCards(response.tasks);
        navigate(paths.MAIN)
      })
      .catch((err) => {
        console.log(err.message)
      })

  }
  useEffect(() => {
    setPopEdit(true);
  }, []);
  //Функция, которая будет срабытывать, когда пользователь будет вводить или стирать, какие то данные в поле ввода сохранения.
  const handleSaveClick = (e) => {
    e.preventDefault();

    const { name, value } = e.target; // Извлекаем имя поля и его значение (value)- это value где хранится значение нашего поля ввода.

    setSaveCards({
      ...saveCards,
      [name]: value,
    });

    editTodos({
      _id: currentCard._id,
      token: user.token,
      newSaveCard: saveCards,
    })
      .then((response) => {
        // Обновляем состояние с новыми данными карточек
        setCards(response.tasks);
        navigate(paths.MAIN);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const topicColors = {
    "Web Design": "_orange",
    Copywriting: "_purple",
    Research: "_green",
    default: "_gray",
  }
  const color = topicColors[currentCard.topic] || topicColors.default;
 
  return (
    <PopBrows id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>Задача: {currentCard.title}</PopBrowseTtl>
              <CategotiesTheme $topic={color}>
                <p>{currentCard.topic}</p>
              </CategotiesTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <PopBrowseStatusP>Статус</PopBrowseStatusP>
              {popEdit ? (
                <StatusThemes>
                  <StatusThemeLight>
                    <p>{currentCard.status}</p>
                  </StatusThemeLight>
                </StatusThemes>
              ) : (
                <StatusThemes>
                  {statusList.map((el)=>(
                    <StatusTheme $active = {el===saveCards.status} onClick={()=>handleInputChange(el)}>
                      <p>{el}</p>
                  </StatusTheme>
                  ))}
                </StatusThemes>
              )}
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <PopBrowseFormBlock>
                  <Subttl htmlFor="textArea01">Описание задачи</Subttl>
                  {popEdit ? (
                    <FormBrowseArea
                      value={saveCards.description}
                      name="description"
                      id="textArea1"
                      disabled                   
                    >
                      {/* <p>{currentCard.description}</p> */}
                    </FormBrowseArea>
                  ) : (
                    <FormBrowseArea
                      value={saveCards.description}
                      name="description"
                      id="textArea2"
                      onChange={(e)=>setSaveCards({...saveCards,description: e.target.value})}
                    >
                      {/* <p>{currentCard.description}</p> */}
                    </FormBrowseArea>
                  )}
                </PopBrowseFormBlock>
              </PopBrowseForm>
              <PopBrowseCalendar>
                <PopBrowseCalendarTtl>Даты</PopBrowseCalendarTtl>
                {popEdit ? <Calendar selected={currentCard.date} /> : <Calendar selected={selected} setSelected={setSelected} />}
              </PopBrowseCalendar>
            </PopBrowseWrap>

            <PopBrowseBtn>
              {popEdit ? (
                <BtnGroup>
                  <BtnBor
                    onClick={() => {
                      setPopEdit(false);
                    }}
                  >
                    Редактировать задачу
                  </BtnBor>
                  <BtnBor onClick={handleDeleteClick}>Удалить задачу</BtnBor>
                </BtnGroup>
              ) : (
                <BtnGroup>
                  <BtnBor onClick={handleSaveClick}>
                    Сохранить
                  </BtnBor>
                  <BtnBor
                    onClick={() => {
                      setPopEdit(true);
                    }}
                  >
                    Отменить
                  </BtnBor>
                  <BtnBor onClick={handleDeleteClick}>Удалить задачу</BtnBor>
                </BtnGroup>
              )}
              <BtnBg>
                <Link to={paths.MAIN}>Закрыть</Link>
              </BtnBg>
            </PopBrowseBtn>

          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrows>
  );
}

export default PopBrowse;