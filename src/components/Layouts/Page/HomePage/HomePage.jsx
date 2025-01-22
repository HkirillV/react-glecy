import React, {useEffect, useState} from "react";
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

const HomePage = (props) => {
  const {
    onClick,
    isOpen,
  } = props

  const [catalogHome, setCatalogHome] = useState({});

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
      <Catalog title={catalogHome.title} maxNumberCards={catalogHome.maxNumberCards}/>
      <BurgerMenu onClick={onClick} isOpen={isOpen}/>
      <Description/>
      <Feed/>
      <Delivery/>
      <Feedback/>
    </div>
  )
}

export default HomePage