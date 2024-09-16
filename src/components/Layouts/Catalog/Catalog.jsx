import {useEffect, useState} from "react";
import ProductCard from '@/components/UI/ProductCard'
import catalogAPI from "@/api/catalogAPI.js";
import './Catalog.scss'

const Catalog = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    catalogAPI.getProducts()
      .then(data => setProducts(data))
  }, []);

  return (
    <div className="catalog">
      <h2 className="catalog__title">Попробуйте самые популярные вкусы нашего мороженого</h2>
      {products.length > 0 && (
        <ul className="catalog__list">
          {products.map(product => (
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