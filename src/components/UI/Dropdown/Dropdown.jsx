import {useState} from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";
import {IoIosArrowDown} from "react-icons/io";

import './DropDown.scss'

import Button from '@/components/UI/Button';

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
      <Button className={classNames('dropdown__btn', {"is-active": isOpen})} onClick={onClick}>{children}
        <IoIosArrowDown className={classNames({"dropdown__icon": isOpen})}/>
      </Button>
      {isOpen ? (
        <ul className="dropdown-menu">
          <li className="dropdown-menu__item"><Link className="dropdown-menu__link" to="/">Новинки</Link></li>
          <li className="dropdown-menu__item"><Link className="dropdown-menu__link" to="/">Сливочное</Link></li>
          <li className="dropdown-menu__item"><Link className="dropdown-menu__link" to="/">Щербеты</Link></li>
          <li className="dropdown-menu__item"><Link className="dropdown-menu__link" to="/">Фруктовый лед</Link></li>
          <li className="dropdown-menu__item"><Link className="dropdown-menu__link" to="/">Мелорин</Link></li>
        </ul>
      ) : []}
    </div>

  )
}

export default Dropdown;