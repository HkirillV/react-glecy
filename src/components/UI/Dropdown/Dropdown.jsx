import {useState} from "react";
import classNames from "classnames";
import {IoIosArrowDown} from "react-icons/io";
import Button from '@/components/UI/Button';

import './DropDown.scss'

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
          <li className="dropdown-menu__item"><a className="dropdown-menu__link" href="/index.html">Новинки</a></li>
          <li className="dropdown-menu__item"><a className="dropdown-menu__link" href="/index.html">Сливочное</a></li>
          <li className="dropdown-menu__item"><a className="dropdown-menu__link" href="/index.html">Щербеты</a></li>
          <li className="dropdown-menu__item"><a className="dropdown-menu__link" href="/index.html">Фруктовый лед</a></li>
          <li className="dropdown-menu__item"><a className="dropdown-menu__link" href="/index.html">Мелорин</a></li>
        </ul>
      ) : []}
    </div>

  )
}

export default Dropdown;