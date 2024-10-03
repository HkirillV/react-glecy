import Button from "@/components/UI/Button"
import Input from "@/components/UI/Input";

import "./Delivery.scss"

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery__description">
        <h3 className="delivery__title">Доставка любимого мороженого на дом</h3>
        <p className="delivery__text">Хочется полакомиться любимым десертом, но нет времени съездить в магазин? Закажите
          доставку мороженого на дом, и курьер привезёт вам ваш заказ в течение часа!</p>
      </div>
      <form className="delivery__form">
        <p className="delivery__form-description">Укажите адрес и дату доставки, и мы свяжемся с вами, чтобы подтвердить
          заказ.</p>
        <div className="delivery__form-container">
          <label className="delivery__form-label">
            Дата
            <Input className="delivery__form-input" type="date" placeholder="01.04.2020"/>
          </label>
          <label className="delivery__form-label">
            Телефон
            <Input className="delivery__form-input" type="tel" placeholder="+7 800 999-00-00"/>
          </label>
        </div>
        <label className="delivery__form-label">
          Адрес
          <Input className="delivery__form-input" type="text"
                 placeholder="ул. Большая Конюшенная, 19/8"/>
        </label>
        <Button className="delivery__button">Отправить</Button>
      </form>
    </div>

  )
}

export default Delivery