import {useState} from "react";
import classNames from "classnames";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";

import "./Feedback.scss"

const Feedback = () => {

  const [feedbackForm, setFeedbackForm] = useState(false);

  const onClick = () => {
    setFeedbackForm(!feedbackForm);
  }

  return (
    <div className="feedback">
      <div className="feedback__inner">
        <address className="feedback__address">
          <p className="feedback__address-text">Адрес главного офиса и офлайн-магазина:</p>
          <a className="feedback__address-link"
             target="_blank"
             href="https://yandex.ru/maps/47/nizhny-novgorod/?ll=44.006520%2C56.326799&z=11">
            наб. реки Карповки, <br/>
            5 лит П, Санкт-Петербург
          </a>
        </address>
        <div className="feedback__contacts">
          <p className="feedback__contacts-text">Для заказов по телефону:</p>
          <a className="feedback__contacts-phone" href="tel:+7 (812) 812-12-12">+7 (812) 812-12-12</a>
          <p className="feedback__contacts-hours">(с 10 до 20 ежедневно)</p>
        </div>
        <Button className="feedback__button" onClick={onClick}>Форма обратной связи</Button>
      </div>
      <div className={classNames(feedbackForm ? "overlay" : null)}></div>
      <dialog className="feedback__dialog" open={feedbackForm}>
        <Button className="feedback__dialog-button mobile-overlay__close-button cross-button" onClick={onClick}>
          <span className="visually-hidden">Close feedback form</span>
        </Button>
        <h4 className="feedback__dialog-title">Мы обязательно ответим вам!</h4>
        <form className="feedback__form">
          <label className="feedback__form-label">
            <Input className="feedback__form-input" name="name" placeholder="Имя и фамилия"/>
          </label>
          <label className="feedback__form-label">
            <Input className="feedback__form-input" type="email" placeholder="email@example.com"/>
          </label>
          <label className="feedback__form-label">
            <textarea className="feedback__form-input feedback__form-input_modifier" name="message" rows="10" cols="45"
                      placeholder="В свободной форме"></textarea>
          </label>
          <Button className="feedback__form-button" type="submit" onClick={onClick}>Отправить</Button>
        </form>
      </dialog>
    </div>
  )
}

export default Feedback
