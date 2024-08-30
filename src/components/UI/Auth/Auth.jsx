import {useState} from "react";
import classNames from "classnames";

import './Auth.scss'

import Button from "@/components/UI/Button";

const Auth = ({isActive}) => {
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <div className={classNames('auth', {'is-active': isActive})}>
            <h3 className="auth__title">Личный Кабинет</h3>
            <form className="auth-form" action="">
                <input className="auth-form__email" type="email" placeholder="email@example.com"/>
                <input className="auth-form__password" type="password" placeholder="******"/>
                <div className="auth-form__footer">
                    <Button className={'auth-btn'} isActive={isActive} type="button">Войти</Button>
                    <div className="auth-form__footer-list">
                        <a className="auth-form__footer-link" href="/">Забыли пароль?</a>
                        <a className="auth-form__footer-link" href="/">Регистрация</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Auth;