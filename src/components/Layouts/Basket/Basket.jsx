import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import useOutsideClick from "@/hooks/useOutsideClick";
import {SlBasket} from "react-icons/sl";
import classNames from "classnames";
import {deleteProduct} from "@/slices/basketSlice";
import Button from "@/components/UI/Button";

import "./Basket.scss"

const Basket = () => {
  const [isOpen, setIsOpen] = useState(false);
  const basketRef = useRef(null);
  const basket = useSelector(state => state.basket);
  const dispatch = useDispatch();

  const onBasketClick = () => {
    setIsOpen(!isOpen);
  }

  const closeBasket = () => {
    setIsOpen(false);
  }

  useOutsideClick(basketRef, closeBasket, isOpen);

  const onDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  }

  return (
    <div className="basket" ref={basketRef}>
      <Button className={classNames("basket__button button", {"is-active": isOpen})}
              onClick={onBasketClick}><SlBasket/>{basket.length > 0 ? `${basket.length} товара` : "Нет товаров"}</Button>
      {isOpen && (
        <div className="basket-preview">

          {basket.length > 0 ? (
            <>
              <h4 className="basket-preview__title">Корзина</h4>
              {basket.map(({title, price, imgSrc, id}) => (
                <ul className="basket-preview__list">
                  <li className="basket-preview__item" key={id}>
                    <img className="basket-preview__icon"
                         src={imgSrc}
                         width="46"
                         height="46"
                         loading="lazy" alt=""/>
                    <div className="basket-preview__description">
                      <h4 className="basket-preview__subtitle">{title}</h4>
                      <p className="basket-preview__weight-price">1 кг х {price} ₽</p>
                    </div>
                    <div className="basket-preview__price-container">
                      <p className="basket-preview__price">{price} ₽</p>
                      <button className="basket-preview__button-delete" type="button"
                              onClick={() => onDeleteProduct(id)}></button>
                    </div>
                  </li>
                </ul>
              ))}
              <div className="basket-preview__footer">
                <Button className="basket-preview__button button">Оформить заказ</Button>
                <p
                  className="basket-preview__total-price">{`Итого: ${basket.reduce((acc, product) => acc + product.price, 0)} ₽`}</p>
              </div>
            </>
          ) : <p className="basket__empty">Ваша корзина пока <br/> пуста</p>}
        </div>
      )}
    </div>
  )
}

export default Basket