import {useState} from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";
import {SlBasket} from "react-icons/sl";
import {FiLogIn, FiSearch} from "react-icons/fi";

import './Header.scss'

import Logo from '@/components/UI/Logo'
import Dropdown from "@/components/UI/Dropdown";
import Button from "@/components/UI/Button";
import Search from "@/components/UI/Search";
import Auth from "@/components/UI/Auth";
import Basket from "@/components/Layouts/Basket";
import BurgerMenu from "@/components/Layouts/BurgerMenu";

const Header = () => {
  const [contentType, setContentType] = useState(null);
  const [burgerActive, setBurgerActive] = useState(false);

  const handleClick = (typeBtn, event) => {
    const button = event.target.closest('button');
    if (!button.classList.contains('is-active-btn')) {
      return setContentType(typeBtn)
    }
    setContentType(null)
  }

  return (
    <header className="header">
      <h1 className="visually-hidden">Магазин мороженого Глейси</h1>
      <Logo className="header__logo logo"/>
      <nav className="header__menu">
        <ul className="header__menu-list">
          <Dropdown onClick={(event) => handleClick('dropdown-btn', event)}
                    isActive={contentType === 'dropdown-btn'}>Каталог</Dropdown>
          <li className="header__menu-item">
            <Link className="header__menu-link" to="/public">Доставка и оплата</Link>
          </li>
          <li className="header__menu-item">
            <Link className="header__menu-link" to="/public">О компании</Link>
          </li>
        </ul>
      </nav>
      <div className="header__overlay-menu hidden-mobile">
        <Link className="header__overlay-menu-phone" to="tel:+7 800 555-86-28">+7 800 555-86-28</Link>
        <Button className={'button'} onClick={(event) => handleClick('search', event)}
                isActive={contentType === 'search'} categoryBtn="button"><FiSearch/></Button>
        <Search isActive={contentType === 'search'}/>
        <Button className={'button'} onClick={(event) => handleClick('login', event)}
                isActive={contentType === 'login'}
                categoryBtn="button"><FiLogIn/>Вход</Button>
        <Auth isActive={contentType === 'login'}/>
        <Button className={'button'} onClick={(event) => handleClick('basket', event)}
                isActive={contentType === 'basket'} categoryBtn="button"><SlBasket/>2
          Товара</Button>
        <Basket isActive={contentType === 'basket'}/>
      </div>
      <div className={classNames('burger-menu-btn visible-mobile', {'is-active': burgerActive})}
           onClick={() => setBurgerActive(!burgerActive)}>
        <span/>
      </div>
      <BurgerMenu className="burger-menu visible-mobile" isActive={burgerActive} contentType={contentType} handleClick={handleClick}
                  setBurgerActive={setBurgerActive}/>
    </header>
  )
}

export default Header