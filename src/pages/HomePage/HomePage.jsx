import React, { useState } from 'react'
import { cardList } from '../../data';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

export default function HomePage() {
    const [cards, setCards] = useState(cardList);
  return (
    <>
      <Header setCards={setCards} cards={cards} />
        <Main cards={cards} />
    </>
  )
}
