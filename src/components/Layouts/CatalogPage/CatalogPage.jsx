import React from "react";
import Filter from "@/components/Layouts/Filter"
import Catalog from "@/components/Layouts/Catalog"

import "./CatalogPage.scss"

const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <Filter/>
      <Catalog/>
    </div>
  )
}

export default CatalogPage;