import Card from "../Card/Card.jsx"


function Column({name}) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{name}</p>
      </div>
      <div className="cards">
        <Card/>
      </div>
    </div>
  )
}

export default Column
