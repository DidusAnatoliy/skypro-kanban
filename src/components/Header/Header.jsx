import PopUser from "../Popups/PopUser/PopUser";
import { useState } from "react";
import * as S from "./Header.styled"
import { Container } from "../Common/Common.styled";
import { Link } from "react-router-dom";
import { paths } from "../../data";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  
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
            <S.HeaderButton id="btnMainNew">
            <Link to={paths.NEWCARD}> Создать новую задачу</Link>
              {/* <a href="#popNewCard">Создать новую задачу</a> */}
            </S.HeaderButton>
            <S.User onClick={toggleDropdown}></S.User>
            {isOpen && (<PopUser/>)}
          </S.Nav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  )
}

export default Header
