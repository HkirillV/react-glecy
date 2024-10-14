import Button from "@/components/UI/Button";
import Search from "@/components/Layouts/Search";
import Auth from "@/components/Layouts/Auth";
import Basket from "@/components/Layouts/Basket";

import "./BurgerMenu.scss"

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
            <a href="tel:+7 800 555-86-28">+7 800 555-86-28</a>
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
