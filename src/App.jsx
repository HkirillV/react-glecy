import {useState} from "react";
import {Provider} from 'react-redux'
import store from './store/store'
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

import './styles/index.js'
import './App.scss'
import Header from '@/components/Layouts/Header';
import Slide from "@/components/Layouts/Slide";
import Promo from "@/components/Layouts/Promo";
import Catalog from "@/components/Layouts/Catalog";
import BurgerMenu from "@/components/Layouts/BurgerMenu/index.js";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!isOpen);
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header onClick={onClick} isOpen={isOpen}/>
        <Slide/>
        <Promo/>
        <Catalog/>
        <BurgerMenu onClick={onClick} isOpen={isOpen}/>
      </BrowserRouter>
    </Provider>
  )
}

export default App
