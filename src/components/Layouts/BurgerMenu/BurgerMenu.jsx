import './BurgerMenu.scss'
import classNames from "classnames";
import {Link} from "react-router-dom";
import Button from "@/components/UI/Button/index.js";
import {FiLogIn, FiSearch} from "react-icons/fi";
import Search from "@/components/UI/Search/index.js";
import Auth from "@/components/Layouts/Auth/index.js";
import {SlBasket} from "react-icons/sl";
import Basket from "@/components/Layouts/Basket/index.js";

const BurgerMenu = (props) => {
  const {
    className
  } = props

  return (
    <dialog className={classNames(className, "burger-menu visible-mobile")} open>
      <form className="mobile-overlay__close-button-wrapper" method="dialog">
        <Button className="mobile-overlay__close-button cross-button" type="submit">
          <span className="visually-hidden">Close navigation menu</span>
        </Button>
      </form>
      <div className="mobile-overlay__body">
        <Link className="mobile-overlay__link" to="tel:+7 800 555-86-28">+7 800 555-86-28</Link>
        <Button className="button"><FiSearch/></Button>
        <Search/>
        <Button className="button"><FiLogIn/>Вход</Button>
        <Auth/>
        <Button className="button"><SlBasket/>2 Товара</Button>
        <Basket/>
      </div>
    </dialog>
  )
}

export default BurgerMenu;
