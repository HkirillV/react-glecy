import classNames from "classnames";

import './Basket.scss'

import Button from '@/components/UI/Button';

const Basket = ({isActive}) => {
  return (
    <div className={classNames('basket', {'is-active': isActive})}>
      <h3 className="basket__title">Корзина</h3>
      <div className="basket__list">
        <div className="basket-item">
          <div className="basket-item__container">
            <img className="basket-item__icon" src="/src/assets/icons/basket/malinka.svg" width="46" height="46"
                 loading="lazy" alt="/"/>
            <div className="basket-item__description">
              <h5 className="basket-item__title">Малинка</h5>
              <p className="basket-item__text">1 кг х 310 ₽</p>
            </div>
          </div>
          <div className="basket-item__footer">
            <p className="basket-item__price">310₽</p>
            <button className="basket-item__btn">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M9.80303 1.13807C10.0634 0.877722 10.0634 0.455612 9.80303 0.195262C9.54268 -0.0650874 9.12057 -0.0650874 8.86022 0.195262L4.99914 4.05633L1.13807 0.195262C0.877722 -0.0650874 0.455612 -0.0650874 0.195262 0.195262C-0.0650874 0.455612 -0.0650874 0.877722 0.195262 1.13807L4.05633 4.99914L0.195262 8.86022C-0.0650874 9.12057 -0.0650874 9.54268 0.195262 9.80303C0.455612 10.0634 0.877722 10.0634 1.13807 9.80303L4.99914 5.94195L8.86022 9.80303C9.12057 10.0634 9.54268 10.0634 9.80303 9.80303C10.0634 9.54268 10.0634 9.12057 9.80303 8.86022L5.94195 4.99914L9.80303 1.13807Z"
                      fill="#2D3440"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="basket-item">
          <div className="basket-item__container">
            <img className="basket-item__icon" src="/src/assets/icons/basket/bubble-gum.svg" width="46" height="46"
                 loading="lazy" alt="/"/>
            <div className="basket-item__description">
              <h5 className="basket-item__title">Бабл-гам</h5>
              <p className="basket-item__text">1,5 кг х 320 ₽</p>
            </div>
          </div>
          <div className="basket-item__footer">
            <p className="basket-item__price">410₽</p>
            <button className="basket-item__btn">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M9.80303 1.13807C10.0634 0.877722 10.0634 0.455612 9.80303 0.195262C9.54268 -0.0650874 9.12057 -0.0650874 8.86022 0.195262L4.99914 4.05633L1.13807 0.195262C0.877722 -0.0650874 0.455612 -0.0650874 0.195262 0.195262C-0.0650874 0.455612 -0.0650874 0.877722 0.195262 1.13807L4.05633 4.99914L0.195262 8.86022C-0.0650874 9.12057 -0.0650874 9.54268 0.195262 9.80303C0.455612 10.0634 0.877722 10.0634 1.13807 9.80303L4.99914 5.94195L8.86022 9.80303C9.12057 10.0634 9.54268 10.0634 9.80303 9.80303C10.0634 9.54268 10.0634 9.12057 9.80303 8.86022L5.94195 4.99914L9.80303 1.13807Z"
                      fill="#2D3440"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="basket__footer">
        <Button className={'basket-btn button'} isActive={isActive} type="button">Оформить заказ</Button>
        <p className="basket__footer-sum">{`Итого: ${790} ₽`}</p>
      </div>
    </div>
  )
}

export default Basket