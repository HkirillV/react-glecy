import {useState} from 'react'
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import classNames from "classnames";
import Button from "@/components/UI/Button/index";

import "./Pagination.scss"
import usePagination from "@/components/UI/Pagination/usePagination.jsx";

const Pagination = (props) => {
  const {
    maxNumberCards,
    catalog,
    paginate,
    onClickButtonLast,
    onClickButtonNext
  } = props

  const { activeBtn, setActiveBtn, pageNumbers } = usePagination({ catalog, maxNumberCards })

  const onClickPaginationButtonLast = () => {
    if (activeBtn > 1) {
      setActiveBtn(prevState => prevState - 1);
      onClickButtonLast();
    }
  }

  const onClickPaginationButtonNext = () => {
    if (activeBtn < pageNumbers.length) {
      setActiveBtn(prevState => prevState + 1);
      onClickButtonNext();
    }
  }

  return (
    <div className="pagination">
      <Button className="pagination__button" onClick={onClickPaginationButtonLast}><FiChevronLeft/></Button>
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
      <Button className="pagination__button" onClick={onClickPaginationButtonNext}><FiChevronRight/></Button>
    </div>
  )
}

export default Pagination