import classNames from "classnames";
import {useState} from "react";
import {FiSearch} from "react-icons/fi";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";

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
      <Button className={classNames("search__toggle-visibility-button button", {"is-active": isOpen})} onClick={onClick}><FiSearch/></Button>
      {isOpen && (
        <form className="search__form">
          <Input className="search__input" type="search" disabled={!isOpen} placeholder="Поиск по сайту"/>
        </form>
      )}
    </div>
  )
}

export default Search