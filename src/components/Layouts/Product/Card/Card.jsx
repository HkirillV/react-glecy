import {useEffect, useState} from 'react'


import './Card.scss'

const URL = 'http://localhost:3000/cards'

const Card = () => {

  const [cards, setCards] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(URL)
        const data = await res.json()
        setCards(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, []);

  return (
    <div className="card">
      {cards && cards.map((item) => (
        <div className="card__item" key={item.id}>
          <p className="card__title">{item.title}</p>
          <p className="card__text">{item.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Card;