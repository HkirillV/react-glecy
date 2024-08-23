import Button from '../Button/Button';

const Basket = ({isActive}) => {
    return (
        <div className={isActive ? 'visible basket' : 'visible-hidden'}>
            <h3 className="basket__title">Корзина</h3>
            <div className="basket-list">
                <div className="basket-item">
                    <img className="basket-item__icon" src="/src/img/basket/malinka.svg" width="46" height="46" loading="lazy" alt="/"/>
                    <div className="basket-item__description">
                        <h5 className="basket-item__title">Малинка</h5>
                        <p className="basket-item__text">1 кг х 310 ₽</p>
                    </div>
                    <p className="basket-item__price">310</p>
                    <button className="basket-item__btn">x</button>
                </div>
                <div className="basket-item">
                    <img className="basket-item__icon" src="/src/img/basket/bubble-gum.svg" width="46" height="46" loading="lazy" alt="/"/>
                    <div className="basket-item__description">
                        <h5 className="basket-item__title">Бабл гам</h5>
                        <p className="basket-item__text">1,5 кг х 320 ₽</p>
                    </div>
                    <p className="basket-item__price">310</p>
                    <button className="basket-item__btn">x</button>
                </div>
            </div>
            <span className="separator"></span>
            <div className="basket-footer">
                <Button isActive={isActive} type="button" categoryBtn="basket-btn">Оформить заказ</Button>
                <p>{`Итого: ${790}`}</p>
            </div>
        </div>
    )
}

export default Basket