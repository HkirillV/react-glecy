import Button from "../Button/Button.jsx";
import {useState} from "react";

const Auth = ({isActive}) => {
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <div className={isActive ? "auth-form-wrapper" : 'visible-hidden'}>
            <h3 className="auth-form-wrapper__title">Личный Кабинет</h3>
            <form className="auth-form" action="">
                <input className="auth-form__email" type="email" placeholder="email@example.com"/>
                <input className="auth-form__password" type="password" placeholder="******"/>
                <div className="auth-form__footer">
                    <Button isActive={isActive} type="button" categoryBtn="auth-btn">Войти</Button>
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