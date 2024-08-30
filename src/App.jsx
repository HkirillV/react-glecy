import {Provider} from 'react-redux'
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import store from './store/store'

import './styles/index.js'
import './App.scss'
import Header from '@/components/Layouts/Header';
import Slide from "/src/components/Layouts/Slide";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <Header/>
          <Slide/>
        </div>
        <Routes>

        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
