import {useEffect, useState} from "react";
import catalogAPI from "@/api/catalogAPI";

import "./Description.scss";

const Description = () => {
  const [ descriptions, setDescriptions ] = useState([]);

  useEffect(() => {
    catalogAPI.getDescriptions()
      .then(data => {
        setDescriptions(data);
      })
      .catch(error => {
        console.error("Error receiving descriptions:", error.message);
      })

  }, [])

  return (
    <div className="description">
      <div className="description__inner">
        <h3 className="description__title">Магазин Глейси – это онлайн и офлайн-магазин по продаже мороженого
          собственного производства на развес</h3>
        <ul className="description__list">
          {descriptions.map(({iconName, description, id}) => (
            <li className="description__item" key={id}>
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