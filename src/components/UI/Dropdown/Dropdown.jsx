import {useState} from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";
import {IoIosArrowDown} from "react-icons/io";
import Button from "@/components/UI/Button";

import "./DropDown.scss"

const Dropdown = (props) => {
  const {
    className,
    children,
  } = props

  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={classNames(className, "dropdown")}>
      <Button className={classNames('dropdown__button button', {"is-active": isOpen})} onClick={onClick}>{children}
        <IoIosArrowDown className={classNames({"dropdown__icon": isOpen})}/>
      </Button>
      {isOpen ? (
        <ul className="dropdown-menu">
          <li className="dropdown-menu__item">
            <Link className="dropdown-menu__link" to="catalog">Новинки</Link>
          </li>
          <li className="dropdown-menu__item">
            <Link className="dropdown-menu__link" to="catalog">Сливочное</Link>
          </li>
          <li className="dropdown-menu__item">
            <Link className="dropdown-menu__link" to="catalog">Щербеты</Link>
          </li>
          <li className="dropdown-menu__item">
            <Link className="dropdown-menu__link" to="catalog">Фруктовый лед</Link>
          </li>
          <li className="dropdown-menu__item">
            <Link className="dropdown-menu__link" to="catalog">Мелорин</Link>
          </li>
        </ul>
      ) : []}
    </div>

  )
}

export default Dropdown;