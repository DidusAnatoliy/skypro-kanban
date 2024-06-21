import { Link } from "react-router-dom"
import * as S from "./PopUser.styled.js"
import { paths } from "../../../data.js"
import { useUserContext } from "../../../contexts/useUser.jsx"

function PopUser() {
  const {user} = useUserContext();
  return (
    <S.HeaderPopSet id="user-set-target">
      <S.PopUserName>{user.name}</S.PopUserName>
      <S.PopUserMail>{user.login}</S.PopUserMail>
      <S.ThemeToggle>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox"/>
      </S.ThemeToggle>
      <S.ButtonUsetPop>
        <Link to={paths.EXIT}>Выйти</Link>
        </S.ButtonUsetPop>
      </S.HeaderPopSet>
  )
}

export default PopUser
