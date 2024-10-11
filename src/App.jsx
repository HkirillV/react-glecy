import React from 'react';
import {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "@/store/store";
import Header from '@/components/Layouts/Header';
import Swiper from "@/components/Layouts/Slide";
import Promo from "@/components/Layouts/Promo";
import Catalog from "@/components/Layouts/Catalog";
import BurgerMenu from "@/components/Layouts/BurgerMenu";
import Description from "@/components/Layouts/Description";
import Feed from "@/components/Layouts/Feed"
import Delivery from "@/components/Layouts/Delivery"
import Feedback from "@/components/Layouts/Feedback";
import Footer from "@/components/Layouts/Footer"
import Container from "@/components/Layouts/Container";

import './styles'
import './App.scss'

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!isOpen);
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Header onClick={onClick} isOpen={isOpen}/>
          <Swiper/>
          <Promo/>
          <Catalog/>
          <BurgerMenu onClick={onClick} isOpen={isOpen}/>
          <Description/>
          <Feed/>
          <Delivery/>
          <Feedback/>
          <Footer/>
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
