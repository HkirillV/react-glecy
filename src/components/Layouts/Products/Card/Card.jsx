import {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid';

import './Card.scss'

const URL = 'http://localhost:3000/cards'

const Card = (props) => {
  const {
    className,
    children,
  } = props

  const [cards, setCards] = useState([])

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
  }, [URL]);

  return (
    <div className={className}>
      {cards.map((item) => (
        <div className={item} key={item.id}>

        </div>
      ))}
    </div>
  )
}

export default Card;