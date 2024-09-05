import './Promo.scss'

import Button from '@/components/UI/Button'

const Promo = () => {
  return (
    <div className="promo">
      <h3 className="promo__title">Заказывайте мороженое и получайте подарки!</h3>
      <div className="promo__items">
        <div className="promo__item">
          <div className="wrapper">
            <h4 className="promo__item-title">Малинка даром!</h4>
            <p className="promo__item-text">При покупке 2 кг любого фруктового мороженого добавим в ваш заказ банку
              малинового варенья бесплатно.</p>
            <Button className="promo__button button" children="Хочу подарок"/>
          </div>
          <img src="src/assets/icons/promo/malina.svg" width="219" height="268" loading="lazy" alt=""/>
        </div>
        <div className="promo__item">
          <div className="wrapper">
            <h4 className="promo__item-title">Маршмеллоу даром!</h4>
            <p className="promo__item-text">При покупке 2 кг пломбира добавим в ваш заказ упаковку нежных зефирок
              совершенно бесплатно.</p>
            <Button className="promo__button button" children="Хочу подарок"/>
          </div>
          <img src="src/assets/icons/promo/marshmallows.svg" width="219" height="268" loading="lazy" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Promo