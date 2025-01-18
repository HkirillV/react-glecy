import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import useOutsideClick from "@/hooks/useOutsideClick";
import addWithIdElement from "@/utils/addWithIdElement";
import {addCrumbsSlice} from "@/slices/crumbsSlice";
import catalogAPI from "@/api/catalogAPI";
import {IoIosArrowDown} from "react-icons/io";
import Button from "@/components/UI/Button";

import "./DropDown.scss"

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState([]);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    catalogAPI.getDropDown()
      .then(data => {
        setDropdown(addWithIdElement(data));
      })
      .catch((error) => {
        console.log("Error receiving dropDown:", error.message);
      })
  }, [])

  const onButtonDropdownClick = () => {
    setIsOpen(prevState => !prevState);
  }

  const closeDropdown = () => {
    setIsOpen(false);
  }

  useOutsideClick(dropdownRef, closeDropdown, isOpen)

  const onMenuLinkClick = (e) => {
    const title = e.target.text
    dispatch(addCrumbsSlice({title}));
  }

  return (
    <div className="dropdown" ref={dropdownRef}>
      <Button
        className={classNames('dropdown__button button', {"is-active": isOpen})}
        onClick={onButtonDropdownClick}>
        Каталог
        <IoIosArrowDown className={classNames({"dropdown__icon": isOpen})}/>
      </Button>
      {isOpen && (
        <ul className="dropdown-menu">
          {dropdown.map(({title, href, id}) => (
            <li className="dropdown-menu__item" key={id}>
              <Link className="dropdown-menu__link" to={href} onClick={onMenuLinkClick}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>

  )
}

export default Dropdown;