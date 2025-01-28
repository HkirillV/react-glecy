import { useState} from "react";
import { useSelector} from "react-redux";
import Button from "@/components/UI/Button/index";
import Pagination from "@/components/UI/Pagination/index";
import Filter from "@/components/Layouts/Filter"
import Catalog from "@/components/Layouts/Catalog"
import Crumbs from "@/components/Layouts/Crumbs";

import "./CatalogPage.scss"

const CatalogPage = () => {
  const [maxNumberCards, setMaxNumberCards] = useState(8)
  const [currentPage, setCurrentPage] = useState(1);
  const catalog = useSelector((state) => state.catalog);

  const lastProductCardIndex = currentPage * maxNumberCards;
  const firstProductCardIndex = lastProductCardIndex - maxNumberCards;
  const currentProductCard = catalog.slice(firstProductCardIndex, lastProductCardIndex);

  const onButtonShowMoreClick = () => {
    setMaxNumberCards(prevState => prevState + 4)
  }

  const onClickPaginate = (pageNumber) => setCurrentPage(pageNumber)
  const onClickButtonNext = () => setCurrentPage(prevState => prevState + 1)
  const onClickButtonLast = () => setCurrentPage(prevState => prevState - 1)

  return (
    <div className="catalog-page">
      <Crumbs/>
      <Filter/>
      <Catalog currentProductCard={currentProductCard}/>
      <div className="catalog-page__wrapper-button">
        <Button className="catalog-page__button button" onClick={onButtonShowMoreClick}>Показать еще</Button>
      </div>
      <Pagination
        maxNumberCards={maxNumberCards}
        catalog={catalog.length}
        paginate={onClickPaginate}
        onClickButtonNext={onClickButtonNext}
        onClickButtonLast={onClickButtonLast}
      />
    </div>
  )
}

export default CatalogPage;