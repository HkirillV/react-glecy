import classNames from "classnames";
import {useState} from "react";
import {FiLogIn} from "react-icons/fi";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";

import "./Auth.scss"

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
          <h4 className="auth-form__title">Личный Кабинет</h4>
          <label className="auth-form__label">
            <Input className="auth-form__input-email" type="email" name="email" placeholder="email@example.com"/>
          </label>
          <label className="auth-form__label">
            <Input className="auth-form__input-password" type="password" name="password" placeholder="******"/>
          </label>
          <div className="auth-form__footer">
            <Button className="auth-form__footer-button button">Войти</Button>
            <ul className="auth-form__footer-list">
              <li className="auth-form__footer-item">
                <Button className="auth-form__footer-link" href="/">Забыли пароль?</Button>
              </li>
              <li className="auth-form__footer-item">
                <Button className="auth-form__footer-link" href="/">Регистрация</Button>
              </li>
            </ul>
          </div>
        </form>
      ) : null}
    </div>
  )
}

export default Auth;