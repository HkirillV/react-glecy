import React from 'react';
import {useState} from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
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
import Filter from "@/components/Layouts/Filter"

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
        <div className="app">
          <Container>
            <Header onClick={onClick} isOpen={isOpen}/>
            <main>
              <Routes>
                <Route path="/" element={
                  <>

                  </>
                }/>
                <Route path="/catalog" element={
                  <>
                    <Swiper/>
                    <Promo/>
                    <Catalog/>
                    <BurgerMenu onClick={onClick} isOpen={isOpen}/>
                    <Description/>
                    <Feed/>
                    <Delivery/>
                    <Feedback/>
                    <Filter/>
                    <Catalog/>
                  </>
                }/>
              </Routes>
            </main>
            <Footer/>
          </Container>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
