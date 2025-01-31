import {useEffect, useState} from "react";
import catalogAPI from "@/api/catalogAPI";
import Button from '@/components/UI/Button'

import './Promo.scss'

const Promo = () => {
  const [promo, setPromo] = useState([]);

  useEffect(() => {
    catalogAPI.getPromo()
      .then(data => {
        setPromo(data)
      })
      .catch(error => {
        console.error("Error receiving promo:", error.message);
      })
  }, [])

  return (
    <div className="promo">
      <h2 className="promo__title">Заказывайте мороженое и получайте подарки!</h2>
      <ul className="promo__list">
        {promo.map(({title, description, iconName, id}) => (
          <li className="promo__item" key={id}>
            <div className="promo__wrapper">
              <h4 className="promo__subtitle">{title}</h4>
              <p className="promo__description">{description}</p>
              <Button className="promo__button button">Хочу подарок</Button>
            </div>
            <img className="promo__icon"
                 src={`src/assets/icons/promo/${iconName}.svg`}
                 width="219"
                 height="268"
                 loading="lazy"
                 alt=""/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Promo