import classNames from "classnames";
import Button from "@/components/UI/Button/index.js";
import {FiLogIn} from "react-icons/fi";
import './Auth.scss'

const Auth = (props) => {
  const {
    isActive
  } = props

  return (
    <div className={classNames('auth', {'is-active': isActive})}>
      <Button className="auth__button"><FiLogIn/>Вход</Button>
      <form className="auth-form" action="">
        <h3 className="auth-form__title">Личный Кабинет</h3>
        <input className="auth-form__email" type="email" placeholder="email@example.com"/>
        <input className="auth-form__password" type="password" placeholder="******"/>
        <div className="auth-form__footer">
          <Button className={'auth-btn'} isActive={isActive} type="button">Войти</Button>
          <div className="auth-form__footer-list">
            <a className="auth-form__footer-link" href="/public">Забыли пароль?</a>
            <a className="auth-form__footer-link" href="/public">Регистрация</a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Auth;