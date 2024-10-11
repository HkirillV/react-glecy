import "./BurgerMenu.scss"
import {Link} from "react-router-dom";
import Button from "@/components/UI/Button/index.js";
import Search from "@/components/Layouts/Search/index.js";
import Auth from "@/components/Layouts/Auth/index.js";
import Basket from "@/components/Layouts/Basket/index.js";

const BurgerMenu = (props) => {
  const {
    onClick,
    isOpen
  } = props

  return (
    <dialog className="burger-menu mobile-overlay" open={isOpen}>
      <form className="mobile-overlay__close-button-wrapper">
        <Button className="mobile-overlay__close-button cross-button" type="submit" onClick={onClick}>
          <span className="visually-hidden">Close navigation menu</span>
        </Button>
      </form>
      <div className="mobile-overlay__body">
        <ul className="mobile-overlay__list">
          <li className="mobile-overlay__link">
            <Link to="tel:+7 800 555-86-28">+7 800 555-86-28</Link>
          </li>
          <li className="mobile-overlay__link">
            <Search/>
          </li>
          <li className="mobile-overlay__link">
            <Auth/>
          </li>
          <li className="mobile-overlay__link">
            <Basket/>
          </li>
        </ul>
      </div>
    </dialog>
  )
}

export default BurgerMenu;
