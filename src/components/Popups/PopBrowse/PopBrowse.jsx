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
import { paths } from "../../../data.js";
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
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSaveCards({
      ...saveCards,
      [name]: value,
    });
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

  return (
    <PopBrows id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>Задача: {currentCard.title}</PopBrowseTtl>
              <CategotiesTheme $topic={currentCard.topic}>
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
                  <StatusTheme>
                    <EditLabel>
                      <EditInput
                        type="radio"
                        id="status1"
                        name="status"
                        value="Без статуса"
                        onChange={handleInputChange}
                      />
                      <p>Без статуса</p>
                    </EditLabel>
                  </StatusTheme>
                  <StatusTheme>
                    <EditLabel>
                      <EditInput
                        type="radio"
                        id="status2"
                        name="status"
                        value="Нужно сделать"
                        onChange={handleInputChange}
                      />
                      <p>Нужно сделать</p>
                    </EditLabel>
                  </StatusTheme>
                  <StatusTheme>
                    <EditLabel>
                      <EditInput
                        type="radio"
                        id="status3"
                        name="status"
                        value="В работе"
                        onChange={handleInputChange}
                      />
                      <p>В работе</p>
                    </EditLabel>
                  </StatusTheme>
                  <StatusTheme>
                    <EditLabel>
                      <EditInput
                        type="radio"
                        id="status4"
                        name="status"
                        value="Тестирование"
                        onChange={handleInputChange}
                      />
                      <p>Тестирование</p>
                    </EditLabel>
                  </StatusTheme>
                  <StatusTheme>
                    <EditLabel>
                      <EditInput
                        type="radio"
                        id="status5"
                        name="status"
                        value="Готово"
                        onChange={handleInputChange}
                      />
                      <p>Готово</p>
                    </EditLabel>
                  </StatusTheme>
                </StatusThemes>
              )}
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <PopBrowseFormBlock>
                  <Subttl htmlFor="textArea01">Описание задачи</Subttl>
                  {popEdit ? (
                    <FormBrowseArea
                      value={currentCard.description}
                      name="description"
                      id="textArea1"
                      disabled
                      onChange={handleInputChange}
                    >
                      {/* <p>{currentCard.description}</p> */}
                    </FormBrowseArea>
                  ) : (
                    <FormBrowseArea
                      value={saveCards.description}
                      name="description"
                      id="textArea2"
                      onChange={handleInputChange}
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