import Button from '@/components/UI/Button'
import {data} from '@/components/Layouts/Promo/data.js';
import './Promo.scss'

const Promo = () => {
  return (
    <div className="promo">
      <h2 className="promo__title">Заказывайте мороженое и получайте подарки!</h2>
      <ul className="promo__list">
        {data.map(({title, description, iconName}, index) => (
          <li className="promo__item" key={index}>
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