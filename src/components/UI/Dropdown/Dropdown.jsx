import classNames from "classnames";
import {IoIosArrowDown} from "react-icons/io";

import './DropDown.scss'

import Button from '@/components/UI/Button';
import Container from "@/components/UI/Container";

const Dropdown = (props) => {
  const {
    children,
    onClick,
    isActive
  } = props

  return (
    <Container className="dropdown-container">
      <Button className={'dropdown-btn'} onClick={onClick} isActive={isActive}>{children}
        <IoIosArrowDown className={classNames('dropdown__icon', {'dropdown__icon dropdown__icon-selected': isActive})}/>
      </Button>
      {isActive ? (<div className="dropdown">
        <ul className="dropdown-list">
          <li className="dropdown-list__item"><a className="dropdown-list__link" href="/"><strong>Новинки</strong></a>
          </li>
          <hr className="dropdown-list__border"/>
          <li className="dropdown-list__item"><a className="dropdown-list__link" href="/">Сливочное</a></li>
          <li className="dropdown-list__item"><a className="dropdown-list__link" href="/">Щербеты</a></li>
          <li className="dropdown-list__item"><a className="dropdown-list__link" href="/">Фруктовый лед</a></li>
          <li className="dropdown-list__item"><a className="dropdown-list__link" href="/">Мелорин</a></li>
        </ul>
      </div>) : null}
    </Container>
  )
}

export default Dropdown;