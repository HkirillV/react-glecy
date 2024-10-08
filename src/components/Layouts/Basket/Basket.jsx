import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SlBasket} from "react-icons/sl";
import classNames from "classnames";
import Button from '@/components/UI/Button';
import './Basket.scss'

const Basket = () => {

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket);

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  console.log( basket)
  return (
    <div className="basket">
      <Button className={classNames("basket__button button", {"is-active": isOpen})}
              onClick={onClick}><SlBasket/>{basket.length > 0 ? `${basket.length} товара` : "Нет товаров"}</Button>
      {isOpen ? (
        <div className="basket-preview">

          {basket.length > 0 ? (
            <>
              <h4 className="basket-preview__title">Корзина</h4>
              <ul className="basket-preview__list">
                {basket.map(({title, price, imgSrc, id}) => (
                  <li className="basket-preview__item" key={id}>
                    <img className="basket-preview__icon" src={imgSrc} width="46"
                         height="46"
                         loading="lazy" alt=""/>
                    <div className="basket-preview__description">
                      <h4 className="basket-preview__subtitle">{title}</h4>
                      <p className="basket-preview__weight-price">1 кг х {price} ₽</p>
                    </div>
                    <div className="basket-preview__price-container">
                      <p className="basket-preview__price">{price} ₽</p>
                      <button className="basket-preview__button-delete"></button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="basket-preview__footer">
                <Button className="basket-preview__button">Оформить заказ</Button>
                <p className="basket-preview__total-price">{`Итого: ${790} ₽`}</p>
              </div>
            </>
          ) : <p className="basket__empty"><strong>Ваша корзина пока <br/> пуста</strong></p>}
        </div>
      ) : null}
    </div>
  )
}

export default Basket