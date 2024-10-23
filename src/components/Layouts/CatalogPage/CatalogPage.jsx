import React from "react";
import {NavLink} from "react-router-dom";
import Filter from "@/components/Layouts/Filter"
import Catalog from "@/components/Layouts/Catalog"

import "./CatalogPage.scss"

const crumbs = [
  {
    title: "Главная",
    href: "/"
  },
  {
    title: "Каталог",
    href: "catalog"
  },
  {
    title: "Мороженное",
    href: "catalog"
  },
]

const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <ul className="catalog-page__list">
        {crumbs.map(({title, href}, i) => (
          <li className="catalog-page__item" key={i}>
            <NavLink  to=".">{title}</NavLink>
          </li>
        ))}
      </ul>
      <Filter/>
      <Catalog/>
    </div>
  )
}

export default CatalogPage;