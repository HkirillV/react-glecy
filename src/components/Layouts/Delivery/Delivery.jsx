import Button from "@/components/UI/Button"
import Field from "@/components/UI/Field";
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
          <Field
            className="delivery__form-input"
            type="date"
            name="date"
            placeholder="01.04.2020"
            children="Дата"/>
          <Field
            className="delivery__form-input"
            type="tel"
            name="iphone"
            placeholder="+7 800 999-00-00"
            children="Телефон"/>
        </div>
        <Field
          className="delivery__form-input"
          type="text" name="address"
          placeholder="ул. Большая Конюшенная, 19/8"
          children="Адрес"/>
        <Button className="delivery__button button">Отправить</Button>
      </form>
    </div>

  )
}

export default Delivery