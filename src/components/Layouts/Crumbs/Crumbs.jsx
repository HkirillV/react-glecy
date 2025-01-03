import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import addWithIdElement from "@/utils/addWithIdElement";
import catalogAPI from "@/api/catalogAPI";

import "./Crumbs.scss"
import {useSelector} from "react-redux";

const Crumbs = () => {
  const [crumbs, setCrumbs] = useState([]);

  const {title} = useSelector(state => state.crumbs)

  useEffect(() => {
    catalogAPI.getCatalogCrumbs()
      .then(data => {
        setCrumbs(addWithIdElement(data))
      })
      .catch(error => console.log("Ошибка получения данных crumbs", error));
  }, []);

  return (
    <div className="crumbs">
      <ul className="crumbs__list">
        {crumbs.map(({title, href, id}) => (
            <li className="crumbs__item" key={id}>
              <Link className="crumbs__link" to={href}>{title}</Link>
              <svg className="crumbs__icon" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M1.35355 0.146447C1.15829 -0.0488155 0.841709 -0.0488155 0.646447 0.146447C0.451184 0.341709 0.451184 0.658291 0.646447 0.853553L2.79289 3L0.646447 5.14645C0.451184 5.34171 0.451184 5.65829 0.646447 5.85355C0.841709 6.04882 1.15829 6.04882 1.35355 5.85355L3.85355 3.35355C4.04882 3.15829 4.04882 2.84171 3.85355 2.64645L1.35355 0.146447ZM4.85352 0.146447C4.65826 -0.0488155 4.34168 -0.0488155 4.14642 0.146447C3.95115 0.341709 3.95115 0.658291 4.14642 0.853553L6.29286 3L4.14642 5.14645C3.95115 5.34171 3.95115 5.65829 4.14642 5.85355C4.34168 6.04882 4.65826 6.04882 4.85352 5.85355L7.35352 3.35355C7.54878 3.15829 7.54878 2.84171 7.35352 2.64645L4.85352 0.146447Z"
                      fill="#2D3440"/>
              </svg>
            </li>
          )
        )}
        <li className="crumbs__item crumbs__item_active">
          <Link className="crumbs__link" to="/catalog">{title}</Link>
        </li>
      </ul>
      <h3 className="crumbs__title">{title}</h3>
    </div>
  )
}

export default Crumbs;