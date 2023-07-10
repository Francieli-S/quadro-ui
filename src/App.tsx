import { useCallback, useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { AddCard } from './components/AddCard'

function App() {

  interface Card {
    title: string
  }

  const [cards, setCards] = useState<Card[]>([])

  const addCard = useCallback((title: string) => {
    setCards((prev) => [
      {
        title,
      },
      ...prev,
    ])
  }, [])

  return (
    <>
      <AddCard onAdd={addCard}/>
      {cards.map((card) => (
        <Card {...card} />
      ))}
      
    </>
  )
}

export default App
