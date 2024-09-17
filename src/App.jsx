import {Provider} from 'react-redux'
import store from './store/store'
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

import './styles/index.js'
import './App.scss'
import Header from '@/components/Layouts/Header';
import Slide from "@/components/Layouts/Slide";
import Promo from "@/components/Layouts/Promo";
import Catalog from "@/components/Layouts/Catalog";
import BurgerMenu from "@/components/Layouts/BurgerMenu";

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Slide/>
        <Promo/>
        <Catalog/>
        <BurgerMenu/>
      </BrowserRouter>
    </Provider>
  )
}

export default App
