import {useState} from 'react'
import {IoIosArrowDown} from "react-icons/io";

import Button from '../Button/Button.jsx';

const Dropdown = (props) => {
    const {children, onClick, isActive} = props

    return (
        <div className="container">
            <Button onClick={onClick} isActive={isActive} categoryBtn="catalog-btn">{children}<IoIosArrowDown
                className={isActive ? 'dropdown__icon dropdown__icon-selected' : 'dropdown__icon'}/></Button>
            {isActive ? (<div className="dropdown">
                <ul className="dropdown-list">
                    <li className="dropdown-list__link"><a href="/"><strong>Новинки</strong></a></li>
                    <hr className="dropdown-list__border"/>
                    <li className="dropdown-list__link"><a href="/">Сливочное</a></li>
                    <li className="dropdown-list__link"><a href="/">Щербеты</a></li>
                    <li className="dropdown-list__link"><a href="/">Фруктовый лед</a></li>
                    <li className="dropdown-list__link"><a href="/">Мелорин</a></li>
                </ul>
            </div>) : null}
        </div>
    )
}

export default Dropdown;