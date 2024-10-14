import Button from '@/components/UI/Button'

import './Promo.scss'

const Promo = () => {
  return (
    <div className="promo">
      <h2 className="promo__title">Заказывайте мороженое и получайте подарки!</h2>
      <ul className="promo__list">
        <li className="promo__item">
          <div className="promo__wrapper">
            <h3 className="promo__subtitle">Малинка даром!</h3>
            <p className="promo__description">При покупке 2 кг любого фруктового мороженого добавим в ваш заказ банку
              малинового варенья бесплатно.</p>
            <Button className="promo__button">Хочу подарок</Button>
          </div>
          <img className="promo__icon"
               src="src/assets/icons/promo/malina.svg"
               width="219"
               height="268"
               loading="lazy"
               alt=""/>
        </li>
        <li className="promo__item">
          <div className="promo__wrapper">
            <h4 className="promo__subtitle">Маршмеллоу даром!</h4>
            <p className="promo__description">При покупке 2 кг пломбира добавим в ваш заказ упаковку нежных зефирок
              совершенно бесплатно.</p>
            <Button className="promo__button">Хочу подарок</Button>
          </div>
          <img className="promo__icon"
               src="src/assets/icons/promo/marshmallows.svg"
               width="219"
               height="268"
               loading="lazy"
               alt=""/>
        </li>
      </ul>
    </div>
  )
}

export default Promo