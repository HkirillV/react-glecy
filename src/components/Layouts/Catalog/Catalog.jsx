import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCatalog} from "@/slices/catalogSlice.js";
import {MAX_NUMBER_CATALOG_CARDS} from "@/utils/constants.js";
import {setBasketToCache, getBasketToCache} from "@/utils/toCache";
import catalogAPI from "@/api/catalogAPI";
import createProductCardWithID from "@/utils/createProductCardWithID";
import ProductCard from '@/components/UI/ProductCard'
import './Catalog.scss'

const Catalog = () => {
  const catalog = useSelector((state) => state.catalog);
  const dispatch = useDispatch()

  useEffect(() => {
    catalogAPI.getProducts()
      .then(data => {
        setBasketToCache(createProductCardWithID(data));
      })
      .catch(error => {
        console.error('Ошибка при получении продуктов:', error);
      });
  }, []);


  return (
    <div className="catalog">
      <h3 className="catalog__title">Попробуйте самые популярные вкусы нашего мороженого</h3>
      {catalog.length > 0 && (
        <ul className="catalog__list">
          {catalog.map((product, index) => (
            index < MAX_NUMBER_CATALOG_CARDS && (
              <li className="catalog__item" key={product.id}>
                <ProductCard {...product} />
              </li>
            )
          ))}
        </ul>
      )}
    </div>
  )
}

export default Catalog;