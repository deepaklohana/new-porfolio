import React from 'react'
import { FocusCards } from './ui/Focus-Card'
import Card1 from '../assets/images/card1.jpg'
import Card2 from '../assets/images/card2.jpg'
import Card3 from '../assets/images/card3.png'


const cards = [
  { title: "Card 1", src: Card1 },
  { title: "Card 2", src: Card2 },
  { title: "Card 3", src: Card3 },
]
const Cards = () => {
  return (
    <div className="py-8">
      <FocusCards cards={cards} />
    </div>
  )
}

export default Cards
