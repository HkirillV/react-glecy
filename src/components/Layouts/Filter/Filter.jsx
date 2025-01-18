import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setFilter} from "@/slices/filterSlice";
import catalogAPI from "@/api/catalogAPI";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import Slider from "react-slider";

import "./Filter.scss"

const MIN_PRICE_SLIDE = 100
const MAX_PRICE_SLIDE = 500

const Filter = () => {
  const [filters, setFilters] = useState({
    sorts: [],
    fats: [],
    fillers: []
  });

  const [categorySort, setCategorySort] = useState("popularity")
  const [fat, setFat] = useState([]);
  const [fillers, setFillers] = useState([]);
  const [price, setPrice] = useState([MIN_PRICE_SLIDE, MAX_PRICE_SLIDE]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fatsData, fillersData, sortsData] = await Promise.all([
          catalogAPI.getFilterFat(),
          catalogAPI.getFilterFillers(),
          catalogAPI.getFilterSorts(),
        ])
        setFilters({
          sorts: sortsData,
          fats: fatsData,
          fillers: fillersData
        })
      } catch (err) {
        console.log("Error receiving data", err.message)
      }
    }
    fetchData();
  }, [])

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      categorySort,
      price,
      fat,
      fillers
    }

    dispatch(setFilter(formData));
  }

  const onCheckboxChange = (e) => {
    const value = e.target.value
    setFillers((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((filter => filter !== value))
      } else {
        return [...prevSelected, value]
      }
    })
  }

  const onCheckingSelectedField = (e) => {
    if(e.target.value === "цене") {
      setCategorySort("price")
    }

    if(e.target.value === "по популярности") {
      setCategorySort("popularity")
    }
  }

  return (
    <div className="filter">
      <form onSubmit={onFormSubmit} className="filter__form">
        <div className="filter__wrapper">
          <div className="filter__inner">
            <p className="filter__title">Сортировка:</p>
            <label className="filter__label">
              <select className="filter__select" onChange={onCheckingSelectedField}>
                {filters.sorts.length > 0 && (
                  filters.sorts.map(({id, categorySort}) => (
                    <option
                      className="filter__option"
                      key={id}>
                      {categorySort}
                    </option>
                  ))
                )}
              </select>
            </label>
          </div>
          <div className="filter__inner filter__inner_responsive-box">
            <span className="filter__title">Цена: {price[0]} ₽ - {price[1]} ₽</span>
            <div className="filter-price">
              <Slider
                className="filter-price__slider"
                onChange={setPrice}
                value={price}
                min={MIN_PRICE_SLIDE}
                max={MAX_PRICE_SLIDE}/>
            </div>
          </div>
          <div className="filter__inner">
            <p className="filter__title">Жирность:</p>
            <ul className="filter__list">
              {filters.fats.length > 0 && (
                filters.fats.map(({id, name, value}) => (
                  <li className="filter__item" key={id}>
                    <label className="filter__label">
                      <Input
                        className="filter__input"
                        type="radio"
                        name="filterFat"
                        value={value}
                        onChange={(e) => {
                          setFat(e.target.value)
                        }}
                      />
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
              {filters.fillers.length > 0 && (
                filters.fillers.map(({id, name}) => (
                  <li className="filter__item" key={id}>
                    <label className="filter__label">
                      <Input
                        className="filter__input filter-fillers__input"
                        type="checkbox"
                        value={name}
                        onChange={onCheckboxChange}
                      />
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