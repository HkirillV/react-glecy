import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import catalogAPI from "@/api/catalogAPI";
import {setProduct} from "@/slices/productSlice.js";
import createProductCardWithID from "@/utils/createProductCardWithID";
import ProductCard from '@/components/UI/ProductCard'
import './Catalog.scss'

const Catalog = () => {

  const dispatch = useDispatch()
  const product = useSelector((state) => state.product);

  useEffect(() => {
    catalogAPI.getProducts()
      .then(data => dispatch(setProduct(createProductCardWithID(data))))
  }, []);

  return (
    <div className="catalog">
      <h3 className="catalog__title">Попробуйте самые популярные вкусы нашего мороженого</h3>
      {product.length > 0 && (
        <ul className="catalog__list">
          {product.map(product => (
            <li className="catalog__item" key={product.id}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Catalog;