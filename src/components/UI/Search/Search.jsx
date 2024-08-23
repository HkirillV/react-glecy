const Search = ({isActive}) => {

    return (
        <div className={isActive ? 'search' : 'visible-hidden'}>
            <input className="search__input" type="text" disabled={!isActive} placeholder="Поиск по сайту"/>
        </div>
    )
}

export default Search