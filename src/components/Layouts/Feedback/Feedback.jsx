import {useState} from "react";
import classNames from "classnames";
import Button from "@/components/UI/Button";
import Dialog from "@/components/Layouts/Dialog"

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
          <Button className="feedback__address-link" href="https://yandex.ru/maps/47/nizhny-novgorod/?ll=44.006520%2C56.326799&z=11">
            наб. реки Карповки, <br/>
            5 лит П, Санкт-Петербург
          </Button>
        </address>
        <div className="feedback__contacts">
          <p className="feedback__contacts-text">Для заказов по телефону:</p>
          <Button className="feedback__contacts-phone" href="tel:+7 (812) 812-12-12">+7 (812) 812-12-12</Button>
          <p className="feedback__contacts-hours">(с 10 до 20 ежедневно)</p>
        </div>
        <Button className="feedback__button button" onClick={onClick}>Форма обратной связи</Button>
      </div>
      <div className={classNames(feedbackForm && "overlay")}></div>
      <Dialog onClick={onClick} feedbackForm={feedbackForm}/>
    </div>
  )
}

export default Feedback
