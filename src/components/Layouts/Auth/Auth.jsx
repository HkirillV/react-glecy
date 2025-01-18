import classNames from "classnames";
import {useRef, useState} from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import {FiLogIn} from "react-icons/fi";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";

import "./Auth.scss"

const Auth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authRef = useRef(null);

  const onAuthClick = () => {
    setIsOpen(prevState => !prevState);
  }

  const closeAuth = () => {
    setIsOpen(false);
  }

  useOutsideClick(authRef, closeAuth, isOpen);

  return (
    <div className="auth" ref={authRef}>
      <Button className={classNames("auth__button button", {"is-active": isOpen})}
              onClick={onAuthClick}><FiLogIn/>Вход</Button>
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