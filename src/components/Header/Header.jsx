import PopUser from "../Popups/PopUser/PopUser.jsx";
import { useState } from "react";

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
          <div className="header__logo _dark">
            <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo" /></a>
          </div>
          <nav className="header__nav">
            <button onClick={onClick} className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a onClick={toggleDropdown} className="header__user _hover02">Ivan Ivanov</a>
            {isOpen && (<PopUser />)}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
