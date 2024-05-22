import PopUser from "../Popups/PopUser/PopUser.jsx";
import { useState } from "react";

function Header({ addCard }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggkeDropdown = () => setIsOpen((prevState) => !prevState);
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
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a onClick={addCard} href="#popNewCard">Создать новую задачу</a>
            </button>
            <a onClick={toggkeDropdown} href="#user-set-target" className="header__user _hover02">Ivan Ivanov</a>
            {isOpen && (<PopUser />)}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
