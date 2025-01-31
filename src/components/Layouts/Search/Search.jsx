import classNames from "classnames";
import {useRef, useState} from "react";
import useOutsideClick from "@/hooks/useOutsideClick/useOutsideClick";
import {FiSearch} from "react-icons/fi";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";

import "./Search.scss"

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const onSearchClick = () => {
    setIsOpen(prevState => !prevState);
  }

  const closeSearch = () => {
    setIsOpen(false)
  }

  useOutsideClick(searchRef, closeSearch, isOpen)

  return (
    <div className="search" ref={searchRef}>
      <Button className={classNames("search__toggle-visibility-button button", {"is-active": isOpen})}
              onClick={onSearchClick}><FiSearch/></Button>
      {isOpen && (
        <form className="search__form">
          <label className="search__form-label">
            <Input className="search__input" type="search" disabled={!isOpen} placeholder="Поиск по сайту"/>
          </label>
        </form>
      )}
    </div>
  )
}

export default Search