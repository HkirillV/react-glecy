import {data} from '@/components/Layouts/Description/data';
import "./Description.scss";


const Description = () => {
  return (
    <div className="description">
      <div className="description__inner">
        <h3 className="description__title">Магазин Глейси – это онлайн и офлайн-магазин по продаже мороженого
          собственного производства на развес</h3>
        <ul className="description__list">
          {data.map(({iconName, description}, index) => (
            <li className="description__item" key={index}>
              <img className="description__icon"
                   src={`/src/assets/icons/description/${iconName}.svg`}
                   width="48"
                   height="48"
                   loading="lazy"
                   alt=""/>
              <p className="description__text">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Description