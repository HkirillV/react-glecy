import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCatalog} from "@/slices/catalogSlice";
import {MAX_NUMBER_CATALOG_CARDS} from "@/utils/constants";
import catalogAPI from "@/api/catalogAPI";
import getProductsCardWithID from "@/utils/getProductsCardWithID";
import ProductCard from "@/components/UI/ProductCard"

import './Catalog.scss'

const Catalog = (props) => {
  const {
    title,
  } = props

  const catalog = useSelector((state) => state.catalog);
  const dispatch = useDispatch()

  useEffect(() => {
    catalogAPI.getProducts()
      .then(data => {
        const products = getProductsCardWithID(data)
        dispatch(setCatalog(products));
      })
      .catch(error => {
        console.error("Ошибка при получении продуктов:", error);
      });
  }, []);


  return (
    <div className="catalog">
      <h2 className="catalog__title">{title}</h2>
      {catalog.length > 0 && (
        <ul className="catalog__list">
          {catalog.slice(0, MAX_NUMBER_CATALOG_CARDS).map((product) => (
              <li className="catalog__item" key={product.id}>
                <ProductCard {...product} />
              </li>
            )
          )}
        </ul>
      )}
    </div>
  )
}

export default Catalog;