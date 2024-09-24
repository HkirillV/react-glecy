import './BurgerMenu.scss'
import classNames from "classnames";
import {Link} from "react-router-dom";
import Button from "@/components/UI/Button/index.js";
import {FiLogIn, FiSearch} from "react-icons/fi";
import Search from "@/components/UI/Search/index.js";
import Auth from "@/components/Layouts/Auth/index.js";
import {SlBasket} from "react-icons/sl";
import Basket from "@/components/Layouts/Basket/index.js";
import {useState} from "react";

const BurgerMenu = (props) => {
  const {
    onClick,
    isOpen
  } = props

  return (
    <dialog className="burger-menu mobile-overlay" open={isOpen}>
      <form>
        <Button className="mobile-overlay__close-button cross-button" type="submit" onClick={onClick}>
          <span className="visually-hidden">Close navigation menu</span>
        </Button>
      </form>
      <div className="mobile-overlay__body">
        <Link className="mobile-overlay__link" to="tel:+7 800 555-86-28">+7 800 555-86-28</Link>
        <Button><FiSearch/></Button>
        <Search/>
        <Button><FiLogIn/>Вход</Button>
        <Auth/>
        <Button><SlBasket/>2 Товара</Button>
        <Basket/>
      </div>
    </dialog>
  )
}

export default BurgerMenu;
