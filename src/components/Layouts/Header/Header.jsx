import {useState} from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";

import './Header.scss'

import Logo from '@/components/UI/Logo'
import Dropdown from "@/components/UI/Dropdown";
import Button from "@/components/UI/Button";
import Search from "@/components/UI/Search";
import Auth from "@/components/Layouts/Auth";
import Basket from "@/components/Layouts/Basket";
import BurgerMenu from "@/components/Layouts/BurgerMenu";

const Header = () => {
  const [contentType, setContentType] = useState(null);
  const [burgerActive, setBurgerActive] = useState(false);


  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="visually-hidden">Магазин мороженого Глейси</h1>
        <Logo className="header__logo logo"/>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <Dropdown className="dropdown" onClick={(event) => handleClick('dropdown-btn', event)}
                        isActive={contentType === 'dropdown-btn'}>Каталог</Dropdown>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/public">Доставка и оплата</Link>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/public">О компании</Link>
            </li>
          </ul>
        </nav>
        <div className="header__overlay-menu hidden-mobile">
          <Link to="tel:+7 800 555-86-28">+7 800 555-86-28</Link>
          <Search/>
          <Auth/>
          <Basket/>
        </div>
        <div className={classNames('burger-menu-btn visible-mobile', {'is-active': burgerActive})}
             onClick={() => setBurgerActive(!burgerActive)}>
          <span/>
        </div>
        <Button className="header__burger-button burger-menu visible-mobile" type="button">
          <span className="visually-hidden">Open navigation menu</span>
        </Button>
      </div>
    </header>
  )
}

export default Header