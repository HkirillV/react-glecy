import './Products.scss'
import Card from './Card'

const Products = () => {

  return (
    <div className="products">
        <h4 className="products__title">Попробуйте самые популярные вкусы нашего мороженого</h4>
      <div className="products__items">
          <Card/>
      </div>
    </div>
  )
}

export default Products;