import { Link } from "react-router-dom"
import * as S from "./PopUser.styled.js"

function PopUser() {
  return (
    <S.HeaderPopSet id="user-set-target">
      <S.PopUserName>Ivan Ivanov</S.PopUserName>
      <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>
      <S.ThemeToggle>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox"/>
      </S.ThemeToggle>
      <S.ButtonUsetPop>
        <Link to="/exit">Выйти</Link>
        </S.ButtonUsetPop>
      </S.HeaderPopSet>
  )
}

export default PopUser
