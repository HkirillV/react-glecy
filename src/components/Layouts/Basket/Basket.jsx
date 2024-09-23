import {useState} from "react";
import {SlBasket} from "react-icons/sl";
import classNames from "classnames";
import Button from '@/components/UI/Button';

import './Basket.scss'

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
              <ul className="basket-preview__list">
                <li className="basket-preview__item">
                  <img className="basket-preview__icon" src="/src/assets/icons/basket/malinka.svg" width="46"
                       height="46"
                       loading="lazy" alt=""/>
                  <div className="basket-preview__description">
                    <h4 className="basket-preview__subtitle">Малинка</h4>
                    <p className="basket-preview__weight-price">1 кг х 310 ₽</p>
                  </div>
                  <div className="basket-preview__price-container">
                    <p className="basket-preview__price">310 ₽</p>
                    <button className="basket-preview__button-delete"></button>
                  </div>
                </li>
                <li className="basket-preview__item">
                  <img className="basket-preview__icon" src="/src/assets/icons/basket/bubble-gum.svg" width="46"
                       height="46"
                       loading="lazy" alt=""/>
                  <div className="basket-preview__description">
                    <h4 className="basket-preview__subtitle">Бабл-гам</h4>
                    <p className="basket-preview__weight-price">1,5 кг х 320 ₽</p>
                  </div>
                  <div className="basket-preview__price-container">
                    <p className="basket-preview__price">480 ₽</p>
                    <button className="basket-preview__button-delete">
                      <span></span>
                    </button>
                  </div>
                </li>
              </ul>
              <div className="basket-preview__footer">
                <Button className="basket-preview__button">Оформить заказ</Button>
              </div>
            </>
          ) : <h3 className="basket__empty">Ваша корзина пока <br/> пуста</h3>}
        </div>
      ) : null}
    </div>
  )
}

export default Basket