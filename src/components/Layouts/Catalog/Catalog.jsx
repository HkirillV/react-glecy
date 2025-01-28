import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import ProductCard from "@/components/UI/ProductCard";
import catalogAPI from "@/api/catalogAPI.js";
import addWithIdElement from "@/utils/addWithIdElement.js";
import {setCatalog} from "@/slices/catalogSlice.js";

import './Catalog.scss'

const Catalog = (props) => {
  const {
    currentProductCard
  } = props

  const catalog = useSelector((state) => state.catalog);
  const filter = useSelector(state => state.filter)
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
    </div>
  )
}

export default Catalog;