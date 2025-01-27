import {useState} from 'react'
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import classNames from "classnames";
import Button from "@/components/UI/Button/index";


import "./Pagination.scss"

const Pagination = ({maxNumberCards, catalog, paginate, onButtonClickLast, onButtonClickNext}) => {
  const [activeBtn, setActiveBtn] = useState(1);
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(catalog / maxNumberCards); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      <Button className="pagination__button" onClick={() => {
        onButtonClickLast
        setActiveBtn((prevState) => prevState - 1)
      }}><FiChevronLeft/></Button>
      <ul className="pagination__list">
        {
          pageNumbers.map((number) => (
            <li className={classNames("pagination__item", {"pagination__active-btn": activeBtn === number})}
                key={number}
                onClick={() => {
                  paginate(number)
                  setActiveBtn(number)
                }}>
              {number}
            </li>
          ))
        }
      </ul>
      <Button className="pagination__button" onClick={() => {
        onButtonClickNext
        setActiveBtn((prevState) => prevState + 1)
      }}><FiChevronRight/></Button>
    </div>
  )
}

export default Pagination