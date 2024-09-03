import './BurgerMenu.scss'
import classNames from "classnames";
import {Link} from "react-router-dom";
import Button from "@/components/UI/Button/index.js";
import {FiLogIn, FiSearch} from "react-icons/fi";
import Search from "@/components/UI/Search/index.js";
import Auth from "@/components/UI/Auth/index.js";
import {SlBasket} from "react-icons/sl";
import Basket from "@/components/Layouts/Basket/index.js";

const BurgerMenu = (props) => {
  const {
    isActive,
    contentType,
    handleClick,
    setBurgerActive,
  } = props
  return (
    <div className={classNames('burger-menu', {'is-active': isActive})} onClick={() => setBurgerActive(false)}>
      <div className="blur"/>
      <div className="burger-menu__content" onClick={(e) => e.stopPropagation()}>
        <Link className="header__overlay-menu-phone" to="tel:+7 800 555-86-28">+7 800 555-86-28</Link>
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
    </div>
  )
}

export default BurgerMenu;
