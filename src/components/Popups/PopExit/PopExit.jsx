import { Link } from "react-router-dom"
import * as S from "./PopExit.styled"
import { paths } from "../../../data"
import { useUserContext } from "../../../contexts/useUser"

function PopExit() {
  const {Logout} = useUserContext();
  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitGroup>
              <S.PopExitYes id="exitYes">
                <Link to={paths.LOGIN} onClick={Logout}>Да, выйти</Link>
              </S.PopExitYes>
              <S.PopExitNo id="exitNo">
                <Link to={paths.MAIN}>Нет, остаться</Link>
              </S.PopExitNo>
            </S.PopExitGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  )
}

export default PopExit
