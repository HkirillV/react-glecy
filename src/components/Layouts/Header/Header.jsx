import {useState} from "react";
import {Link} from "react-router-dom";

import Logo from '@/components/UI/Logo'
import Dropdown from "@/components/UI/Dropdown";
import Button from "@/components/UI/Button";
import Search from "@/components/UI/Search";
import Auth from "@/components/Layouts/Auth";
import Basket from "@/components/Layouts/Basket";

import './Header.scss'

const Header = () => {

  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="visually-hidden">Магазин мороженого Глейси</h1>
        <Logo className="header__logo logo"/>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <Dropdown>Каталог</Dropdown>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/public">Доставка и оплата</Link>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/public">О компании</Link>
            </li>
          </ul>
        </nav>
        <div className="header__main-menu hidden-mobile">
          <Link className="header__main-menu-phone" to="tel:+7 800 555-86-28">+7 800 555-86-28</Link>
          <Search/>
          <Auth/>
          <Basket/>
        </div>
        <Button className="header__burger-button burger-menu visible-mobile">
          <span className="visually-hidden">Open navigation menu</span>
        </Button>
      </div>
    </header>
  )
}

export default Header