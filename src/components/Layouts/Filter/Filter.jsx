import React, {useEffect, useState} from "react";
import catalogAPI from "@/api/catalogAPI";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import Slider from "react-slider";

import "./Filter.scss"

const MIN_PRICE_SLIDE = 100
const MAX_PRICE_SLIDE = 500

const fillers = ["шоколадные", "сахарные посыпки", "фрукты", "сиропы", "джемы"]
const categoriesSort = ["по популярности", "цене", "жирности"]

const Filter = () => {
  const [filter, setFilter] = useState([]);
  const [values, setValues] = useState([MIN_PRICE_SLIDE, MAX_PRICE_SLIDE]);

  useEffect(() => {
    catalogAPI.getFilterFat()
      .then(data => {
        setFilter(data);
      })
      .catch(err => console.log("Ошибка получения данных FilterFat", err.message));
  }, [])

  return (
    <div className="filters">
      <form className="form">
        <div className="form__inner">
          <div className="filter-sort">
            <p className="filter-sort__title">Сортировка:</p>
            <select className="filter-sort__select">
              {categoriesSort.length > 0 && (
                categoriesSort.map((category, index) => (
                  <option className="filter-sort__option" key={index}>
                    {category}
                  </option>
                ))
              )}
            </select>
          </div>
          <div className="filter-price">
            <div className="filter-price__parameters">
              <p className="filter-price__title">Цена:</p>
              <div className="filter-price__text">{values[0]} ₽ - {values[1]} ₽</div>
            </div>
            <div className="filter-price__slider-wrapper">
              <Slider
                className="filter-price__slider"
                onChange={setValues}
                value={values}
                min={MIN_PRICE_SLIDE}
                max={MAX_PRICE_SLIDE}/>
            </div>
          </div>
          <div className="filter-fat">
            <p className="filter-fat__title">Жирность:</p>
            <ul className="filter-fat__list">
              {filter.length > 0 && (
                filter.map(({name, type}, index) => (
                  <li className="filter-fat__item" key={index}>
                    <label className="filter-fat__label">
                      <Input className="filter-fat__input" type={type} name="fat"/>
                      <span className="filter-fat__input-custom"></span>
                      <p className="filter-fat__text">{name}</p>
                    </label>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="form__inner">
          <div className="filter-fillers">
            <p className="filter-fillers__title">Наполнители:</p>
            <ul className="filter-fillers__list">
              {fillers.length > 0 && (
                fillers.map((filler, index) => (
                  <li className="filter-fillers__item" key={index}>
                    <label className="filter-fillers__label">
                      <Input className="filter-fillers__input" type="checkbox" value={filter}/>
                      {filler}
                    </label>
                  </li>
                ))
              )}
            </ul>
          </div>
          <Button className="form__button button" type="submit">Применить</Button>
        </div>
      </form>
    </div>
  )
}

export default Filter;