import classNames from "classnames";
import {useState} from "react";
import {FiSearch} from "react-icons/fi";
import Button from "@/components/UI/Button/index.js";
import Input from "@/components/UI/Input/index.js";

import './Search.scss'

const Search = (props) => {
  const {

  } = props

  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="search">
      <Button className={classNames("search__button button", {"is-active": isOpen})} onClick={onClick}><FiSearch/></Button>
      {isOpen ? (
        <form className="search__form">
          <Input className="search__input" type="search" disabled={!isOpen} placeholder="Поиск по сайту"/>
        </form>
      ) : null}
    </div>
  )
}

export default Search