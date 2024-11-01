import React, {useEffect, useState} from "react";
import catalogAPI from "@/api/catalogAPI";
import Filter from "@/components/Layouts/Filter"
import Catalog from "@/components/Layouts/Catalog"
import Crumbs from "@/components/Layouts/Crumbs";

import "./CatalogPage.scss"

const CatalogPage = () => {
  const [catalogPage, setCatalogPage] = useState({});

  useEffect(() => {
    catalogAPI.getCatalogPage()
      .then(data => {
        setCatalogPage(data)
      })
      .catch(error => {
        console.error("Ошибка при получении страницы catalogTitle:", error);
      })
  }, []);


  return (
    <div className="catalog-page">
      <Crumbs/>
      <Filter/>
      <Catalog title={catalogPage.title} maxNumberCards={catalogPage.maxNumberCards}/>
    </div>
  )
}

export default CatalogPage;