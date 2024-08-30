import {useState} from "react";
import {Link} from "react-router-dom";
import {SlBasket} from "react-icons/sl";
import {FiLogIn, FiSearch} from "react-icons/fi";

import './Header.scss'

import Logo from '@/components/UI/Logo'
import Dropdown from "@/components/UI/Dropdown/index.js";
import Button from "@/components/UI/Button/index.js";
import Search from "@/components/UI/Search/index.js";
import Auth from "@/components/UI/Auth/index.js";
import Basket from "@/components/Layouts/Basket/index.js";


const Header = () => {
  const [contentType, setContentType] = useState(null);

  const handleClick = (typeBtn, event) => {
    const button = event.target.closest('button');
    if (!button.classList.contains('is-active')) {
      return setContentType(typeBtn)
    }
    setContentType(null)
  }

  return (
    <header className="header">
      <nav className="header__navigation">
        <Logo/>
        <ul className="header__navigation-list">
          <Dropdown onClick={(event) => handleClick('dropdown-btn', event)}
                    isActive={contentType === 'dropdown-btn'}>Каталог</Dropdown>
          <li className="header__navigation-item"><Link className="header__navigation-link" to="/public">Доставка и
            оплата</Link></li>
          <li className="header__navigation-item"><Link className="header__navigation-link" to="/public">О компании</Link>
          </li>
        </ul>
      </nav>
      <div className="header__actions">
        <Link className="header__actions-phone" to="tel:+7 800 555-86-28">+7 800 555-86-28</Link>
        <Button className={'button'} onClick={(event) => handleClick('search', event)}
                isActive={contentType === 'search'} categoryBtn="button"><FiSearch/></Button>
        <Search isActive={contentType === 'search'}/>
        <Button className={'button'} onClick={(event) => handleClick('login', event)} isActive={contentType === 'login'}
                categoryBtn="button"><FiLogIn/>Вход</Button>
        <Auth isActive={contentType === 'login'}/>
        <Button className={'button'} onClick={(event) => handleClick('basket', event)}
                isActive={contentType === 'basket'} categoryBtn="button"><SlBasket/>2
          Товара</Button>
        <Basket isActive={contentType === 'basket'}/>
      </div>
    </header>
  )
}

export default Header