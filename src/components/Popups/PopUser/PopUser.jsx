import * as S from "./PopUser.styled"
function PopUser() {
  return (
    <div className="header__pop-user-set pop-user-set" id="user-set-target">
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <S.ThemeToggle>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox"/>
      </S.ThemeToggle>
      <button type="button" className="_hover03">
        <a href="#popExit">Выйти</a>
      </button>
    </div>
  )
}

export default PopUser
