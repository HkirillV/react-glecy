import {useState} from "react";
import Button from "@/components/UI/Button";
import Logo from "@/components/UI/Logo";
import Dropdown from "@/components/UI/Dropdown";
import Search from "@/components/Layouts/Search";
import Auth from "@/components/Layouts/Auth";
import Basket from "@/components/Layouts/Basket";
import BurgerMenu from "@/components/Layouts/BurgerMenu";

import "./Header.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onBurgerButtonClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="visually-hidden">Магазин мороженого Глейси</h1>
        <Logo className="header__logo logo"/>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <Dropdown/>
            </li>
            <li className="header__menu-item">
              <Button className="header__menu-link" href="/">Доставка и оплата</Button>
            </li>
            <li className="header__menu-item">
              <Button className="header__menu-link" href="/">О компании</Button>
            </li>
          </ul>
        </nav>
        <div className="header__main-menu hidden-mobile">
          <a className="header__main-menu-phone" href="tel:+7 800 555-86-28">+7 800 555-86-28</a>
          <Search/>
          <Auth/>
          <Basket/>
        </div>
        <Button className="button__burger-menu burger-button visible-mobile button" onClick={onBurgerButtonClick}>
          <span className="visually-hidden">Open navigation menu</span>
        </Button>
        <BurgerMenu isOpen={isOpen} onClick={onBurgerButtonClick}/>
      </div>
    </header>
  )
}

export default Header