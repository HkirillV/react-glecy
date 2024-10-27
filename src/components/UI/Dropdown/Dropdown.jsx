import {useEffect, useState} from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import addWithIdElement from "@/utils/addWithIdElement";
import {addCrumbsSlice} from "@/slices/crumbsSlice";
import catalogAPI from "@/api/catalogAPI";
import {IoIosArrowDown} from "react-icons/io";
import Button from "@/components/UI/Button";

import "./DropDown.scss"

const Dropdown = () => {

  const [dropdown, setDropdown] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    catalogAPI.getDropDown()
      .then(data => {
        setDropdown(addWithIdElement(data));
      })
      .catch((error) => {
        console.log("Ошибка получения данных dropDown:", error);
      })
  }, [])

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  const onButtonCatalogClick = (e) => {
    const element = e.target.text
    dispatch(addCrumbsSlice({title: element}));
  }

  return (
    <div className="dropdown">
      <Button className={classNames('dropdown__button button', {"is-active": isOpen})} onClick={onClick}>
        Каталог
        <IoIosArrowDown className={classNames({"dropdown__icon": isOpen})}/>
      </Button>
      {isOpen && (
        <ul className="dropdown-menu">
          {dropdown.map(({title, href, id}) => (
            <li className="dropdown-menu__item" key={id}>
              <Link className="dropdown-menu__link" to={href} onClick={onButtonCatalogClick}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>

  )
}

export default Dropdown;