import {SlBasket} from "react-icons/sl";
import {setBasketToCache, getBasketToCache} from "@/utils/toCache";
import Button from "@/components/UI/Button";

import './ProductCard.scss'

const ProductCard = (props) => {
  const {
    id,
    title,
    description,
    price,
    imgSrc,
  } = props

  const onAddProductToCart = (product) => {
    setBasketToCache([product])
  }


  return (
    <div className="product-card" key={id}>
      <img className="product-card__image"
           src={imgSrc}
           width="168"
           height="168"
           loading="lazy"
           alt=""/>
      <h5 className="product-card__title">{title}</h5>
      <p className="product-card__description">{description}</p>
      <div className="product-card__footer">
        <p className="product-card__price">{`${price} ₽/кг`}</p>
        <Button className="product-card__button button" onClick={() => onAddProductToCart({id, title, description, price, imgSrc})}><SlBasket/></Button>
      </div>
    </div>
  )
}

export default ProductCard;