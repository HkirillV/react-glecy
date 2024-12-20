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
      <form onSubmit={onFormSubmit} className="form">
        <div className="form__wrapper">
          <label className="form__label filter-sort">
            <p className="form__title">Сортировка:</p>
            <select className="form__select">
              {categoriesSort.length > 0 && (
                categoriesSort.map((category) => (
                  <option
                    className="form__option"
                    key={uuidv4()}>
                    {category}
                  </option>
                ))
              )}
            </select>
          </label>
          <label className="form__label filter-price">
            <p className="form__title">Цена:</p>
            <div className="form__text">{values[0]} ₽ - {values[1]} ₽</div>
            <Slider
              className="form__slider"
              onChange={setValues}
              value={values}
              min={MIN_PRICE_SLIDE}
              max={MAX_PRICE_SLIDE}/>
          </label>
          <div className="filter-fat">
            <p className="form__title">Жирность:</p>
            <ul className="filter-fat__list">
              {filter.length > 0 && (
                filter.map(({name}) => (
                  <li className="filter-fat__item">
                    <label className="form__label filter-fat__label">
                      <Input
                        className="form__input filter-fat__input"
                        type="radio"
                        name="name"/>
                      <span className="filter-fat__input-custom"></span>
                      <p className="form__text">{name}</p>
                    </label>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="form__wrapper">
          <label className="form__label">
            <p className="form__title">Наполнители:</p>
            <ul className="form__list">
              {fillers.length > 0 && (
                fillers.map((name, index) => (
                  <li className="form__item">
                    <Input className="form__input" type="checkbox" value={filter}/>
                    {name}
                  </li>
                ))
              )}
            </ul>
          </label>
          <Button className="form__button" type="submit" children="Применить"/>
        </div>
      </form>
    </div>
  )
}

export default Filter;