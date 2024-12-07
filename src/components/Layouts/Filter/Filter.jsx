import {useEffect, useState} from "react";
import catalogAPI from "@/api/catalogAPI";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

import "./Filter.scss"

const fillers = ["шоколадные", "сахарные посыпки", "фрукты", "сиропы", "джемы"]

const Filter = () => {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    catalogAPI.getFilter()
      .then(data => {
        setFilter(data);
      })
      .catch(err => console.log("Ошибка получения данных Filter", err.message));
  }, [])

  return (
    <div className="filter">
      <form className="form">
        <div className="form__inner">
          <div className="form__filter">
            <label className="form__filter-label sort">
              <p className="form__subtitle">Сортировка:</p>
              <select className="form__filter-select" name="select-category">
                <option value="">по популярности</option>
                <option value="">по стоимости</option>
              </select>
            </label>
          </div>
          <div className="form__filter">
            <p className="form__subtitle">Цена: 100 ₽ – 500 ₽</p>
            <label className="form__filter-label form__filter-price">
              <Input className="form__filter-input" type="range" name="price" min="100" max="500" step="1"/>
            </label>
            <label className="form__filter-label form__filter-price">
              <Input className="form__filter-input" type="range" name="price" min="100" max="500" step="1"/>
            </label>
          </div>
          <div className="form__filter fat">
            <p className="form__subtitle">Жирность:</p>
            <div className="fat__inner">
              {filter.length > 0 && (
                filter.map(({name, type}, index) => (
                  <label key={index} className="fat__label">
                    <Input className="fat__input" type={type} name="fat"/>
                    <span className="fat__input-custom"></span>
                    <p className="fat__text">{name}</p>
                  </label>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="form__inner">
          <div className="form__filter fillers">
            <p className="form__subtitle">Наполнители:</p>
            <div className="fillers__inner">
              {fillers.length > 0 && (
                fillers.map((filler, index) => (
                  <label className="fillers__label" key={index}>
                    <Input className="filters__input" type="checkbox" value={filter}/>
                    {filler}
                  </label>
                ))
              )}
            </div>
          </div>
          <Button className="form__button button" type="submit">Применить</Button>
        </div>
      </form>
    </div>
  )
}

export default Filter;