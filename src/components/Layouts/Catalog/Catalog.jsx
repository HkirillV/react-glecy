import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import catalogAPI from "@/api/catalogAPI";
import {setCatalog} from "@/slices/catalogSlice";
import addWithIdElement from "@/utils/addWithIdElement";
import ProductCard from "@/components/UI/ProductCard"

import './Catalog.scss'

const Catalog = (props) => {
  const {
    title,
    maxNumberCards
  } = props

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

  return (
    <div className="catalog">
      <h2 className="catalog__title">{title}</h2>
      {catalog.length > 0 && (
        <ul className="catalog__list">
          {catalog.slice(0, maxNumberCards).map((product) => (
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