import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { LuChevronsRight } from "react-icons/lu";
import addWithIdElement from "@/utils/addWithIdElement";
import catalogAPI from "@/api/catalogAPI";

import "./Crumbs.scss"

const Crumbs = () => {
  const [crumbs, setCrumbs] = useState([]);

  const {title} = useSelector(state => state.crumbs);

  useEffect(() => {
    catalogAPI.getCatalogCrumbs()
      .then(data => {
        setCrumbs(addWithIdElement(data))
      })
      .catch(error => console.log("Error receiving crumbs", error.message));
  }, []);

  return (
    <div className="crumbs">
      <ul className="crumbs__list">
        {crumbs.map(({title, href, id}) => (
            <li className="crumbs__item" key={id}>
              <Link className="crumbs__link" to={href}>{title}</Link>
              <LuChevronsRight className="crumbs__icon"/>
            </li>
          )
        )}
        <li className="crumbs__item">
          <Link className="crumbs__link" to="/catalog">{title}</Link>
        </li>
      </ul>
      <h3 className="crumbs__title">{title}</h3>
    </div>
  )
}

export default Crumbs;