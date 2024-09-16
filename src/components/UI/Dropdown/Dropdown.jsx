import classNames from "classnames";
import {IoIosArrowDown} from "react-icons/io";

import './DropDown.scss'

import Button from '@/components/UI/Button';

const Dropdown = (props) => {
  const {
    className,
    children,
    onClick,
    isActive
  } = props

  return (
    <div className={classNames(className)}>
      <Button className={'dropdown-btn'} onClick={onClick} isActive={isActive}>{children}
        <IoIosArrowDown className={classNames('dropdown__icon', {'dropdown__icon dropdown__icon-selected': isActive})}/>
      </Button>
      {isActive ? (
        <ul className="dropdown-menu">
          <li className="dropdown-menu__item"><a className="dropdown-menu__link" href="/">Новинки</a></li>
          <li className="dropdown-menu__item"><a className="dropdown-menu__link" href="/">Сливочное</a></li>
          <li className="dropdown-menu__item"><a className="dropdown-menu__link" href="/">Щербеты</a></li>
          <li className="dropdown-menu__item"><a className="dropdown-menu__link" href="/">Фруктовый лед</a></li>
          <li className="dropdown-menu__item"><a className="dropdown-menu__link" href="/">Мелорин</a></li>
        </ul>
      ) : null}
    </div>

  )
}

export default Dropdown;