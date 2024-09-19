import {useState} from "react";
import {SlBasket} from "react-icons/sl";
import classNames from "classnames";
import Button from '@/components/UI/Button';

import './Basket.scss'
import ProductCard from "@/components/UI/ProductCard/ProductCard.jsx";

const Basket = () => {
  const [product, setProduct] = useState([1]);
  const [info, setInfo] = useState({"info": "Ваша корзина пока пуста"});
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="basket">
      <Button className={classNames("basket__button", {"is-active": isOpen})} onClick={onClick}><SlBasket/>2
        Товара</Button>
      {isOpen ? (
        <div className="basket__inner">
          {product.length > 0 ? (
            <>
              <h3 className="basket__title">Корзина</h3>
              <ProductCard className=""/>
              {/*<div className="product-card">*/}
              {/*  <div className="product-card__item">*/}
              {/*    <div className="product-card__description">*/}
              {/*      <img className="product-card__icon" src="/src/assets/icons/basket/malinka.svg" width="46"*/}
              {/*           height="46"*/}
              {/*           loading="lazy" alt=""/>*/}
              {/*      <h4 className="product-card__title">Малинка</h4>*/}
              {/*      <p className="product-card__price">1 кг х 310 ₽</p>*/}
              {/*    </div>*/}
              {/*    <div className="product-card__description">*/}
              {/*      <p>310 ₽</p>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*  <div className="product-card__item">*/}
              {/*    <div className="product-card__description">*/}
              {/*      <img className="product-card__icon" src="/src/assets/icons/basket/bubble-gum.svg" width="46"*/}
              {/*           height="46"*/}
              {/*           loading="lazy" alt="/"/>*/}
              {/*      <h4 className="product-card__title">Бабл-гам</h4>*/}
              {/*      <p className="product-card__price">1,5 кг х 320 ₽</p>*/}
              {/*    </div>*/}
              {/*    <div className="product-card__description">*/}
              {/*      <p>310 ₽</p>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </>
          ) : <h4>{info.info}</h4>}
        </div>
      ) : null}
    </div>
  )
}

export default Basket