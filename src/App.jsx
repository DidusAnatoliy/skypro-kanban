import './App.css'
import PopExit from './components/Popups/PopExit/PopExit.jsx'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard.jsx'
import PopBrowse from './components/Popups/PopBrowse/PopBrowse.jsx'
import Header from './components/Header/Header.jsx'
import Main from "./components/Main/Main.jsx"
import { useState } from 'react'
import { cardList } from './data.js'


function App() {
  const [cards, setCards] = useState(cardList);
  return (
    <div className="wrapper">
      <PopExit/>
      <PopNewCard/>
      <PopBrowse/>
      <Header setCards={setCards} cards={cards}/>
      <Main cards={cards}/>
    </div>
  )
}

export default App
