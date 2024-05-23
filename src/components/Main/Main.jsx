import { useEffect, useState } from "react"
import { statusList } from "../../data.js"
import Column from "../Column/Column.jsx"


function Main({cards}) {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000); 
  }, []);
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
        {isLoading ? (
          <div className="main__content">
          {statusList.map((status, index) => {
              return <Column 
              key={index}
              status={status}
              cardList={cards.filter((card) => card.status === status)}
              />
            })}
          </div>): "Загрузка..."}
        </div>
      </div>
    </main>
  )
}

export default Main
