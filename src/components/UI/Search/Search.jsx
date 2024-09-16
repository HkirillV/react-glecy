import classNames from "classnames";

import './Search.scss'

const Search = ({isActive}) => {

    return (
        <form className={classNames('search', {'is-active': isActive})}>
            <input className="search__input" type="search" disabled={!isActive} placeholder="Поиск по сайту"/>
        </form>
    )
}

export default Search