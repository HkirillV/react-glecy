import {useState} from 'react'
import {FiSearch, FiLogIn} from "react-icons/fi";
import {SlBasket} from "react-icons/sl";

import Button from '../../../UI/Button/Button.jsx';
import Dropdown from "../../../UI/Dropdown/Dropdown.jsx";
import Search from "../../../UI/Search/Search.jsx";
import Auth from "../../../UI/Auth/Auth.jsx";
import Basket from "../../../UI/Basket/Basket.jsx";

const HeaderMenu = () => {
    const [contentType, setContentType] = useState(null);

    const handleClick = (typeBtn, event) => {
        const button = event.target.closest('button');
        if (!button.classList.contains('isActive')) {
            return setContentType(typeBtn)
        }
        setContentType(null)
    }

    return (
        <nav className="navigation">
            <div className="navigation-menu">
                <a className="navigation-menu__logo" href="/index.html"><img src="/src/assets/icons/header/logo.svg" width="137"
                                                                             height="56" loading="lazy" alt="/"/></a>
                <ul className="navigation-menu-list">
                    <Dropdown onClick={(event) => handleClick('catalog', event)} isActive={contentType === 'catalog'}>Каталог</Dropdown>
                    <li className="navigation-menu__link"><a href="/public">Доставка и оплата</a></li>
                    <li className="navigation-menu__link"><a href="/public">О компании</a></li>
                </ul>
            </div>
            <div className="navigation-burger-menu">
                <a className="navigation-burger-menu__phone" href="tel:+7 800 555-86-28">+7 800 555-86-28</a>
                <Button onClick={(event) => handleClick('search', event)}
                        isActive={contentType === 'search'} categoryBtn="button"><FiSearch/></Button>
                <Search isActive={contentType === 'search'}/>
                <Button onClick={(event) => handleClick('login', event)} isActive={contentType === 'login'} categoryBtn="button"><FiLogIn/>Вход</Button>
                <Auth isActive={contentType === 'login'}/>
                <Button onClick={(event) => handleClick('basket', event)}
                        isActive={contentType === 'basket'} categoryBtn="button"><SlBasket/>2
                    Товара</Button>
                <Basket isActive={contentType === 'basket'}/>
            </div>
        </nav>
    )
}

export default HeaderMenu