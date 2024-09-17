import classNames from "classnames";
import {FiSearch} from "react-icons/fi";
import Button from "@/components/UI/Button";
import './Search.scss'

const Search = (props) => {
  const {
    isActive,
  } = props

  return (
    <div className="search">
      <Button className="search__button"><FiSearch/></Button>
      <form className={classNames('search__form', {'is-active': isActive})}>
        <input className="search__input" type="search" disabled={!isActive} placeholder="Поиск по сайту"/>
      </form>
    </div>
  )
}

export default Search