import classNames from "classnames";

import './Search.scss'

const Search = ({isActive}) => {

    return (
        <div className={classNames('search', {'is-active': isActive})}>
            <input className="search__input" type="text" disabled={!isActive} placeholder="Поиск по сайту"/>
        </div>
    )
}

export default Search