import PopUser from "../Popups/PopUser/PopUser";
import { useState } from "react";
import * as S from "./Header.styled"
import { Container } from "../Common/Common.styled";
import { Link } from "react-router-dom";

function Header({ cards, setCards, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  function onClick() {
    const newCard = {
      id: cards.length + 1,
      topic: 'Web Design',
      title: 'Новая задача',
      date: '30.10.23',
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }
  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.Logo>
            <Link to="" target="_self"><img src="/images/logo.png" alt="logo" /></Link>
          </S.Logo>
          {/* <div className="header__logo _dark">
            <Link="" target="_self"><img src="/images/logo_dark.png" alt="logo" /></Link>
          </div> */}
          <S.Nav>
            <S.HeaderButton onClick={onClick} id="btnMainNew">
              Создать новую задачу
              {/* <a href="#popNewCard">Создать новую задачу</a> */}
            </S.HeaderButton>
            <S.User onClick={toggleDropdown} user={user}>{user.name}</S.User>
            {isOpen && (<PopUser user={user}/>)}
          </S.Nav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  )
}

export default Header
