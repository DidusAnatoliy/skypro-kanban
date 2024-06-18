import { Link } from "react-router-dom"
import { paths } from "../data"
function NotFoundPage() {
  return (
    <div>
      <h1> Страница не найдена</h1>
      <Link to={paths.MAIN}>Вернуться на Главную</Link>
    </div>
  )
}

export default NotFoundPage