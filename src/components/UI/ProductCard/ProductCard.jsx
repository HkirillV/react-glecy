import './ProductCard.scss'

const ProductCard = (props) => {
  const {
    id,
    title,
    description,
    price,
    imgSrc
  } = props

  return (
    <div className="product-card" key={id}>
      <img className="product-card__image" src={imgSrc} width="168" height="168" loading="lazy" alt=""/>
      <h3 className="product-card__title">{title}</h3>
      <p className="product-card__description">{description}</p>
      <p className="product-card__price">{`${price} ₽/кг`}</p>
      <button className="button"></button>
    </div>
  )
}

export default ProductCard;