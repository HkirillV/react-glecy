import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import catalogAPI from "@/api/catalogAPI";
import {setCatalog} from "@/slices/catalogSlice";
import addWithIdElement from "@/utils/addWithIdElement";
import ProductCard from "@/components/UI/ProductCard"
import Button from "@/components/UI/Button/Button";
import Pagination from "@/components/UI/Pagination";

import './Catalog.scss'

const Catalog = () => {
  const [maxNumberCards, setMaxNumberCards] = useState(8)
  const [currentPage, setCurrentPage] = useState(1);
  const filter = useSelector(state => state.filter)
  const catalog = useSelector((state) => state.catalog);
  const dispatch = useDispatch()

  useEffect(() => {
    catalogAPI.getProducts(filter)
      .then(data => {
        const products = addWithIdElement(data)
        dispatch(setCatalog(products));
      })
      .catch(error => {
        console.error("Error receiving cards:", error.message);
      });
  }, [filter]);

  const lastProductCardIndex = currentPage * maxNumberCards;
  const firstProductCardIndex = lastProductCardIndex - maxNumberCards;
  const currentProductCard = catalog.slice(firstProductCardIndex, lastProductCardIndex);

  const onButtonShowMoreClick = () => {
    setMaxNumberCards(prevState => prevState + 4)
  }

  const onClickPaginate = (pageNumber) => setCurrentPage(pageNumber)
  const onButtonClickNext = () => setCurrentPage(prevState => prevState + 1)
  const onButtonClickLast = () => setCurrentPage(prevState => prevState - 1)

  return (
    <div className="catalog">
      {catalog.length > 0 && (
        <ul className="catalog__list">
          {currentProductCard.map((product) => (
              <li className="catalog__item" key={product.id}>
                <ProductCard {...product} />
              </li>
            )
          )}
        </ul>
      )}
      <Button className="catalog__button button" onClick={onButtonShowMoreClick}>Показать еще</Button>
      <Pagination
        maxNumberCards={maxNumberCards}
        catalog={catalog.length}
        paginate={onClickPaginate}
        onButtonClickNext={onButtonClickNext}
        onButtonClickLast={onButtonClickLast}
      />
    </div>
  )
}

export default Catalog;