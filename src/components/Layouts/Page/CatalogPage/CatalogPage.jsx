import React, {useEffect, useState} from "react";
import catalogAPI from "@/api/catalogAPI";
import Filter from "@/components/Layouts/Filter"
import Catalog from "@/components/Layouts/Catalog"
import Crumbs from "@/components/Layouts/Crumbs";

import "./CatalogPage.scss"

const CatalogPage = () => {

  return (
    <div className="catalog-page">
      <Crumbs/>
      <Filter/>
      <Catalog/>
    </div>
  )
}

export default CatalogPage;