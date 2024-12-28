import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid"
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
  const [formData, setFormData] = useState({});

  useEffect(() => {
    catalogAPI.getFilterFat()
      .then(data => {
        setFilter(data);
      })
      .catch(err => console.log("Ошибка получения данных FilterFat", err.message));
  }, [])

  const onFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="filter">
      <form onSubmit={onFormSubmit} className="filter__form">
        <div className="filter__wrapper">
          <div className="filter__inner">
            <p className="filter__title">Сортировка:</p>
            <label className="filter__label">
              <select className="filter__select">
                {categoriesSort.length > 0 && (
                  categoriesSort.map((category) => (
                    <option
                      className="filter__option"
                      key={uuidv4()}>
                      {category}
                    </option>
                  ))
                )}
              </select>
            </label>
          </div>
          <div className="filter__inner">
            <span className="filter__title">Цена: {values[0]} ₽ - {values[1]} ₽</span>
            <div className="filter-price">
              <Slider
                className="filter-price__slider"
                onChange={setValues}
                value={values}
                min={MIN_PRICE_SLIDE}
                max={MAX_PRICE_SLIDE}/>
            </div>
          </div>
          <div className="filter__inner">
            <p className="filter__title">Жирность:</p>
            <ul className="filter__list">
              {filter.length > 0 && (
                filter.map(({name}) => (
                  <li className="filter__item">
                    <label className="filter__label">
                      <Input
                        className="filter__input"
                        type="radio"
                        name="name"/>
                      <span className="filter__input-custom"></span>
                      <p className="filter__text">{name}</p>
                    </label>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="filter__wrapper">
          <div className="filter__inner">
            <p className="filter__title">Наполнители:</p>
            <ul className="filter__list">
              {fillers.length > 0 && (
                fillers.map((name, index) => (
                  <li className="filter__item">
                    <label className="filter__label">
                      <Input className="filter__input filter-fillers__input" type="checkbox" value={filter}/>
                      <span className="filter-fillers__input-custom"></span>
                      {name}
                    </label>
                  </li>
                ))
              )}
            </ul>
          </div>
          <Button className="filter__button" type="submit" children="Применить"/>
        </div>
      </form>
    </div>
  )
}

export default Filter;