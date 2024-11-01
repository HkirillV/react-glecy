import Button from "@/components/UI/Button";

import "./Filter.scss"
import Input from "@/components/UI/Input/index.js";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__sort">
        <div className="filter__sort-category">
          <label className="filter__sort-label">
            Сортировка:
            <select name="">
              <option value="">по популярности</option>
            </select>
          </label>
        </div>
        <div className="filter__sort-price">
          <label className="filter__sort-label">
            Цена: 100 ₽ – 500 ₽
            <Input type="range" name="price" min="100" max="500"/>
          </label>
        </div>
        <div className="filter__sort-fatness">
          <label className="filter__sort-label">
            Жирность:
          </label>
        </div>
      </div>
      <div className="filter__sort">
        <div className="filter__sort-fillers">
          <label className="filter__sort-label">
            Наполнители:
          </label>
        </div>
        <Button>Применить</Button>
      </div>
    </div>
  )
}

export default Filter;