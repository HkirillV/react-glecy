import Button from "@/components/UI/Button";
import Logo from '@/components/UI/Logo'
import Dropdown from "@/components/UI/Dropdown";
import Search from "@/components/Layouts/Search";
import Auth from "@/components/Layouts/Auth";
import Basket from "@/components/Layouts/Basket";

import './Header.scss'

const Header = (props) => {
  const {
    onBurgerButtonClick
  } = props

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
              <a className="header__menu-link" href="/public">Доставка и оплата</a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="/public">О компании</a>
            </li>
          </ul>
        </nav>
        <div className="header__main-menu hidden-mobile">
          <a className="header__main-menu-phone" href="tel:+7 800 555-86-28">+7 800 555-86-28</a>
          <Search/>
          <Auth/>
          <Basket/>
        </div>
        <Button className="button__burger-menu burger-button visible-mobile" onClick={onBurgerButtonClick}>
          <span className="visually-hidden">Open navigation menu</span>
        </Button>
      </div>
    </header>
  )
}

export default Header