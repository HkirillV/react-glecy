import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import catalogAPI from "@/api/catalogAPI";
import Swiper from "@/components/Layouts/Slide";
import Promo from "@/components/Layouts/Promo";
import BurgerMenu from "@/components/Layouts/BurgerMenu";
import Description from "@/components/Layouts/Description";
import Feed from "@/components/Layouts/Feed";
import Delivery from "@/components/Layouts/Delivery";
import Feedback from "@/components/Layouts/Feedback";
import Catalog from "@/components/Layouts/Catalog";

import "./HomePage.scss"

const HomePage = () => {
  const catalog = useSelector((state) => state.catalog);
  const [catalogHome, setCatalogHome] = useState({});
  const currentProductCard = catalog.slice(0, catalogHome.maxNumberCards)


  useEffect(() => {
    catalogAPI.getCatalogHome()
      .then(data => {
        setCatalogHome(data)
      })
      .catch(error => {
        console.error("Ошибка при получении данных catalogHome:", error);
      })
  }, [])

  return (
    <div className="home-page">
      <Swiper/>
      <Promo/>
      <Catalog title={catalogHome.title} currentProductCard={currentProductCard}/>
      <BurgerMenu/>
      <Description/>
      <Feed/>
      <Delivery/>
      <Feedback/>
    </div>
  )
}

export default HomePage