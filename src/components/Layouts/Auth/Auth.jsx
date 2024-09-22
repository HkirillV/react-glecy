import classNames from "classnames";
import {useState} from "react";
import {FiLogIn} from "react-icons/fi";
import Button from "@/components/UI/Button";

import './Auth.scss'

const Auth = (props) => {
  const {} = props

  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="auth">
      <Button className={classNames("auth__button button", {"is-active": isOpen})}
              onClick={onClick}><FiLogIn/>Вход</Button>
      {isOpen ? (
        <form className="auth-form">
          <h3 className="auth-form__title">Личный Кабинет</h3>
          <input className="auth-form__input-email" type="email" placeholder="email@example.com"/>
          <input className="auth-form__input-password" type="password" placeholder="******"/>
          <div className="auth-form__footer">
            <Button className="auth-form__button">Войти</Button>
            <div className="auth-form__footer-list">
              <a className="auth-form__footer-link" href="/public">Забыли пароль?</a>
              <a className="auth-form__footer-link" href="/public">Регистрация</a>
            </div>
          </div>
        </form>
      ) : null}
    </div>
  )
}

export default Auth;