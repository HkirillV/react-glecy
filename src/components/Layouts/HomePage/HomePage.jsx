import "./HomePage.scss"
import Swiper from "@/components/Layouts/Slide";
import Promo from "@/components/Layouts/Promo";
import BurgerMenu from "@/components/Layouts/BurgerMenu";
import Description from "@/components/Layouts/Description";
import Feed from "@/components/Layouts/Feed";
import Delivery from "@/components/Layouts/Delivery";
import Feedback from "@/components/Layouts/Feedback";
import React from 'react';

const HomePage = (props) => {
  const {
    onClick,
    isOpen,
  } = props

  return (
    <div className="home-page">
      <Swiper/>
      <Promo/>
      <BurgerMenu onClick={onClick} isOpen={isOpen}/>
      <Description/>
      <Feed/>
      <Delivery/>
      <Feedback/>
    </div>
  )
}

export default HomePage