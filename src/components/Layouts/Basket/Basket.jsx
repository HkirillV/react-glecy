import {useState} from "react";
import {SlBasket} from "react-icons/sl";
import classNames from "classnames";
import Button from '@/components/UI/Button';

import './Basket.scss'
import ProductCard from "@/components/UI/ProductCard/ProductCard.jsx";

const Basket = () => {
  const [product, setProduct] = useState([1]);
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="basket">
      <Button className={classNames("basket__button button", {"is-active": isOpen})}
              onClick={onClick}><SlBasket/>{product.length > 0 ? `${product.length} товара` : "Нет товаров"}</Button>
      {isOpen ? (
        <div className="basket-preview">
          {product.length > 0 ? (
            <>
              <h3 className="basket-preview__title">Корзина</h3>
              <div className="product">
                <div className="product__item">
                  <img className="product__icon" src="/src/assets/icons/basket/malinka.svg" width="46"
                       height="46"
                       loading="lazy" alt=""/>
                  <div className="product__description">
                    <h4 className="product__title">Малинка</h4>
                    <p className="product__weight-price">1 кг х 310 ₽</p>
                  </div>
                  <div className="product__price-container">
                    <p className="product__price">310 ₽</p>
                    <button className="product__button">
                      <span></span>
                    </button>
                  </div>
                </div>
                <div className="product__item">
                  <img className="product__icon" src="/src/assets/icons/basket/bubble-gum.svg" width="46"
                       height="46"
                       loading="lazy" alt=""/>
                  <div className="product__description">
                    <h4 className="product__title">Бабл-гам</h4>
                    <p className="product__weight-price">1,5 кг х 320 ₽</p>
                  </div>
                  <div className="product__price-container">
                    <p className="product__price">480 ₽</p>
                    <button className="product__button">
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : <h3 className="basket__empty">Ваша корзина пока <br/> пуста</h3>}
        </div>
      ) : null}
    </div>
  )
}

export default Basket