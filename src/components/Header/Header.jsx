import PopUser from "../Popups/PopUser/PopUser";
import { useState } from "react";
import * as S from "./Header.styled"

function Header({ cards, setCards }) {
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
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self"><img src="/images/logo.png" alt="logo" /></a>
          </div>
          {/* <div className="header__logo _dark">
            <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo" /></a>
          </div> */}
          <nav className="header__nav">
            <S.HeaderButton onClick={onClick} id="btnMainNew">
              Создать новую задачу
              {/* <a href="#popNewCard">Создать новую задачу</a> */}
            </S.HeaderButton>
            <a onClick={toggleDropdown} className="header__user _hover02">Ivan Ivanov</a>
            {isOpen && (<PopUser />)}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
