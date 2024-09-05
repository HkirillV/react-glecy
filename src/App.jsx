import {Provider} from 'react-redux'
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import store from './store/store'

import './styles/index.js'
import './App.scss'
import Header from '@/components/Layouts/Header';
import Slide from "/src/components/Layouts/Slide";
import Promo from "@/components/Layouts/Promo";
import Products from "@/components/Layouts/Products";

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Slide/>
        <Promo/>
        <Products/>
      </BrowserRouter>
    </Provider>
  )
}

export default App
